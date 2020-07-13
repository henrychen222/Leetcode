/**
 * 7.11 morning
 * https://leetcode.com/contest/biweekly-contest-30/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/
 * https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/discuss/730769/javascript-solution
 */

// Accepted --- 144ms 45MB 50.00%
const minDifference_uwi = (nums) => {
    let n = nums.length;
    nums.sort((a, b) => a - b);
    if (nums.length <= 4) return 0;
    let min = Number.MAX_VALUE;
    for (let i = 0; i + n - 4 < n; i++) {
        min = Math.min(min, nums[i + n - 4] - nums[i]);
    }
    return min;
};

// Accepted --- 148ms 44.9MB 50.00%
const minDifference_zerotrac2 = (nums) => {
    let n = nums.length;
    nums.sort((a, b) => a - b);
    if (nums.length <= 4) return 0;
    return Math.min(Math.min(nums[n - 1] - nums[3], nums[n - 2] - nums[2]), Math.min(nums[n - 3] - nums[1], nums[n - 4] - nums[0]));
};


// don't understand the question at first
const minDifference = (nums) => {
    nums.sort((a, b) => a - b);
    console.log(nums);
    let data1 = nums.slice(0, nums.length - 3);
    let data2 = nums.slice(1, nums.length - 2);
    let data3 = nums.slice(2, nums.length - 1);
    let data4 = nums.slice(3, nums.length);
    console.log(data1, data2, data3, data4);
    console.log(getminDiff(data1), getminDiff(data2), getminDiff(data3), getminDiff(data4));
    return Math.min(Math.min(getminDiff(data1), getminDiff(data2)), Math.min(getminDiff(data3), getminDiff(data4)));
};

const getminDiff = (nums) => {
    let min = Number.MAX_VALUE;
    if (nums.length == 1) return nums[0]
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let diff = nums[j] - nums[i];
            min = Math.min(diff, min);
        }
    }
    return min;
};

const main = () => {
    let nums = [5, 3, 2, 4];
    let nums2 = [1, 5, 0, 10, 14];
    let nums3 = [6, 6, 0, 1, 1, 4, 6];
    let nums4 = [1, 5, 6, 14, 15];
    // console.log(minDifference(nums));
    // console.log(minDifference(nums2));
    // console.log(minDifference(nums3));
    // console.log(minDifference(nums4));

    console.log(minDifference_uwi(nums));
    console.log(minDifference_uwi(nums2));
    console.log(minDifference_uwi(nums3));
    console.log(minDifference_uwi(nums4));

    console.log("")
    console.log(minDifference_zerotrac2(nums));
    console.log(minDifference_zerotrac2(nums2));
    console.log(minDifference_zerotrac2(nums3));
    console.log(minDifference_zerotrac2(nums4));
};

main()