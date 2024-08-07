Search.setIndex({"alltitles": {"Batched Queue": [[1, "batched-queue"]], "Indices and tables": [[1, "indices-and-tables"]], "Module contents": [[0, "module-batched_queue"]], "Readme": [[1, "readme"]], "Submodules": [[0, "submodules"]], "Welcome to Batched Queues\u2019s documentation!": [[1, null]], "batched_queue package": [[0, null]], "batched_queue.incrementer module": [[0, "module-batched_queue.incrementer"]], "batched_queue.queue module": [[0, "module-batched_queue.queue"]], "batched_queue.result module": [[0, "module-batched_queue.result"]], "batched_queue.types module": [[0, "module-batched_queue.types"]]}, "docurls": ["batched_queue.html", "index.html"], "envversion": {"sphinx": 63, "sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx.ext.viewcode": 1}, "indexentries": {"batched_queue": [[0, "module-batched_queue", false]], "batched_queue.incrementer": [[0, "module-batched_queue.incrementer", false]], "batched_queue.queue": [[0, "module-batched_queue.queue", false]], "batched_queue.result": [[0, "module-batched_queue.result", false]], "batched_queue.types": [[0, "module-batched_queue.types", false]], "batchedqueue (class in batched_queue.queue)": [[0, "batched_queue.queue.BatchedQueue", false]], "batchedqueueresult (class in batched_queue.result)": [[0, "batched_queue.result.BatchedQueueResult", false]], "batchedqueueworkermultiple (class in batched_queue.types)": [[0, "batched_queue.types.BatchedQueueWorkerMultiple", false]], "batchedqueueworkersingle (class in batched_queue.types)": [[0, "batched_queue.types.BatchedQueueWorkerSingle", false]], "check_results_done() (batched_queue.result.batchedqueueresult method)": [[0, "batched_queue.result.BatchedQueueResult.check_results_done", false]], "finished (batched_queue.result.queueresult property)": [[0, "batched_queue.result.QueueResult.finished", false]], "func (batched_queue.queue.workerfunc attribute)": [[0, "batched_queue.queue.WorkerFunc.func", false]], "get_result() (batched_queue.result.queueresult method)": [[0, "batched_queue.result.QueueResult.get_result", false]], "increment() (batched_queue.incrementer.incrementer method)": [[0, "batched_queue.incrementer.Incrementer.increment", false]], "incrementer (class in batched_queue.incrementer)": [[0, "batched_queue.incrementer.Incrementer", false]], "kill() (batched_queue.queue.batchedqueue method)": [[0, "batched_queue.queue.BatchedQueue.kill", false]], "kwargs (batched_queue.queue.workerfunc attribute)": [[0, "batched_queue.queue.WorkerFunc.kwargs", false]], "module": [[0, "module-batched_queue", false], [0, "module-batched_queue.incrementer", false], [0, "module-batched_queue.queue", false], [0, "module-batched_queue.result", false], [0, "module-batched_queue.types", false]], "multiple_form (batched_queue.queue.batchedqueue attribute)": [[0, "batched_queue.queue.BatchedQueue.multiple_form", false]], "multiple_form (batched_queue.queue.workerfunc attribute)": [[0, "batched_queue.queue.WorkerFunc.multiple_form", false]], "process() (batched_queue.queue.batchedqueue method)": [[0, "batched_queue.queue.BatchedQueue.process", false]], "put() (batched_queue.queue.batchedqueue method)": [[0, "batched_queue.queue.BatchedQueue.put", false]], "queueresult (class in batched_queue.result)": [[0, "batched_queue.result.QueueResult", false]], "set_partial_result() (batched_queue.result.batchedqueueresult method)": [[0, "batched_queue.result.BatchedQueueResult.set_partial_result", false]], "set_result() (batched_queue.result.queueresult method)": [[0, "batched_queue.result.QueueResult.set_result", false]], "single_form (batched_queue.queue.batchedqueue attribute)": [[0, "batched_queue.queue.BatchedQueue.single_form", false]], "start() (batched_queue.queue.batchedqueue method)": [[0, "batched_queue.queue.BatchedQueue.start", false]], "stop() (batched_queue.queue.batchedqueue method)": [[0, "batched_queue.queue.BatchedQueue.stop", false]], "value (batched_queue.incrementer.incrementer attribute)": [[0, "batched_queue.incrementer.Incrementer.value", false]], "workerfunc (class in batched_queue.queue)": [[0, "batched_queue.queue.WorkerFunc", false]]}, "objects": {"": [[0, 0, 0, 1, "batched_queue", ""]], "batched_queue": [[0, 0, 0, 1, "incrementer", ""], [0, 0, 0, 1, "queue", ""], [0, 0, 0, 1, "result", ""], [0, 0, 0, 1, "types", ""]], "batched_queue.incrementer": [[0, 1, 1, 0, "Incrementer", "Bases: object"]], "batched_queue.incrementer.Incrementer": [[0, 2, 1, 0, "increment", ""], [0, 3, 1, 0, "value", ""]], "batched_queue.queue": [[0, 1, 1, 0, "BatchedQueue", "Bases: Generic[T, U]"], [0, 1, 1, 0, "WorkerFunc", "Bases: Generic[T, U]"]], "batched_queue.queue.BatchedQueue": [[0, 2, 1, 0, "kill", ""], [0, 3, 1, 0, "multiple_form", ""], [0, 2, 1, 0, "process", ""], [0, 2, 1, 0, "put", ""], [0, 3, 1, 0, "single_form", ""], [0, 2, 1, 0, "start", ""], [0, 2, 1, 0, "stop", ""]], "batched_queue.queue.BatchedQueue.__init__": [[0, 4, 2, "batched_queue.queue.BatchedQueue", "*", "Bases: Generic[T, U]"], [0, 4, 2, "batched_queue.queue.BatchedQueue", "__SPHINX_IMMATERIAL_TYPE_VAR__V_U] | None = None", "Bases: Generic[T, U]"], [0, 4, 2, "batched_queue.queue.BatchedQueue", "batch_max_size: int | None = None", "Bases: Generic[T, U]"], [0, 4, 2, "batched_queue.queue.BatchedQueue", "num_workers: int = 1", "Bases: Generic[T, U]"], [0, 4, 2, "batched_queue.queue.BatchedQueue", "worker_func_multiple_cost: int = 100", "Bases: Generic[T, U]"], [0, 4, 2, "batched_queue.queue.BatchedQueue", "worker_func_multiple_fixed_cost: int = 5000", "Bases: Generic[T, U]"], [0, 4, 2, "batched_queue.queue.BatchedQueue", "worker_func_multiple_kwargs: dict[str", "Bases: Generic[T, U]"], [0, 4, 2, "batched_queue.queue.BatchedQueue", "worker_func_single_cost: int = 1000", "Bases: Generic[T, U]"], [0, 4, 2, "batched_queue.queue.BatchedQueue", "worker_func_single_kwargs: dict[str", "Bases: Generic[T, U]"]], "batched_queue.queue.BatchedQueue.__init__.worker_func_multiple: ~batched_queue.types": [[0, 4, 2, "batched_queue.queue.BatchedQueue", "BatchedQueueWorkerMultiple[__SPHINX_IMMATERIAL_TYPE_VAR__V_T", "Bases: Generic[T, U]"]], "batched_queue.queue.BatchedQueue.__init__.worker_func_single: ~batched_queue.types": [[0, 4, 2, "batched_queue.queue.BatchedQueue", "BatchedQueueWorkerSingle[__SPHINX_IMMATERIAL_TYPE_VAR__V_T", "Bases: Generic[T, U]"]], "batched_queue.queue.BatchedQueue.__init__.worker_pool_executor: type[~concurrent.futures.thread.ThreadPoolExecutor | ~concurrent.futures.process.ProcessPoolExecutor] = &lt;class &#x27;concurrent.futures.thread": [[0, 4, 2, "batched_queue.queue.BatchedQueue", "ThreadPoolExecutor&#x27;&gt;", "Bases: Generic[T, U]"]], "batched_queue.queue.BatchedQueue.__init__.~typing": [[0, 4, 2, "batched_queue.queue.BatchedQueue", "Any] | None = None", "Bases: Generic[T, U]"]], "batched_queue.queue.BatchedQueue.kill": [[0, 4, 2, "batched_queue.queue.BatchedQueue.kill", "timeout", ""]], "batched_queue.queue.BatchedQueue.process": [[0, 4, 2, "batched_queue.queue.BatchedQueue.process", "item", ""], [0, 4, 2, "batched_queue.queue.BatchedQueue.process", "timeout", ""]], "batched_queue.queue.BatchedQueue.put": [[0, 4, 2, "batched_queue.queue.BatchedQueue.put", "item", ""]], "batched_queue.queue.WorkerFunc": [[0, 3, 1, 0, "func", ""], [0, 3, 1, 0, "kwargs", ""], [0, 3, 1, 0, "multiple_form", ""]], "batched_queue.queue.WorkerFunc.__init__": [[0, 4, 2, "batched_queue.queue.WorkerFunc", "func", "Bases: Generic[T, U]"], [0, 4, 2, "batched_queue.queue.WorkerFunc", "kwargs", "Bases: Generic[T, U]"], [0, 4, 2, "batched_queue.queue.WorkerFunc", "multiple_form", "Bases: Generic[T, U]"]], "batched_queue.result": [[0, 1, 1, 0, "BatchedQueueResult", "Bases: QueueResult[T]"], [0, 1, 1, 0, "QueueResult", "Bases: Generic[T]"]], "batched_queue.result.BatchedQueueResult": [[0, 2, 1, 0, "check_results_done", ""], [0, 2, 1, 0, "set_partial_result", ""]], "batched_queue.result.BatchedQueueResult.__init__": [[0, 4, 2, "batched_queue.result.BatchedQueueResult", "_ids", "Bases: QueueResult[T]"], [0, 4, 2, "batched_queue.result.BatchedQueueResult", "is_list", "Bases: QueueResult[T]"]], "batched_queue.result.BatchedQueueResult.set_partial_result": [[0, 4, 2, "batched_queue.result.BatchedQueueResult.set_partial_result", "item_id", ""], [0, 4, 2, "batched_queue.result.BatchedQueueResult.set_partial_result", "result", ""]], "batched_queue.result.QueueResult": [[0, 5, 1, 0, "finished", ""], [0, 2, 1, 0, "get_result", ""], [0, 2, 1, 0, "set_result", ""]], "batched_queue.result.QueueResult.get_result": [[0, 4, 2, "batched_queue.result.QueueResult.get_result", "timeout", ""]], "batched_queue.result.QueueResult.set_result": [[0, 4, 2, "batched_queue.result.QueueResult.set_result", "result", ""]], "batched_queue.types": [[0, 1, 1, 0, "BatchedQueueWorkerMultiple", "Bases: Protocol[T, U]"], [0, 1, 1, 0, "BatchedQueueWorkerSingle", "Bases: Protocol[T_cat, U_co]"]], "batched_queue.types.BatchedQueueWorkerMultiple.__init__": [[0, 4, 2, "batched_queue.types.BatchedQueueWorkerMultiple", "args", "Bases: Protocol[T, U]"], [0, 4, 2, "batched_queue.types.BatchedQueueWorkerMultiple", "kwargs", "Bases: Protocol[T, U]"]], "batched_queue.types.BatchedQueueWorkerSingle.__init__": [[0, 4, 2, "batched_queue.types.BatchedQueueWorkerSingle", "args", "Bases: Protocol[T_cat, U_co]"], [0, 4, 2, "batched_queue.types.BatchedQueueWorkerSingle", "kwargs", "Bases: Protocol[T_cat, U_co]"]]}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "class", "Python class"], "2": ["py", "method", "Python method"], "3": ["py", "attribute", "Python attribute"], "4": ["py", "parameter", "Python parameter"], "5": ["py", "property", "Python property"]}, "objtypes": {"0": "py:module", "1": "py:class", "2": "py:method", "3": "py:attribute", "4": "py:parameter", "5": "py:property"}, "terms": {"1": 0, "100": 0, "1000": 0, "2": 0, "32": 0, "5": 0, "5000": 0, "__sphinx_immaterial_type_var__v_t": 0, "__sphinx_immaterial_type_var__v_u": 0, "_id": 0, "ani": 0, "arg": 0, "around": 0, "base": 0, "batch_max_s": 0, "batched_queu": 1, "batchedqueu": 0, "batchedqueueresult": 0, "batchedqueueworkermultipl": 0, "batchedqueueworkersingl": 0, "bool": 0, "check_results_don": 0, "class": 0, "collect": 0, "concurr": 0, "content": 1, "cython": 0, "dict": 0, "effect": 0, "finish": 0, "float": 0, "func": 0, "futur": 0, "gener": 0, "get_result": 0, "implement": 0, "increment": 1, "index": 1, "int": 0, "is_list": 0, "item": 0, "item_id": 0, "iter": 0, "kill": 0, "kwarg": 0, "list": 0, "modul": 1, "multiple_form": 0, "none": 0, "num_work": 0, "object": 0, "overflow": 0, "packag": 1, "process": 0, "processpoolexecutor": 0, "properti": 0, "protocol": 0, "put": 0, "queueresult": 0, "result": 1, "set_partial_result": 0, "set_result": 0, "simpl": 0, "single_form": 0, "sourc": 0, "start": 0, "stop": 0, "str": 0, "submodul": 1, "t": 0, "t_cat": 0, "thread": 0, "threadpoolexecutor": 0, "timeout": 0, "type": 1, "u": 0, "u_co": 0, "uint": 0, "uint32": 0, "valu": 0, "worker_func_multipl": 0, "worker_func_multiple_cost": 0, "worker_func_multiple_fixed_cost": 0, "worker_func_multiple_kwarg": 0, "worker_func_singl": 0, "worker_func_single_cost": 0, "worker_func_single_kwarg": 0, "worker_pool_executor": 0, "workerfunc": 0, "wrap": 0}, "titles": ["batched_queue package", "Welcome to Batched Queues\u2019s documentation!"], "titleterms": {"": 1, "batch": 1, "batched_queu": 0, "content": 0, "document": 1, "increment": 0, "indic": 1, "modul": 0, "packag": 0, "queue": [0, 1], "readm": 1, "result": 0, "submodul": 0, "tabl": 1, "type": 0, "welcom": 1}})