/*
07/09/22 night

Example:
https://leetcode.com/problems/count-the-number-of-ideal-arrays/
https://atcoder.jp/contests/abc208/tasks/abc208_f
https://leetcode.com/problems/count-anagrams/

comb_init(): prepare large number mod combination, which is C(n, k) % mod.
comb():
Math combination C(n, k) = n! / (k! * (n - k!)) https://en.wikipedia.org/wiki/Combination

normal transition: C(n, k) = n! / (k! * (n - k!))  = n! / k! / (n - k)! = n! * Inverse(k!) * Inverse((n-k)!)
with mod: C(n, k) % mod = ((n! % mod) / ((k! % mod) * ((n - k!) % mod))) % mod = ((n! % mod)  / (k! % mod) / (n - k!) % mod)) % mod = (mod(n!) * modInverse(k!) * modInverse((n-k)!)) % mod

so we need (factorial of n) % mod,  (inverse factorial of k) % mod, (inverse factorial of n - k) % mod.

inv: mod inverse https://cp-algorithms.com/algebra/module-inverse.html#mod-inv-all-num
fact: factorial
ifact: inverse factorial
*/


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

// const ll = BigInt, mod = ll(1e9 + 7), N = 1e5 + 5;

// let fact, ifact, inv;
// const comb_init = () => {
//     fact = Array(N), ifact = Array(N), inv = Array(N);
//     fact[0] = ifact[0] = inv[1] = 1n;
//     for (let i = 2; i < N; i++) inv[i] = (mod - mod / ll(i)) * inv[mod % ll(i)] % mod;
//     for (let i = 1; i < N; i++) {
//         fact[i] = fact[i - 1] * ll(i) % mod;
//         ifact[i] = ifact[i - 1] * inv[i] % mod;
//     }
// };

// const comb = (n, k) => {
//     if (n < k || k < 0) return 0n;
//     return fact[n] * ifact[k] % mod * ifact[n - k] % mod;
// };