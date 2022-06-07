/**
 * 06/03/22 night
 * https://leetcode.com/problems/decode-xored-permutation/
 */

// Accepted --- 469ms 10.00%
const decode = function (a) {
    let x = 0, n = a.length + 1;
    for (let i = 1; i <= n; i++) x ^= i;
    let first = x;
    for (let i = 1; i < n - 1; i += 2) first ^= a[i];
    let res = [first];
    for (const x of a) res.push(res[res.length - 1] ^ x);
    return res;
};