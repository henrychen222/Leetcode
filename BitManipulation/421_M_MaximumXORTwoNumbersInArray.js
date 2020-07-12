/**
 * 7.11 evening
 * https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/
 */

// Accepted --- 360ms 35.1MB 51.35%
const findMaximumXOR = (nums) => {
    let max = Number.MIN_VALUE;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            max = Math.max(max, nums[i] ^ nums[j]);
        }
    }
    return max;
};

const main = () => {
    let nums = [3, 10, 5, 25, 2, 8];
    console.log(findMaximumXOR(nums));
};

main()