/*
 * 09/02/23 evening
 * https://leetcode.com/contest/biweekly-contest-112/problems/count-k-subsequences-of-a-string-with-maximum-beauty/
 */

const pr = console.log;

////////////////////////////// Template //////////////////////////////////
const ll = BigInt, mod = ll(1e9 + 7);
let N;

let fact, ifact, inv;
const comb_init = () => {
    fact = Array(N), ifact = Array(N), inv = Array(N);
    fact[0] = ifact[0] = inv[1] = 1n;
    for (let i = 2; i < N; i++) inv[i] = (mod - mod / ll(i)) * inv[mod % ll(i)] % mod;
    for (let i = 1; i < N; i++) {
        fact[i] = fact[i - 1] * ll(i) % mod;
        ifact[i] = ifact[i - 1] * inv[i] % mod;
    }
};

const comb = (n, k) => {
    if (n < k || k < 0) return 0n;
    return fact[n] * ifact[k] % mod * ifact[n - k] % mod;
};
//////////////////////////////////////////////////////////////////////

const ord = (c) => c.charCodeAt();

// Accepted
// reference: https://leetcode.cn/circle/discuss/63Hw65/  https://leetcode.cn/circle/discuss/vSxBlo/
const M = 1e9 + 7;
const countKSubsequencesWithMaxBeauty = (s, k) => {
    N = s.length + 1;
    comb_init();
    let f = Array(26).fill(0), res = 1, pick = 0;
    for (const c of s) f[ord(c) - 97]++;
    f = f.sort((x, y) => y - x).filter(x => x > 0);
    // pr(f)
    for (let i = 0; i < k; i++) {
        if (f[i] >= f[k - 1]) {
            res *= f[i];
            res %= M;
        }
        if (f[i] == f[k - 1]) pick++;
    }
    let lastPick = comb(f.filter(x => x == f[k - 1]).length, pick);
    // pr("res", res, pick, f.filter(x => x == f[k - 1]).length, lastPick)
    res = ll(res) * lastPick % mod;
    // for (const occ of f) {
    //     pr(occ, res)
    //     if (len + occ < k) {
    //         len += occ;
    //         // res *= ll(occ);
    //     } else {
    //         let need = k - len;
    //         pr(occ, "need", need, comb(occ, need))
    //         res += comb(occ, need);
    //         break;
    //     }
    // }
    return res;
};

const main = () => {
    let s = "bcca", k = 2;
    let s2 = "abbcd", k2 = 4;
    let s_debug1 = "znoq", k_debug1 = 3;
    let s_debug2 = "dd", k_debug2 = 2;
    pr(countKSubsequencesWithMaxBeauty(s, k))
    pr(countKSubsequencesWithMaxBeauty(s2, k2))
    pr(countKSubsequencesWithMaxBeauty(s_debug1, k_debug1))
    pr(countKSubsequencesWithMaxBeauty(s_debug2, k_debug2))
};

main()