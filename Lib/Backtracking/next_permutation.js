/**
 * 09/26/20 evening created  05/04/21 modify
 * reference: 
 * https://leetcode.com/problems/next-permutation
 * https://algorithms.tutorialhorizon.com/lexicographically-next-permutation-with-one-swap/
 */

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

// fast https://leetcode.com/contest/weekly-contest-239/ranking/2/
/**
 * usage:
 * https://www.hackerrank.com/challenges/bigger-is-greater/submissions/code/212141116
 */
const next_permutation = (a) => { // array inside can be char ('0' ~ '9', 'a' ~ 'z') and number
    let n = a.length;
    let i, j;
    for (i = n - 2; i >= 0 && a[i] >= a[i + 1]; i--);
    if (i === -1) return false;
    for (j = i + 1; j < n && a[i] < a[j]; j++);
    [a[i], a[j - 1]] = [a[j - 1], a[i]];
    for (let p = i + 1, q = n - 1; p < q; p++, q--)[a[p], a[q]] = [a[q], a[p]];
    return true;
};