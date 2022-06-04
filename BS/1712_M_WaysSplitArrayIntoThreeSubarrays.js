/**
 * 06/02/22 evening
 * https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/
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

const preSum = (a) => { let pre = [0]; for (let i = 0; i < a.length; i++) { pre.push(pre[i] + a[i]); } return pre; };
const subArraySum = (a, l, r) => a[r + 1] - a[l];

// Accepted --- 550ms 6.25%
// Accepted --- 681ms 6.25%
const mod = 1e9 + 7;
const waysToSplit = (a) => {
    let n = a.length, pre = preSum(a), bi = new Bisect();
    let res = 0;
    for (let i = 1; i < n; i++) {
        let lsum = subArraySum(pre, 0, i - 1), mrSum = subArraySum(pre, i, n - 1);
        // pr(lsum, mrSum)
        let min = bi.bisect_left(pre, 2 * lsum, i + 1);
        let max = bi.bisect_left(pre, parseInt(mrSum / 2) + lsum + 1, i + 1);
        max = Math.min(max, n);
        let len = max - min;
        // pr(i, 2 * lsum, parseInt(mrSum / 2) + lsum + 1, min, max)
        res += Math.max(0, len);
    }
    return res % mod;
};

const pr = console.log;
const main = () => {
    let nums = [1, 1, 1];
    let nums2 = [1, 2, 2, 2, 5, 0];
    let nums3 = [3, 2, 1];
    let debug1 = [0,3,3];
    pr(waysToSplit(nums))
    pr(waysToSplit(nums2));
    pr(waysToSplit(nums3));
    pr(waysToSplit(debug1)); // 1
};

main()