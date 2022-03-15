/**
 * 03/08/22 morning
 * https://leetcode.com/problems/best-team-with-no-conflicts/
 * 
 * reference:
 * https://leetcode.com/contest/weekly-contest-211/ranking uwi
 * https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-1626-best-team-with-no-conflicts/
 */

const pr = console.log;

// Accepted --- 401ms 6.90%
const bestTeamScore = (scores, ages) => {
    let n = scores.length, a = scores.map((x, i) => [x, ages[i]]);
    // pr(a);
    a.sort((x, y) => { // sort by age first then score
        if (x[1] != y[1]) return x[1] - y[1];
        return x[0] - y[0];
    });
    let dp = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (a[j][0] <= a[i][0]) dp[i] = Math.max(dp[i], dp[j]);
        }
        dp[i] += a[i][0];
    }
    // pr(dp);
    return Math.max(...dp);
};

// don't know
const bestTeamScore1 = (scores, ages) => {
    let a = scores.map((x, i) => [x, i, ages[i]]);
    a.sort((x, y) => {
        let [sx, ix, ax] = x, [sy, iy, ay] = y;
        if (sx < sy) {
            if (ax <= ay) { // larger score comes first, keeps older age, or same age doesn't matter
                return -1;
            }
        } else if (sx > sy) {
            if (ax < ay) { // larger score, young age, conflict
                return 1;
            }
        }
        return 0;
    });
    pr(a);
};

const main = () => {
    let scores = [1, 3, 5, 10, 15],
        ages = [1, 2, 3, 4, 5];
    let scores2 = [4, 5, 6, 5],
        ages2 = [2, 1, 2, 1];
    let scores3 = [1, 2, 3, 5],
        ages3 = [8, 9, 10, 1];
    let scores_debug1 = [9,2,8,8,2],
        ages_debug1 = [4,1,3,3,5];
    pr(bestTeamScore(scores, ages))
    pr(bestTeamScore(scores2, ages2))
    pr(bestTeamScore(scores3, ages3))
    pr(bestTeamScore(scores_debug1, ages_debug1)) // 27
};

main()