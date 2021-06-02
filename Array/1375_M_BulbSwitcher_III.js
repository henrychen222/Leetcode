/**
 * 06/01/21 night
 * https://leetcode.com/problems/bulb-switcher-iii/
 */

// Accepted --- 124ms 14.86%
const numTimesAllBlue = (a) => {
    let n = a.length;
    let sum = res = 0;
    for (let i = 0; i < n; i++) {
        let x = i + 1;
        sum += a[i];
        if (cal(x) == sum) res++;
    }
    return res;
};

const cal = (n) => {
    return (1 + n) * n / 2;
};