/**
 * 05/19/21 morning
 * https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/
 */

const mi = Math.min;
const abs = Math.abs;
const sm = (a) => a.reduce(((x, y) => x + y), 0);
const stin = (a) => a.sort((x, y) => x - y);

// Accepted --- 872ms 5.26%
const minMoves2 = (a) => {
    let n = a.length;
    stin(a);
    let p = new Set();
    for (let i = 0, j = n - 1; i < n; i++, j--) {
        p.add((a[i] + a[j]) >> 1);
    }
    let res = Number.MAX_SAFE_INTEGER;
    for (const e of p) {
        let fa = Array(n).fill(e);
        res = mi(res, cal(a, fa));
    }
    return res;
};

// WA
// const minMoves2 = (a) => {
//     let sum = sm(a);
//     let n = a.length;
//     let avg = sum / n;
//     if (avg == avg >> 0) {
//         let t = Array(n).fill(avg);
//         // pr(t)
//         return cal(a, t);
//     } else {
//         let t1 = Array(n).fill(avg >> 0);
//         let t2 = Array(n).fill((avg >> 0) + 1);
//         // pr(t1, t2, cal(a, t1), cal(a, t2))
//         return mi(cal(a, t1), cal(a, t2));
//     }
// };

const cal = (a, t) => {
    let step = 0;
    let n = a.length;
    for (let i = 0; i < n; i++) {
        step += abs(a[i] - t[i]);
    }
    return step;
};

const pr = console.log;
const main = () => {
    let nums = [1, 2, 3];
    let nums2 = [1, 10, 2, 9];
    let debug1 = [1, 0, 0, 8, 6];
    pr(minMoves2(nums));
    pr(minMoves2(nums2));
    pr(minMoves2(debug1)); // 14
};

main()