// 10.19 afternoon

// Accepted --- 240ms
// reference: https://www.acwing.com/file_system/file/content/whole/index/content/1380840/
const numberOfSets = (n, k) => {
    let mod = 1e9 + 7;
    let dp = initialize2DArrayNew(n, k + 1);
    let g = initialize2DArrayNew(n, k + 1);
    dp[0][0] = g[0][0] = 1;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j <= k; j++) {
            dp[i][j] = dp[i - 1][j];
            if (j > 0) {
                dp[i][j] = (dp[i][j] + g[i - 1][j - 1]) % mod;
            }
            g[i][j] = (g[i - 1][j] + dp[i][j]);
        }
    }
    return dp[n - 1][k];
};

const initialize2DArrayNew = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = new Array(n).fill(0);
        data.push(tmp);
    }
    return data;
};

const main = () => {
    let n = 4, k = 2;
    let n2 = 3, k2 = 1;
    let n3 = 30, k3 = 7;
    let n4 = 5, k4 = 3;
    let n5 = 3, k5 = 2;
    let n_debug1 = 18, k_debug1 = 12;
    let n_debug2 = 48, k_debug2 = 12;
    console.log(numberOfSets(n, k));
    console.log(numberOfSets(n2, k2));
    console.log(numberOfSets(n3, k3));
    console.log(numberOfSets(n4, k4));
    console.log(numberOfSets(n5, k5));
    console.log(numberOfSets(n_debug1, k_debug1));
    console.log(numberOfSets(n_debug2, k_debug2));
};

main()