/**
 * 12.9 evening
 * https://leetcode.com/problems/partition-array-for-maximum-sum/
 * 
 * read:
 * https://leetcode.com/problems/partition-array-for-maximum-sum/discuss/290863/JavaC%2B%2BPython-DP
 */


// Accepted --- 80ms 96.30%
// reference: https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-1043-partition-array-for-maximum-sum/
const maxSumAfterPartitioning = (arr, K) => {
    let n = arr.length;
    let dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        let max = 0;
        for (let k = 1; k <= K && i - k >= 0; k++) {
            max = Math.max(max, arr[i - k]);
            dp[i] = Math.max(dp[i], dp[i - k] + max * k);
        }
    }
    return dp[n];
};

// Accepted --- 100ms 57.41%
// https://www.youtube.com/watch?v=3M8q-wB2tmw&feature=youtu.be
const maxSumAfterPartitioning_video_code = (arr, K) => {
    let n = arr.length;
    let dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        let max = 0;
        for (let k = 1; k <= Math.min(i, K); k++) {
            max = Math.max(max, arr[i - k]);
            dp[i] = Math.max(dp[i], dp[i - k] + max * k);
        }
    }
    return dp[n];
};

const main = () => {
    let arr = [1, 15, 7, 9, 2, 5, 10],
        k = 3;
    let arr2 = [1, 4, 1, 5, 7, 3, 6, 1, 9, 9, 3],
        k2 = 4;
    let arr3 = [1],
        k3 = 1;
    console.log(maxSumAfterPartitioning(arr, k));
    console.log(maxSumAfterPartitioning(arr2, k2));
    console.log(maxSumAfterPartitioning(arr3, k3));
};

main()