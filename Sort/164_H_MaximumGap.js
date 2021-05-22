/**
 * 05/21/21 afternoon
 * https://leetcode.com/problems/maximum-gap/
 */

// Accepted --- 76ms 96.47% 
const maximumGap = (a) => {
    let n = a.length;
    if (n == 1) return 0;
    a.sort((x, y) => x - y);
    let res = 0;
    for (let i = 1; i < n; i++) {
        res = Math.max(res, a[i] - a[i - 1]);
    }
    return res;
};