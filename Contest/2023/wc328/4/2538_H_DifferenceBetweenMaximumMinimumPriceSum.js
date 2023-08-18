/*
 * 01/14/22 evening
 * https://leetcode.com/contest/weekly-contest-328/problems/difference-between-maximum-and-minimum-price-sum/
 */

const pr = console.log;

const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };
const packUG = (g, edges) => { for (const [u, v] of edges) { g[u].push(v); g[v].push(u); } };

// Accepted
// reference: https://leetcode.com/problems/difference-between-maximum-and-minimum-price-sum/solutions/3052569/template-for-tree-based-dp-problems-with-edges-inputs/
let g, p, memo;
const maxOutput = (n, edges, price) => {
    g = initializeGraph(n), p = price, memo = new Map();
    packUG(g, edges);
    let res = [];
    for (let i = 0; i < n; i++) {
        let max = dfs(i, -1), v = max - p[i];
        // pr("v", v);
        res.push(v);
    }
    // pr(res);
    return Math.max(...res);
}

const dfs = (cur, par) => {
    // pr(cur, par)
    let ke = cur + ' ' + par;
    if (memo.has(ke)) return memo.get(ke);
    let d = [0];
    for (const child of g[cur]) {
        if (child != par) {
            let v = dfs(child, cur);
            d.push(v);
        }
    }
    // pr("d", d);
    let res = p[cur] + Math.max(...d);
    memo.set(ke, res);
    return res;
};

const main = () => {
    let n = 6, edges = [[0, 1], [1, 2], [1, 3], [3, 4], [3, 5]], price = [9, 8, 7, 6, 10, 5];
    let n2 = 3, edges2 = [[0, 1], [1, 2]], price2 = [1, 1, 1];
    pr(maxOutput(n, edges, price));
    pr(maxOutput(n2, edges2, price2));
};

main()