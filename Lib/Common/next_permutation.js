/**
 * 9.26 evening
 * reference: 
 * https://leetcode.com/problems/next-permutation
 * https://algorithms.tutorialhorizon.com/lexicographically-next-permutation-with-one-swap/
 */

const nextPermutation = (A) => {
    let n = A.length;
    let idx = -1;
    for (let i = n - 1; i > 0; i--) {
        if (A[i - 1] < A[i]) {
            idx = i - 1;
            break;
        }
    }
    if (idx == -1) return A.reverse();
    let secondIdx = idx + 1;
    for (let i = idx + 1; i < n - 1; i++) {
        if (A[i] > A[i + 1] && A[i + 1] > A[idx]) {
            secondIdx = i + 1;
        }
    }
    [A[idx], A[secondIdx]] = [A[secondIdx], A[idx]];
    A = [...A].slice(0, idx + 1).concat([...A].slice(idx + 1).sort((a, b) => a - b));
    return A;
};

const main = () => {
    let nums = [1, 2, 3] // 1,3,2
    let nums2 = [3, 2, 1] // 1,2,3
    let nums3 = [1, 1, 5] // 1,5,1
    let nums4 = [1, 3, 2]; // [2,1,3]
    console.log(nextPermutation(nums));
    console.log(nextPermutation(nums2));
    console.log(nextPermutation(nums3));
    console.log(nextPermutation(nums4));
};

main()