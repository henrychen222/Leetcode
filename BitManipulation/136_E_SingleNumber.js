/**
 * 6.17 evening
 * https://leetcode.com/problems/single-number/
 */

// Accepted --- 1156ms 41.2MB 5.10%
const singleNumber = (nums) => {
    for (const i of nums) {
        if (nums.filter(x => x == i).length == 1) return i;
    }
};

const main = () => {
    let nums = [2, 2, 1];
    let nums2 = [4, 1, 2, 1, 2];
    console.log(singleNumber(nums));
    console.log(singleNumber(nums2));
};

main()