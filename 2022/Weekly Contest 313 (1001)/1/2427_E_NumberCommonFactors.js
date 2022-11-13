/*
 * 10/01/22 evning
 * https://leetcode.com/contest/weekly-contest-313/problems/number-of-common-factors/
 */

const pr = console.log;

// Accepted
const commonFactors = (a, b) => {
    let fa = findAllFactors(a), fb = findAllFactors(b), res = 0;
    for (const x of fa) {
        if (fb.has(x)) res++;
    }
    return res;
};

const findAllFactors = (n) => {
    let res = new Set();
    for (let i = 1; i * i <= n; i++) {
        if (n % i == 0) {
            if (i == n / i) {
                res.add(i);
            } else {
                res.add(i);
                res.add(n / i);
            }
        }
    }
    return res;
};

const main = () => {
    let a = 12, b = 6;
    let a2 = 25, b2 = 30;
    pr(commonFactors(a, b))
    pr(commonFactors(a2, b2))
};

main()