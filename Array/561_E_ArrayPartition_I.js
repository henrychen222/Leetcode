/**
 * 6.3 night
 * https://leetcode.com/problems/array-partition-i/
 */

// Accepted --- 120ms 40.8MB 45.72%
const arrayPairSum = (nums) => {
    nums = nums.sort((a, b) => a - b);
    let res = 0;
    for (let i = 0; i < nums.length; i += 2) {
        let pair = Math.min(nums[i], nums[i + 1]);
        res += pair;
    }
    return res;
};

const main = () => {
    let nums = [1, 4, 3, 2];
    console.log(arrayPairSum(nums));
};

main()