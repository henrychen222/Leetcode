/**
 * 2/2/21 noon
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 */

// Accepted --- 160ms 30.31%
const findMedianSortedArrays = (nums1, nums2) => {
    let res = nums1.concat(nums2);
    res.sort((a, b) => a - b);
    let n = res.length;
    let m = n >> 1;
    return n & 1 ? res[m] : (res[m - 1] + res[m]) / 2;
};

const main = () => {
    let nums1 = [1, 3],
        nums2 = [2];
    let nums1_1 = [1, 2],
        nums2_1 = [3, 4];
    let nums1_2 = [0, 0],
        nums2_2 = [0, 0];
    let nums1_3 = [],
        nums2_3 = [1];
    let nums1_4 = [2],
        nums2_4 = [];
    console.log(findMedianSortedArrays(nums1, nums2));
    console.log(findMedianSortedArrays(nums1_1, nums2_1));
    console.log(findMedianSortedArrays(nums1_2, nums2_2));
    console.log(findMedianSortedArrays(nums1_3, nums2_3));
    console.log(findMedianSortedArrays(nums1_4, nums2_4));
};

main()