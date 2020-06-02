/**
 * https://leetcode.com/problems/intersection-of-two-arrays/
 * 6.1 evening
 */

// Accepted --- 72ms 34.5MB 27.12%
const intersection = (nums1, nums2) => {
    nums1 = removeDuplicate(nums1);
    nums2 = removeDuplicate(nums2);
    let res = [];
    for (const i of nums1) {
        if (nums2.includes(i)) {
            res.push(i);
        }
    }
    return res;
};

const removeDuplicate = (arr) => {
    return [...new Set(arr)];
}

const main = () => {
    let nums1 = [1, 2, 2, 1],
        nums2 = [2, 2];
    let nums1_example2 = [4, 9, 5],
        nums2_example2 = [9, 4, 9, 8, 4]

    console.log(intersection(nums1, nums2)); // [2]
    console.log(intersection(nums1_example2, nums2_example2)); // [9, 4]
};

main()