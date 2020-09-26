/**
 * 9.25 night
 * https://leetcode.com/problems/previous-permutation-with-one-swap/
 */

// Accepted --- 104ms 88.89%
const prevPermOpt1_refine = (A) => {
    let n = A.length;
    let idx = -1;
    for (let i = n - 1; i > 0; i--) { // find first decreasing point
        if (A[i - 1] > A[i]) {
            idx = i - 1;
            break;
        }
    }
    console.log(idx);
    if (idx == -1) return A;
    let secondIdx = idx + 1;
    for (let i = idx + 1; i < n - 1; i++) { // find the rightmost increasing point with value smaller than idx value
        if (A[i] < A[i + 1] && A[i + 1] < A[idx]) {
            secondIdx = i + 1;
        }
    }
    console.log(idx, secondIdx);
    [A[idx], A[secondIdx]] = [A[secondIdx], A[idx]];
    return A;
};

// Accepted --- 116ms 51.85%
// reference: https://algorithms.tutorialhorizon.com/lexicographically-previous-permutation-with-one-swap/
// const prevPermOpt1 = (A) => {
//     let n = A.length;
//     let idx = -1;
//     for (let i = n - 1; i > 0; i--) {
//         if (A[i - 1] > A[i]) {
//             idx = i - 1;
//             break;
//         }
//     }
//     if (idx == -1) return A;
//     let firstN = A[idx];
//     let secondIdx = idx + 1;
//     for (let i = idx + 1; i < n - 1; i++) {
//         if (A[i] < A[i + 1] && A[i + 1] < A[idx]) {
//             secondIdx = i + 1;
//         }
//     }
//     let secondN = A[secondIdx];
//     A[idx] = secondN;
//     A[secondIdx] = firstN;
//     return A;
// };

const main = () => {
    let arr = [4, 3, 2, 1];
    let arr2 = [3, 2, 1];
    let arr3 = [1, 9, 4, 6, 7];
    let arr4 = [3, 1, 1, 3];
    let arr5 = [1, 1, 5]
    // console.log(prevPermOpt1(arr)); // [4, 3, 1, 2];
    // console.log(prevPermOpt1(arr2)); // [3, 1, 2];
    // console.log(prevPermOpt1(arr3)); //  [1, 7, 4, 6, 9]
    // console.log(prevPermOpt1(arr4)); //  [1, 3, 1, 3]
    // console.log(prevPermOpt1(arr5)); //  [1, 1, 5]

    console.log("");
    console.log(prevPermOpt1_refine(arr));
    console.log(prevPermOpt1_refine(arr2));
    console.log(prevPermOpt1_refine(arr3));
    console.log(prevPermOpt1_refine(arr4));
    console.log(prevPermOpt1_refine(arr5));
};

main()