/**
 * 06/02/21 evening
 * https://leetcode.com/problems/prime-palindrome/
 * 
 * reference:
 * https://www.geeksforgeeks.org/primality-test-set-3-miller-rabin/
 */


const powmod = (a, b, mod) => {
    let r = 1n;
    while (b > 0n) {
        if (b % 2n == 1) r = r * a % mod;
        b >>= 1n;
        a = a * a % mod;
    }
    return r;
};

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

const isPrime = (n, k) => {
    if (n <= 1 || n == 4) return false;
    if (n <= 3) return true;
    let d = n - 1;
    while (d % 2 == 0) d = parseInt(d / 2);
    for (let i = 0; i < k; i++) {
        if (!millerRabin(d, n)) return false;
    }
    return true;
};

// Accepted --- 292ms 9.52%
const primePalindrome = (n) => {
    let k = 4;
    if (n >= 9989900) return 100030001;
    // if (n > 9989899) return 100030001; // Accepted --- 244ms 9.52%
    for (let x = n;; x++) {
        if (!isPalindrome(x + '') || !isPrime(x, k)) continue;
        return x;
    }
};

const MAX = 100030002;
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

// MLE
let p = new Set(sieveEratosthenes(MAX));
const primePalindrome1 = (n) => {
    for (let x = n;; x++) {
        if (!isPalindrome(x + '') || !p.has(x)) continue;
        return x;
    }
};

const isPalindrome = (s) => {
    let n = s.length;
    let i = 0;
    let j = n - 1;
    while (i < j) {
        if (s[i++] != s[j--]) return false;
    }
    return true;
};

const pr = console.log;
const main = () => {
    let n = 6;
    let n2 = 8;
    let n3 = 13;
    let n4 = 10 ** 8;
    let debug1 = 9965700;
    let debug2 = 9989900;
    pr(primePalindrome(n));
    pr(primePalindrome(n2));
    pr(primePalindrome(n3));
    pr(primePalindrome(n4));
    pr(primePalindrome(debug1));
    pr(primePalindrome(debug2));
};

main()

// let a = sieveEratosthenes(10 ** 8 + 10);
// pr(a[a.length - 1])

// a = sieveEratosthenes(100030001).filter(x => isPalindrome(x + ''));
// pr(a[a.length - 1], a[a.length - 2], a[a.length - 3]);


// const generatePrime = (n) => {
//     let res = [];
//     let k = 4;
//     for (let x = 0; x < n; x++) {
//         if (isPrime(x, k)) res.push(x);
//     }
//     return res;
// };

// let b = generatePrime(100);
// pr(b);