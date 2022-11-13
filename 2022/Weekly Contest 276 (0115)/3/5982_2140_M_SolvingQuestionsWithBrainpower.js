/**
 * 01/15/21 evening
 * https://leetcode.com/contest/weekly-contest-276/problems/minimum-moves-to-reach-target-score/
 */

const pr = console.log;

// Accepted --- 372ms
const mostPoints = (questions) => {
    let n = questions.length, dp = Array(n + 1).fill(0);
    for (let i = 0; i <= n; i++) {
        if (i + 1 < n) dp[i + 1] = Math.max(dp[i + 1], dp[i]);
        if (i < n) {
            let [p, b] = questions[i], nextI = Math.min(n, i + b + 1);
            dp[nextI] = Math.max(dp[nextI], p + dp[i]);
        }
        // pr(dp);
    }
    return dp[n];
};

// Accepted --- 1023ms
// reference: pku_erutan
let q, n, memo;
const mostPoints1 = (questions) => {
    q = questions, n = questions.length, memo = new Map();
    return dfs(0);
};

const dfs = (i) => {
    if (i >= n) return 0;
    let res = 0;
    let [p, b] = q[i];
    let ke = p + " " + b + " " + i;
    if (memo.has(ke)) return memo.get(ke);
    res = Math.max(res, p + dfs(i + b + 1), dfs(i + 1));
    memo.set(ke, res);
    return res;
};

const main = () => {
    let questions = [[3, 2], [4, 3], [4, 4], [2, 5]];
    let questions2 = [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]];
    let debug1 = [[29, 1], [90, 5], [41, 5], [46, 3], [49, 5], [49, 2], [6, 5], [36, 5], [83, 1], [60, 2], [97, 3], [54, 2], [42, 5], [42, 2], [73, 4], [38, 4], [16, 4], [44, 2], [81, 2], [76, 3], [60, 4], [83, 4], [94, 2], [13, 5], [7, 2], [77, 2], [18, 2], [91, 2], [43, 4], [84, 2], [45, 1], [42, 5], [54, 4], [18, 4], [96, 5], [44, 3], [55, 4], [49, 3], [86, 2], [41, 3], [54, 3], [66, 2], [22, 3], [35, 5], [89, 3], [61, 2], [1, 3], [72, 1], [13, 3], [70, 4], [12, 4], [35, 5], [16, 3], [67, 3], [70, 3], [5, 4], [74, 4], [36, 1], [47, 2], [72, 1]];
    let debug2 = [[21, 2], [1, 2], [12, 5], [7, 2], [35, 3], [32, 2], [80, 2], [91, 5], [92, 3], [27, 3], [19, 1], [37, 3], [85, 2], [33, 4], [25, 1], [91, 4], [44, 3], [93, 3], [65, 4], [82, 3], [85, 5], [81, 3], [29, 2], [25, 1], [74, 2], [58, 1], [85, 1], [84, 2], [27, 2], [47, 5], [48, 4], [3, 2], [44, 3], [60, 5], [19, 2], [9, 4], [29, 5], [15, 3], [1, 3], [60, 2], [63, 3], [79, 3], [19, 1], [7, 1], [35, 1], [55, 4], [1, 4], [41, 1], [58, 5]];
    pr(mostPoints(questions))
    pr(mostPoints(questions2))
    pr(mostPoints(debug1)) // 1113
    pr(mostPoints(debug2)) // 781
};

main()