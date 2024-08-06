import logging
import secrets
from concurrent.futures import ProcessPoolExecutor, ThreadPoolExecutor
from threading import Thread
from time import sleep
from timeit import default_timer as timer
from typing import cast

import pytest
from batched_queue.queue import BatchedQueue
from batched_queue.types import BatchedQueueWorkerSingle

logger = logging.getLogger(__name__)
single_time = 20  # ms
multiple_fixed_time = 100  # ms
multiple_time = 5  # ms


def worker_func_single(item: int) -> int:
    sleep(single_time / 1000)
    return item + 1


def worker_func_multiple(items: list[int]) -> list[int]:
    sleep(calc_multiple_time(len(items)))
    return [x + 1 for x in items]


def calc_single_time(len_items):
    return single_time * len_items / 1000


def calc_multiple_time(len_items):
    return (multiple_fixed_time + multiple_time * len_items) / 1000


def calc_combo_time(len_items):
    return min(calc_single_time(len_items), calc_multiple_time(len_items))


def test_put():
    bq: BatchedQueue[int, int] = BatchedQueue[int, int](worker_func_single=worker_func_single)
    bq.put(1)
    assert list(bq.to_process_q) == [(1, 1)]


items_list = [
    1,
    [1, 2, 3],
    [1, 2, 3, 4, 5],
    [secrets.randbits(32) for _ in range(20)],
]


@pytest.mark.parametrize("items", items_list)
@pytest.mark.parametrize(
    "worker_func, calc_time",
    [
        [{"worker_func_single": worker_func_single}, calc_single_time],
        [{"worker_func_multiple": worker_func_multiple}, calc_multiple_time],
        [
            {
                "worker_func_single": worker_func_single,
                "worker_func_multiple": worker_func_multiple,
            },
            calc_combo_time,
        ],
    ],
)
def test_process(items, worker_func, calc_time):
    bq: BatchedQueue[int, int] = BatchedQueue[int, int](
        **worker_func,
        worker_func_single_cost=single_time,
        worker_func_multiple_fixed_cost=multiple_fixed_time,
        worker_func_multiple_cost=multiple_time,
    )
    bq.start()

    start = timer()
    res = bq.process(items)
    bq.stop()
    end = timer()
    diff = end - start
    logger.info("Time: %s", diff)
    if isinstance(res, list):
        assert abs(diff - calc_time(len(items))) < 0.1
        assert res == [i + 1 for i in items]
    else:
        assert abs(diff - calc_time(1)) < 0.1

        assert res == items + 1


@pytest.mark.parametrize("num_workers", [2, 4])
@pytest.mark.parametrize("worker_type", [ThreadPoolExecutor, ProcessPoolExecutor])
@pytest.mark.parametrize(
    "worker_func,calc_time",
    [
        [{"worker_func_single": worker_func_single}, calc_single_time],
        [{"worker_func_multiple": worker_func_multiple}, calc_multiple_time],
        [
            {
                "worker_func_single": worker_func_single,
                "worker_func_multiple": worker_func_multiple,
            },
            calc_combo_time,
        ],
    ],
)
@pytest.mark.parametrize("list_length", [(0, 20), (10, 100)])
@pytest.mark.parametrize("number_submitters", [5, 25])
@pytest.mark.parametrize("batch_max_size", [None, 1_000])
def test_parallel_process(
    worker_func, calc_time, num_workers, worker_type, list_length, number_submitters, batch_max_size
):
    bq: BatchedQueue[int, int] = BatchedQueue[int, int](
        **worker_func,
        worker_func_single_cost=single_time,
        worker_func_multiple_fixed_cost=multiple_fixed_time,
        worker_func_multiple_cost=multiple_time,
        num_workers=num_workers,
        worker_pool_executor=worker_type,
        batch_max_size=batch_max_size,
    )
    bq.start()
    exception = []

    def submit_and_check(tnum: int):
        nonlocal exception, bq
        test_list = [
            secrets.randbits(8) for _ in range(secrets.randbelow(list_length[1]) + list_length[0])
        ]

        try:
            logger.debug("Thread started: %s (len: %s)", tnum, len(test_list))
            result = bq.process(test_list)
            assert result == [x + 1 for x in test_list]
            logger.debug("Thread finished; %s", tnum)
        except Exception as e:
            logger.exception(e)
            exception.append(e)

    threads = []
    for n in range(number_submitters):
        t = Thread(target=submit_and_check, args=(n,))
        t.start()
        threads.append(t)

    for t in threads:
        t.join()
    if exception:
        raise exception[0]

    bq.stop()


def test_exception():
    def raiser(items: int) -> int:
        raise Exception("test")

    rsr = cast(BatchedQueueWorkerSingle[int, int], raiser)
    bq: BatchedQueue[int, int] = BatchedQueue(worker_func_single=rsr, num_workers=2)
    bq.start()
    exception = []

    def submit_and_check(tnum: int):
        nonlocal exception, bq

        try:
            with pytest.raises(Exception, match="test"):
                bq.process([1, 2, 3])
            logger.debug("Thread finished; %s", tnum)
        except Exception as e:
            logger.exception(e)
            exception.append(e)

    threads = []
    for n in range(1):
        t = Thread(target=submit_and_check, args=(n,))
        t.start()
        threads.append(t)

    for t in threads:
        t.join()
    if exception:
        raise exception[0]
    bq.kill(1)


@pytest.mark.parametrize("num_workers", [1, 2])
def test_timeout(num_workers):
    def sleeper(items: int) -> int:
        sleep(5)
        return items

    _sleeper = cast(BatchedQueueWorkerSingle[int, int], sleeper)
    bq: BatchedQueue[int, int] = BatchedQueue(worker_func_single=_sleeper, num_workers=num_workers)
    bq.start()
    exception = []

    def submit_and_check(tnum: int):
        nonlocal exception, bq

        try:
            with pytest.raises(TimeoutError):
                bq.process([1, 2, 3], timeout=2)
            logger.debug("Thread finished; %s", tnum)
        except Exception as e:
            logger.exception(e)
            exception.append(e)

    threads = []
    for n in range(4):
        t = Thread(target=submit_and_check, args=(n,))
        t.start()
        threads.append(t)

    for t in threads:
        t.join()
    if exception:
        raise exception[0]

    bq.kill(1)
