/**
 * 12/1/21 evening
 * https://leetcode.com/problems/maximum-subarray/
 * 
 * watch:
 * https://www.youtube.com/watch?v=Gk6yWhfzdOc
 */

// Accepted --- 116ms 32.49%
const maxSubArray = (a) => {
    let n = a.length;
    let dp = Array(n).fill(0);
    dp[0] = a[0];
    for (let i = 1; i < n; i++) dp[i] = Math.max(dp[i - 1], 0) + a[i];
    return Math.max(...dp);
};

// Accepted --- 104ms 43.34% 
const maxSubArray1 = (a) => {
    let n = a.length;
    let dp = Array(n).fill(0); // save max suarray sum ending with a[i]
    dp[0] = a[0];
    for (let i = 1; i < n; i++) {
        // pr(dp[i], a[i]);
        if (dp[i - 1] < 0) { // (dp[i-1]: pre max subarray sum) < 0, drop previous, new subarray sum start from a[i]
            dp[i] = a[i];
        } else { // >= 0  add previous to new subarray sum
            dp[i] = dp[i - 1] + a[i];
        }
    }
    // pr(dp);
    return Math.max(...dp); // answer is the max
};

const pr = console.log;
const main = () => {
    let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    let nums2 = [1];
    let nums3 = [5, 4, -1, 7, 8];
    let debug1 = [-1];
    pr(maxSubArray(nums))
    pr(maxSubArray(nums2))
    pr(maxSubArray(nums3))
    pr(maxSubArray(debug1))
};

main()