/**
 * 11/09/21 evening
 * example: https://leetcode.com/problems/find-in-mountain-array/
 * 
 * reference: https://www.geeksforgeeks.org/search-for-an-element-in-a-mountain-array/
 */

const binarysearchMountainArray = (x, a) => {
    let pIdx = peak(a);
    let res = -1;
    if (x >= a[0] && x <= a[pIdx]) res = subarray_in(x, 0, pIdx, a);
    return res == -1 ? res = subarray_de(x, pIdx + 1, a.length - 1, a) : res;
};

const peak = (a) => { // find peak idx
    let low = 0, high = a.length - 1;
    while (low < high) {
        let mid = parseInt((low + high) / 2);
        a[mid] < a[mid + 1] ? low = mid + 1 : high = mid;
    }
    return low;
};

const subarray_in = (x, low, high, a) => { // binary search in an ascending order subarray [0, peak]
    while (low <= high) {
        let mid = parseInt((low + high) / 2);
        if (x == a[mid]) {
            return mid;
        } else if (x > a[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
};

const subarray_de = (x, low, high, a) => { // binary search in an descending order subarray [0, n-1]
    while (low <= high) {
        let mid = parseInt((low + high) / 2);
        if (x == a[mid]) {
            return mid;
        } else if (x > a[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
};

const pr = console.log;
const main = () => {
    let x = 3;
    let a = [1, 2, 3, 4, 5, 3, 1];
    let x2 = 3;
    let a2 = [0, 1, 2, 4, 2, 1];
    pr(binarysearchMountainArray(x, a));
    pr(binarysearchMountainArray(x2, a2));
};

main()