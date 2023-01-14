// 06/09/21 night
// https://leetcode.com/problems/largest-component-size-by-common-factor/
const lowestPrimeFactors = (n) => {
    let tot = 0;
    let lpf = Array(n + 1).fill(0);
    let u = n + 32;
    let lu = Math.log(u);
    let divide = u / lu;
    let divideT = divide / lu;
    let len = divide + divideT * 1.5;
    let primes = Array(len >> 0).fill(0);
    for (let i = 2; i <= n; i++) lpf[i] = i;
    for (let p = 2; p <= n; p++) {
        if (lpf[p] == p) primes[tot++] = p;
        let tmp;
        for (let i = 0; i < tot && primes[i] <= lpf[p] && (tmp = primes[i] * p) <= n; i++) {
            lpf[tmp] = primes[i];
        }
    }
    return lpf;
};


// https://www.geeksforgeeks.org/print-all-prime-factors-of-a-given-number/
const findAllPrimeFactors = (n) => {
    let res = new Set(), c = 2;
    while (n > 1) {
        if (n % c == 0) {
            res.add(c);
            n /= c;
        } else {
            c++;
        }
    }
    return res;
};

// 
const prime_factorization = (n) => { // 质因式分解
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