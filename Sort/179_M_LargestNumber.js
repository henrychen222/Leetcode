/**
 * 7.7 morning
 * https://leetcode.com/problems/largest-number/
 */

// need to fix
const largestNumber = (nums) => {
    let arr = nums.join("").split("").map(x => Number(x));
    arr.sort((a, b) => b - a);
    console.log(arr);
    return arr.join("");
};

const main = () => {
    let nums = [10, 2];
    let nums2 = [3, 30, 34, 5, 9];
    console.log(largestNumber(nums));
    console.log(largestNumber(nums2));
};

main()