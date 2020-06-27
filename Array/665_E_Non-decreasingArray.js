/**
 * 6.4 evening  6.26 redo fixed
 * https://leetcode.com/problems/non-decreasing-array/
 */

// Accepted --- 1036ms 43.4MB 5.20%
const checkPossibility = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        let arr = eraseOne(nums, i);
        if (isAscending(arr)) {
            return true;
        }
    }
    return false;
};

const eraseOne = (arr, item) => {
    return arr.slice(0, item).concat(arr.slice(item + 1, arr.length));
};

const isAscending = (arr) => {
    return arr.every((x, i) => {
        return i === 0 || x >= arr[i - 1];
    });
};

const main = () => {
    let nums = [4, 2, 3];
    let nums2 = [4, 2, 1];
    let debug1 = [1, 1, 1];
    console.log(checkPossibility(nums));
    console.log(checkPossibility(nums2));
    console.log(checkPossibility(debug1)); // true
};

main()