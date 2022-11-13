/*
* 09/03/22 evening
* https://leetcode.com/contest/weekly-contest-309/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/
*/

const pr = console.log;

const powmod = (a, b, mod) => { let r = 1n; while (b > 0n) { if (b % 2n == 1) r = r * a % mod; b >>= 1n; a = a * a % mod; } return r; };

// WA
const ll = BigInt, bmod = ll(1e9 + 7);
const numberOfWays1 = (startPos, endPos, k) => {
    let n = k - (Math.abs(endPos - startPos));
    if (n % 2 != 0) return 0;
    let res = powmod(2n, ll(n), bmod);
    pr("n", n, 'res', res)
    return res;
};

// WA
const mod = 1e9 + 7;
const numberOfWays = (startPos, endPos, k) => {
    let dis = Math.abs(endPos - startPos), n = k - dis, dp = Array(n).fill(0);
    //pr(dis, n)
    if (n % 2 != 0) return 0;
    dp[0] = 1;
    for (let i = 1; i < n; i++) {
        if (k > 0) {
            dp[i] = dp[i - 1] + 2;
            k--;
            dp[i] %= mod;
        }
    }
    pr(dp)
    return (dp[n-1] || 0);
};

const main = () => {
    let startPos = 1, endPos = 2, k = 3;
    let startPos2 = 2, endPos2 = 5, k2 = 10;
    let startPos_debug1 = 1, endPos_debug1 = 1000, k_debug1 = 999;
    let startPos_debug2 = 272, endPos_debug2 = 270, k_debug2 = 6;
    let startPos_debug3 = 671, endPos_debug3 = 669, k_debug3 = 4;
    pr(numberOfWays(startPos, endPos, k))
    pr(numberOfWays(startPos2, endPos2, k2))
    pr(numberOfWays(startPos_debug1, endPos_debug1, k_debug1)) // 1
    pr(numberOfWays(startPos_debug2, endPos_debug2, k_debug2)) // 15
    pr(numberOfWays(startPos_debug3, endPos_debug3, k_debug3)) // 4
};

main()