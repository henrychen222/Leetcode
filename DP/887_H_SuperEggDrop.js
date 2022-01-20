/**
 * 01/20/22 afternoon
 * https://leetcode.com/problems/super-egg-drop/
 * 
 * reference:
 * https://www.cnblogs.com/grandyang/p/11048142.html
 * https://www.acwing.com/solution/leetcode/content/579/
 * https://leetcode.com/contest/weekly-contest-97/ranking
 */

const pr = console.log;

// Accepted --- 123ms 70.83%
const superEggDrop = (k, n) => {
    let dp = Array(k + 1).fill(0), res = 0;
    while (dp[k] < n) {
        for (let i = k; i > 0; i--) {
            dp[i] = dp[i] + dp[i - 1] + 1;
        }
        // pr(dp);
        res++;
    }
    return res;
};

const main = () => {
    let k = 1,
        n = 2;
    let k2 = 2,
        n2 = 6;
    let k3 = 3,
        n3 = 14;
    pr(superEggDrop(k, n))
    pr(superEggDrop(k2, n2))
    pr(superEggDrop(k3, n3))
};

main()