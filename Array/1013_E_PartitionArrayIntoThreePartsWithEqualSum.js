/**
 * 6.8 evening  8.14 night complete
 * https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/
 */

// Accepted --- 88ms 44.1MB 62.40%
const canThreePartsEqualSum2 = (A) => {
    let totalSum = A.reduce((acc, cur) => acc + cur);
    let avg = totalSum / 3;
    let n = A.length;
    let left = [];
    let right = [];
    let middle = [];
    let sum = 0;
    let cutpoint = [];
    for (let i = 0; i < n; i++) {
        sum += A[i];
        left.push(A[i]);
        if (sum == avg) {
            cutpoint.push(i);
            break;
        }
    }
    sum = 0;
    for (let i = n - 1; i >= 0; i--) {
        sum += A[i];
        right.push(A[i]);
        if (sum == avg) {
            cutpoint.push(i);
            break;
        }
    }
    middle = A.slice(cutpoint[0] + 1, cutpoint[1]);
    // console.log(left, middle, right);
    if (middle.length != 0 && left.length + right.length + middle.length == n) return true;
    return false;
};

// Accepted --- 92ms 44.1 MB 49.60%
const canThreePartsEqualSum = (A) => {
    let totalSum = A.reduce((acc, cur) => acc + cur);
    let avg = totalSum / 3;
    let n = A.length;
    let left = [];
    let right = [];
    let middle = [];
    let sum = 0;
    let cutpoint = [];
    for (let i = 0; i < n; i++) {
        sum += A[i];
        if (sum == avg) {
            left = A.slice(0, i + 1);
            cutpoint.push(i);
            break;
        }
    }
    sum = 0;
    for (let i = n - 1; i >= 0; i--) {
        sum += A[i];
        if (sum == avg) {
            right = A.slice(i, n);
            cutpoint.push(i);
            break;
        }
    }
    middle = A.slice(cutpoint[0] + 1, cutpoint[1]);
    // console.log(left, middle, right);
    if (left.length == 0 || right.length == 0 || middle.length == 0) return false;
    return true;
};


const main = () => {
    let A = [0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1];
    let A2 = [0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1];
    let A3 = [3, 3, 6, 5, -2, 2, 5, 1, -9, 4];
    let debug1 = [18, 12, -18, 18, -19, -1, 10, 10];
    let debug2 = [6, 1, 1, 13, -1, 0, -10, 20];
    let debug3 = [1, -1, 1, -1];
    console.log(canThreePartsEqualSum(A)); // true
    console.log(canThreePartsEqualSum(A2)); // false
    console.log(canThreePartsEqualSum(A3)); // true
    console.log(canThreePartsEqualSum(debug1)); // true
    console.log(canThreePartsEqualSum(debug2)); // false
    console.log(canThreePartsEqualSum(debug3)); // false

    console.log("");
    console.log(canThreePartsEqualSum2(A)); // true
    console.log(canThreePartsEqualSum2(A2)); // false
    console.log(canThreePartsEqualSum2(A3)); // true
    console.log(canThreePartsEqualSum2(debug1)); // true
    console.log(canThreePartsEqualSum2(debug2)); // false
    console.log(canThreePartsEqualSum2(debug3)); // false
};

main()


// // need to fix
// const canThreePartsEqualSum = (A) => {
//     const total = calculate(A);
//     let sum1 = 0;
//     for (let i = 0; i < A.length; i++) {
//         sum1 += A[i];
//         console.log(A[i]);
//         // console.log(sum1)
//         for (let j = i + 1; j < A.length; j++) {
//             let sum2 = 0;
//             sum2 += A[j];
//             // console.log(sum2);
//             let sum3 = total - sum1 - sum2;
//             if (i + 1 < j && sum1 == sum2 && sum2 == sum3) {
//                 return true;
//             }
//         }
//     }
//     return false;
// };

// // time limit exceed, 50/55 (76ms -> 60ms)
// const canThreePartsEqualSum1 = (A) => {
//     const total = calculate(A);
//     for (let i = 0; i < A.length; i++) {
//         let sum1 = calculate(A.slice(0, i + 1));
//         for (let j = i + 1; j < A.length; j++) {
//             let sum2 = calculate(A.slice(i + 1, j));
//             if (i + 1 < j && sum1 == sum2) {
//                 // let sum3 = calculate(A.slice(j, A.length));
//                 sum3 = total - sum1 - sum2;
//                 if (sum2 == sum3) {
//                     // console.log(sum1);
//                     // console.log(sum2);
//                     // console.log(sum3);
//                     return true;
//                 }
//             }
//         }
//     }
//     return false;
// };

// const calculate = (arr) => {
//     let sum = 0;
//     for (const i of arr) {
//         sum += i;
//     }
//     return sum;
// };