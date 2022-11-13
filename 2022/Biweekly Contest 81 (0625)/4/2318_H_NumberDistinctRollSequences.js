/**
 * 06/25/22 morning
 * https://leetcode.com/contest/biweekly-contest-81/problems/number-of-distinct-roll-sequences/
 */

const pr = console.log;

const gcd = (a, b) => b == 0 ? a : gcd(b, a % b);
const mod = 1e9 + 7;
const counter_value_in_indexA_in = (a_or_s) => { let m = new Map(); let n = a_or_s.length; for (let i = 0; i < n; i++) { if (!m.has(a_or_s[i])) m.set(a_or_s[i], []); m.get(a_or_s[i]).push(i); } return m; };

// TLE
let se, n;
const distinctSequences = (N) => {
    n = N;
    se = new Set();
    dfs([]);
    // pr(se, se.size);
    return se.size % mod;
};

const dfs = (cur) => {
    if (cur.length == n) {
        // pr("cur", cur);
        se.add(JSON.stringify(cur));
        return;
    }
    for (let i = 1; i <= 6; i++) {
        cur.push(i);
        if (ok(cur)) dfs(cur);
        cur.pop();
    }
};

const ok = (a) => {
    let n = a.length;
    if (n >= 2) {
        for (let i = 1; i < n; i++) {
            if (gcd(a[i - 1], a[i]) != 1) return false;
        }
        let m = counter_value_in_indexA_in(a);
        for (const [, ia] of m) {
            for (let i = 1; i < ia.length; i++) {
                if (ia[i] - ia[i - 1] <= 2) return false;
            }
        }
    }
    return true;
};

const totDistinctSubsequence = (a) => {
    let n = a.length;
    for (let i = 0; i < 1 << n; i++) {
        let sub = [];
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) sub.push(a[j]);
            if (sub.length > 0) res.add(JSON.stringify(sub));
        }
    }
};

const main = () => {
    let n = 4;
    let n2 = 2;
    let debug1 = 15;
    pr(distinctSequences(n))
    pr(distinctSequences(n2))
    pr(distinctSequences(debug1)) // 16706688
    // for (let i = 1; i <= 15; i++) pr(distinctSequences(i))
};

main()