/*
 * 12/09/22 night
 * https://leetcode.com/problems/burst-balloons/
 */

const pr = console.log;

const initialize2DArray = (n, m) => { let d = []; for (let i = 0; i < n; i++) { let t = Array(m).fill(0); d.push(t); } return d; };

// Accepted --- 348ms 32.16%
// reference: https://www.geeksforgeeks.org/burst-balloon-to-maximize-coins/
const maxCoins = (a) => {
    let n = a.length, b = [1, ...a, 1], dp = initialize2DArray(n + 2, n + 2);
    for (let len = 1; len <= n; len++) {
        for (let l = 1; l < n - len + 2; l++) {
            let r = l + len - 1;
            for (let last = l; last <= r; last++) {
                let v = dp[l][last - 1] + b[l - 1] * b[last] * b[r + 1] + dp[last + 1][r];
                dp[l][r] = Math.max(dp[l][r], v);
            }
        }
    }
    return dp[1][n];
};

const main = () => {
    let a = [3, 1, 5, 8];
    let a2 = [1, 5]
    pr(maxCoins(a))
    pr(maxCoins(a2))
};

main()