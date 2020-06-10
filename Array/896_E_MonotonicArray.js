/**
 * 6.9 afternoon
 * https://leetcode.com/problems/monotonic-array/
 */
const isMonotonic = (A) => {
    let flag = false;
    let records = [];
    for (let i = 0; i < A.length; i++) {
        for (let j = i; j < A.length; j++) {
            let arr = A.slice(i, j + 1);
            console.log(arr);
            if (arr.every(x => A[i] <= x)) { // problem
                flag = true;
            } else if (arr.every(x => A[i] >= x)) {
                flag = true;
            }
        }
    }
    return flag;
};

const isMonotonic1 = (A) => {
    let data = [];
    for (let i = 0; i < A.length; i++) {
        for (let j = i; j < A.length; j++) {
            let map = new Map();
            data.push(map.set(A[i], A[j]));
        }
    }
    console.log(data);
    return true;
};

const main = () => {
    let A = [1, 2, 2, 3];
    let A2 = [6, 5, 4, 4];
    let A3 = [1, 3, 2];
    let A4 = [1, 2, 4, 5];
    let A5 = [1, 1, 1];
    console.log(isMonotonic(A));
    console.log(isMonotonic(A2));
    console.log(isMonotonic(A3));
    console.log(isMonotonic(A4));
    console.log(isMonotonic(A5));
};

main()