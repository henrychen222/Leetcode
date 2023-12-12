/*
 * 11/11/23 night
 * https://leetcode.com/contest/biweekly-contest-117/problems/number-of-strings-which-can-be-rearranged-to-contain-substring/
 */

const pr = console.log;


/*
l...
le...
lee...
leet...
*/
const powmod = (a, b, mod) => { let r = 1; while (b > 0) { if (b & 1) r = multi_mod(r, a, mod); b >>= 1; a = multi_mod(a, a, mod); } return r; };
const multi_mod = (x, y, mod) => Number(ll(x) * ll(y) % ll(mod));
const minus_mod = (x, y, mod) => ((x - y) % mod + mod) % mod;

// const add_mod = (x, y, mod) => (x + y) % mod;


const ll = BigInt, mod = 1e9 + 7, bmod = ll(mod);
// const stringCount = (n) => {
//     let A = powmod(26, n-1, mod), B = powmod(26, n-2, mod), C = powmod(26, n-3, mod), D = powmod(26, n-4, mod);
//     pr(A, B, C, D)
//     let AB = add_mod(A, B, mod), CD = add_mod(C, D, mod), res = add_mod(AB, CD, mod);
//     return res;
// };

// Accepted
// reference:
const stringCount = (n) => {
    let tot = powmod(26, n, mod),
        l = t = powmod(25, n, mod),
        e = n * powmod(25, n - 1, mod) + powmod(25, n, mod),
        lt = powmod(24, n, mod),
        le = et = n * powmod(24, n - 1, mod) + powmod(24, n, mod),
        LET = n * powmod(23, n - 1, mod) + powmod(23, n, mod)
    pr(tot, l, t, e, lt, le, et, LET)
    let res = tot;
    res = minus_mod(res, l, mod);
    res = minus_mod(res, t, mod);
    res = minus_mod(res, e, mod);
    res += lt;
    res %= mod;
    res += le;
    res %= mod;
    res += et;
    res %= mod;
    res = minus_mod(res, LET, mod);
    return res;
};

const factorialMod = (m, n) => {
    let res = 1n, cnt = 0;
    for (let i = m; i > 0; i--) {
        if (cnt == n) break;
        res *= ll(i);
        res %= mod;
        cnt++;
    }
    return res;
};

const main = () => {
    let n = 4;
    let n2 = 10;
    let n_debug1 = 9;
    pr(stringCount(n))
    pr(stringCount(n2))
    pr(stringCount(n_debug1)) // 947613240
};

main()