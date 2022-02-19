/**
 * 02/15/22 afternoon
 * https://leetcode.com/problems/create-maximum-number/
 * 
 * reference:
 * https://leetcode.com/problems/create-maximum-number/discuss/77286/Short-Python-Ruby-C%2B%2B
 * https://www.cnblogs.com/grandyang/p/5136749.html
 */

const pr = console.log;

// Accepted --- 3644ms 11.11%
const maxNumber = (a, b, k) => {
    let m = a.length,
        n = b.length;
    let res = [];
    for (let i = Math.max(0, k - n); i <= Math.min(k, m); i++) {
        let maxA = maxArray(a, i), maxB = maxArray(b, k - i);
        // pr("maxA", maxA, "maxB", maxB);
        let merge = mergeArray(maxA, maxB);
        // pr("merge", merge);
        if (merge > res) res = merge;
    }
    return res;
};

const maxArray = (a, k) => {
    let drop = a.length - k, res = [];
    for (const x of a) {
        while (drop > 0 && res.length && res[res.length - 1] < x) {
            res.pop();
            drop--;
        }
        res.push(x);
    }
    // pr(res, k);
    if (res.length >= k) {
        res = res.slice(0, k);
    } else {
        res = res.concat(Array(k - res.length).fill(0));
    }
    // pr(res);
    return res;
};

const mergeArray = (a, b) => { // Accepted --- 3704ms 11.11%
    let res = [];
    while (a.length + b.length) {
        if (a > b) {
            res.push(a[0]);
            a = a.slice(1);
        } else {
            res.push(b[0]);
            b = b.slice(1);
        }
    }
    return res;
};

const mergeArray1 = (a, b) => {
    let res = [];
    while (a.length + b.length) res.push(a > b ? a.shift() : b.shift())
    return res;
};

const main = () => {
    let a = [3, 4, 6, 5],
        b = [9, 1, 2, 5, 8, 3],
        k = 5;
    let a2 = [6, 7],
        b2 = [6, 0, 4],
        k2 = 5;
    let a3 = [3, 9],
        b3 = [8, 9],
        k3 = 3;
    pr(maxNumber(a, b, k))
    pr(maxNumber(a2, b2, k2))
    pr(maxNumber(a3, b3, k3))
};

main()