/**
 * 7.12 evening  7.13 evening
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 */

// Accepted --- 124ms 35.7MB 5.88%
const search = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            return i;
        }
    }
    return -1;
};

// Accpeted --- 84ms 33.7MB 22.17%
const search_bs = (arr, item) => {
    let origin = [...arr];
    arr.sort((a, b) => a - b);
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = left + ((right - left) >> 1);
        if (item == arr[mid]) {
            return origin.indexOf(item);
        } else if (item < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
};

const main = () => {
    let nums = [4, 5, 6, 7, 0, 1, 2],
        target = 0;
    let nums2 = [4, 5, 6, 7, 0, 1, 2],
        target2 = 3;
    console.log(search(nums, target));
    console.log(search(nums2, target2));

    console.log(search_bs(nums, target));
    console.log(search_bs(nums2, target2));
}

main()