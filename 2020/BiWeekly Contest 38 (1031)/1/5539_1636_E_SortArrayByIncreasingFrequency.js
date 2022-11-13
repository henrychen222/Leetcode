/**
 * 10.31 morning
 * https://leetcode.com/contest/biweekly-contest-38/problems/sort-array-by-increasing-frequency/
 */

// Accepted
const frequencySort = (nums) => {
    let record = getRecord(nums);
    // console.log(record);
    nums.sort((a, b) => {
        if (record.get(a) == record.get(b)) return b - a;
        return record.get(a) - record.get(b);
    });
    return nums;
};

const getRecord = (s) => {
    let map = new Map();
    for (const i of s) {
        if (map.has(i)) {
            map.set(i, map.get(i) + 1);
        } else {
            map.set(i, 1);
        }
    }
    return map;
};

const main = () => {
    let nums = [1,1,2,2,2,3];
    let nums2 = [2,3,1,3,2];
    let nums3 = [-1,1,-6,4,5,-6,1,4,1];
    console.log(frequencySort(nums));
    console.log(frequencySort(nums2));
    console.log(frequencySort(nums3));
};

main()