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