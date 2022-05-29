/**
 * 02/07/22 morning
 * https://leetcode.com/problems/numbers-with-same-consecutive-differences/
 */

const pr = console.log;

// Accepted --- 152ms 10.53%
let n, k, res;
const numsSameConsecDiff = (N, K) => {
    n = N;
    k = K;
    res = new Set();
    dfs('');
    return [...res];
};

const dfs = (cur) => {
    if (cur.length > n) return;
    // pr(cur, ok(cur));
    if (cur.length == n && ok(cur)) res.add(cur);
    let start = cur.length == 0 ? 1: 0;
    for (let i = start; i < 10; i++) { // build '0-9' string
        cur += i + '';
        if (ok(cur)) { // ok, dfs further
            dfs(cur);
            cur = cur.slice(0, -1);
        } else {
            // pr("not ok", cur);
            cur = cur.slice(0, -1); // not ok, no need to dfs further, but change last digit and continue 
        }
    }
};

const ok = (s) => {
    if (s.length == 1) return true;
    if (s[0] == '0') return false;
    let n = s.length, diff = Math.abs((s[1] - '0') - (s[0] - '0'));
    if (diff != k) return false;
    for (let i = 2; i < n; i++) {
        let d = Math.abs((s[i] - '0') - (s[i - 1] - '0'));
        if (d != k) return false;
    }
    return true;
};

const main = () => {
    let n = 3,
        k = 7;
    let n2 = 2,
        k2 = 1;
    let n_debug1 = 9,
        k_debug1 = 0;
    pr(numsSameConsecDiff(n, k))
    pr(numsSameConsecDiff(n2, k2))
    pr(numsSameConsecDiff(n_debug1, k_debug1))
};

main()