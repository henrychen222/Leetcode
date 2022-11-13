/*
reference:
https://www.geeksforgeeks.org/minimum-number-swaps-required-sort-array/

example problem:
https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/
*/

const minSwapSortArray = (a) => { // array value is unique
    let n = a.length, b = [...a].sort((x, y) => x - y), m = new Map(), res = 0;
    for (let i = 0; i < n; i++) m.set(a[i], i);
    for (let i = 0; i < n; i++) {
        if (a[i] != b[i]) {
            res++;
            let j = m.get(b[i]);
            m.set(a[i], j);
            m.set(b[i], i);
            [a[i], a[j]] = [a[j], a[i]];
        }
    }
    return res;
};
