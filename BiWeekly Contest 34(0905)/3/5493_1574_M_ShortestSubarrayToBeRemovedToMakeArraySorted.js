/**
 * 9.5 morning
 * https://leetcode.com/contest/biweekly-contest-34/problems/shortest-subarray-to-be-removed-to-make-array-sorted/
 */

const findLengthOfShortestSubarray = (arr) => {
    let n = arr.length;
    if (isAscending(arr)) return 0;
    if (isDescending(arr)) return n - 1;
    let l, r;
    for (let i = 0; i + 1 < n; i++) {
        if (arr[i + 1] < arr[i]) {
            l = i;
            break;
        }
    }
    for (let i = n - 1; i - 1 >= 0; i--) {
        if (arr[i - 1] > arr[i]) {
            r = i;
            break;
        }
    }
    // console.log(l, r);
    if (arr[l] <= arr[r]) {
        return r - l - 1;
    } else {
        let tmpL, tmpR;
        for (let i = l; i >= 0; i--) {
            if (arr[i] <= arr[r]) {
                tmpL = i;
                break;
            }
        }
        for (let i = r; i < n; i++) {
            if (arr[l] <= arr[i]) {
                tmpR = i;
                break;
            }
        }
        // console.log(tmpL, r);
        // console.log(l, tmpR);
        if (tmpL == undefined) {
            return tmpR - l - 1;
        } else if (tmpR == undefined) {
            return r - tmpL - 1;
        } else {
            return Math.min(r - tmpL - 1, tmpR - l - 1);
        }
    }
};

const isAscending = (arr) => {
    return arr.every((x, i) => {
        return i === 0 || x >= arr[i - 1];
    });
};

const isDescending = (arr) => {
    return arr.every((x, i) => {
        return i === 0 || x <= arr[i - 1];
    });
};

const main = () => {
    let arr = [1, 2, 3, 10, 4, 2, 3, 5];
    let arr2 = [5, 4, 3, 2, 1];
    let arr3 = [1, 2, 3];
    let arr4 = [1];
    let debug1 = [2, 2, 2, 1, 1, 1];
    console.log(findLengthOfShortestSubarray(arr));
    console.log(findLengthOfShortestSubarray(arr2));
    console.log(findLengthOfShortestSubarray(arr3));
    console.log(findLengthOfShortestSubarray(arr4));
    console.log(findLengthOfShortestSubarray(debug1)); // 3
};

main()