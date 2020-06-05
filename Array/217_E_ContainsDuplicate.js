/**
 * 6.4 night
 * https://leetcode.com/problems/contains-duplicate/
 */

// Accepted --- 84ms 38.5MB 40.46%
const containsDuplicate = (nums) => {
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1]) {
            return true;
        }
    }
    return false;
};

const main = () => {
    let nums = [1, 2, 3, 1];
    let nums2 = [1, 2, 3, 4];
    let nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

    console.log(containsDuplicate(nums));
    console.log(containsDuplicate(nums2));
    console.log(containsDuplicate(nums3));
};

main()