/**
 * 7.15 afternoon  7.15 evening
 * https://leetcode.com/problems/global-and-local-inversions/
 */

// Accepted --- 704ms 39.6MB 9.09%
const isIdealPermutation = (A) => {
    let local = 0;
    let global = 0;
    for (let i = 1; i < A.length; i++) {
        if (A[i - 1] > A[i]) local++;
    }
    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++) {
            if (A[i] > A[j]) global++;
        }
    }
    if (global == local) return true;
    return false;
};

// Accepted --- 932ms 39.3MB 9.09%
const isIdealPermutation2 = (A) => {
    let local = 0;
    let global = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] > A[i + 1]) local++;
        for (let j = i + 1; j < A.length; j++) {
            if (A[i] > A[j]) global++;
        }
    }
    if (global == local) return true;
    return false;
};

const main = () => {
    let A = [1, 0, 2];
    let A2 = [1, 2, 0];
    console.log(isIdealPermutation(A));
    console.log(isIdealPermutation(A2));

    console.log(isIdealPermutation2(A));
    console.log(isIdealPermutation2(A2));
};

main()