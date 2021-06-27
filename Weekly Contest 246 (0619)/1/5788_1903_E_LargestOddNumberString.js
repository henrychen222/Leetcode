/**
 * 06/19/21 evening
 * https://leetcode.com/contest/weekly-contest-246/problems/largest-odd-number-in-string/
 */

const pr = console.log;

// TLE
const largestOddNumber1 = (s) => {
    let n = s.length;
    let res = [];
    for (let i = 0; i < n; i++) {
        for (let j = n - 1; j >= i; j--) {
            if ((s[j] - '0') & 1) {
                let sub = s.slice(i, j + 1);
                res.push(sub);
                break;
            }
        }
    }
    res.sort((x, y) => {
        if (x.length == y.length) {
            for (let i = 0; i < x.length; i++) {
                if (x[i] != y[i]) return Number(y[i]) - Number(x[i]);
            }
        }
        return y.length - x.length;
    })
    // pr(res);
    return res.length == 0 ? '' : res[0];
};

// Accepted
const largestOddNumber = (s) => {
    let n = s.length;
    for (let i = n - 1; ~i; i--) {
        if ((s[i] - '0') & 1) return s.slice(0, i + 1);
    }
    return '';
};

const main = () => {
    let num = "52";
    let num2 = "4206";
    let num3 = "35427";
    pr(largestOddNumber(num))
    pr(largestOddNumber(num2))
    pr(largestOddNumber(num3))
};

main()