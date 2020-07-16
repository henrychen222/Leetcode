/**
 * 7.15 evening
 * https://leetcode.com/problems/summary-ranges/
 */

// Accepted --- 76ms 36MB 23.27%
const findPeakElement = (nums) => {
    if (nums.length == 1 || isDescending(nums)) return 0;
    if (nums.length == 2) return nums[0] > nums[1] ? 0 : 1;
    if (isAscending(nums)) return nums.length - 1;
    if (nums.length == 3 && nums[1] < nums[0] && nums[1] < nums[2]) return 0;
    for (let i = 2; i < nums.length; i++) {
        if (nums[i - 1] > nums[i - 2] && nums[i - 1] > nums[i]) {
            return i - 1;
        }
    }
};

const isAscending = (arr) => {
    return arr.every((x, i) => {
        return i === 0 || x > arr[i - 1];
    });
};

const isDescending = (arr) => {
    return arr.every((x, i) => {
        return i === 0 || x < arr[i - 1];
    });
};

const main = () => {
    let nums = [1, 2, 3, 1];
    let nums2 = [1, 2, 1, 3, 5, 6, 4];
    let debug1 = [1];
    let debug2 = [3, 2, 1];
    let debug3 = [2, 1, 2];
    console.log(findPeakElement(nums));
    console.log(findPeakElement(nums2));
    console.log(findPeakElement(debug1)); // 0
    console.log(findPeakElement(debug2)); // 0
    console.log(findPeakElement(debug3)); // 0
};

main()