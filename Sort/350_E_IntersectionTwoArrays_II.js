/**
 * 5.31 evening
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/
 */

const intersect = (nums1, nums2) => {
    let res = [];
    // if (nums1.length <= nums2.length) {
    //     for (const i of nums1) {
    //         if (nums2.includes(i)) {
    //             res.push(i);
    //         }
    //     }
    // } else {
    //     for (const i of nums2) {
    //         if (nums1.includes(i)) {
    //             res.push(i);
    //         }
    //     }
    // }

    nums2.some(x => arr2.includes(r))
    nums2.some
    for (let i = 0; i < nums1.length; i++) {
        if (arr) {
            nums1.splice(i, 1);
        }
    }
    // for (let i = 0; i < nums2.length; i++) {
    //     if (!nums1.includes(nums2[i])) {
    //         nums2.splice(i, 1)
    //     }
    // }
    console.log(nums1);
    // console.log(nums2);

    if (nums1.length <= nums2.length) {
        return nums1;
    } else {
        return nums2;
    }
};

const main = () => {
    let nums1 = [1, 2, 2, 1],
        nums2 = [2, 2];
    let nums1_example2 = [4, 9, 5],
        nums2_example2 = [9, 4, 9, 8, 4]
    // console.log(intersect(nums1, nums2)); // [2,2]
    // console.log("")
    // console.log(intersect(nums1_example2, nums2_example2)); // [4,9]

    let num1_debug1 = [1, 2, 2, 1],
        num2_debug1 = [2];
    let num1_debug2 = [3, 1, 2],
        num2_debug2 = [1, 1];
    let num1_debug3 = [-2147483648, 1, 2, 3],
        num2_debug3 = [1, -2147483648, -2147483648];
    // console.log("")
    // console.log(intersect(num1_debug1, num2_debug1)); // [2]
    // console.log("")
    // console.log(intersect(num1_debug2, num2_debug2)); // [1]
    // console.log("")
    console.log(intersect(num1_debug3, num2_debug3)); // [1,-2147483648]
};

main()