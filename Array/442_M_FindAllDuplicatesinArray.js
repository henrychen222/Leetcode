/**
 * https://leetcode.com/problems/find-all-duplicates-in-an-array/
 * 7.4 night
 */

// Accepted --- 8684ms 48MB 5.13%
const findDuplicates = (nums) => {
    let res = [];
    for (const i of nums) {
        if (getFrequency(nums, i) == 2 && res.indexOf(i) == -1) {
            res.push(i);
        }
    }
    return res;
};

// Accepted 6472ms 51.4MB 5.13%
const findDuplicates2 = (nums) => {
    let element = [...new Set(nums)];
    let res = [];
    for (const i of element) {
        if (getFrequency(nums, i) == 2 && res.indexOf(i) == -1) {
            res.push(i);
        }
    }
    return res;
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const main = () => {
    let nums = [4, 3, 2, 7, 8, 2, 3, 1];
    console.log(findDuplicates(nums));
    console.log(findDuplicates2(nums));
};

main()