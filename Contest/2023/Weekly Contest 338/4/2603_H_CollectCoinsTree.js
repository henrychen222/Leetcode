/*
 * 03/27/23 night
 * https://leetcode.com/contest/weekly-contest-338/problems/collect-coins-in-a-tree/
 */

const pr = console.log;

const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };
const packUG = (g, edges) => { for (const [u, v] of edges) { g[u].push(v); g[v].push(u); } };
const sm = (a) => a.reduce(((x, y) => x + y), 0);

// Accepted
// reference: kmjp
let a, cum, res, v, sum, g;
const collectTheCoins = (coins, edges) => {
    let n = coins.length;
    g = initializeGraph(n), a = coins, res = 0, cum = Array(n), v = Array(n), sum = sm(a);
    packUG(g, edges);
    for (let i = 0; i < n; i++) {
        cum[i] = a[i];
        for (const child of g[i]) cum[i] += a[child];
    }
    tree_dp(0, 0);
    return res;
};

const tree_dp = (cur, par) => {
    v[cur] = a[cur];
    for (const child of g[cur]) {
        if (child != par) {
            v[cur] += tree_dp(child, cur);
        }
    }
    if (cur != par) {
        let x = v[cur] + cum[par] - a[cur];
        let y = (sum - v[cur]) + cum[cur] - a[par];
        if (x != sum && y != sum) res += 2;
    }
    return v[cur];
};

const main = () => {
    let a = [1, 0, 0, 0, 0, 1], edges = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]];
    let a2 = [0, 0, 0, 1, 1, 0, 0, 1], edges2 = [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [5, 6], [5, 7]]
    pr(collectTheCoins(a, edges))
    pr(collectTheCoins(a2, edges2))
};

main()