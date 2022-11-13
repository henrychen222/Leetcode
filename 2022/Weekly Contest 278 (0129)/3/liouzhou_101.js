/**
 * 01/29/22 evening
 * https://leetcode.com/contest/weekly-contest-278/problems/find-substring-with-given-hash-value/
 */

const pr = console.log;

const ll = BigInt;
const powmod = (a, b, mod) => { let r = 1n; while (b > 0n) { if (b % 2n == 1) r = r * a % mod; b >>= 1n; a = a * a % mod; } return r; };

const subStrHash = (s, p, mod, k, hashValue) => {
  let n = s.length, sum = 0n;
  p = ll(p), mod = ll(mod);
  for (let i = n - 1; i >= 0; i--) {
    let startVal = s[i].charCodeAt() - 96;
    sum = (sum * p + ll(startVal)) % mod;
    pr("step1", sum)
    if (i + k < n) {
      let endVal = s[i + k].charCodeAt() - 96;
      let pp = powmod(p, ll(k), mod);
      pr("step2 before", sum, endVal, sum - pp * ll(endVal), (sum - pp * ll(endVal)) % mod);
      sum = (sum - pp * ll(endVal)) % mod;
      pr("step2 after", sum);
    }
    // pr(sum, s.slice(i, i + k))
    if (sum == hashValue) return s.slice(i, i + k);
  }
};

const main = () => {
  let s = "leetcode", power = 7, modulo = 20, k = 2, hashValue = 0;
  let s2 = "fbxzaad", power2 = 31, modulo2 = 100, k2 = 3, hashValue2 = 32;
  let s_debug1 = "xmmhdakfursinye", power_debug1 = 96, modulo_debug1 = 45, k_debug1 = 15, hashValue_debug1 = 21
  let s_debug2 = "xqgfatvtlwnnkxipmipcpqwbxihxblaplpfckvxtihonijhtezdnkjmmk", power_debug2 = 22, modulo_debug2 = 51, k_debug2 = 41, hashValue_debug2 = 9;
  // pr(subStrHash(s, power, modulo, k, hashValue))
  pr(subStrHash(s2, power2, modulo2, k2, hashValue2))
  // pr(subStrHash(s_debug1, power_debug1, modulo_debug1, k_debug1, hashValue_debug1)) // "xmmhdakfursinye"
  // pr(subStrHash(s_debug2, power_debug2, modulo_debug2, k_debug2, hashValue_debug2)) // "xqgfatvtlwnnkxipmipcpqwbxihxblaplpfckvxti"
};

main()


// pr(powmod(2n, 4n, ll(1e9 + 7)));

pr(-282 % 100)
pr(-5 % 100) // python % value is different