/**
 * 7.6 evening
 * https://leetcode.com/problems/sort-colors/
 */

// Accepted --- 60ms 33.8MB 92.09%
const sortColors = (nums) => {
    nums.sort((a, b) => a - b);
    console.log(nums);
};

const main = () => {
    let nums = [2,0,2,1,1,0];
    sortColors(nums)
};

main()