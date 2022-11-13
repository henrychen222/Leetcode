/**
 * 05/01/21 morning
 * https://leetcode.com/contest/biweekly-contest-51/problems/maximum-element-after-decreasing-and-rearranging/
 */

const pr = console.log;

const mx = Math.max;
const mi = Math.min;
const amax = (a) => mx.apply(Math, a);
const stin = (a) => a.sort((x, y) => x - y);


const maximumElementAfterDecrementingAndRearranging = (a) => {
    let n = a.length;
    stin(a);
    a[0] = mi(a[0], 1);
    for (let i = 1; i < n; i++) {
        a[i] = mi(a[i], a[i - 1] + 1);
    }
    return a[n - 1];
};

// Accepted --- 104ms cuiaoxiang
const maximumElementAfterDecrementingAndRearranging2 = (a) => {
    let n = a.length;
    stin(a);
    if (a[0] != 1) a[0] = 1;
    for (let i = 1; i < n; i++) {
        if (a[i] > a[i - 1] + 1) a[i] = a[i - 1] + 1;
    }
    // pr(a);
    return a[n - 1];
};

// don't know
const maximumElementAfterDecrementingAndRearranging1 = (a) => {
    let max = amax(a);
    let f = Array(max + 1).fill(0);
    for (const e of a) f[e]++;
    stin(a);
    // pr(f);
};

const main = () => {
    let arr = [2, 2, 1, 2, 1];
    let arr2 = [100, 1, 1000];
    let arr3 = [1, 2, 3, 4, 5];
    pr(maximumElementAfterDecrementingAndRearranging(arr));
    pr(maximumElementAfterDecrementingAndRearranging(arr2));
    pr(maximumElementAfterDecrementingAndRearranging(arr3));
};

main()