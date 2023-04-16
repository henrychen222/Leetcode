// 06/09/21 night

/*
Example problems:
https://leetcode.com/problems/largest-component-size-by-common-factor/
https://leetcode.com/problems/split-the-array-to-make-coprime-products/
*/
const lowestPrimeFactors = (n) => { // old
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


////////////////////////////////////// 03/10/23 night //////////////////////////////////////////////////////////////
const enumLowestPrimeFactors1 = (n) => { // same from old
    let tot = 0, lpf = Array(n).fill(0), u = n + 32, lu = Math.log(u);
    let d = u / lu, dt = d / lu, len = parseInt(d + dt * 1.5), primes = Array(len).fill(0);
    for (let i = 2; i <= n; i++)lpf[i] = i;
    for (let p = 2; p <= n; p++) {
        if (lpf[p] == p) primes[tot++] = p;
        for (let i = 0, tmp; i < tot && primes[i] <= lpf[p] && (tmp = primes[i] * p) <= n; i++) lpf[tmp] = primes[i];
    }
    return lpf;
};

// use
// reference: https://www.geeksforgeeks.org/least-prime-factor-of-numbers-till-n/
const enumLowestPrimeFactors = (n) => {
    let lpf = Array(n + 1).fill(0);
    for (let i = 2; i <= n; i++) {
        if (lpf[i] == 0) {
            lpf[i] = i;
            for (let j = i * i; j <= n; j += i) {
                if (lpf[j] == 0) lpf[j] = i;
            }
        }
    }
    return lpf;
}