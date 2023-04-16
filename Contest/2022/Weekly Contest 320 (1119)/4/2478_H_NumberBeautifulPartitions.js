/*
 * 11/19/22 evening
 * https://leetcode.com/contest/weekly-contest-320/problems/number-of-beautiful-partitions/
 */

const pr = console.log;

const initialize2DArray = (n, m) => { let d = []; for (let i = 0; i < n; i++) { let t = Array(m).fill(0); d.push(t); } return d; };

// Accepted
// reference: Tlatoani
const mod = 1e9 + 7;
const beautifulPartitions = (s, k, minLength) => {
    let n = s.length, primes = new Set(['2', '3', '5', '7']), dp = initialize2DArray(k + 1, n + 1);
    if (!primes.has(s[0]) || primes.has(s[n - 1])) return 0;
    s = s + '2';
    dp[0][0] = 1;
    for (let i = 0; i < k; i++) {
        let cnt = 0;
        for (let j = 1; j <= n; j++) {
            if (j - minLength >= 0) {
                cnt += dp[i][j - minLength];
                cnt %= mod;
            }
            if (primes.has(s[j]) && !primes.has(s[j - 1])) dp[i + 1][j] = cnt;
        }

    }
    return dp[k][n];
};

const main = () => {
    let s = "23542185131", k = 3, minLength = 2;
    let s2 = "23542185131", k2 = 3, minLength2 = 3;
    let s3 = "3312958", k3 = 3, minLength3 = 1;
    let s_debug1 = "7753639519183359148598823162755335682921461647796985255166979917649578972791819356618496239687361868933775339936875893219782348459522657159781118588765368954599285197845124455559747963186111993765269",
        k_debug1 = 24, minLength_debug1 = 2
    let s_debug2 = "363577464845366242633882565812314878557663956714751151553213993178439798799422294948849997871482556479843862123941282637651573569289858587177545291282835247464424489812542293543527418419748133945854299233386313717357682227732941227182792814146135481297834565311529981162183333892843688628256",
        k_debug2 = 57, minLength_debug2 = 1
    let s_debug3 = "44", k_debug3 = 1, minLength_debug3 = 1;
    pr(beautifulPartitions(s, k, minLength))
    pr(beautifulPartitions(s2, k2, minLength2))
    pr(beautifulPartitions(s3, k3, minLength3))
    pr(beautifulPartitions(s_debug1, k_debug1, minLength_debug1)) // 616385996
    pr(beautifulPartitions(s_debug2, k_debug2, minLength_debug2)) // 611860612
    pr(beautifulPartitions(s_debug3, k_debug3, minLength_debug3)) // 0
};

main()
