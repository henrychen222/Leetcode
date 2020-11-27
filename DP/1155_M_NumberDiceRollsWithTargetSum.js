/**
 * 11.25 evening
 * https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/
 */

// Accepted --- 696ms 6.06%
// https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/discuss/355894/Python-DP-with-memoization-explained
const mod = 1e9 + 7;
let memo;
const numRollsToTarget = (d, f, target) => {
    memo = new Map();
    return dfs(d, f, target);
};

const dfs = (d, f, target) => {
    if (d == 0) return target > 0 ? 0 : 1;
    let tmp = JSON.stringify([d, target]);
    if (memo.has(tmp)) return memo.get(tmp);
    let res = 0;
    for (let k = Math.max(0, target - f); k < target; k++) {
        res += dfs(d - 1, f, k);
        res %= mod;
    }
    memo.set(JSON.stringify([d, target]), res);
    // console.log(memo);
    return res;
};

/**
 * Accepted --- 120ms 61.82%
 * reference: 
 * https://www.acwing.com/solution/LeetCode/content/3717/
 * https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-1155-number-of-dice-rolls-with-target-sum/
 */
const numRollsToTarget1 = (d, f, target) => {
    let dp = initialize2DArrayNew(d + 1, target + 1); // dp[i, j] the ith dice, total ways of sum == j
    dp[0][0] = 1;
    for (let i = 1; i <= d; i++) {
        for (let j = 1; j <= f; j++) {
            for (let k = j; k <= target; k++) {
                dp[i][k] = (dp[i][k] + dp[i - 1][k - j]) % mod;
            }
        }
    }
    // console.log(dp);
    return dp[d][target];
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
    let d = 1,
        f = 6,
        target = 3;
    let d2 = 2,
        f2 = 6,
        target2 = 7;
    let d3 = 2,
        f3 = 5,
        target3 = 10;
    let d4 = 1,
        f4 = 2,
        target4 = 3;
    let d5 = 30,
        f5 = 30,
        target5 = 500;
    console.log(numRollsToTarget(d, f, target));
    console.log(numRollsToTarget(d2, f2, target2));
    console.log(numRollsToTarget(d3, f3, target3));
    console.log(numRollsToTarget(d4, f4, target4));
    console.log(numRollsToTarget(d5, f5, target5));
};

main()