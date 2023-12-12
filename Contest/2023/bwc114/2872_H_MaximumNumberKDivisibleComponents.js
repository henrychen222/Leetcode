/*
 * 09/30/23 night
 * https://leetcode.com/contest/biweekly-contest-114/problems/maximum-number-of-k-divisible-components/
 */

const pr = console.log;

const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };
const packUG = (g, edges) => { for (const [u, v] of edges) { g[u].push(v); g[v].push(u); } };

// Accepted  11/12/23 night
// reference: uwi
const maxKDivisibleComponents = (n, edges, vals, k) => {
    let g = initializeGraph(n), dp = Array(n).fill(0), res = 0;
    packUG(g, edges);
    let [par, ord] = parents(g, 0);
    for (let i = n - 1; i >= 0; i--) {
        let cur = ord[i];
        dp[cur] = vals[cur];
        for (const child of g[cur]) {
            if (par[cur] == child) continue;
            dp[cur] += dp[child];
        }
        dp[cur] %= k;
        if (dp[cur] == 0) res++;
    }
    pr(dp)
    return res;
};

const parents = (g, root) => {
    let n = g.length, par = Array(n).fill(-1), depth = Array(n).fill(0), order = Array(n).fill(0);
    order[0] = root;
    for (let p = 0, r = 1; p < r; p++) {
        let cur = order[p];
        for (const child of g[cur]) {
            if (par[cur] != child) {
                order[r++] = child;
                par[child] = cur;
                depth[child] = depth[cur] + 1;
            }
        }
    }
    return [par, order, depth];
};

/////////////////////////////////////////////////////////////////////////////////////////////////////
// Accepted
// reference: https://leetcode.cn/circle/discuss/slLdgm/
let g, dp, vals;
const maxKDivisibleComponents1 = (n, edges, values, k) => {
    g = initializeGraph(n), dp = Array(n).fill(0), vals = values;
    packUG(g, edges);
    tree_dp(0, -1);
    pr(dp)
    return dp.filter(x => x % k == 0).length; // dp[i]: the ith node subtree sum
};

const tree_dp = (cur, par) => {
    let subTreeSum = vals[cur];
    for (const child of g[cur]) {
        if (child != par) {
            tree_dp(child, cur);
            subTreeSum += dp[child];
        }
    }
    dp[cur] = subTreeSum;
};


const main = () => {
    let n = 5, edges = [[0, 2], [1, 2], [1, 3], [2, 4]], values = [1, 8, 1, 4, 4], k = 6
    let n2 = 7, edges2 = [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6]], values2 = [3, 0, 6, 1, 5, 2, 1], k2 = 3
    pr(maxKDivisibleComponents(n, edges, values, k))
    pr(maxKDivisibleComponents(n2, edges2, values2, k2))
};

main()