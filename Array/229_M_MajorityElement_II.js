/**
 * 7.13 night
 * https://leetcode.com/problems/majority-element-ii/
 */

// Accepted --- 96ms 38.5MB 22.78%
const majorityElement = (nums) => {
    let res = [];
    let element = [...new Set(nums)];
    for (const e of element) {
        if (getFrequency(nums, e) > nums.length / 3) {
            res.push(e);
        }
    }
    return res;
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const main = () => {
    let nums = [3, 2, 3];
    let nums2 = [1, 1, 1, 3, 3, 2, 2, 2];
    console.log(majorityElement(nums));
    console.log(majorityElement(nums2));
};

main()