/**
 * 11.20 night
 * https://www.cnblogs.com/grandyang/p/5705750.html
 * 
 * reference:
 * https://www.cnblogs.com/grandyang/p/5705750.html
 * https://leetcode.com/problems/combination-sum-iv/discuss/85036/1ms-Java-DP-Solution-with-Detailed-Explanation
 */

// Accepted --- 80ms 82.83%
let memo;
let n;
const combinationSum4 = (nums, target) => {
    memo = new Map();
    n = nums.length;
    return dfs(nums, target);
};

const dfs = (nums, target) => {
    // console.log("111", memo, target);
    if (target < 0) return 0;
    if (target == 0) return 1;
    if (memo.has(target)) return memo.get(target);
    let res = 0;
    for (let i = 0; i < n; i++) {
        res += dfs(nums, target - nums[i]);
    }
    memo.set(target, res);
    // console.log("222", memo, target);
    return res;
};

// Accepted --- 100ms 9.09%
const combinationSum4_DP = (nums, target) => {
    let dp = new Array(target + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= target; i++) {
        for (const num of nums) {
            if (i >= num) {
                dp[i] += dp[i - num]; // dp[i]: res when target == i. Example: dp[3] = 1 + dp[2], dp[3] = 2 + dp[1], dp[3] = 3 + dp[0];
                // console.log(dp);
            }
        }
    }
    return dp[target];
};

// Accepted --- 84ms 65.15%
const combinationSum4_DP_refine = (nums, target) => {
    nums.sort((a, b) => a - b);
    let dp = new Array(target + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= target; i++) {
        for (const num of nums) {
            if (i < num) break;
            dp[i] += dp[i - num];
        }
    }
    return dp[target];
};

const main = () => {
    let nums = [1, 2, 3],
        target = 4;
    console.log(combinationSum4(nums, target));
};

main()