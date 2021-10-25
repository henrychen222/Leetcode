//////////////////////// from treeset.js //////////////////////////////
// c++ vector upper_bound lower_bound
/**
 * Example:
 * https://leetcode.com/problems/online-majority-element-in-subarray/
 * https://leetcode.com/problems/online-election/
 */
function Bisect() {
    return { insort_right, insort_left, bisect_left, bisect_right }
    function insort_right(a, x, lo = 0, hi = null) {
        lo = bisect_right(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_right(a, x, lo = 0, hi = null) { // > upper_bound
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = parseInt((lo + hi) / 2);
            x < a[mid] ? hi = mid : lo = mid + 1;
        }
        return lo;
    }
    function insort_left(a, x, lo = 0, hi = null) {
        lo = bisect_left(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_left(a, x, lo = 0, hi = null) { // >= lower_bound
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            // let mid = lo + hi >> 1; // works for 10^9
            let mid = parseInt((lo + hi) / 2);
            a[mid] < x ? lo = mid + 1 : hi = mid;
        }
        return lo;
    }
}

/////////////////////////////////////////////////////////////////////////////////////////
// 06/23/21 evening  only for sorted array
const binarySearch_refine = (arr, item) => {
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

// from book https://github.com/henrychen222/Stevens-CS570/blob/master/Textbook/Learning%20Javascript%20Data%20Structures%20and%20Algorithms.pdf
const binarySearch = (arr, item) => {
    let low = 0;
    let high = arr.length - 1;
    let mid;
    let tmp;
    while (low <= high) {
        mid = low + ((high - low) >> 1);
        tmp = arr[mid];
        if (tmp < item) { //lower, item is on the right
            low = mid + 1;
        } else if (tmp > item) { //higher, item is on the left
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
};

const linearSearch = (arr, item) => {
    for (let i = 0; i < arr.length; i++) {
        if (item === arr[i]) {
            return i;
        }
    }
};

//////////////////////////////////////////////////////////////////////////////////////
// 07/12/21 evening 07/12/21 evening
// https://www.youtube.com/watch?v=P3YID7liBug
const binarySearch_unsortedArr = (arr, item) => {
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

/////////////////////////////////// Test //////////////////////////////////////////
const pr = console.log;
const main = () => {
    let arr = [1, 3, 5, 7, 8, 9];
    let x = 5;
    let arr2 = [4, 5, 6, 7, 0, 1, 2],
        x2 = 0;
    let arr3 = [4, 5, 6, 7, 0, 1, 2],
        x3 = 3;

    console.log(binarySearch_unsortedArr(arr, x)); // 2
    console.log(binarySearch_unsortedArr(arr2, x2)); // 4
    console.log(binarySearch_unsortedArr(arr3, x3)); //  -1

    console.log(binarySearch(arr, x));
    console.log(binarySearch_refine(arr, x));
    console.log(linearSearch(arr, x));

    lower_upper_bound_test();
}

const lower_upper_bound_test = () => {
    // c++ vector upper_bound (>) test https://www.geeksforgeeks.org/upper_bound-in-cpp/
    pr()
    let bisect = new Bisect();
    let a = [10, 20, 30, 30, 40, 50];
    let a2 = [10, 20, 30, 40, 50];
    pr(bisect.bisect_right(a, 30)) // 4
    pr(bisect.bisect_right(a2, 45)) // 4
    pr(bisect.bisect_right(a2, 60)) // 5

    // c++ vector lower_bound (>=) test https://www.geeksforgeeks.org/lower_bound-in-cpp/
    pr()
    pr(bisect.bisect_left(a2, 30)) // 2
    pr(bisect.bisect_left(a2, 35)) // 3
    pr(bisect.bisect_left(a2, 55)) // 5
    let a3 = [10, 20, 30, 30, 30, 40, 50];
    pr(bisect.bisect_left(a3, 30)) // 2
};

main()