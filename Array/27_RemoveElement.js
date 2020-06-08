/**
 * 6.5 night
 * https://leetcode.com/problems/remove-element/
 * 
 * NOTE: in-place {void}
 */

// Accepted --- 72ms 34.1MB 21.79%
const removeElement = (nums, val) => {
    let res = [];
    for (const i of nums) {
        if (i != val) {
            res.push(i);
        }
    }
    // console.log(res);
    nums.splice(0, nums.length);
    for (const i of res) {
        nums.push(i);
    }
    console.log(nums);
};

const main = () => {
    let nums = [3, 2, 2, 3],
        val = 3;
    let nums2 = [0, 1, 2, 2, 3, 0, 4, 2],
        val2 = 2;
    removeElement(nums, val);
    removeElement(nums2, val2);
};

main();