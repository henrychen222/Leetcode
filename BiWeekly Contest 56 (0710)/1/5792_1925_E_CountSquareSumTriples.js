/**
 * 07/10/21 morning
 * https://leetcode.com/contest/biweekly-contest-56/problems/count-square-sum-triples/
 */

const pr = console.log;

// Accepted
const countTriples = (n) => {
    let res = 0;
    for (let a = 1; a <= n; a++) {
        for (let b = 1; b <= n; b++) {
            for (let c = 1; c <= n; c++) {
                if (a * a + b * b == c * c) res++;
            }
        }
    }
    return res;
};

const main = () => {
    let n = 5;
    let n2 = 10;
    pr(countTriples(n))
    pr(countTriples(n2))
};

main()