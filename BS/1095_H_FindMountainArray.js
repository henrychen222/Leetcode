/**
 * 11/06/21 night start   11/09/21 evening complete
 * https://leetcode.com/problems/find-in-mountain-array/
 * 
 * reference: https://www.geeksforgeeks.org/search-for-an-element-in-a-mountain-array/
 */

// Accepted --- 76ms 58.18%
const findInMountainArray = (t, a) => {
    return binarysearch(t, a);
};

const binarysearch = (x, a) => {
    let pIdx = peak(a);
    let res = -1;
    if (x >= a.get(0) && x <= a.get(pIdx)) res = subarray_in(x, 0, pIdx, a);
    return res == -1 ? res = subarray_de(x, pIdx + 1, a.length() - 1, a) : res;
};

// find peak idx
const peak = (a) => {
    let low = 0, high = a.length() - 1;
    while (low < high) {
        let mid = parseInt((low + high) / 2);
        a.get(mid) < a.get(mid + 1) ? low = mid + 1 : high = mid;
    }
    return high;
};

// binary search in an ascending order subarray [0, peak]
const subarray_in = (x, low, high, a) => {
    while (low <= high) {
        let mid = parseInt((low + high) / 2), midItem = a.get(mid);
        if (x == midItem) {
            return mid;
        } else if (x > midItem) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
};

// binary search in an descending order subarray [0, n-1]
const subarray_de = (x, low, high, a) => {
    while (low <= high) {
        let mid = parseInt((low + high) / 2), midItem = a.get(mid);
        if (x == midItem) {
            return mid;
        } else if (x > midItem) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
};

