/*
 * 03/11/23 morning
 * https://leetcode.com/contest/weekly-contest-335/problems/number-of-ways-to-earn-points/
 */

const pr = console.log;

const mod = 1e9 + 7;
const waysToReachTarget = (target, types) => {
    let dp = Array(target + 1).fill(0);
    dp[0] = 1;
    for (const [cnt, x] of types) {
        let ndp = Array(target + 1).fill(0);
        for (let use = 0; use <= cnt; use++) {
            for (let i = 0; i + use * x <= target; i++) {
                ndp[i + use * x] += dp[i];
                ndp[i + use * x] %= mod;
            }
        }
        dp = ndp;
    }
    return dp[target];
};


const main = () => {
    let target = 6, types = [[6, 1], [3, 2], [2, 3]];
    let target2 = 5, types2 = [[50, 1], [50, 2], [50, 5]];
    let target3 = 18, types3 = [[6, 1], [3, 2], [2, 3]]
    pr(waysToReachTarget(target, types));
    pr(waysToReachTarget(target2, types2));
    pr(waysToReachTarget(target3, types3));
};

main()