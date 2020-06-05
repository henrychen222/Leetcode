/**
 * 6.4 evening
 * https://leetcode.com/problems/third-maximum-number/
 */

// Accepted --- 68ms 37.6MB 54.41%
const thirdMax = (nums) => {
    nums = [...new Set(nums)];
    nums = nums.sort((a, b) => b - a);
    if (nums.length < 3) {
        return nums[0];
    }
    return nums[2];
};

const main = () => {
    let nums = [3, 2, 1];
    let nums2 = [1, 2];
    let nums3 = [2, 2, 3, 1];

    console.log(thirdMax(nums));
    console.log(thirdMax(nums2));
    console.log(thirdMax(nums3));
};

main()