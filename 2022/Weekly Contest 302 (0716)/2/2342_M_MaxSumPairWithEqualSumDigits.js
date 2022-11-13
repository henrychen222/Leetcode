/**
 * 07/16/22 evening
 * https://leetcode.com/contest/weekly-contest-302/problems/max-sum-of-a-pair-with-equal-sum-of-digits/
 */

const pr = console.log

// Accepted
const maximumSum = (A) => {
    let m = new Map(), res = -1;
    for (const x of A) {
        let sum = sumOfDigit(x);
        if (!m.has(sum)) m.set(sum, []);
        m.get(sum).push(x);
    }
    for (const [sum, a] of m) {
        a.sort((x, y) => y - x);
        if (a.length >= 2) res = Math.max(res, a[0] + a[1]);
    }
    return res;
};

const sumOfDigit = (x) => {
    let s = x + '', res = 0;
    for (const c of s) res += c - '0';
    return res;
};


const main = () => {
    let a = [18, 43, 36, 13, 7];
    let a2 = [10, 12, 19, 14];
    pr(maximumSum(a))
    pr(maximumSum(a2))
};

main()