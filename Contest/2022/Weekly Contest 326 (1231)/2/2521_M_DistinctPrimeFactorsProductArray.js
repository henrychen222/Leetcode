/*
 * 12/31/22 evening
 * https://leetcode.com/contest/weekly-contest-326/problems/distinct-prime-factors-of-product-of-array/
 */

const pr = console.log;

const addOneOrManyMap = (m, x, cnt = 1) => m.set(x, m.get(x) + cnt || cnt);

// Accepted
const distinctPrimeFactors = (a) => {
    let m = new Map();
    for (const x of a) {
        let factors = prime_factorization(x);
        for (const f of factors) addOneOrManyMap(m, f);
    }
    return m.size;
};

// TLE
// const distinctPrimeFactors = (a) => {
//     let res = prime_factorization(a.reduce((x, y) => x * y));
//     return new Set(res).size;
// };

const prime_factorization = (n) => {
    let res = [];
    while (n % 2 === 0) {
        res.push(2);
        n /= 2;
    }
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            res.push(i);
            n /= i;
        }
    }
    if (n > 2) res.push(n);
    return res;
};

const main = () => {
    let a = [2, 4, 3, 7, 10, 6]
    let a2 = [2, 4, 8, 16]
    pr(distinctPrimeFactors(a))
    pr(distinctPrimeFactors(a2))
};

main()