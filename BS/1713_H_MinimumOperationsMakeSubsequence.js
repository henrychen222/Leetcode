/**
 * 06/02/22 evening
 * https://leetcode.com/problems/minimum-operations-to-make-a-subsequence/
 */

function Bisect() {
    return { insort_right, insort_left, bisect_left, bisect_right }
    function insort_right(a, x, lo = 0, hi = null) {
        lo = bisect_right(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_right(a, x, lo = 0, hi = null) { // > upper_bound
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = parseInt((lo + hi) / 2);
            a[mid] > x ? hi = mid : lo = mid + 1;
        }
        return lo;
    }
    function insort_left(a, x, lo = 0, hi = null) {
        lo = bisect_left(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_left(a, x, lo = 0, hi = null) { // >= lower_bound
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = parseInt((lo + hi) / 2);
            a[mid] < x ? lo = mid + 1 : hi = mid;
        }
        return lo;
    }
}

const LIS = (a) => { let bi = new Bisect(), dp = []; for (const x of a) { let i = bi.bisect_left(dp, x); i == a.length ? dp.push(x) : dp[i] = x; } return dp.length; };

// Accepted --- 256ms 50.00%
// reference: https://leetcode.com/contest/weekly-contest-222/ranking/ cuiaoxiang lucifer1004
const minOperations = (t, a) => {
    let m = new Map(), n = t.length;
    for (let i = 0; i < n; i++) m.set(t[i], i);
    let d = [];
    for (const x of a) {
        if (m.has(x)) d.push(m.get(x));
    }
    pr(d);
    return n - LIS(d);
};

const pr = console.log;
const main = () => {
    let target = [5, 1, 3],
        a = [9, 4, 2, 3, 4];
    let target2 = [6, 4, 8, 1, 3, 2],
        a2 = [4, 7, 6, 2, 3, 8, 6, 1];
    pr(minOperations(target, a))
    pr(minOperations(target2, a2));
};

main()