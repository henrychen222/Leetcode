/**
 * 07/09/22 night
 * https://leetcode.com/contest/weekly-contest-301/problems/count-the-number-of-ideal-arrays/
 * 
 * reference: cuiaoxiang kmjp
 */

const pr = console.log;

const ll = BigInt, mod = ll(1e9 + 7), N = 1e4 + 15;

const hcomb = (p, q) => p == 0 && q == 0 ? 1 : comb(p + q - 1, q);
const comb_init = () => {
    fact[0] = ifact[0] = inv[1] = 1n; // factorial, inverse factorial
    for (let i = 2; i < N; i++) inv[i] = (mod - mod / ll(i)) * inv[mod % ll(i)] % mod;
    for (let i = 1; i < N; i++) {
        fact[i] = fact[i - 1] * ll(i) % mod;
        ifact[i] = ifact[i - 1] * inv[i] % mod;
    }
    // pr("fact", fact.slice(0, 10))
    // pr("ifact", ifact.slice(0, 10))
};

// combination mod pick k from n
const comb = (n, k) => {
    if (n < k || k < 0) return 0;
    // pr("f", fact[n], fact[k], ifact[n - k])
    return fact[n] * ifact[k] % mod * ifact[n - k] % mod;
};

// https://www.codechef.com/LTIME01/problems/NUMFACT
const number_factor = (n) => {
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

let fact, ifact, inv;
const idealArrays = (n, maxValue) => {
    fact = Array(N).fill(0), ifact = Array(N).fill(0), inv = Array(N).fill(0);
    comb_init();
    let res = 0n;
    for (let x = 1; x <= maxValue; x++) {
        let perm = 1n, m = number_factor(x);
        for (const [x, occ] of m) {
            perm = perm * hcomb(n, occ) % mod;
            // pr("n", n, "occ", occ, "hcomb", hcomb(n, occ))
        }
        res += perm;
        // pr(perm, res);
    }
    return res % mod;
};

const main = () => {
    let n = 2, maxValue = 5;
    let n2 = 5, maxValue2 = 3;
    let n_debug1 = 10000, maxValue_debug1 = 10000;
    pr(idealArrays(n, maxValue))
    pr(idealArrays(n2, maxValue2))
    pr(idealArrays(n_debug1, maxValue_debug1))
};

main()