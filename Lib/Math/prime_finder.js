// 04/19/21 afternoon + evening
/**
 * algorithm:
 * https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
 * 
 * Usage Example: 
 * https://codingcompetitions.withgoogle.com/kickstart/round/0000000000435a5b/000000000077a8e6
 */

const lge = Math.log;
const sieveBySegment = (low, high, primes) => { // low: BigInt, high: BigInt, primes: int[]
    let m = Number(high - low + 1n);
    let isp = Array(m).fill(true);
    if (low == 1n) isp[0] = false;
    for (const p of primes) {
        let pb = BigInt(p);
        let ppb = pb * pb;
        if (ppb > high) break;
        let sp = (-low) % pb;
        if (sp < 0) sp += pb;
        if (sp + low <= ppb) sp = ppb - low;
        for (let u = Number(sp); u < m; u += p) isp[u] = false;
    }
    return isp;
};

const sieveEratosthenes = (n) => { // n: int
    if (n < 32) {
        let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
        for (let i = 0; i < primes.length; i++) {
            if (n < primes[i]) return primes.slice(0, i);
        }
        return primes;
    }
    let u = n + 32;
    let lu = lge(u);
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