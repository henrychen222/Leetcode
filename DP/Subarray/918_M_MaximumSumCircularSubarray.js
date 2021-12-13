/**
 * 12/1/21 evening
 * https://leetcode.com/problems/maximum-sum-circular-subarray/
 * 
 * watch:
 * https://www.youtube.com/watch?v=Gk6yWhfzdOc
 */

/*  
     case 1: subarray  [l, r]
     case 2: prefix [0, l] + suffix [r, n - 1]
            = max(sum - mid(l, r))
            = sum + max(-mid(l, r)) 
            => come to case 1  max subarray sum of [arr * (-1)]
 */
// Accepted --- 112ms 32.95%
const maxSubarraySumCircular = (a) => {
    let case1 = maxSubArraySum(a);
    let sum = 0, allNegative = true;
    let b = a.map(x => {
        if (x >= 0) allNegative = false;
        sum += x;
        return -x;
    });
    // pr(a, b, sum);
    let case2 = sum + maxSubArraySum(b);
    // pr("case", case1, case2);
    if (allNegative) return case1;
    return Math.max(case1, case2);
};

const maxSubArraySum = (a) => { // LC53
    let n = a.length, dp = Array(n).fill(0);
    dp[0] = a[0];
    for (let i = 1; i < n; i++) dp[i] = Math.max(dp[i - 1], 0) + a[i];
    return Math.max(...dp);
};

const pr = console.log;
const main = () => {
    let nums = [1, -2, 3, -2];
    let nums2 = [5, -3, 5];
    let nums3 = [3, -1, 2, -1];
    let nums4 = [3, -2, 2, -3];
    let nums5 = [-2, -3, -1];
    pr(maxSubarraySumCircular(nums))
    pr(maxSubarraySumCircular(nums2))
    pr(maxSubarraySumCircular(nums3))
    pr(maxSubarraySumCircular(nums4))
    pr(maxSubarraySumCircular(nums5))
};

main()