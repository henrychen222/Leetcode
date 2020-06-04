/**
 * 6.3 evening
 * https://leetcode.com/problems/two-sum/
 */

// Accepted --- 132ms 36.7MB 26.81%
const twoSum = (nums, target) => {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                res.push(i);
                res.push(j);
            }
        }
    }
    return res;
};

const main = () => {
    let nums = [2, 7, 11, 15],
        target = 9;
    console.log(twoSum(nums, target));
};

main()