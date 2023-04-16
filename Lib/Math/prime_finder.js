// 04/19/21 afternoon + evening
/**
 * algorithm:
 * https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
 * 
 * Usage Example: 
 * https://codingcompetitions.withgoogle.com/kickstart/round/0000000000435a5b/000000000077a8e6
 */
const sieveEratosthenes = (n) => { // n: int
    if (n < 32) {
        let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
        for (let i = 0; i < primes.length; i++) {
            if (n < primes[i]) return primes.slice(0, i);
        }
        return primes;
    }
    let u = n + 32;
    let lu = Math.log(u);
    let divide = u / lu;
    let divideT = divide / lu;
    let len = divide + divideT * 1.5;
    let res = Array(len >> 0).fill(0);
    res[0] = 2;
    let pos = 1;
    let sup = (((n + 1) / 32 >> 0) >> 1) + 1;
    let isnp = Array(sup).fill(0);
    let tprimes = [3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
    for (const tp of tprimes) {
        res[pos++] = tp;
        let ptn = Array(tp).fill(0);
        for (let i = tp - 3 >> 1; i < tp << 5; i += tp) ptn[i >> 5] |= 1 << (i & 31);
        for (let j = 0; j < sup; j += tp) {
            for (let i = 0; i < tp && i + j < sup; i++) {
                isnp[j + i] |= ptn[i];
            }
        }
    }
    let magic = [0, 1, 23, 2, 29, 24, 19, 3, 30, 27, 25, 11, 20, 8, 4, 13, 31, 22, 28, 18, 26, 10, 7, 12, 21, 17, 9, 6, 16, 5, 15, 14];
    let h = n >> 1;
    for (let i = 0; i < sup; i++) {
        for (let j = ~isnp[i]; j != 0; j &= j - 1) {
            let pp = i << 5 | magic[(j & -j) * 0x076be629 >>> 27];
            let p = 2 * pp + 3;
            if (p > n) break;
            res[pos++] = p;
            if (BigInt(p) * BigInt(p) > n) continue;
            for (let q = (p * p - 3) >> 1; q <= h; q += p) isnp[q >> 5] |= 1 << q;
        }
    }
    return res.slice(0, pos);
};

/**
 * 07/03/21 evening
 * https://www.geeksforgeeks.org/sieve-of-eratosthenes/
 * https://www.geeksforgeeks.org/sieve-eratosthenes-0n-time-complexity/
 * 
 * read:
 * https://www.geeksforgeeks.org/segmented-sieve/
 */
const sieveEratosthenes2 = (n) => {
    let prime = Array(n + 1).fill(true);
    for (let p = 2; p * p <= n; p++) {
        if (prime[p] == true) {
            for (let i = p * p; i <= n; i += p) prime[i] = false;
        }
    }
    let res = new Set();
    for (let p = 2; p <= n; p++) {
        if (prime[p]) res.add(p);
    }
    // return prime;
    return res;
};

///////////////////////////////////////////////////////////////////////////////
// https://www.geeksforgeeks.org/primality-test-set-3-miller-rabin/
// Example: https://leetcode.com/problems/prime-palindrome/
const millerRabin = (d, n) => {
    let a = 2 + parseInt(Math.random() % (n - 4));
    let x = Number(powmod(BigInt(a), BigInt(d), BigInt(n)));
    if (x == 1 || x == n - 1) return true;
    while (d != n - 1) {
        x = (x * x) % n;
        d *= 2;
        if (x == 1) return false;
        if (x == n - 1) return true;
    }
    return false;
};

const isPrime1 = (n, k = 4) => { // n < Number.MAX_SAFE_INTERGER
    if (n <= 1 || n == 4) return false;
    if (n <= 3) return true;
    let d = n - 1;
    while (d % 2 == 0) d = parseInt(d / 2);
    for (let i = 0; i < k; i++) {
        if (!millerRabin(d, n)) return false;
    }
    return true;
};


/////////////////////// 03/18/23 morning ///////////////////////////////
// reference: https://www.geeksforgeeks.org/check-whether-number-exactly-three-distinct-factors-not/
// example problem: https://www.acwing.com/problem/content/4877/
const isPrime = (n) => {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) return false;
    }
    return true;
};
