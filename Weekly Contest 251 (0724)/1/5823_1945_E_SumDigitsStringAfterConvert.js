/**
 * 07/24/21 evening
 * https://leetcode.com/contest/weekly-contest-251/problems/sum-of-digits-of-string-after-convert/
 */

const pr = console.log;

// Accepted
const getLucky = (ss, k) => {
    let s = '';
    for (const c of ss) s += c.charCodeAt() - 96;
    // pr(s);
    while (k--) {
        s = go(s);
    }
    return s - '0';
};

const go = (s) => {
    let sum = 0;
    for (const c of s) {
        sum += c - '0';
    }
    return sum + '';
};

const main = () => {
    let s = "iiii", k = 1;
    let s2 = "leetcode", k2 = 2
    let s3 = "zbax", k3 = 2;
    pr(getLucky(s, k))
    pr(getLucky(s2, k2))
    pr(getLucky(s3, k3))
};

main()