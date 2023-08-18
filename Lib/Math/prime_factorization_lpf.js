/*
08/14/23 evening

Example problem:
https://leetcode.com/problems/split-the-array-to-make-coprime-products/
https://leetcode.com/contest/weekly-contest-358/problems/apply-operations-to-maximize-score/
*/

///////////////////////////// (least/lowest prime factor) ///////////////////////
// uwi factorFast()
// 15: [[3, 1], [5, 1]]   136: [[ 2, 3 ], [ 17, 1 ]]
const prime_factorization_LPF = (x, lpf) => {
    let f = [];
    while (lpf[x] > 0) {
        f.length == 0 || lpf[x] != f[f.length - 1][0] ? f.push([lpf[x], 1]) : f[f.length - 1][1]++;
        x /= lpf[x];
    }
    return f; 
};


// https://www.geeksforgeeks.org/prime-factorization-using-sieve-olog-n-multiple-queries/
// 15: [3, 5]    136: [ 2, 2, 2, 17 ]
const prime_factorization_lpf = (x, lpf) => {
    let f = [];
    while (x != 1) {
        f.push(lpf[x]);
        x /= lpf[x];
    }
    return f;
};