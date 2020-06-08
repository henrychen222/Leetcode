/**
 * 6.5 evening (first time did in 08/2018)
 * https://leetcode.com/problems/longest-continuous-increasing-subsequence/
 */

// need to fix
const findLengthOfLCIS = (nums) => {
    let max = 1;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j - 1] < nums[j] && nums[j] < nums[j + 1]) {
                max = Math.max(max, nums.slice(i, j).length);
            }
        }
    }
    return max;
};

// time limit exceed  23 / 36 test cases passed.
const findLengthOfLCIS1 = (nums) => {
    if (isAscending(nums)) return nums.length;
    let max = 1;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let sub = nums.slice(i, j + 1);
            if (isAscending(sub)) {
                // console.log(sub);
                max = Math.max(max, sub.length);
            }
        }
    }
    return max;
};

const isAscending = (arr) => {
    return arr.every((x, i) => {
        return i === 0 || x > arr[i - 1];
    });
};

const main = () => {
    let nums = [1, 3, 5, 4, 7];
    let nums2 = [2, 2, 2, 2, 2];
    let debug1 = [1, 3, 5, 7];
    let debug2 = [1, 3, 5, 4, 2, 3, 4, 5];
    console.log(findLengthOfLCIS(nums));
    console.log(findLengthOfLCIS(nums2));
    console.log(findLengthOfLCIS(debug1));
    console.log(findLengthOfLCIS(debug2));
};

main()