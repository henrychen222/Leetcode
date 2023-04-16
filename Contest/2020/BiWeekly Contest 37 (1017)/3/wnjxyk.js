// 10.19 afternoon

// Accepted --- 216ms
const numberOfSets = (n, k) => {
    let mod = 1e9 + 7;
    let MAXN = 1000 + 50;
    let dp = initialize2DArrayNew(MAXN, 2);
    for (let i = 0; i <= k; i++) {
        dp[i][0] = dp[i][1] = 0;
        dp[0][0] = 1;
    }
    for (let i = 1; i < n; i++) {
        for (let j = k; j >= 1; j--) {
            dp[j][0] = (dp[j][0] + dp[j][1]) % mod;
            dp[j][1] = (dp[j - 1][0] + dp[j][1] + dp[j - 1][1]) % mod;
        }
    }
    return (dp[k][0] + dp[k][1]) % mod;
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