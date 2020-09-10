/**
 * 9.10 morning
 * https://leetcode.com/problems/find-k-closest-elements/
 */

// Accepted --- 120ms 56.52%
const findClosestElements1 = (arr, k, x) => {
    let n = arr.length;
    if (x <= arr[0]) {
        return arr.slice(0, k);
    } else if (x >= arr[n - 1]) {
        return arr.slice(n - k, n);
    } else {
        arr.sort((a, b) => Math.abs(a - x) - Math.abs(b - x));
        return arr.slice(0, k).sort((a, b) => a - b);
    }
};

// Accepted --- 120ms 56.52%
const findClosestElements2 = (arr, k, x) => {
    arr.sort((a, b) => Math.abs(a - x) - Math.abs(b - x));
    return arr.slice(0, k).sort((a, b) => a - b);
};


// Accepted --- 108ms 82.32%
const findClosestElements3 = (arr, k, x) => {
    return arr.sort((a, b) => Math.abs(a - x) - Math.abs(b - x)).slice(0, k).sort((a, b) => a - b);
};

const main = () => {
    let arr = [1, 2, 3, 4, 5],
        k = 4,
        x = 3;
    let arr2 = [1, 2, 3, 4, 5],
        k2 = 4,
        x2 = -1;
    let arr_debug1 = [0, 1, 1, 1, 2, 3, 6, 7, 8, 9],
        k_debug1 = 9,
        x_debug1 = 4;
    let arr_debug2 = [1, 1, 1, 10, 10, 10],
        k_debug2 = 1,
        x_debug2 = 9;
    console.log(findClosestElements(arr, k, x));
    console.log(findClosestElements(arr2, k2, x2));
    console.log(findClosestElements(arr_debug1, k_debug1, x_debug1)); // [0,1,1,1,2,3,6,7,8]
    console.log(findClosestElements(arr_debug2, k_debug2, x_debug2)); // [10]
};

main()