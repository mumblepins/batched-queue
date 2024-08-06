# ruff: noqa: S101
import logging
import time
from threading import Thread

import pytest
from batched_queue.result import BatchedQueueResult, QueueResult

logger = logging.getLogger(__name__)


def test_result():
    result: QueueResult[str] = QueueResult[str]()
    res_result = None
    exception = None

    def wait_for_result():
        nonlocal res_result, exception
        try:
            start = time.time()
            logger.info("waiting for result")
            res = result.get_result()
            logger.info("got result")
            res_result = res
            assert time.time() - start > 1
            assert res == "hello"
        except Exception as e:
            logger.exception(e)
            exception = e

    t = Thread(target=wait_for_result)
    t.start()
    logger.info("started thread")
    assert res_result is None
    logger.info("sleeping")
    time.sleep(2)
    logger.info("waking up")
    result.set_result("hello")

    logger.info("joining")
    t.join()
    assert exception is None
    assert res_result == "hello"


def test_result_timeout():
    result: QueueResult[str] = QueueResult[str]()
    exception = None

    def wait_for_result():
        nonlocal exception
        try:
            logger.info("waiting for result")
            assert pytest.raises(TimeoutError, result.get_result(0.5))
        except Exception as e:
            logger.exception(e)

    t = Thread(target=wait_for_result)
    t.start()
    logger.info("started thread")
    time.sleep(2)
    result.set_result("hello")

    logger.info("joining")
    t.join()
    assert exception is None


def test_batched_result():
    result: BatchedQueueResult[str] = BatchedQueueResult[str](_ids=[1, 2, 3], is_list=True)

    res_result = None
    exception = None

    def wait_for_result():
        nonlocal res_result, exception
        try:
            start = time.time()
            logger.info("waiting for result")
            res = result.get_result()
            logger.info("got result")
            res_result = res
            assert time.time() - start > 1
            assert res == ["hello1", "hello2", "hello3"]
        except Exception as e:
            logger.exception(e)
            exception = e

    t = Thread(target=wait_for_result)
    t.start()
    logger.info("started thread")
    assert res_result is None
    logger.info("sleeping")
    time.sleep(2)
    logger.info("waking up")
    result.set_partial_result(1, "hello1")
    result.set_partial_result(3, "hello3")
    assert res_result is None
    assert result.finished is False

    with pytest.raises(ValueError, match="Invalid item id 4"):
        result.set_partial_result(4, "hello4")
    result.set_partial_result(2, "hello2")

    logger.info("joining")
    t.join()
    assert exception is None
    assert result.finished is True
    with pytest.raises(ValueError, match="Already finished, shouldn't be setting partial result?"):
        result.set_partial_result(1, "hello1")
    assert res_result == ["hello1", "hello2", "hello3"]


def test_batched_result_single():
    result: BatchedQueueResult[str] = BatchedQueueResult[str](_ids=[3], is_list=False)

    res_result = None
    exception = None

    def wait_for_result():
        nonlocal res_result
        nonlocal exception
        try:
            start = time.time()
            logger.info("waiting for result")
            res = result.get_result()
            logger.info("got result")
            res_result = res
            assert time.time() - start > 1
            assert res == "hello3"
        except Exception as e:
            logger.exception(e)
            exception = e

    t = Thread(target=wait_for_result)
    t.start()
    logger.info("started thread")
    assert res_result is None
    logger.info("sleeping")
    time.sleep(2)
    logger.info("waking up")

    result.set_partial_result(3, "hello3")

    logger.info("joining")

    t.join()
    assert exception is None

    assert result.finished is True
    assert res_result == "hello3"
