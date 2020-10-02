/**
 * 10.1 evening
 * https://leetcode.com/problems/advantage-shuffle/
 */

// Accepted --- 8344ms 5.00%
const advantageCount = (A, B) => {
    let data = [];
    for (const b of B) {
        let n = A.length;
        A.sort((a, b) => a - b);
        let min = A[0];
        let max = A[n - 1];
        if (b >= max) {
            data.push(min);
            A.shift();
        } else {
            let removeIdx;
            for (let i = 0; i < n; i++) {
                if (A[i] > b) {
                    data.push(A[i]);
                    removeIdx = i;
                    break;
                }
            }
            A.splice(removeIdx, 1);
        }
    }
    return data;
};

// Accepted --- 8340ms 5.00%
const advantageCount2 = (A, B) => {
    let data = [];
    let n = A.length;
    for (const b of B) {
        // console.log(A);
        A.sort((a, b) => a - b);
        let min = A[0];
        let max = A[A.length - 1];
        if (b >= max) {
            data.push(min);
            A.shift();
        } else {
            let removeIdx;
            for (let i = 0; i < A.length; i++) {
                if (A[i] > b) {
                    data.push(A[i]);
                    removeIdx = i;
                    break;
                }
            }
            // console.log(A[removeIdx]);
            A.splice(removeIdx, 1);
        }
    }
    // console.log(n, data.length);
    return data;
};

// time limit 61/67
// const advantageCount1 = (A, B) => {
//     let set = new Set();
//     let data = [];
//     let n = A.length;
//     for (const b of B) {
//         let tmp = Number.MAX_VALUE;
//         for (let i = 0; i < n; i++) {
//             if (set.has(i)) continue;
//             if (A[i] > b) {
//                 tmp = Math.min(tmp, A[i]);
//             }
//         }
//         data.push(tmp);
//         if (tmp != Number.MAX_VALUE) {
//             let idx = -1;
//             for (let i = 0; i < n; i++) {
//                 if (!set.has(i) && A[i] == tmp) {
//                     idx = i;
//                     break;
//                 }
//             }
//             set.add(idx);
//         }
//     }
//     // console.log(data, n, data.length, set);
//     let rest = [];
//     for (let i = 0; i < n; i++) {
//         if (!set.has(i)) rest.push(A[i]);
//     }
//     // console.log(rest);
//     let res = [];
//     for (const d of data) {
//         if (d == Number.MAX_VALUE) {
//             res.push(rest[0]);
//             rest.shift();
//         } else {
//             res.push(d);
//         }
//     }
//     return res;
// };

const main = () => {
    let A = [2, 7, 11, 15],
        B = [1, 10, 4, 11];
    let A2 = [12, 24, 8, 32],
        B2 = [13, 25, 32, 11];
    let A_debug1 = [2, 0, 4, 1, 2],
        B_debug1 = [1, 3, 0, 0, 2]
    let A_debug2 = [15, 15, 4, 5, 0, 1, 7, 10, 3, 1, 10, 10, 8, 2, 3],
        B_debug2 = [4, 13, 14, 0, 14, 14, 12, 3, 15, 12, 2, 0, 6, 9, 0]
    console.log(advantageCount(A, B));
    console.log(advantageCount(A2, B2));
    console.log(advantageCount(A_debug1, B_debug1)); // [2,0,2,1,4]
    console.log(advantageCount(A_debug2, B_debug2)); // [5,10,10,2,8,3,15,4,0,15,3,1,7,10,1]  
};

main()