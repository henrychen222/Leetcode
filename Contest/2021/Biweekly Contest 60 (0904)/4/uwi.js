/**
 * 09/04/21 morning
 * https://leetcode.com/contest/biweekly-contest-60/problems/the-number-of-good-subsets/
 */

const pr = console.log;

const ll = BigInt;
const mod = 1e9 + 7;
const numberOfGoodSubsets = (a) => {
    let n = a.length;
    let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
    let cnt = Array(31).fill(0);
    for (const e of a) cnt[e]++;
    let ok = Array(31).fill(false);
    let sum = Array(31).fill(0);
    for (let i = 1; i <= 30; i++) {
        let x = i, j = 0;
        for (const p of primes) {
            let round = 0;
            while (x % p == 0) {
                x /= p;
                round++;
            }
            if (round == 1) {
                sum[i] |= 1 << j;
            } else if (round >= 2) {
                ok[i] = true;
                break;
            }
            j++;
        }
    }
    // pr(ok);
    // pr(sum);
    let dp = Array(1 << 11).fill(0);
    dp[0] = 1;
    for (let i = 2; i <= 30; i++) {
        if (ok[i]) continue;
        let x = cnt[i];
        for (let j = 0; j < 1 << 11; j++) {
            if ((j & sum[i]) == 0) {
                dp[j | sum[i]] += dp[j] * x;
                dp[j | sum[i]] %= mod;
            }
        }
    }
    // pr(dp);
    let res = 0;
    for (let i = 1; i < 1 << 11; i++) {
        res += dp[i];
        if (res >= mod) res -= mod;
    }
    // pr(res)
    res = ll(res);
    res *= powmod(2n, ll(cnt[1]), ll(mod));
    return res % ll(mod);
};

const powmod = (a, b, mod) => { let r = 1n; while (b > 0n) { if (b % 2n == 1) r = r * a % mod; b >>= 1n; a = a * a % mod; } return r; };

const main = () => {
    let nums = [1, 2, 3, 4];
    let nums2 = [4, 2, 3, 15];
    pr(numberOfGoodSubsets(nums))
    pr(numberOfGoodSubsets(nums2))
};

main()

// pr(1 << 10, 1 << 11)