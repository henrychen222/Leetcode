/*
Created 07/25/20   5:59PM

Read:
https://www.geeksforgeeks.org/window-sliding-technique/
https://medium.com/leetcode-patterns/leetcode-pattern-2-sliding-windows-for-strings-e19af105316b
https://stackoverflow.com/questions/8269916/what-is-sliding-window-algorithm-examples
https://www.educative.io/edpresso/how-to-implement-a-sliding-window-algorithm-in-cpp
https://www.cnblogs.com/cpaulyz/p/12401581.html
https://www.jianshu.com/p/869f6d00d962
https://www.cnblogs.com/RioTian/articles/12425981.html
https://blog.csdn.net/kingmax54212008/article/details/103531887
https://blog.csdn.net/lm278858445/article/details/88189212

https://walkccc.github.io/CS/JavaScript/01/slidingWindow/  used


---- Example Problems
https://www.techiedelight.com/sliding-window-problems/
https://www.geeksforgeeks.org/tag/sliding-window/

Subarray
53    https://leetcode.com/problems/maximum-subarray/
209   https://leetcode.com/problems/minimum-size-subarray-sum/
560   https://leetcode.com/problems/subarray-sum-equals-k/
795  https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/
907  https://leetcode.com/problems/sum-of-subarray-minimums/
918  https://leetcode.com/problems/maximum-sum-circular-subarray/
974  https://leetcode.com/problems/subarray-sums-divisible-by-k/
978  https://leetcode.com/problems/longest-turbulent-subarray/
1493 https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/

Substring
3   https://leetcode.com/problems/longest-substring-without-repeating-characters/
1358  https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/

Subsequence:
1498  https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/   contest 195

*/


/**
 * 07/15/20 morning
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