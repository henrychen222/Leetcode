/**
 * 7.16 afternoon
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
 */

// Accepted --- 104ms 41.2MB 20.87%
const removeDuplicates = (nums) => {
    let element = [...new Set(nums)];
    let data = [];
    for (const e of element) {
        let freq = getFrequency(nums, e);
        if (freq > 2) {
            data.push([e, 2]);
        } else {
            data.push([e, freq]);
        }
    }
    let res = [];
    for (const d of data) {
        for (let i = 1; i <= d[1]; i++) {
            res.push(d[0]);
        }
    }
    nums.splice(0, nums.length);
    for (const r of res) {
        nums.push(r);
    }
    console.log(nums);
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const main = () => {
    let nums = [1, 1, 1, 2, 2, 3];
    let nums2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
    removeDuplicates(nums);
    removeDuplicates(nums2);
};

main()