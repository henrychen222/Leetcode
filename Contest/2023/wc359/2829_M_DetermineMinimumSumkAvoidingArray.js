/*
 * 08/19/23 evening
 * https://leetcode.com/contest/weekly-contest-359/problems/determine-the-minimum-sum-of-a-k-avoiding-array/
 */

const pr = console.log;

// Accepted
const minimumSum = (n, k) => {
    let se = new Set(), upper = Math.max(n, k);
    for (let i = 1; i < upper; i++) {
        if (!se.has(k - i)) se.add(i);
    }
    if (se.size >= n) return [...se].slice(0, n).reduce(((x, y) => x + y), 0);
    // pr("111", se);
    let v = upper, res = 0;
    while (se.size < n) {
        if (!se.has(v)) se.add(v);
        v++;
    }
    // pr(se)
    for (const x of se) res += x;
    return res;
};

const main = () => {
    let n = 5, k = 4;
    let n2 = 2, k2 = 6;
    let n_debug1 = 2, k_debug1 = 3;
    let n_debug2 = 2, k_debug2 = 1;
    let n_debug3 = 1, k_debug3 = 2;
    pr(minimumSum(n, k))
    pr(minimumSum(n2, k2))
    pr(minimumSum(n_debug1, k_debug1)) // 4
    pr(minimumSum(n_debug2, k_debug2)) // 3
    pr(minimumSum(n_debug3, k_debug3)) // 1
};

main()