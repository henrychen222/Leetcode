/**
 * 09/26/20 evening
 * https://leetcode.com/problems/next-permutation/
 * 
 * similar to 1053 in Greedy
 * similar to 1850
 */

// 05/06/21 night Accepted --- 92ms 58/32% from uwi
const nextPermutation = (A) => {
    let res = np(A);
    if (!res) A.sort((x, y) => x - y);
};

const np = (a) => {
    let n = a.length;
    let i, j;
    for (i = n - 2; i >= 0 && a[i] >= a[i + 1]; i--);
    if (i === -1) return false;
    for (j = i + 1; j < n && a[i] < a[j]; j++);
    [a[i], a[j - 1]] = [a[j - 1], a[i]];
    for (let p = i + 1, q = n - 1; p < q; p++, q--)[a[p], a[q]] = [a[q], a[p]];
    return true;
};

// 05/04/21 night Accepted --- 100ms 14.39% Submit again 96ms 36.08%
const nextPermutation3 = (A) => {
    let res = [...A];
    np3(res);
    for (let i = 0; i < A.length; i++) A[i] = res[i];
    console.log(A);
};

const np3 = (a) => { // uwi https://leetcode.com/contest/weekly-contest-239/ranking/2/
    let n = a.length;
    let i, j;
    for (i = n - 2; i >= 0 && a[i] >= a[i + 1]; i--);
    // if (i === -1) return false;
    if (i < -1) return false;
    for (j = i + 1; j < n && a[i] < a[j]; j++);
    [a[i], a[j - 1]] = [a[j - 1], a[i]];
    for (let p = i + 1, q = n - 1; p < q; p++, q--)[a[p], a[q]] = [a[q], a[p]];
    return true;
};

// 05/04/21 night modify
// Accepted --- 100ms 14.39% Submit again 96ms 36.08%
const nextPermutation2 = (A) => {
    let res = next_permutation(A);
    let n = A.length;
    for (let i = 0; i < n; i++) A[i] = res[i];
    console.log(A);
};

const next_permutation = (A) => {
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
        if (A[i] > A[i + 1] && A[i + 1] > A[idx]) secondIdx = i + 1;
    }
    [A[idx], A[secondIdx]] = [A[secondIdx], A[idx]];
    return A.slice(0, idx + 1).concat(A.slice(idx + 1).sort((a, b) => a - b));
};

/////////////////////////////////////////////////////////////////////////////////////////////
// Accepted --- 88ms 68.37%
// reference: https://algorithms.tutorialhorizon.com/lexicographically-next-permutation-with-one-swap/
const nextPermutation1 = (A) => {
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
    let nums = [1, 2, 3]
    let nums2 = [3, 2, 1]
    let nums3 = [1, 1, 5]
    let nums4 = [1];
    let debug1 = [1, 2]
    let debug2 = [1, 3, 2];
    nextPermutation(nums); // [1,3,2]
    nextPermutation(nums2); // [1,2,3]
    nextPermutation(nums3); // [1,5,1]
    nextPermutation(nums4); // [1]
    nextPermutation(debug1); // [2, 1]
    nextPermutation(debug2); // [2,1,3]
};

main()