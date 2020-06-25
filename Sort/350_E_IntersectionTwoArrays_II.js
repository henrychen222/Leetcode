/**
 * 5.31 evening  6.23 night (second time do complete)
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/
 */

// Accepted --- 104ms 38.1MB 9.96%
const intersect = (nums1, nums2) => {
    if (nums1.length <= nums2.length) {
        return operate(nums1, nums2);
    } else {
        return operate(nums1, nums2);
    }
};

const operate = (short, long) => {
    let elements = [...new Set(short)];
    let map = new Map();
    let res = [];
    for (const element of elements) {
        let occ = Math.min(getFrequency(short, element), getFrequency(long, element));
        map.set(element, occ);
        if (long.includes(element)) {
            res.push(element);
        }
    }
    // console.log(map);
    let rest = [];
    for (const k of map.keys()) {
        if (res.includes(k)) {
            for (let i = 1; i <= map.get(k) - 1; i++) {
                rest.push(k);
            }
        }
    }
    // console.log(rest)
    return res.concat(rest);
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const main = () => {
    let nums1 = [1, 2, 2, 1],
        nums2 = [2, 2];
    let nums1_example2 = [4, 9, 5],
        nums2_example2 = [9, 4, 9, 8, 4]
    let num1_debug1 = [1, 2, 2, 1],
        num2_debug1 = [2];
    let num1_debug2 = [3, 1, 2],
        num2_debug2 = [1, 1];
    let num1_debug3 = [-2147483648, 1, 2, 3],
        num2_debug3 = [1, -2147483648, -2147483648];
    console.log(intersect(nums1, nums2)); // [2,2]
    console.log("")
    console.log(intersect(nums1_example2, nums2_example2)); // [4,9]
    console.log("")
    console.log(intersect(num1_debug1, num2_debug1)); // [2]
    console.log("")
    console.log(intersect(num1_debug2, num2_debug2)); // [1]
    console.log("")
    console.log(intersect(num1_debug3, num2_debug3)); // [1,-2147483648]
};

main()