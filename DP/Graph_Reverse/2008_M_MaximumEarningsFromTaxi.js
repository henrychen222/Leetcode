/**
 * 09/18/21 morning
 * https://leetcode.com/contest/biweekly-contest-61/problems/maximum-earnings-from-taxi/
 * https://leetcode.com/problems/maximum-earnings-from-taxi/
 */

const pr = console.log;

const initializeGraph = (n) => { let G = []; for (let i = 0; i < n; i++) { G.push([]); } return G; };

// Accepted --- 293ms
const maxTaxiEarnings = (n, rides) => { // 08/19/23 night rewrite in template
    let g = initializeGraph(n + 1);
    for (const [u, v, cost] of rides) g[v].push([u, v - u + cost]);
    return reverse_direct_graph_dp(g, 1);
};

const reverse_direct_graph_dp = (g, start) => {
    let n = g.length, dp = Array(n).fill(0);
    for (let cur = start; cur < n; cur++) {
        dp[cur] = Math.max(dp[cur], dp[cur - 1]);
        for (const [pre, cost] of g[cur]) {
            dp[cur] = Math.max(dp[cur], dp[pre] + cost);
        }
    }
    return dp[n - 1];
};

//////////////////////////////////////////////////////////////////////////////
// Accepted
const maxTaxiEarnings1 = (n, rides) => {
    let g = initializeGraph(n);
    for (const [u, v, cost] of rides) g[v - 1].push([u - 1, v - u + cost]);
    // pr(g);
    let dp = Array(n).fill(0);
    for (let i = 1; i < n; i++) {
        dp[i] = Math.max(dp[i], dp[i - 1]);
        for (const [next_node, curCost] of g[i]) {
            dp[i] = Math.max(dp[i], dp[next_node] + curCost);
        }
    }
    // pr(dp)
    return dp[n - 1];
};

const main = () => {
    let n = 5, rides = [[2, 5, 4], [1, 5, 1]];
    let n2 = 20, rides2 = [[1, 6, 1], [3, 10, 2], [10, 12, 3], [11, 12, 2], [12, 15, 2], [13, 18, 1]];
    pr(maxTaxiEarnings(n, rides))
    pr(maxTaxiEarnings(n2, rides2))
};

main()
