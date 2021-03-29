/**
 * 03/27/21 night
 * 
 * example question:
 * https://atcoder.jp/contests/arc113/tasks/arc113_a
 * https://leetcode.com/problems/maximize-number-of-nice-divisors/
 * https://leetcode.com/problems/super-pow/
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