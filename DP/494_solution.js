/**
 * 10.22 evening 10.24 afternoon
 */

// Accepted --- 1176ms 45.93%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/6395843.html
 * https://leetcode.com/problems/target-sum/discuss/97371/Java-Short-DFS-Solution
 * https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-494-target-sum/
 */
let res = 0;
const findTargetSumWays_DFS = (nums, S) => {
    res = 0;
    helper(nums, 0, 0, S);
    return res;
};

const helper = (nums, idx, sum, S) => {
    let n = nums.length;
    if (idx == n) {
        if (sum == S) res++;
        return;
    }
    helper(nums, idx + 1, sum, S + nums[idx]);
    helper(nums, idx + 1, sum, S - nums[idx]);
};

/**
 * Accepted --- 136ms 84.39%
 * 
 * DP with Map
 * reference: https://leetcode.com/problems/target-sum/discuss/97439/JavaPython-Easily-Understood
 */
const findTargetSumWays_DP = (nums, S) => {
    let dp = new Map();
    dp.set(0, 1);
    // console.log(dp);
    for (const x of nums) {
        let tmp = new Map();
        for (const y of dp.keys()) {
            tmp.set(y + x, getOrDefault(tmp, y + x, 0) + dp.get(y));
            tmp.set(y - x, getOrDefault(tmp, y - x, 0) + dp.get(y));
        }
        dp = tmp;
        // console.log(dp);
    }
    return getOrDefault(dp, S, 0);
};

const getOrDefault = (map, k, v) => {
    if (!map.has(k)) {
        return v;
    }
    return map.get(k);
};

/**
 * Accepted ---64ms 100.00%
 * 
 * DP Solution with subset sum
 * https://leetcode.com/problems/target-sum/discuss/97334/Java-(15-ms)-C%2B%2B-(3-ms)-O(ns)-iterative-DP-solution-using-subset-sum-with-explanation
 * https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-494-target-sum/
 */
const findTargetSumWays_DP_sunsetSum = (nums, S) => {
    let sum = nums.reduce((acc, cur) => acc + cur);
    return sum < S || (sum + S) % 2 > 0 ? 0 : subsetsSum(nums, (sum + S) >> 1);
};

const subsetsSum = (nums, S) => {
    let dp = new Array(S + 1).fill(0);
    dp[0] = 1;
    for (const n of nums) {
        for (let i = S; i >= n; i--) {
            dp[i] += dp[i - n];
        }
    }
    return dp[S];
};

const main = () => {
    let nums = [1, 1, 1, 1, 1],
        S = 3;
    let nums_debug1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        S_debug1 = 1;
    let nums_debug2 = [42, 24, 30, 14, 38, 27, 12, 29, 43, 42, 5, 18, 0, 1, 12, 44, 45, 50, 21, 47],
        S_debug2 = 38;
    let nums_debug3 = [0, 35, 32, 3, 4, 16, 12, 25, 47, 9, 14, 29, 7, 26, 17, 42, 21, 23, 48, 18],
        S_debug3 = 20;
    let nums_debug4 = [45, 18, 27, 39, 42, 19, 1, 35, 32, 16, 7, 6, 25, 41, 27, 18, 38, 6, 42, 10],
        S_debug4 = 49;
    let nums_debug5 = [11, 31, 37, 36, 43, 40, 50, 18, 10, 15, 10, 35, 43, 25, 41, 43, 6, 22, 38, 38],
        S_debug5 = 44;

    console.log(findTargetSumWays_DFS(nums, S));
    console.log(findTargetSumWays_DFS(nums_debug1, S_debug1));
    console.log(findTargetSumWays_DFS(nums_debug2, S_debug2));
    console.log(findTargetSumWays_DFS(nums_debug3, S_debug3));
    console.log(findTargetSumWays_DFS(nums_debug4, S_debug4));
    console.log(findTargetSumWays_DFS(nums_debug5, S_debug5));

    console.log("")
    console.log(findTargetSumWays_DP(nums, S));
    console.log(findTargetSumWays_DP(nums_debug1, S_debug1));
    console.log(findTargetSumWays_DP(nums_debug2, S_debug2));
    console.log(findTargetSumWays_DP(nums_debug3, S_debug3));
    console.log(findTargetSumWays_DP(nums_debug4, S_debug4));
    console.log(findTargetSumWays_DP(nums_debug5, S_debug5));

    console.log("")
    console.log(findTargetSumWays_DP_sunsetSum(nums, S));
    console.log(findTargetSumWays_DP_sunsetSum(nums_debug1, S_debug1));
    console.log(findTargetSumWays_DP_sunsetSum(nums_debug2, S_debug2));
    console.log(findTargetSumWays_DP_sunsetSum(nums_debug3, S_debug3));
    console.log(findTargetSumWays_DP_sunsetSum(nums_debug4, S_debug4));
    console.log(findTargetSumWays_DP_sunsetSum(nums_debug5, S_debug5));
};

main()