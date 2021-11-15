// 11/06/21 evening
const pr = console.log;

// Accepted
const minimizedMaximum = (n, a) => {
    let low = 0, high = 1e5 + 1;
    while (high - low > 1) {
        let mid = low + high >>> 1, tot = 0;
        for (const e of a) tot += parseInt((e + mid - 1) / mid);
        tot <= mid ? high = mid: low = mid;
    }
    return high;
};
