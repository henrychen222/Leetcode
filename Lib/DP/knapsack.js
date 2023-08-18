/*
06/13/22 night

背包DP --- knapsack
https://tangshusen.me/2019/11/24/knapsack-problem/  (use)
https://en.wikipedia.org/wiki/Knapsack_problem (read)
https://baike.baidu.com/item/%E8%83%8C%E5%8C%85%E9%97%AE%E9%A2%98/2416931 (read)

https://oi-wiki.org/dp/knapsack/
https://leetcode.com/discuss/study-guide/1152328/01-Knapsack-Problem-and-Dynamic-Programming
https://usaco.guide/gold/knapsack
*/

/*
01背包

一共有N件物品, 第i（i从1开始) 件物品的重量为w[i]，价值为v[i].
在总重量不超过背包承载上限W的情况下，能够装入背包的最大价值是多少?

*/
const knapsack_01 = () => {
    for (let i = 0; i < n; i++) {
        for (let j = W; j >= w[i]; j--) { // 必须正向枚举对于滚动数组
            if (j > w[i]) {
                dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - w[i]] + v[i]);
                dp[j] = max(dp[j], dp[j - w[i]] + v[i]) // (滚动数组)
            }
        }
    }
};


/*
完全背包  (与01背包不同就是每种物品可以有无限多个)

一共有N种物品, 每种物品有无限多个. 
第i(i从1开始）种物品的重量为w[i], 价值为v[i]. 
在总重量不超过背包承载上限W的情况下，能够装入背包的最大价值是多少？

*/
const knapsack_complete_unbounded = () => {
    for (let i = 0; i < n; i++) {
        for (let j = w[i]; j <= W; j++) { // 必须正向枚举对于滚动数组
            if (j >= w[i]) {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - w[i]] + v[i]);
                dp[j] = Math.max(dp[j], dp[j - w[i]] + v[i]) // (滚动数组)
            }
        }
    }
};


/*
多重背包 (与前面不同就是每种物品是有限个 n[i])

一共有N种物品.
第i(i从1开始) 种物品的数量为n[i], 重量为w[i], 价值为v[i].
在总重量不超过背包承载上限W的情况下, 能够装入背包的最大价值是多少？

*/
const knapsack_multi_bounded = () => {
    for (let i = 1; i <= n; i++) {
        for (let j = W; j >= w[i]; j--) { // 必须逆向枚举对于滚动数组
            for (let k = 0; k <= Math.min(n[i], j / w[i]); j++) {
                if (j >= w[i]) {
                    dp[j] = Math.max(dp[j], dp[j - k * w[i]] + k * v[i]) //(滚动数组)
                }
            }
        }
    }
};



//////////////////////////////////////////////////////////////////////////////////
/*
Example Problem:
https://leetcode.com/problems/coin-change/
https://leetcode.com/problems/coin-change-2/
*/
// example code
const knapsack_01 = (weight, v) => { // w: weight array
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