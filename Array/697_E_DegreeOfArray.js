/**
 * 6.8 evening
 * https://leetcode.com/problems/degree-of-an-array/
 */

// don't know how to do
const findShortestSubArray = (nums) => {
    const allItem = [...new Set(nums)];
    let map = new Map();
    for (const item of allItem) {
        map.set(item, getFrequency(nums, item));
    }
    console.log(map);
    nums.sort((a, b) => getFrequency(nums, b) - getFrequency(nums, a));
    console.log(nums);
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const main = () => {
    let nums = [1, 2, 2, 3, 1];
    let nums2 = [1, 2, 2, 3, 1, 4, 2];
    console.log(findShortestSubArray(nums));
    console.log(findShortestSubArray(nums2));
};

main()