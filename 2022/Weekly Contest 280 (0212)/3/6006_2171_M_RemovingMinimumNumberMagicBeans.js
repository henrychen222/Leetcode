/**
 * 02/12/22 evening
 * https://leetcode.com/contest/weekly-contest-280/problems/removing-minimum-number-of-magic-beans/
 */

const pr = console.log;

const preSum = (a) => { let pre = [0]; for (let i = 0; i < a.length; i++) { pre.push(pre[i] + a[i]); } return pre; };
const subArraySum = (a, l, r) => a[r + 1] - a[l];

// Accepted
const minimumRemoval = (a) => {
    a.sort((x, y) => x - y);
    let n = a.length, pre = preSum(a), res = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        let lsum = subArraySum(pre, 0, i - 1), rsum = subArraySum(pre, i, n - 1), len = n - i;
        let move = lsum + (rsum - len * a[i]);
        // pr(a[i], a.slice(0, i), a.slice(i), lsum, rsum, len, move);
        res = Math.min(res, move);
    }
    return res;
};

const main = () => {
    let beans = [4, 1, 6, 5];
    let beans2 = [2, 10, 3, 2];
    pr(minimumRemoval(beans))
    pr(minimumRemoval(beans2))
};

main()