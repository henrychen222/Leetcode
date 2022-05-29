/*
背包DP --- knapsack
https://oi-wiki.org/dp/knapsack/
https://leetcode.com/discuss/study-guide/1152328/01-Knapsack-Problem-and-Dynamic-Programming


Example Problem:
https://leetcode.com/problems/coin-change/
https://leetcode.com/problems/coin-change-2/
*/

// Template
const knapsack = (weight, v) => { // w: weight array
    let n = weight.length, dp = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 1;
    for (let i = 0; i < n; i++) {
        for (let w = 0; w <= weight[i]; w++) { // [minWeight, maxWeight]   change
            if (w - weight[i] >= 0) {
                // 二维转移方程
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weight[i]] + v[i]);

                // 优化一维滚动数组 (use)
                dp[w] = Math.max(dp[w], dp[w - weight[i]] + v[i]);

                // coin change formula
                dp[w] = Math.min(dp[w], dp[w - weight[i]] + 1); // coin change // min number
                dp[w] += dp[w - weight[i]]; // coin change 2 // number of ways (方案数)
            }
        }
    }
    // change
    return dp[maxWeight];
};