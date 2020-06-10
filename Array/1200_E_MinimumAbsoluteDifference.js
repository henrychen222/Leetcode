/**
 * 6.9 evening
 * https://leetcode.com/problems/minimum-absolute-difference/
 */

// Accepted --- 196ms 48.6MB 28.57%
const minimumAbsDifference = (arr) => {
    arr.sort((a, b) => b - a);
    let minABD = Number.MAX_VALUE;
    for (let i = 1; i < arr.length; i++) {
        minABD = Math.min(minABD, arr[i - 1] - arr[i]);
    }
    let res = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] - arr[i] == minABD) {
            res.push([arr[i], arr[i - 1]]);
        }
    }
    res.sort((a, b) => a[0] - b[0]);
    return res;
};

const main = () => {
    let arr = [4, 2, 1, 3];
    let arr2 = [1, 3, 6, 10, 15];
    let arr3 = [3, 8, -10, 23, 19, -4, -14, 27];
    console.log(minimumAbsDifference(arr));
    console.log(minimumAbsDifference(arr2));
    console.log(minimumAbsDifference(arr3));
};

main()