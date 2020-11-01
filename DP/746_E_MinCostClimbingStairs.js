/**
 * 8.11 night  10.31 evening complete
 * https://leetcode.com/problems/min-cost-climbing-stairs/
 * 
 * reference: 
 * https://www.cnblogs.com/grandyang/p/8343874.html
 */


// Accepted --- 92ms 32.61%  DFS with memo
let n;
const minCostClimbingStairs = (cost) => {
    n = cost.length;
    let memo = new Map();
    return dfs(cost, n, memo);
};

const dfs = (cost, idx, memo) => {
    if (memo.has(idx)) return memo.get(idx);
    if (idx <= 1) {
        memo.set(idx, cost[idx]);
        return memo.get(idx);
    }
    let step = (idx == n) ? 0 : cost[idx];
    let tmp = step + Math.min(dfs(cost, idx - 1, memo), dfs(cost, idx - 2, memo));
    memo.set(idx, tmp);
    // console.log(memo);
    return memo.get(idx);
};

// Accepted --- 80ms 86.19%
const minCostClimbingStairs_DP2 = (cost) => {
    let n = cost.length;
    let dp = new Array(n + 1).fill(0);
    for (let i = 2; i < n + 1; i++) {
        dp[i] = Math.min(dp[i - 2] + cost[i - 2], dp[i - 1] + cost[i - 1]);
    }
    // console.log(dp);
    return dp[n];
};

// Accepted --- 84ms 69.05%
const minCostClimbingStairs_DP = (cost) => {
    let n = cost.length;
    let dp = new Array(n).fill(0);
    dp[0] = cost[0];
    dp[1] = cost[1];
    for (let i = 2; i < n; i++) {
        dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
    }
    console.log(dp);
    return Math.min(dp[n - 1], dp[n - 2]);
};

// the first case why not start on 10, climb 2 step to top, min is 10
// let set = new Set();
// let n;
// const minCostClimbingStairs1 = (cost) => {
//     set.clear();
//     n = cost.length;
//     dfs(cost, 0, 0);
//     console.log(set);
//     dfs(cost, 1, 0);
//     console.log(set);
// };

// const dfs = (cost, idx, sum) => {
//     sum += cost[idx];
//     // console.log(idx, cost[idx]);
//     if (idx == n - 1) {
//         console.log(sum, idx);
//         sum -= cost[idx];
//         set.add(sum);
//         return;
//     }
//     if (idx + 1 < n) {
//         dfs(cost, idx + 1, sum);
//     }
//     if (idx + 2 < n) {
//         dfs(cost, idx + 2, sum);
//     }
// };

const main = () => {
    let cost = [10, 15, 20];
    let cost2 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
    console.log(minCostClimbingStairs(cost));
    console.log(minCostClimbingStairs(cost2));
};

main()


// // don't know
// const minCostClimbingStairs = (cost) => {
//     let climb = [];
//     for (let i = 2; i < cost.length; i++) {
//         let r = cost[i - 1];
//         let l = cost[i - 2];
//         if (r < l) {
//             climb.push(r);
//         } else if (l < r) {
//             climb.push(l);
//         } else {
//             next = cost[i];
//             if (r < next) {
//                 climb.push(r);
//             } else {
//                 climb.push(l);
//             }
//         }
//     }
//     console.log(climb);
// };