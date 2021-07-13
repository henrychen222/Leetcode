/**
 * 07/12/21 afternoon
 * https://leetcode.com/problems/count-vowels-permutation/
 * 
 * reference:
 * https://leetcode.com/contest/weekly-contest-157/ranking uwi
 */

// Accepted --- 152ms 29.30%
const mod = 1e9 + 7;
const countVowelPermutation1 = (n) => {
    let dp = Array(5).fill(1); // base condition a e i o u, each 1 way
    for (let i = 1; i < n; i++) {
        let ndp = Array(5).fill(0);
        ndp[0] = dp[1] % mod; // a -> e
        ndp[1] = (dp[0] + dp[2]) % mod; // e -> a/i
        ndp[2] = (dp[0] + dp[1] + dp[3] + dp[4]) % mod; // i -> a/e/o/u
        ndp[3] = (dp[2] + dp[4]) % mod; // o -> i/u
        ndp[4] = dp[0] % mod; // u -> a
        dp = ndp;
    }
    let res = 0;
    for (const e of dp) {
        res += e;
        if (res >= mod) res -= mod;
    }
    return res;
};

// Accepted --- 152ms 29.30%
const countVowelPermutation = (n) => {
    let dp = Array(5).fill(1);
    for (let i = 1; i < n; i++) {
        let ndp = Array(5).fill(0);
        ndp[0] = dp[1]; // no need mod
        ndp[1] = (dp[0] + dp[2]) % mod;
        ndp[2] = (dp[0] + dp[1] + dp[3] + dp[4]) % mod;
        ndp[3] = (dp[2] + dp[4]) % mod;
        ndp[4] = dp[0] // no need mod
        dp = ndp;
    }
    let res = 0;
    for (const e of dp) {
        res += e;
        if (res >= mod) res -= mod;
    }
    return res;
};

const pr = console.log;
const main = () => {
    let n = 1;
    let n2 = 2;
    let n3 = 5;
    let n4 = 2 * 10 ** 4;
    pr(countVowelPermutation(n))
    pr(countVowelPermutation(n2))
    pr(countVowelPermutation(n3))
    pr(countVowelPermutation(n4))
};

main()