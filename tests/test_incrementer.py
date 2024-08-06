from batched_queue.incrementer import Incrementer


def test_increment():
    inc = Incrementer(2**32 - 4)

    assert inc.increment() == 2**32 - 3
    assert inc.increment() == 2**32 - 2
    assert inc.increment() == 2**32 - 1
    # test rollover
    assert inc.increment() == 0
    assert inc.increment() == 1
    assert inc.value == 1
    assert isinstance(inc.value, int)
