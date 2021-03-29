/**
 * 03/28/21 night
 * https://leetcode.com/problems/super-pow/
 */

// Accepted --- 192ms
const superPow = (a, b) => {
    return Number(powmod(BigInt(a), BigInt(b.join("")), 1337n));
};

const powmod = (a, b, mod) => {
    let r = 1n;
    while (b > 0n) {
        if (b % 2n == 1) r = r * a % mod;
        b >>= 1n;
        a = a * a % mod;
    }
    return r;
};