/**
 * 7.13 night
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 */

// Accepted --- 100ms 35MB 9.74%
const searchRange = (nums, target) => {
    let first = nums.indexOf(target);
    let last = nums.lastIndexOf(target);
    if (first == -1 && last == -1) {
        return [-1, -1];
    }
    return [first, last];
};

const searchRange_refine = (nums, target) => {
    let first = nums.indexOf(target);
    if (first == -1) {
        return [-1, -1];
    }
    let last = nums.lastIndexOf(target);
    return [first, last];
};

// Accepted --- 100ms 37.3MB 9.74%	
const searchRange2 = (nums, target) => {
    let first, last;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            first = i;
            break;
        }
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] == target) {
            last = i;
            break;
        }
    }
    if (first == undefined) {
        return [-1, -1];
    }
    return [first, last];
};

const main = () => {
    let nums = [5, 7, 7, 8, 8, 10],
        target = 8;
    let nums2 = [5, 7, 7, 8, 8, 10],
        target2 = 6;
    console.log(searchRange(nums, target));
    console.log(searchRange(nums2, target2));

    console.log(searchRange_refine(nums, target));
    console.log(searchRange_refine(nums2, target2));
    
    console.log(searchRange2(nums, target));
    console.log(searchRange2(nums2, target2));
};

main()