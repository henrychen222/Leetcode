/*
* 09/10/22 evening
* https://leetcode.com/contest/weekly-contest-310/problems/longest-increasing-subsequence-ii/
*/

const pr = console.log;

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

// WA
const lengthOfLIS2 = (a, k) => {
    if (a.length <= 1) return a.length;
    let bi = new Bisect(), dp = [];
    for (const x of a) {
        let i = bi.bisect_left(dp, x);
        let last = dp[i - 1] || 0;
        pr(x, last, dp, i, i == a.length)
        if (dp.length == 0) {
            i == a.length ? dp.push(x) : dp[i] = x;
        } else {
            if (x - last <= k && x > last) {
                i == a.length ? dp.push(x) : dp[i] = x;
            }
        }
    }
    pr(dp);
    return dp.length;
};

// TLE
const lengthOfLIS = (a, k) => {
    let n = a.length, dp = Array(n + 1).fill(1), res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (a[i] - a[j] <= k && a[i] > a[j]) {
                dp[i] = Math.max(dp[i], 1 + dp[j]);
            }
        }
        res = Math.max(res, dp[i]);
    }
    return res;
};

const main = () => {
    let a = [4, 2, 1, 4, 3, 4, 5, 8, 15], k = 3;
    let a2 = [7, 4, 5, 1, 8, 12, 4, 7], k2 = 5;
    let a3 = [1, 5], k3 = 1;
    let a_debug1 = [100000], k_debug1 = 1
    let a_debug2 = [4, 5], k_debug2 = 3
    let a_debug3 = [1,3,3,4], k_debug3 = 1
    pr(lengthOfLIS(a, k))
    pr(lengthOfLIS(a2, k2))
    pr(lengthOfLIS(a3, k3))
    pr(lengthOfLIS(a_debug1, k_debug1)) // 1
    pr(lengthOfLIS(a_debug2, k_debug2)) // 2
    pr(lengthOfLIS(a_debug3, k_debug3)) // 2
};

main()