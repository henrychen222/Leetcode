/**
 * 6.4 evening
 * https://leetcode.com/problems/non-decreasing-array/
 */

// need to fix
const checkPossibility = (nums) => {
    let numsCopy = nums;
    for (let i = 0; i < numsCopy.length; i++) {
         if (isAscending(numsCopy.splice(i, 1))) {
             return true;
         }
         numsCopy = nums;
    }
    return false;
};

const isAscending = (arr) => {
    arr = arr.splice(arr.length - 1 , 1);
    return arr.every((x, i) => {
        return i === 0 || x >= arr[i - 1];
    });
};

const main = () => {
    let nums = [4, 2, 3];
    let nums2 = [4, 2, 1];
    console.log(checkPossibility(nums));
    console.log(checkPossibility(nums2));
};

main()