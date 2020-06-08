/**
 * 6.5 evening
 * https://leetcode.com/problems/find-pivot-index/
 */

// Accepted --- 1084ms 43MB 5.02%
const pivotIndex = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        let left = nums.slice(0, i + 1);
        let right = nums.slice(i, nums.length);
        if (sum(left) == sum(right)) {
            return i;
        }
    }
    return -1;
};

const sum = (arr) => {
    let sum = 0;
    for (const i of arr) {
        sum += i;
    }
    return sum;
};

const main = () => {
    let nums = [1, 7, 3, 6, 5, 6];
    let nums2 = [1, 2, 3];
    let debug1 = [-1, -1, -1, -1, -1, 0];
    console.log(pivotIndex(nums));
    console.log("");
    console.log(pivotIndex(nums2));
    console.log("");
    console.log(pivotIndex(debug1));
};

main()