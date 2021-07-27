/**
 * 07/25/21 night
 * https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/
 */

// Accepted --- 84ms
// reference: https://www.cnblogs.com/grandyang/p/6959585.html
const findIntegers = (n) => {
    let res = 0, k = 31, pre = 0;
    let f = Array(32).fill(0);
    f[0] = 1;
    f[1] = 2;
    for (let i = 2; i < 31; ++i) f[i] = f[i - 2] + f[i - 1];
    while (k--) {
        if (n & (1 << k)) {
            res += f[k];
            if (pre) return res;
            pre = 1;
        } else {
            pre = 0;
        }
    }
    return res + 1;
};


// TLE
const findIntegers1 = (n) => {
    let res = 0;
    for (let i = 0; i <= n; i++) {
        let s = i.toString(2);
        pr(i, s)
        if (ok(s)) res++;
    }
    return res;
};

const ok = (s) => {
    let n = s.length;
    for (let i = 0; i < n; i++) {
        if (s[i] == '1') {
            if (i + 1 < n && s[i + 1] == '1') return false;
        }
    }
    return true;
};

const pr = console.log;
const main = () => {
    let n = 5;
    let n2 = 1;
    let n3 = 2;
    let debug1 = 10 ** 9;
    pr(findIntegers(n))
    pr(findIntegers(n2))
    pr(findIntegers(n3))
    pr(findIntegers(debug1))
};

main()