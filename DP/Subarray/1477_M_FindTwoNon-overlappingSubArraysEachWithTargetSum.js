/**
 * 12.22 night
 * https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/
 */


// Accepted --- 112ms 73.79%
/**
 * reference:
 * https://zxi.mytechroad.com/blog/sliding-window/leetcode-1477-find-two-non-overlapping-sub-arrays-each-with-target-sum/
 * https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/discuss/686105/JAVA-or-Sliding-window-with-only-one-array-or-No-HasMap
 */
const MAX = Number.MAX_VALUE;
const min = Math.min;
const minSumOfLengths = (arr, target) => {
    let n = arr.length;
    let dp = Array(n).fill(MAX); // min length of a valid subarray ends or before i.
    let sum = left = 0;
    let res = minLen = MAX;
    for (let i = 0; i < n; i++) { // window [left, i]
        sum += arr[i];
        while (sum > target) {
            sum -= arr[left++];
        }
        if (sum == target) {
            let curLen = i - left + 1;
            if (left > 0 && dp[left - 1] != MAX) {
                res = min(res, curLen + dp[left - 1]); // Update res with it’s length + shortest subarray which ends before left
            }
            minLen = min(minLen, curLen);
        }
        dp[i] = minLen;
    }
    return res == MAX ? -1 : res;
};

const main = () => {
    let arr = [3, 2, 2, 4, 3],
        target = 3;
    let arr2 = [7, 3, 4, 7],
        target2 = 7;
    let arr3 = [4, 3, 2, 6, 2, 3, 4],
        target3 = 6;
    let arr4 = [5, 5, 4, 4, 5],
        target4 = 3;
    let arr5 = [3, 1, 1, 1, 5, 1, 2, 1],
        target5 = 3;
    console.log(minSumOfLengths(arr, target));
    console.log(minSumOfLengths(arr2, target2));
    console.log(minSumOfLengths(arr3, target3));
    console.log(minSumOfLengths(arr4, target4));
    console.log(minSumOfLengths(arr5, target5));
};

main()