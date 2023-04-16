/**
 * https://leetcode.com/contest/weekly-contest-191/problems/maximum-product-of-two-elements-in-an-array/
 * 5.30 evening
 */
const maxProduct = (nums) => {
    nums.sort((a, b) => b - a);
    let max = Number.MIN_VALUE;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            let target = (nums[i] - 1) * (nums[j] - 1);
            max = Math.max(max, target);
            // console.log(max);
        }
    }
    return max;
};

const main = () => {
    let nums = [3, 4, 5, 2];
    let nums2 = [1, 5, 4, 5];
    let nums3 = [3, 7];

    console.log(maxProduct(nums));
    console.log(maxProduct(nums2));
    console.log(maxProduct(nums3));
};

main()