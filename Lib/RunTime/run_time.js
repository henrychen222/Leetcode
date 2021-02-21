// 02/20/21 night

const pr = console.log;
const RunTime = () => {
    const { performance } = require('perf_hooks');
    var t0 = performance.now();
    main();
    var t1 = performance.now();
    pr("Run Time: " + (t1 - t0) + "ms")
};