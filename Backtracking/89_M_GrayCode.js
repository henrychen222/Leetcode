/**
 * 03/13/21 afternoon
 * https://leetcode.com/problems/gray-code/
 * 
 * reference: review question 1238
 */

const pr = console.log;

const grayCode = (n) => generateGrayCode(n);

// Accepted --- 152ms 21.43%
const generateGrayCode1 = (n) => {
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

// Accepted --- 116ms 50.00%
let cur;
const generateGrayCode = (n) => {
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
    let n = 2;
    let n2 = 1;
    pr(grayCode(n));
    pr(grayCode(n2));
};

main()