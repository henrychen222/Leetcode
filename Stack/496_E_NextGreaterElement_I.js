/**
 * 6.24 night
 * https://leetcode.com/problems/next-greater-element-i/
 */

// Accepted --- 80ms 42.3MB 37.22%
const nextGreaterElement = (nums1, nums2) => {
    let res = [];
    for (const i of nums1) {
        let idx = nums2.indexOf(i);
        let push;
        for (const j of nums2.slice(idx, nums2.length)) {
            if (j > i) {
                push = j;
                break;
            } else {
                push = -1;
            }
        }
        res.push(push);
    }
    return res;
};

const main = () => {
    let nums1 = [4, 1, 2],
        nums2 = [1, 3, 4, 2];
    let nums1_2 = [2, 4],
        nums2_2 = [1, 2, 3, 4];
    let nums1_debug1 = [1, 3, 5, 2, 4],
        nums2_debug2 = [6, 5, 4, 3, 2, 1, 7]
    console.log(nextGreaterElement(nums1, nums2)); // [-1,3,-1]
    console.log(nextGreaterElement(nums1_2, nums2_2)); // [3,-1]
    console.log(nextGreaterElement(nums1_debug1, nums2_debug2)); // [7,7,7,7,7]
};

main()