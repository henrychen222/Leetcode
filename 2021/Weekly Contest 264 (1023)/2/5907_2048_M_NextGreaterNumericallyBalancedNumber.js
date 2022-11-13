/**
 * 10/23/21 evening
 * https://leetcode.com/contest/weekly-contest-264/problems/next-greater-numerically-balanced-number/
 */

const pr = console.log;

const counter = (a_or_s) => { let map = new Map(); for (const i of a_or_s) map.set(i, map.get(i) + 1 || 1); return map; };

// Accepted
const nextBeautifulNumber = (n) => {
    n++;
    while (!nb(n)) {
       n++;
    }
    return n;
};

const nb = (x) => {
    let s = x + '';
    let m = counter(s);
    for (const [d, occ] of m) {
        if (occ != d - '0') return false;
    }
    return true;
};

const main = () => {
    let n = 1;
    let n2 = 1000;
    let n3 = 3000;
    pr(nextBeautifulNumber(n))
    pr(nextBeautifulNumber(n2))
    pr(nextBeautifulNumber(n3))
};

main()