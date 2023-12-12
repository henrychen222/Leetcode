/*
 * 08/19/23 evening
 * https://leetcode.com/contest/weekly-contest-359/problems/maximize-the-profit-as-the-salesman/
 * https://leetcode.com/problems/maximize-the-profit-as-the-salesman/
 * 
 * similar problem:
 * https://leetcode.com/problems/maximum-earnings-from-taxi/
 */

const pr = console.log;

const initializeGraph = (n) => { let G = []; for (let i = 0; i < n; i++) { G.push([]); } return G; };

// Accepted
// reference: https://leetcode.cn/circle/discuss/SIJedb/
const maximizeTheProfit = (n, offers) => {
    let g = initializeGraph(n);
    for (const [u, v, cost] of offers) g[v].push([u, cost]);
    return reverse_direct_graph_dp(g, 0);
}

const reverse_direct_graph_dp = (g, start) => { // [0, n - 1]
    let n = g.length, dp = Array(n + 1).fill(0);
    // pr(g)
    for (let cur = start; cur < n; cur++) {
        dp[cur + 1] = dp[cur];
        for (const [pre, cost] of g[cur]) {
            dp[cur + 1] = Math.max(dp[cur + 1], dp[pre] + cost);
        }
        // pr(dp)
    }
    return dp[n];
};

const main = () => {
    let n = 5, offers = [[0, 0, 1], [0, 2, 2], [1, 3, 2]];
    let n2 = 5, offers2 = [[0, 0, 1], [0, 2, 10], [1, 3, 2]]
    let n3 = 5, offers3 = [[0, 2, 10], [1, 4, 5], [2, 4, 7]];
    let n_debug1 = 4, offers_debug1 = [[0, 0, 5], [3, 3, 1], [1, 2, 5], [0, 0, 7]];
    pr(maximizeTheProfit(n, offers))
    pr(maximizeTheProfit(n2, offers2))
    pr(maximizeTheProfit(n3, offers3))
    pr(maximizeTheProfit(n_debug1, offers_debug1)) // 13
};

main()