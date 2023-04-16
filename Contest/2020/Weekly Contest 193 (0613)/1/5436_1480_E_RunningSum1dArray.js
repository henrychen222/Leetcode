/**
 * 6.13 evening
 * https://leetcode.com/contest/weekly-contest-193/problems/running-sum-of-1d-array/
 */

const runningSum = (nums) => {
    let res = [];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        res.push(sum += nums[i])
    }
    return res;
};

const main = () => {
    let nums = [1, 2, 3, 4];
    let nums2 = [1, 1, 1, 1, 1];
    let nums3 = [3, 1, 2, 10, 1];
    console.log(runningSum(nums));
    console.log(runningSum(nums2));
    console.log(runningSum(nums3));
};

main()