/**
 * 11.23 evening
 * https://leetcode.com/problems/dice-roll-simulation/
 */

// Accepted --- 80ms 100.00%
// reference: https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-1223-dice-roll-simulation/
const mod = 1e9 + 7;
const dieSimulator = (n, rollMax) => {
    let dp = initialize2DArrayNew(n + 1, 7);
    let sum = new Array(n + 1).fill(0);
    for (let j = 0; j < 6; j++) {
        sum[1] += dp[1][j] = 1;
    }
    for (let i = 2; i <= n; i++) {
        for (let j = 0; j < 6; j++) {
            let k = i - rollMax[j];
            let invalid = k <= 1 ? Math.max(k, 0) : sum[k - 1] - dp[k - 1][j];
            dp[i][j] = ((sum[i - 1] - invalid) % mod + mod) % mod;
            sum[i] = (sum[i] + dp[i][j]) % mod;
        }
    }
    // console.log(dp, sum)
    return sum[n];
};

// Accepted --- 496ms 40.00%
// reference: https://leetcode.com/contest/weekly-contest-158/ranking/
const dieSimulator_beet = (n, rollMax) => {
    const dp = initialize3DArray(6, 20, 5050);
    for (let i = 0; i < 6; i++) {
        dp[i][1][1] = 1;
    }
    let res = 0;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < 6; j++) {
            for (let k = 0; k < 20; k++) {
                for (let p = 0; p < 6; p++) {
                    let nk = j == p ? k + 1 : 1;
                    if (nk > rollMax[p]) continue;
                    dp[p][nk][i + 1] += dp[j][k][i];
                    dp[p][nk][i + 1] %= mod;
                }
            }
        }
    }
    for (let j = 0; j < 6; j++) {
        for (let k = 0; k < 20; k++) {
            res += dp[j][k][n];
            res %= mod;
        }
    }
    return res;
};

// Accepted --- 228ms 40.00%
// reference: https://leetcode.com/contest/weekly-contest-158/ranking/
const dieSimulator_uwi = (n, rollMax) => {
    let dp = initialize2DArrayNew(6, 16);
    for (let i = 0; i < 6; i++) {
        dp[i][1] = 1;
    }
    for (let i = 2; i <= n; i++) {
        let ndp = initialize2DArrayNew(6, 16);
        for (let j = 0; j < 6; j++) {
            for (let k = 0; k < 16; k++) {
                for (let l = 0; l < 6; l++) {
                    if (j == l) {
                        if (k + 1 <= rollMax[l]) {
                            ndp[l][k + 1] += dp[j][k];
                            ndp[l][k + 1] %= mod;
                        }
                    } else {
                        ndp[l][1] += dp[j][k];
                        ndp[l][1] %= mod;
                    }
                }
            }
        }
        dp = ndp;
    }
    let res = 0;
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 16; j++) {
            res += dp[i][j];
        }
    }
    return res % mod;
};

const initialize2DArrayNew = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = new Array(n).fill(0);
        data.push(tmp);
    }
    return data;
};

const initialize3DArray = (m, n, p) => {
    let res = [];
    for (let i = 0; i < m; i++) {
        let data = [];
        for (let j = 0; j < n; j++) {
            let tmp = new Array(p).fill(0);
            data.push(tmp);
        }
        res.push(data);
    }
    return res;
};

const main = () => {
    let n = 2,
        rollMax = [1, 1, 2, 2, 2, 3];
    let n2 = 2,
        rollMax2 = [1, 1, 1, 1, 1, 1];
    let n3 = 3,
        rollMax3 = [1, 1, 1, 2, 2, 3];
    console.log(dieSimulator(n, rollMax));
    console.log(dieSimulator(n2, rollMax2));
    console.log(dieSimulator(n3, rollMax3));
};

main()