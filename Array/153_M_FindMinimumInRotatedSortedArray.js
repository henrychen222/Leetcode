/**
 * 7.16 evening
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 */

// Accepted --- 88ms 33.7MB 17.53%
const findMin = (nums) => {
    return nums.sort((a, b) => a - b)[0];
};

// Accepted --- 76ms 34.1MB 32.67%
const findMin2 = (nums) => {
    return Math.min.apply(Math, nums);
};

// Accepted --- 80ms 33.9MB 27.15%
const findMin3 = (nums) => {
    let min = Number.MAX_VALUE;
    for (const i of nums) {
        if (i < min) {
            min = i;
        }
    }
    return min;
};

const main = () => {
    let nums = [3, 4, 5, 1, 2];
    let nums2 = [4, 5, 6, 7, 0, 1, 2];
    console.log(findMin(nums));
    console.log(findMin(nums2));

    console.log(findMin2(nums));
    console.log(findMin2(nums2));

    console.log(findMin3(nums));
    console.log(findMin3(nums2));
};

main()