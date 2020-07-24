/**
 * 7.15 morning
 */

// lc 53  https://leetcode.com/problems/maximum-subarray/
// https://www.geeksforgeeks.org/window-sliding-technique/
// https://walkccc.github.io/CS/JavaScript/01/slidingWindow/
const maxSubarraySum = (arr, k) => {
    if (arr.length < k) return null;

    // Compute sum of first window of size k 
    let res = 0;
    for (let i = 0; i < k; i++) {
        res += arr[i];
    }

    // Compute sums of remaining windows by removing first element of previous window and adding last element of current window. 
    let windowSum = res;
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum + arr[i] - arr[i - k];
        res = Math.max(res, windowSum);
    }
    return res;
};

// lc 209 https://leetcode.com/problems/minimum-size-subarray-sum/
// https://leetcode.com/problems/minimum-size-subarray-sum/discuss/59213/Javascript-solution-if-anyone-is-interested
// https://walkccc.github.io/CS/JavaScript/01/slidingWindow/
const minSubarraySum = (arr, k) => {
    let res = Number.MAX_VALUE;
    let start = 0;
    let end = 0;
    let windowSum = 0;
    while (start < arr.length) {
        if (windowSum < k && end < arr.length) {
            windowSum += arr[end];
            end++;
        } else if (windowSum >= k) {
            res = Math.min(res, end - start);
            windowSum -= arr[start];
            start++;
        } else {
            break;
        }
    }
    return res == Number.MAX_VALUE ? 0 : res;
};

// lc 713 https://leetcode.com/problems/subarray-product-less-than-k/
const numSubarrayProductLessThanK = (nums, k) => {
    let cnt = 0;
    let start = 0;
    let end = 0;
    let windowProduct = 1;
    while (start < nums.length && end < nums.length) {
        if (windowProduct * nums[start] < k) {
            windowProduct *= nums[start];
            cnt += start - end + 1;
            start++;
        } else if (nums[end]) {
            windowProduct /= nums[end];
            end++;
        } else {
            break;
        }
    }
    return cnt;
};

// lc 795 https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/
const numSubarrayBoundedMax = (A, L, R) => {
    let cnt = 0;
    let start = 0;
    let end = 0;
    let windowMax = 0;
    while (end < A.length) {
        if (A[end] >= L && A[end] <= R) {
            windowMax = end - start + 1;
        } else if (A[end] > R) {
            windowMax = 0;
            start = end + 1;
        }
        cnt += windowMax;
        end++;
    }
    return cnt;
};

const main = () => {
    let arr = [1, 4, 2, 10, 2, 3, 1, 0, 20],
        k = 4;
    console.log(maxSubarraySum(arr, k)); // 24

    let arr2 = [2, 3, 1, 2, 4, 3],
        k2 = 7;
    let arr3 = [],
        k3 = 100;
    let arr4 = [5, 1, 3, 5, 10, 7, 4, 9, 2, 8],
        k4 = 15;
    console.log(minSubarraySum(arr, k)); // 1
    console.log(minSubarraySum(arr2, k2)); // 2
    console.log(minSubarraySum(arr3, k3)); // 0
    console.log(minSubarraySum(arr4, k4)); // 2
}

main()