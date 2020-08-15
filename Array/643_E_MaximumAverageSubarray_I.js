/**
 * 6.5 evening 8.13 night fixed
 * https://leetcode.com/problems/maximum-average-subarray-i/
 */

// Accepted --- 160ms 48.9MB 36.22%
const findMaxAverage_refine3 = (nums, k) => {
    let stack = nums.slice(0, k);
    let beginSum = stack.reduce((acc, cur) => acc + cur);
    let max = beginSum;
    let sumRecord = [beginSum];
    for (let i = k; i < nums.length; i++) {
        stack.push(nums[i]);
        let sum = sumRecord[sumRecord.length - 1] + nums[i] - stack[0];
        sumRecord.push(sum);
        stack.shift();
        max = Math.max(max, sum);
    }
    return max / k;
};

// Accepted --- 176ms 49.3MB 33.51%
const findMaxAverage_refine2 = (nums, k) => {
    let stack = nums.slice(0, k);
    let beginSum = calculate(stack);
    let max = beginSum;
    let sumRecord = [beginSum];
    for (let i = k; i < nums.length; i++) {
        stack.push(nums[i]);
        let sum = sumRecord[sumRecord.length - 1] + nums[i] - stack[0];
        sumRecord.push(sum);
        stack.shift();
        max = Math.max(max, sum);
    }
    return max / k;
};

// Accepted --- 2164ms 49.2MB 10.81%
const findMaxAverage_refine = (nums, k) => {
    let stack = nums.slice(0, k);
    let max = calculate(stack);
    for (let i = k; i < nums.length; i++) {
        stack.push(nums[i]);
        stack.shift();
        max = Math.max(max, calculate(stack));
    }
    return max / k;
};

// Accepted --- 3124ms 55.1MB  5.41% (origin code, fixed)
const findMaxAverage = (nums, k) => {
    // let max = -10000;
    // let max = Number.MIN_VALUE;
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < nums.length; i++) {
        let tmp = nums.slice(i, i + k);
        if (tmp.length == k) {
            max = Math.max(max, calculate(tmp));
            // if (calculate(tmp) > max) max = calculate(tmp);
        }
    }
    return max / k;
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
        k = 4;
    let nums_debug1 = [5],
        k_debug1 = 1;
    let nums_debug2 = [-1],
        k_debug2 = 1;
    let nums_debug3 = [8860, -853, 6534, 4477, -4589, 8646, -6155, -5577, -1656, -5779, -2619, -8604, -1358, -8009, 4983, 7063, 3104, -1560, 4080, 2763, 5616, -2375, 2848, 1394, -7173, -5225, -8244, -809, 8025, -4072, -4391, -9579, 1407, 6700, 2421, -6685, 5481, -1732, -8892, -6645, 3077, 3287, -4149, 8701, -4393, -9070, -1777, 2237, -3253, -506, -4931, -7366, -8132, 5406, -6300, -275, -1908, 67, 3569, 1433, -7262, -437, 8303, 4498, -379, 3054, -6285, 4203, 6908, 4433, 3077, 2288, 9733, -8067, 3007, 9725, 9669, 1362, -2561, -4225, 5442, -9006, -429, 160, -9234, -4444, 3586, -5711, -9506, -79, -4418, -4348, -5891],
        k_debug3 = 93;
    let nums_debug4 = [0, 4, 0, 3, 2],
        k_debug4 = 1;
    console.log(findMaxAverage(nums, k));
    console.log(findMaxAverage(nums_debug1, k_debug1)); // 5
    console.log(findMaxAverage(nums_debug2, k_debug2)); // -1
    console.log(findMaxAverage(nums_debug3, k_debug3)); // -594.58065
    console.log(findMaxAverage(nums_debug4, k_debug4)); // 4

    console.log("")
    console.log(findMaxAverage_refine(nums, k));
    console.log(findMaxAverage_refine(nums_debug1, k_debug1));
    console.log(findMaxAverage_refine(nums_debug2, k_debug2));
    console.log(findMaxAverage_refine(nums_debug3, k_debug3));
    console.log(findMaxAverage_refine(nums_debug4, k_debug4));

    console.log("")
    console.log(findMaxAverage_refine2(nums, k));
    console.log(findMaxAverage_refine2(nums_debug1, k_debug1));
    console.log(findMaxAverage_refine2(nums_debug2, k_debug2));
    console.log(findMaxAverage_refine2(nums_debug3, k_debug3));
    console.log(findMaxAverage_refine2(nums_debug4, k_debug4));

    console.log("")
    console.log(findMaxAverage_refine3(nums, k));
    console.log(findMaxAverage_refine3(nums_debug1, k_debug1));
    console.log(findMaxAverage_refine3(nums_debug2, k_debug2));
    console.log(findMaxAverage_refine3(nums_debug3, k_debug3));
    console.log(findMaxAverage_refine3(nums_debug4, k_debug4));
};

main()