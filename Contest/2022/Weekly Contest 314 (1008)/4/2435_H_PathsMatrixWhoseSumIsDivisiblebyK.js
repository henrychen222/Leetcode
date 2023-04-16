/*
 * 10/08/22 night
 * https://leetcode.com/contest/weekly-contest-314/problems/paths-in-matrix-whose-sum-is-divisible-by-k/
 */

const pr = console.log;

const initialize3DArray = (n, m, p) => { let r = []; for (let i = 0; i < n; i++) { let d = []; for (let j = 0; j < m; j++) { let t = Array(p).fill(0); d.push(t); } r.push(d); } return r; };

const mod = 1e9 + 7;
const numberOfPaths = (g, K) => {
    let n = g.length, m = g[0].length, dp = initialize3DArray(n + 1, m + 1, K);
    dp[0][1][0] = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            for (let k = 0; k < K; k++) {
                dp[i + 1][j + 1][(k + g[i][j]) % K] += dp[i][j + 1][k];
                dp[i + 1][j + 1][(k + g[i][j]) % K] %= mod;
                dp[i + 1][j + 1][(k + g[i][j]) % K] += dp[i + 1][j][k];
                dp[i + 1][j + 1][(k + g[i][j]) % K] %= mod;
            }
        }
    }
    return dp[n][m][0];
};

const main = () => {
    let g = [[5, 2, 4], [3, 0, 5], [0, 7, 2]], k = 3;
    let g2 = [[0, 0]], k2 = 5;
    let g3 = [[7, 3, 4, 9], [2, 3, 6, 2], [2, 3, 7, 0]], k3 = 1
    pr(numberOfPaths(g, k))
    pr(numberOfPaths(g2, k2))
    pr(numberOfPaths(g3, k3))
};

main()
