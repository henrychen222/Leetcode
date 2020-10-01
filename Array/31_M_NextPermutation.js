/**
 * 9.26 evening
 * https://leetcode.com/problems/next-permutation/
 * 
 * similar to 1053 in Greedy
 */

// Accepted --- 88ms 68.37%
// reference: https://algorithms.tutorialhorizon.com/lexicographically-next-permutation-with-one-swap/
const nextPermutation = (A) => {
    let n = A.length;
    let idx = -1;
    for (let i = n - 1; i > 0; i--) { // find first increasing point
        if (A[i - 1] < A[i]) {
            idx = i - 1;
            break;
        }
    }
    // already the largest permutaion (decreasing order), rearrange it as the lowest possible order (increasing order)
    if (idx == -1) return A.reverse();
    let secondIdx = idx + 1;
    for (let i = idx + 1; i < n - 1; i++) { // find the rightmost decreasing point with value larger than idx value
        if (A[i] > A[i + 1] && A[i + 1] > A[idx]) {
            secondIdx = i + 1;
        }
    }
    [A[idx], A[secondIdx]] = [A[secondIdx], A[idx]]; // swap
    let res = [...A].slice(0, idx + 1).concat([...A].slice(idx + 1).sort((a, b) => a - b)); // sort the rest of array in ascending order
    A.splice(0, n);
    for (const i of res) {
        A.push(i);
    }
    console.log(A);
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