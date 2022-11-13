/**
 * 01/29/22 evening
 * https://leetcode.com/contest/weekly-contest-278/problems/find-substring-with-given-hash-value/
 */

const pr = console.log;
const ll = BigInt;

// Accepted
const subStrHash = (s, p, mod, k, hashValue) => {
    p = ll(p), mod = ll(mod);
    let n = s.length, idx = n, sum = 0n, powerTok = 1n;
    for (let i = 0; i < k - 1; i++) powerTok = powerTok * p % mod;
    pr("powerTok", powerTok)
    for (let i = n - 1; i >= 0; i--) {
        let startVal = s[i].charCodeAt() - 96;
        sum = (sum * p + ll(startVal)) % mod;
        pr("step1", sum)
        if (i + k <= n) {
            if (sum == hashValue) idx = i;
            let endVal = s[i + k - 1].charCodeAt() - 96;
            sum = (sum - powerTok * ll(endVal)) % mod;
            if (sum < 0) sum += mod;
            pr("step2", sum)
        }
    }
    pr("idx", idx);
    return s.slice(idx, idx + k);
};

const main = () => {
    let s = "leetcode", power = 7, modulo = 20, k = 2, hashValue = 0;
    let s2 = "fbxzaad", power2 = 31, modulo2 = 100, k2 = 3, hashValue2 = 32;
    let s_debug1 = "xmmhdakfursinye", power_debug1 = 96, modulo_debug1 = 45, k_debug1 = 15, hashValue_debug1 = 21
    let s_debug2 = "xqgfatvtlwnnkxipmipcpqwbxihxblaplpfckvxtihonijhtezdnkjmmk", power_debug2 = 22, modulo_debug2 = 51, k_debug2 = 41, hashValue_debug2 = 9;
    pr(subStrHash(s, power, modulo, k, hashValue))
    pr(subStrHash(s2, power2, modulo2, k2, hashValue2))
    pr(subStrHash(s_debug1, power_debug1, modulo_debug1, k_debug1, hashValue_debug1)) // "xmmhdakfursinye"
    pr(subStrHash(s_debug2, power_debug2, modulo_debug2, k_debug2, hashValue_debug2)) // "xqgfatvtlwnnkxipmipcpqwbxihxblaplpfckvxti"
};

main()
