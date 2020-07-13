/**
 * 7.12 evening
 * https://leetcode.com/problems/sum-of-subarray-minimums/
 */

// Time Limit 82 / 100
const sumSubarrayMins1 = (A) => {
    let res = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j <= A.length; j++) {
            let subarr = A.slice(i, j);
            subarr.sort((a, b) => a - b);
            console.log(subarr);
            res += subarr[0];
        }
    }
    return res % 1000000007;
};

// const sumSubarrayMins = (A) => {
//     let res;
//     let data = [3];
//     for (let i = 0; i < A.length; i++) {
//         if (data[data.length -1] > A[i]) {
//             data.splice(0, 0, A[i]);
//             data.push(A[i]);
//         }
//     }
//     console.log(data)
// };

const main = () => {
    let A = [3, 1, 2, 4];
    let A2 = [3, 1, 2, 4, 5];
    console.log(sumSubarrayMins(A));
    console.log(sumSubarrayMins(A2))
};

main()