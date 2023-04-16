/**
 * 07/02/22 evening
 * https://leetcode.com/contest/weekly-contest-300/problems/number-of-people-aware-of-a-secret/
 */

const pr = console.log;


const mod = 1e9 + 7;

// Accepted
// reference: kmjp
const peopleAwareOfSecret3 = (n, delay, forget) => {
    let dp = Array(n + 1).fill(0), res = 0; // dp[i]: 维护当天新增的人数
    dp[1] = 1;
    for (let d = 2; d <= n; d++) {
        for (let i = 1; i < d; i++) {
            if (d - i >= delay && d - i < forget) {
                dp[d] += dp[i];
                dp[d] %= mod;
            }
        }
    }
    pr(dp);
    for (let i = 1; i <= n; i++) {
        if (n - i < forget) {
            pr(i, dp[i]);
            res = (res + dp[i]) % mod;
        }
    }
    return res;
};

/////////////////////////////////////////////////////////////////////////
const peopleAwareOfSecret2 = (n, delay, forget) => {
    let dp = Array(n + 1).fill(0);
    dp[1] = 1;
    for (let d = 2; d <= n; d++) {
        if (d - forget >= 1 && dp[d - forget] > 0) dp[d - forget]--;
        if (d < delay) {
            dp[d] = dp[d - 1];
        } else {
            dp[d] = dp[d - delay];
        }
        pr(dp[d]);
    }
    pr("final", dp);
    return dp[n];
};

const peopleAwareOfSecret1 = (n, delay, forget) => {
    let dp = Array(n + 1).fill(0);
    dp[1] = 1;
    for (let d = 2; d <= n; d++) {
        if (d - forget >= 1 && dp[d - forget] > 0) dp[d - forget]--;
        let sum = 0;
        for (let i = delay; i <= d; i++) {
            sum = (sum + dp[i]) % mod;
        }
        dp[d] = sum;
        pr("d", d, [delay, d], 'sum', sum);
    }
    let res = 0;
    for (let i = delay; i <= n; i++) res = (res + dp[i]) % mod;
    return res;
};

const main = () => {
    let n = 6, delay = 2, forget = 4;
    let n2 = 4, delay2 = 1, forget2 = 3;
    pr(peopleAwareOfSecret(n, delay, forget))
    pr(peopleAwareOfSecret(n2, delay2, forget2))
};

main()