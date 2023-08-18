/*
 * 04/15/23 night
 * https://leetcode.com/contest/weekly-contest-341/problems/minimize-the-total-price-of-the-trips/
 */

const pr = console.log;

const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };
const packUG = (g, edges) => { for (const [u, v] of edges) { g[u].push(v); g[v].push(u); } };
const initialize2DArray = (n, m) => [...Array(n)].map(() => Array(m).fill(0));

// Accepted
// reference: https://leetcode.cn/circle/discuss/YQDX7V/
let g, cnt, dp, price;
const minimumTotalPrice = (n, edges, p, trips) => {
    g = initializeGraph(n), cnt = Array(n).fill(0), dp = initialize2DArray(n, 2), price = p;
    packUG(g, edges);
    for (const [u, v] of trips) tree_dp(u, -1, v);
    house_robber_III(0, -1);
    let res = 0;
    for (let i = 0; i < n; i++) res += cnt[i] * price[i];
    // pr(res);
    return res - Math.max(...dp[0]);
};

const tree_dp = (cur, par, dest) => {
    if (cur == dest) {
        cnt[cur]++;
        return true;
    }
    for (const child of g[cur]) {
        if (child != par && tree_dp(child, cur, dest)) {
            cnt[cur]++;
            return true;
        }
    }
    return false;
};

const house_robber_III = (cur, par) => {
    dp[cur] = [0, cnt[cur] * price[cur] / 2];
    for (const child of g[cur]) {
        if (child != par) {
            house_robber_III(child, cur)
            dp[cur][0] += Math.max(...dp[child]);
            dp[cur][1] += dp[child][0];
        }
    }
};

const main = () => {
    let n = 4, edges = [[0, 1], [1, 2], [1, 3]], price = [2, 2, 10, 6], trips = [[0, 3], [2, 1], [2, 3]];
    let n2 = 2, edges2 = [[0, 1]], price2 = [2, 2], trips2 = [[0, 0]]
    pr(minimumTotalPrice(n, edges, price, trips))
    pr(minimumTotalPrice(n2, edges2, price2, trips2))
};

main()