/*
 * 02/25/23 evening
 * https://leetcode.com/contest/weekly-contest-334/problems/find-the-divisibility-array-of-a-string/
 */

const pr = console.log;

const ll = BigInt;

// Accepted
const divisibilityArray = (s, m) => {
    let cur = 0, res = [];
    for (const c of s) {
        cur = (cur * 10 + (c - '0')) % m;
        // pr(cur);
        res.push(cur == 0);
    }
    return res;
};

// TLE
const divisibilityArray1 = (s, m) => {
    let n = s.length, res = Array(n).fill(0), cur = '';
    for (let i = 0; i < n; i++) {
        cur += s[i];
        if (ll(cur) % ll(m) == 0) res[i] = 1;
    }
    return res;
};

const main = () => {
    let s = "998244353", m = 3;
    let s2 = "1010", m2 = 10;
    pr(divisibilityArray(s, m))
    pr(divisibilityArray(s2, m2))
};

main()