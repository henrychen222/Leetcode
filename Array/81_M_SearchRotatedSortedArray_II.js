/**
 * 7.13 evening
 * https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
 */

// Accepted --- 80ms 37.4MB 38.53%
const search = (nums, target) => {
    for (const i of nums) {
        if (i == target) {
            return true;
        }
    }
    return false;
};

// Accepted --- 88ms 37.3MB 22.38%
const search_bs = (arr, item) => {
    arr.sort((a, b) => a - b);
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = left + ((right - left) >> 1);
        if (item == arr[mid]) {
            return true;
        } else if (item < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
};

const main = () => {
    let nums = [2, 5, 6, 0, 0, 1, 2],
        target = 0;
    let nums2 = [2, 5, 6, 0, 0, 1, 2],
        target2 = 3;
    console.log(search(nums, target));
    console.log(search(nums2, target2));

    console.log(search_bs(nums, target));
    console.log(search_bs(nums2, target2));
};

main()