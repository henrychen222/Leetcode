/**
 * 02/05/22 morning
 * https://leetcode.com/contest/biweekly-contest-71/problems/minimum-sum-of-four-digit-number-after-splitting-digits/
 */

const pr = console.log;

const sortstr = (s) => s.split("").sort((x, y) => x.localeCompare(y)).join("");

// Accepted
const minimumSum = (x) => {
    let s = x + '';
    s = sortstr(s);
    let res1 = (s[0] + s[2] - '0')  + (s[1] + s[3] - '0');
    let res2 = (s[0] + s[3] - '0')  + (s[1] + s[2] - '0');
    // pr(res1, res2);
    return Math.min(res1, res2);
};

// WA
const minimumSum1 = (x) => {
    let s = x + '', l = '', res = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < 4; i++) {
        l += s[i];
        let r = '';
        for (let j = i + 1; j < 4; j++) r += s[j];
        l = sortstr(l);
        r = sortstr(r);
        let sum = l - '0' + (r - '0');
        console.log(l, r, sum);
        res = Math.min(res, sum);
    }
    return res;
};


const main = () => {
    let num = 2932;
    let num2 = 4009;
    let debug1 = 2687;
    pr(minimumSum(num))
    pr(minimumSum(num2))
    pr(minimumSum(debug1)) // 95
};

main()
