/**
 * 11/14/21 evening
 * https://leetcode.com/problems/permutation-sequence/
 */

// Accepted --- 152ms 45.61%
const getPermutation = (n, k) => {
    k--;
    let a = [];
    for (let i = 1; i <= n; i++) a.push(i);
    while (k--) next_permutation(a);
    return a.join("");
};

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