/*
07/09/22 night

Example:
https://leetcode.com/problems/count-the-number-of-ideal-arrays/
https://www.codechef.com/problems/NUMFACT
*/

// 因式分解
const factorization = (n) => {
    let m = new Map();
    for (let i = 2; i * i <= n; i++) {
        while (n % i == 0) {
            n /= i;
            m.set(i, m.get(i) + 1 || 1);
        }
    }
    if (n > 1) m.set(n, m.get(n) + 1 || 1);
    return m;
};

// 质因式分解
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