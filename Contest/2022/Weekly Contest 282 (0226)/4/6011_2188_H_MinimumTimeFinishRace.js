/**
 * 02/26/22 evening
 * https://leetcode.com/contest/weekly-contest-282/problems/minimum-time-to-finish-the-race/
 */

const pr = console.log;

// Accepted
// reference: wwwwodddd kmjp
// read: https://leetcode.com/problems/minimum-time-to-finish-the-race/discuss/1802418/Python-Clean-DP-Solution-with-detail-explanation
const MAX = Number.MAX_SAFE_INTEGER;
const minimumFinishTime = (tires, changeTime, numLaps) => {
    let min = Array(20).fill(MAX), dp = Array(numLaps + 1).fill(MAX);
    min[0] = 0;
    for (const [f, r] of tires) {
        let sum = 0;
        for (let i = 1; i < 20; i++) {
            sum += f * r ** (i - 1);
            min[i] = Math.min(min[i], sum);
            if (sum > 1e6) break;
        }
    }
    // pr(min)
    dp[0] = 0;
    for (let i = 1; i <= numLaps; i++) {
        for (let j = 1; j < 20; j++) {
            if (i >= j) dp[i] = Math.min(dp[i], dp[i - j] + min[j] + changeTime);
        }
    }
    // pr(dp)
    return dp[numLaps] - changeTime;
};

/////////////////////////////////////////////////////////////////
// don't know
let a, t, n;
const minimumFinishTime1 = (tires, changeTime, numLaps) => {
    a = tires;
    t = changeTime;
    n = tires.length;
    return dfs(0, 1, 0);
};

const dfs = (pos, lap, sum) => {
    for (let i = 0; i < n; i++) {
        sum += dfs(i, lap, sum);
    }
};

const main = () => {
    let tires = [[2, 3], [3, 4]], changeTime = 5, numLaps = 4;
    let tires2 = [[1, 10], [2, 2], [3, 4]], changeTime2 = 6, numLaps2 = 5;
    pr(minimumFinishTime(tires, changeTime, numLaps))
    pr(minimumFinishTime(tires2, changeTime2, numLaps2))
};

main()