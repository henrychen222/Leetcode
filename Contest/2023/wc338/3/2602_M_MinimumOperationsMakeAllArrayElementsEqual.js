/*
 * 03/25/23 evening
 * https://leetcode.cn/contest/weekly-contest-338/problems/minimum-operations-to-make-all-array-elements-equal/
 * https://leetcode.com/contest/weekly-contest-338/problems/minimum-operations-to-make-all-array-elements-equal/
 */

const pr = console.log;

const preSum = (a) => { let pre = [0]; for (let i = 0; i < a.length; i++) { pre.push(pre[i] + a[i]); } return pre; };
const subArraySum = (a, l, r) => a[r + 1] - a[l];

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

// Accepted
const minOperations = (a, b) => {
    a.sort((x, y) => x - y);
    let res = [], bi = new Bisect(), n = a.length, pre = preSum(a);
    for (const v of b) {
        let l = bi.bisect_right(a, v), cnt = n - l, sum = subArraySum(pre, l, n - 1), moveDown = sum - cnt * v;
        let r = l - 1, cnt2 = r + 1, sum2 = subArraySum(pre, 0, r), moveUp = cnt2 * v - sum2;
        let use = moveDown + moveUp;
        // pr(a.slice(l), sum, cnt, moveDown);
        // pr(a.slice(0, r + 1), sum2, cnt2, moveUp);
        res.push(use);
    }
    return res;
};

const main = () => {
    let a = [3, 1, 6, 8], b = [1, 5];
    let a2 = [2, 9, 6, 3], b2 = [10]
    pr(minOperations(a, b))
    pr(minOperations(a2, b2))
};

main()