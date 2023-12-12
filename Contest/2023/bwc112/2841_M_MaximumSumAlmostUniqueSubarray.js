/*
 * 09/02/23 evening
 * https://leetcode.com/contest/biweekly-contest-112/problems/maximum-sum-of-almost-unique-subarray/
 */

const pr = console.log;

const addOneOrManyMap = (m, x, cnt = 1) => m.set(x, m.get(x) + cnt || cnt);
const removeOneOrManyMap = (m, x, cnt = 1) => { let occ = m.get(x); occ > cnt ? m.set(x, occ - cnt) : m.delete(x); };
const preSum = (a) => { let pre = [0]; for (let i = 0; i < a.length; i++) { pre.push(pre[i] + a[i]); } return pre; };
const subArraySum = (a, l, r) => a[r + 1] - a[l];

// Accepted
const maxSum = (a, M, k) => {
    let m = new Map(), n = a.length, pre = preSum(a), res = 0;
    for (let i = 0; i < n; i++) {
        let l = i - k + 1;
        addOneOrManyMap(m, a[i]);
        if (l > 0) removeOneOrManyMap(m, a[l - 1]);
        // pr(a.slice(l, i+1), m)
        if (m.size >= M) {
            let sum = subArraySum(pre, l, i);
            // pr("ok", a.slice(l, i+1), l, i, sum)
            if (sum > res) res = sum;
        }
    }
    return res;
};

const main = () => {
    let a = [2, 6, 7, 3, 1, 7], m = 3, k = 4;
    let a2 = [5, 9, 9, 2, 4, 5, 4], m2 = 1, k2 = 3;
    let a3 = [1, 2, 1, 2, 1, 2, 1], m3 = 3, k3 = 3;
    pr(maxSum(a, m, k))
    pr(maxSum(a2, m2, k2))
    pr(maxSum(a3, m3, k3))
};

main()