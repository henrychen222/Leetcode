// 02/20/21 night

const RunTime = () => {
    const { performance } = require('perf_hooks');
    let t0 = performance.now();
    main();
    let t1 = performance.now();
    console.log("Run Time: " + (t1 - t0) + "ms")
};