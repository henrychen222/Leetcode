/**
 * 5.3 evening
 * https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/
 */

/**
 * https://www.tutorialspoint.com/maximize-array-sum-after-k-negation-in-cplusplus
 * https://www.geeksforgeeks.org/maximize-array-sun-after-k-negation-operations/
 * Accepted --- 64ms 34.7 MB 73.53%
 */
const largestSumAfterKNegations_tutorialspoint = (A, K) => {
    for (let i = 1; i <= K; ++i) {
        let minValue = Number.MAX_VALUE;
        let index = -1;
        // Find minimum element in array for current operation and modify it arr[j] --> -arr[j] 
        for (let j = 0; j < A.length; ++j) {
            if (A[j] < minValue) {
                minValue = A[j];
                index = j;
            }
        }
        // this the condition if we find 0 as minimum element, so it will useless to replace 0 by -(0) for remaining operations 
        if (minValue == 0) {
            break;
        }
        // Modify element of array 
        A[index] = -A[index];
    }
    let sum = 0;
    for (let i = 0; i < A.length; ++i) {
        sum = sum + A[i];
    }
    return sum;
};

/**
 * http://www.noteanddata.com/leetcode-1005-Maximize-Sum-Of-Array-After-K-Negations-java-solution-note.html
 * Accepted --- 64ms 37 MB 72.73%
 */
const largestSumAfterKNegations_noteanddata = (A, K) => {
    A.sort((a, b) => a - b);
    let sum = 0;
    for (let v of A) {
        sum += v;
    }
    let count = 0;
    let minabs = Math.abs(A[0]);
    for (let v of A) {
        minabs = Math.min(minabs, Math.abs(v));
        if (v < 0) {
            sum += 2 * Math.abs(v);
            count++;
            if (count >= K) {
                break;
            }
        } else if (v == 0) {
            break;
        } else {
            let remain = K - count;
            if (remain % 2 == 1) {
                sum -= 2 * minabs;
            }
            break;
        }
    }
    return sum;
};

// // https://www.tutorialspoint.com/maximize-sum-of-array-after-k-negations-in-python
// const largestSumAfterKNegations_tutorialspoint_python = (A, K) => {
//     A.sort((a, b) => a - b);
//     for (let i = 0; i < A.length; i++) {
//         if (A[i] < 0) {
//             A[i] = -A[i];
//             K--;
//         }
//         if (K == 0) {
//             break;
//         }
//     }
//     if (K % 2) {
//         let smallest_positive = A[0];
//         for (let i = 1; i < A.length; i++) {
//             if (A[i] >= 0) {
//                 smallest_positive = Math.min(smallest_positive, A[i]);
//                 return accumulate(A) - (2 * smallest_positive);
//             } else {
//                 return accumulate(A);
//             }
//         }
//     }
// };

// https://www.codeleading.com/article/1458722812/
// const largestSumAfterKNegations_codeleading = (A, K) => {
//     let sum = 0;
//     while (K--) {
//         A.sort((a, b) => a - b);
//         A[0] == -A[0]
//     }
//     for (let i = 0; i < A.length; i++) {
//         sum += A[i];
//     }
//     return sum;
// };

// // https://github.com/keineahnung2345/leetcode-cpp-practices/blob/master/1005.%20Maximize%20Sum%20Of%20Array%20After%20K%20Negations%20Easy.cpp
// const largestSumAfterKNegations_keineahnung2345 = (A, K) => {
//     for (let i = 0; i < K; i++) {
//         let it = getMinArr(A);
//         it = -it;
//     }
//     return accumulate(A);
// };

// // https://zxi.mytechroad.com/blog/greedy/leetcode-1005-maximize-sum-of-array-after-k-negations/
// const largestSumAfterKNegations_huahua = (A, K) => {
//     A.sort((a, b) => a - b);
//     for (let i of A) {
//         if (i < 0) {
//             i = -i;
//             --K;
//         }
//     }
//     return accumulate(A) - (K % 2 ? getMinArr(A) * 2 : 0);
// };

const accumulate = (arr) => {
    return arr.reduce((a, b) => {
        return a + b;
    });
};

const getMinArr = (arr) => {
    return Math.min(...arr);
};

// // Not complete
// const largestSumAfterKNegations = (A, K) => {
//     // A.sort((a, b) => a - b);
//     let negative = [];
//     let positive = [];
//     let zero = [];

//     for (const i of A) {
//         if (i < 0) {
//             negative.push(i);
//         } else if (i > 0) {
//             positive.push(i);
//         } else {
//             zero.push(i);
//         }
//     }
//     console.log(negative);
//     console.log(positive);
//     console.log(zero);
// };

const main = () => {
    let A = [4, 2, 3],
        K = 1;
    let A2 = [3, -1, 0, 2],
        K2 = 3;
    let A3 = [2, -3, -1, 5, -4],
        K3 = 2;

    // console.log(largestSumAfterKNegations(A, K));
    // console.log(largestSumAfterKNegations(A2, K2));
    // console.log(largestSumAfterKNegations(A3, K3));

    /**************************************** need to comment other, only run one function */
    // console.log("");
    // console.log(largestSumAfterKNegations_tutorialspoint(A, K)); // 5
    // console.log(largestSumAfterKNegations_tutorialspoint(A2, K2)); // 6
    // console.log(largestSumAfterKNegations_tutorialspoint(A3, K3)); // 13

    console.log("");
    console.log(largestSumAfterKNegations_noteanddata(A, K)); // 5
    console.log(largestSumAfterKNegations_noteanddata(A2, K2)); // 6
    console.log(largestSumAfterKNegations_noteanddata(A3, K3)); // 13

   
    // console.log("");
    // console.log(largestSumAfterKNegations_tutorialspoint_python(A, K));
    // console.log(largestSumAfterKNegations_tutorialspoint_python(A2, K2));
    // console.log(largestSumAfterKNegations_tutorialspoint_python(A3, K3));

    // console.log(largestSumAfterKNegations_huahua(A, K));
    // console.log(largestSumAfterKNegations_huahua(A2, K2));
    // console.log(largestSumAfterKNegations_huahua(A3, K3));

    // console.log("");
    // console.log(largestSumAfterKNegations_keineahnung2345(A, K));
    // console.log(largestSumAfterKNegations_keineahnung2345(A2, K2));
    // console.log(largestSumAfterKNegations_keineahnung2345(A3, K3));

    // console.log("");
    // console.log(largestSumAfterKNegations_codeleading(A, K));
    // console.log(largestSumAfterKNegations_codeleading(A2, K2));
    // console.log(largestSumAfterKNegations_codeleading(A3, K3));

}

main()