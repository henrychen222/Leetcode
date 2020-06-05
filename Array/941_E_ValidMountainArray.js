/**
 * 6.4 evening
 * https://leetcode.com/problems/valid-mountain-array/
 */

// Accepted --- 968ms 44.5MB 5.40%
const validMountainArray = (A) => {
    if (isAscending(A) || isDescending(A)) return false;
    for (let i = 0; i < A.length; i++) {
        front = A.slice(0, i + 1);
        end = A.slice(i, A.length);
        if (isAscending(front) && isDescending(end) && A.length >= 3) {
            return true;
        }
    }
    return false;
};

// Accepted --- 1000ms 43.9MB 5.40%
const validMountainArray2 = (A) => {
    for (let i = 0; i < A.length; i++) {
        front = A.slice(0, i + 1);
        end = A.slice(i, A.length);
        if (front.length >= 2 && end.length >= 2 && isAscending(front) && isDescending(end) && A.length >= 3) {
            return true;
        }
    }
    return false;
};

const isAscending = (arr) => {
    return arr.every((x, i) => {
        return i === 0 || x > arr[i - 1];
    });
};

const isDescending = (arr) => {
    return arr.every((x, i) => {
        return i === 0 || x < arr[i - 1];
    });
};

const main = () => {
    let A = [2, 1];
    let A2 = [3, 5, 5];
    let A3 = [0, 3, 2, 1];
    let debug1 = [1, 3, 2];
    let debug2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(validMountainArray(A)); // false
    console.log(validMountainArray(A2)); // false
    console.log(validMountainArray(A3)); // true
    console.log(validMountainArray(debug1)); // true
    console.log(validMountainArray(debug2)); // false

    console.log("")
    console.log(validMountainArray2(A));
    console.log(validMountainArray2(A2));
    console.log(validMountainArray2(A3));
    console.log(validMountainArray2(debug1));
    console.log(validMountainArray2(debug2));
};

main()