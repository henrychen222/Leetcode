/*
 * 11/17/22 night
 * https://leetcode.com/problems/distinct-subsequences-ii
 * 
 * reference:
 * https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-940-distinct-subsequences-ii/
 * https://leetcode.com/contest/weekly-contest-110/ranking
 */

const pr = console.log;

const ord = (c) => c.charCodeAt();
const sm = (a) => a.reduce(((x, y) => x + y), 0);
const mod = 1e9 + 7;

// Accepted --- 148ms 8.33%
const distinctSubseqII = (s) => {
    let cnt = Array(26).fill(0);
    for (const c of s) cnt[ord(c) - 97] = (sm(cnt) + 1) % mod;
    return sm(cnt) % mod;
};

const main = () => {
    let s = "abc";
    let s2 = "aba";
    pr(distinctSubseqII(s))
    pr(distinctSubseqII(s2))
};

main()