/**
 * 04/03/21 evening
 * https://leetcode.com/contest/weekly-contest-235/problems/minimum-absolute-sum-difference/
 */

const pr = console.log;
const mi = Math.min;
const abs = Math.abs;

// don't know
const minAbsoluteSumDiff = (a1, a2) => {
   let n = a1.length;
};

const main = () => {
    let nums1 = [1, 7, 5], nums2 = [2, 3, 5];
    let nums1_2 = [2, 4, 6, 8, 10], nums2_2 = [2, 4, 6, 8, 10];
    let nums1_3 = [1, 10, 4, 4, 2, 7], nums2_3 = [9, 3, 5, 1, 7, 4];
    pr(minAbsoluteSumDiff(nums1, nums2));
    pr(minAbsoluteSumDiff(nums1_2, nums2_2));
    pr(minAbsoluteSumDiff(nums1_3, nums2_3));
};

main()