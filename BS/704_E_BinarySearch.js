/**
 * 6.23 night
 * https://leetcode.com/problems/binary-search/
 */

// Accepted --- 76ms 38.5MB 30.64%
const search2 = (nums, target) => {
    return nums.indexOf(nums.find(x => x == target));
};

// Accepted --- 80ms 38.8MB 85.39%
const search = (nums, target) => {
    return binarySearch(nums, target);
};

const binarySearch = (arr, item) => {
    let low = 0;
    let high = arr.length - 1;
    let mid;
    while (low <= high) {
        mid = low + ((high - low) >> 1);
        if (arr[mid] < item) {
            low = mid + 1;
        } else if (arr[mid] > item) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
};

const main = () => {
    let nums = [-1, 0, 3, 5, 9, 12],
        target = 9;
    let nums2 = [-1, 0, 3, 5, 9, 12],
        target2 = 2;
    console.log(search(nums, target));
    console.log(search(nums2, target2));

    console.log(search2(nums, target));
    console.log(search2(nums2, target2));
}

main()