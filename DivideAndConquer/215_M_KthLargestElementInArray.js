/**
 * 9.9 morning
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 */

// Accepted --- 80ms 78.63%
const findKthLargest = (nums, k) => {
    // console.log(nums.sort((a, b) => b - a));
    return nums.sort((a, b) => b - a)[k - 1];
};

const main = () => {
    let nums = [3, 2, 1, 5, 6, 4],
        k = 2;
    let nums2 = [3, 2, 3, 1, 2, 4, 5, 5, 6],
        k2 = 4;
    console.log(findKthLargest(nums, k));
    console.log(findKthLargest(nums2, k2));
};

main()