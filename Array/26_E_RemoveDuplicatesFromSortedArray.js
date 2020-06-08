/**
 * 6.5 evening (first time did in 08/2018)
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * 
 * NOTE: modifying the input array in-place 
 */

// Accepted --- 88ms 39.4MB 42.16%
const removeDuplicates = (nums) => {
    let res = [...new Set(nums)];
    nums.splice(0, nums.length);
    for (const i of res) {
        nums.push(i);
    }
    console.log(nums);
};

const main = () => {
    let nums = [1, 1, 2];
    let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    let nums_debug1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    removeDuplicates(nums);
    removeDuplicates(nums2);
    removeDuplicates(nums_debug1);
};

main()