/**
 * 06/19/21 night
 * https://leetcode.com/problems/k-inverse-pairs-array/
 */

// Accepted --- 1956ms 16.58%
const MOD = 1e9 + 7;
const kInversePairs = (n, k) => {
    let dp = initialize2DArrayNew(n + 1, k + 1);
    dp[0][0] = 1;
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            for (let m = 0; m <= k; m++) {
                if (m - j >= 0 && m - j <= k) {
                    dp[i][m] = (dp[i][m] + dp[i - 1][m - j]) % MOD;
                }
            }
        }
    }
    return dp[n][k];
};

// Accepted --- 112ms 86.93%
const kInversePairs2 = (n, k) => {
    let dp = initialize2DArrayNew(n + 1, k + 1);
    dp[0][0] = 1;
    for (let i = 1; i <= n; i++) {
        dp[i][0] = 1;
        for (let j = 1; j <= k; j++) {
            dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % MOD;
            if (j >= i) {
               dp[i][j] = (dp[i][j] - dp[i - 1][j - i] + MOD) % MOD;
            }
        }
    }
    return dp[n][k];
};

const initialize2DArrayNew = (n, m) => {
    let data = [];
    for (let i = 0; i < n; i++) {
        let tmp = Array(m).fill(0);
        data.push(tmp);
    }
    return data;
};