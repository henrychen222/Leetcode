/**
 * 04/10/23 evening
 * https://leetcode.com/problems/knight-dialer/
 */

const jump = [[4, 6], [6, 8], [7, 9], [4, 8], [0, 3, 9], [], [0, 1, 7], [2, 6], [1, 3], [2, 4]];
const initialize2DArray = (n, m) => [...Array(n)].map(() => Array(m).fill(0));
const mod = 1e9 + 7;

// Accepted --- 148ms 53.70%
const knightDialer = (n) => {
    let dp = initialize2DArray(10, n), res = 0;
    for (let i = 0; i <= 9; i++) dp[i][0] = 1;
    for (let len = 1; len < n; len++) {
        for (let cur = 0; cur <= 9; cur++) {
            for (const next of jump[cur]) {
                dp[next][len] += dp[cur][len - 1];
                dp[next][len] %= mod;
            }
        }
    }
    // pr(dp)
    for (let i = 0; i < 10; i++) res += dp[i][n - 1];
    return res % mod;
};

const pr = console.log;

const main = () => {
    let n = 1;
    let n2 = 2;
    let n3 = 3;
    let n4 = 4;
    let n5 = 3131;
    pr(knightDialer(n));
    pr(knightDialer(n2));
    pr(knightDialer(n3)); // 46
    pr(knightDialer(n4)); // 104
    pr(knightDialer(n5));
};

main()