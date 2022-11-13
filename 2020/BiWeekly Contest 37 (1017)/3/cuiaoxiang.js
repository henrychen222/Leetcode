// 10.19 afternoon

/**
 * read:
 * https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments/discuss/898923/Java-O(NK)-with-Diagram-Explanation
 */

// Accepted --- 1468ms
const numberOfSets = (n, k) => {
    let mod = 1e9 + 7;
    let N = 1e3 + 10;
    let dp = initialize2DArrayNew(N, N);
    let pre = initialize2DArrayNew(N, N); // prefix sum
    for (let i = 0; i <= k; i++) {
        for (let j = 0; j <= n; j++) {
            if (j < i + 1) {
                dp[i][j] = 0;
                continue;
            }
            if (i == 0) {
                dp[i][j] = 1;
                continue;
            }
            dp[i][j] = dp[i][j - 1] + pre[i - 1][j - 1];
            if (dp[i][j] >= mod) dp[i][j] -= mod;
        }
        pre[i][0] = dp[i][0];
        for (let j = 1; j <= n; j++) {
            pre[i][j] = (pre[i][j - 1] + dp[i][j]) % mod;
        }
    }
    return dp[k][n];
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