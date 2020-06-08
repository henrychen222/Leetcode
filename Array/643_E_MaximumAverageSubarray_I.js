/**
 * 6.5 evening
 * https://leetcode.com/problems/maximum-average-subarray-i/
 */

// need to fix
const findMaxAverage = (nums, k) => {
    let max = Number.MIN_VALUE;
    for (let i = 0; i < nums.length - k; i++) {
        max = Math.max(max, calculate(nums.slice(i, i + k)));
    }
    return max / 4;
};

const calculate = (arr) => {
    let sum = 0;
    for (const i of arr) {
        sum += i;
    }
    return sum;
};

const main = () => {
    let nums = [1, 12, -5, -6, 50, 3],
        k = 4
    let nums_debug1 = [5];
    k_debug1 = 1;
    console.log(findMaxAverage(nums, k));
    console.log(findMaxAverage(nums_debug1, k_debug1));
};

main()