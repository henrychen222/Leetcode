/*
 * 07/22/23 night
 * https://leetcode.com/contest/weekly-contest-355/problems/count-paths-that-can-form-a-palindrome-in-a-tree/
 */

const pr = console.log;

const ord = (c) => c.charCodeAt();
const addOneOrManyMap = (m, x, cnt = 1) => m.hasOwnProperty(x) ? m[x] += cnt : m[x] = 1;

let s, p, memo;
const countPalindromePaths = (parent, ss) => {
    s = ss, p = parent, memo = new Map();
    let n = p.length, f = {}, res = 0, vals = [];
    for (let i = 0; i < n; i++) vals.push(dfs(i));
    // pr(vals)
    for (const v of vals) {
        res += f[v] || 0;
        for (let i = 0; i < 26; i++) res += f[v ^ (1 << i)] || 0;
        addOneOrManyMap(f, v);
    }
    return res;
};

const dfs = (idx) => {
    if (idx == 0) return 0;
    if (memo.has(idx)) return memo.get(idx);
    let par = p[idx];
    let res = dfs(par) ^ (1 << ord(s[idx]) - 97);
    memo.set(idx, res);
    return res;
};

const main = () => {
    let p = [-1, 0, 0, 1, 1, 2], s = "acaabc";
    let p2 = [-1, 0, 0, 0, 0], s2 = "aaaaa"
    pr(countPalindromePaths(p, s))
    pr(countPalindromePaths(p2, s2))
};

main()