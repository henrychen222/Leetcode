/*
 * 04/01/23 morning
 * https://leetcode.com/contest/biweekly-contest-101/problems/find-the-substring-with-maximum-cost/
 */

const pr = console.log;

// Accepted
const ord = (c) => c.charCodeAt();
const maximumCostSubstring = (s, a, b) => {
    let sm = new Map(), pre = [0], n = s.length, m = a.length;
    for (let i = 0; i < m; i++) sm.set(a[i], i);
    for (const c of s) {
        let v = sm.has(c) ? b[sm.get(c)] : ord(c) - 96;
        pre.push(pre[pre.length - 1] + v);
    }
    // pr(pre);
    let len = pre.length, suf = Array(len).fill(Number.MIN_SAFE_INTEGER), res = Number.MIN_SAFE_INTEGER;
    suf[len - 1] = pre[len - 1]
    for (let i = len - 2; i >= 0; i--) suf[i] = Math.max(suf[i + 1], pre[i]);
    // pr(suf)
    for (let i = 0; i < len; i++) { // max value in [i+1, ....]
        let rangeSum = suf[i] - pre[i];
        // pr(rangeSum);
        res = Math.max(res, rangeSum);
    }
    return res;
};

const main = () => {
    let s = "adaa", chars = "d", vals = [-1000];
    let s2 = "abc", chars2 = "abc", vals2 = [-1, -1, -1]
    pr(maximumCostSubstring(s, chars, vals))
    pr(maximumCostSubstring(s2, chars2, vals2))
};

main()