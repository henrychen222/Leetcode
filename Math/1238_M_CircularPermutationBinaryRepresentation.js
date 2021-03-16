/**
 * 03/13/21 afternoon
 * https://leetcode.com/problems/circular-permutation-in-binary-representation/
 */
const pr = console.log;

// Accepted --- 152ms 100%
const circularPermutation = (n, start) => {
    let gc = generateGrayCode2(n);
    let idx = gc.indexOf(start);
    return gc.slice(idx).concat(gc.slice(0, idx));
};

// Accepted --- 256ms 25.00%
const circularPermutation = (n, start) => {
    let gc = generateGrayCode(n);
    let idx = gc.indexOf(start);
    return gc.slice(idx).concat(gc.slice(0, idx));
};

// Accepted --- 280ms 25.00%
const circularPermutation1 = (n, start) => {
    let gc = generateGrayCode(n);
    // pr(gc, start)
    let idx = gc.indexOf(start);
    return [...gc.slice(idx), ...gc.slice(0, idx)];
};

// https://www.geeksforgeeks.org/generate-n-bit-gray-codes/
const generateGrayCode = (n) => {
    if (n <= 0) return;
    let a = ['0', '1'];
    let i, j;
    for (i = 2; i < 1 << n; i <<= 1) {
        for (j = i - 1; j >= 0; j--) a.push(a[j]);
        for (j = 0; j < i; j++) a[j] = "0" + a[j];
        for (j = i; j < 2 * i; j++) a[j] = "1" + a[j];
    }
    return a.map(x => x = parseInt(x, 2));
};

// https://www.geeksforgeeks.org/backtracking-approach-generate-n-bit-gray-codes/ use Java version, C++ &num is copy when use in param
let cur;
const generateGrayCode2 = (n) => { // fast
    let res = [];
    cur = 0;
    dfs(res, n, 0);
    return res;
};

const dfs = (res, n) => {
    if (n == 0) {
        res.push(cur);
        return;
    }
    dfs(res, n - 1);
    cur ^= 1 << n - 1;
    dfs(res, n - 1);
};

const main = () => {
    let n = 2,
        start = 3;
    let n2 = 3,
        start2 = 2;
    pr(circularPermutation(n, start)); // [3,2,0,1]
    pr(circularPermutation(n2, start2)); // [2,6,7,5,4,0,1,3]
};

main()


// wrong, issue is c++ & is copy, use java
// const generateGrayCode = (n) => {
//     let res = [];
//     dfs(res, n, 0);
//     return res;
// };

// const dfs = (res, n, cur) => {
//     if (n == 0) {
//         res.push(cur);
//         return;
//     }
//     dfs(res, n - 1, cur);
//     cur ^= 1 << n - 1;
//     dfs(res, n - 1, cur);
// };