/**
 * 7.18 night
 * https://leetcode.com/problems/find-the-duplicate-number/
 * 
 * similar to 442
 */

// Accepted --- 1252ms 39.4MB 5.05%
const findDuplicate = (nums) => {
    let element = [...new Set(nums)];
    for (const e of element) {
        if (nums.indexOf(e) != nums.lastIndexOf(e)) {
            return e;
        }
    }
};

const main = () => {
    let nums = [1, 3, 4, 2, 2];
    let nums2 = [3, 1, 3, 4, 2];
    console.log(findDuplicate(nums));
    console.log(findDuplicate(nums2));
};

main()