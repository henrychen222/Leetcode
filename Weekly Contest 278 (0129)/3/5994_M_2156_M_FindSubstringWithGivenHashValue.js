/**
 * 01/29/22 evening
 * https://leetcode.com/contest/weekly-contest-278/problems/find-substring-with-given-hash-value/
 */

const pr = console.log;

const ll = BigInt;
const powmod = (a, b, mod) => { let r = 1n; while (b > 0n) { if (b % 2n == 1) r = r * a % mod; b >>= 1n; a = a * a % mod; } return r; };

// TLE
const subStrHash = (s, p, mod, k, hashValue) => {
    let n = s.length, d = [];
    for (let i = 0; i < n; i++) {
        let t = s.slice(i, i + k);
        let len = t.length;
        if (len != k) continue;
        // d.push(t);
        let v = hash(t, p, mod);
        // pr(t, v);
        if (v == hashValue) return t;
    }
    // pr(d);
};

// TLE
const subStrHash1 = (s, p, mod, k, hashValue) => {
    let n = s.length, d = [];
    for (let i = 0; i < n; i++) {
        let t = s.slice(i, i + k);
        let len = t.length;
        if (len != k) continue;
        // d.push(t);
        let v = hash(t, p, mod);
        // pr(t, v);
        if (v == hashValue) return t;
    }
    // pr(d);
};

const hash = (s, p, mod) => {
    let n = s.length, sum = 0n;
    for (let i = 0; i < n; i++) {
        let val = s[i].charCodeAt() - 96;
        let pp = powmod(ll(p), ll(i), ll(mod));
        // let each = val * (p ** i);
        // each %= mod;
        let each = ll(val) * pp;
        sum += each;
    }
    sum %= ll(mod);
    return sum;
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


// pr(powmod(2n, 4n, ll(1e9 + 7)));