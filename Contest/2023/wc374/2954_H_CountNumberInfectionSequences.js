/*
 * 12/8/23 night
 * https://leetcode.com/contest/weekly-contest-374/problems/count-the-number-of-infection-sequences/
 */


const pr = console.log;

function Combinatorics(N, mod) {
    let fact = Array(N), ifact = Array(N), inv = Array(N);
    comb_init();
    return { comb }
    function comb_init() {
        fact[0] = ifact[0] = inv[1] = 1n;
        for (let i = 2; i < N; i++) inv[i] = (mod - mod / ll(i)) * inv[mod % ll(i)] % mod;
        for (let i = 1; i < N; i++) {
            fact[i] = fact[i - 1] * ll(i) % mod;
            ifact[i] = ifact[i - 1] * inv[i] % mod;
        }
    }
    function comb(n, k) {
        if (n < k || k < 0) return 0n;
        return fact[n] * ifact[k] % mod * ifact[n - k] % mod;
    }
}

const ll = BigInt, mod = 1e9 + 7, bmod = ll(1e9 + 7)

// TLE java Accepted
// reference: kmjp
const numberOfSequence = (n, sick) => {
    let m = sick.length, C = new Combinatorics(n + 5, bmod), res = 1n, healthy = n - m, p = buildPowerOf2(n, bmod);
    res *= C.comb(healthy, sick[0]);
    res %= bmod;
    healthy -= sick[0];
    res *= C.comb(healthy, n - 1 - sick[m - 1]);
    res %= bmod;
    healthy -= n - 1 - sick[m - 1];
    for (let i = 1; i < m; i++) {
        let d = sick[i] - sick[i - 1] - 1;
        if (d > 0) {
            res *= C.comb(healthy, d);
            res %= bmod;
            healthy -= d;
            res *= p[d - 1];
            res %= bmod;
        }
    }
    return res;
};

function buildPowerOf2(n, mod) {
    let p = Array(n);
    p[0] = 1n;
    for (let i = 1; i < n; i++) p[i] = (p[i - 1] * 2n) % mod;
    return p;
};

const main = () => {
    let n = 5, sick = [0, 4];
    let n2 = 4, sick2 = [1];
    pr(numberOfSequence(n, sick))
    pr(numberOfSequence(n2, sick2))
};

main()