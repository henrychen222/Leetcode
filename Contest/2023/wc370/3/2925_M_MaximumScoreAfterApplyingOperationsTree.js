/*
 * 11/05/23 morning
 * https://leetcode.com/contest/weekly-contest-370/problems/maximum-score-after-applying-operations-on-a-tree/
 */

const pr = console.log;

const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };
const packUG = (g, edges) => { for (const [u, v] of edges) { g[u].push(v); g[v].push(u); } };
const sm = (a) => a.reduce(((x, y) => x + y), 0);

// Accepted
// reference: https://leetcode.cn/circle/discuss/WsstBS/  https://leetcode.cn/circle/discuss/KvdrY9/

/*
正难则反，先把所有vals[i]加到答案中, 然后考虑哪些vals[i]不能选。

设当前节点为cur, 计算以cur为根的子树是健康时, 失去的最小分数。那么答案就是: vals的元素和 - 以0为根的子树是健康时失去的最小分数

用选或不选分类讨论：
不选vals[cur], 那么它的所有子孙节点都可以选, 失去的最小分数就是vals[cur]
选 als[cur], 问题变成以child为根的子树是健康时，失去的最小分数, 这里child是cur的儿子。如果有多个儿子，累加失去的最小分数.
*/
let g, vals, res;
const maximumScoreAfterOperations1 = (edges, values) => {
    let n = values.length;
    g = initializeGraph(n), vals = values, res = sm(vals);
    packUG(g, edges);
    res -= tree_dp(0, -1);;
    return res;
};

const tree_dp = (cur, par) => { // 计算以cur为根的子树是健康时，失去的最小分数
    if (cur != 0 && g[cur].length == 1) return vals[cur]; // cur is leaf, cur != 0 避免误把根节点当作叶子
    let subTreeSum = 0; // loss 不选vals[x]
    for (const child of g[cur]) {
        if (child != par) {
            subTreeSum += tree_dp(child, cur); // 计算以child为根的子树是健康时，失去的最小分数
        }
    }
    return Math.min(vals[cur], subTreeSum); // 选/不选vals[x], 取最小值
};


const initialize2DArray = (n, m) => [...Array(n)].map(() => Array(m).fill(0));

// Accepted --- uwi 280ms
const maximumScoreAfterOperations = (edges, vals) => {
    let n = vals.length, g = initializeGraph(n), dp = initialize2DArray(n, 2);
    packUG(g, edges);
    let [par, ord] = parents(g, 0);
    for (let i = n - 1; i >= 0; i--) {
        let cur = ord[i], sum0 = 0, sum1 = 0, leaf = 0;
        for (const child of g[cur]) {
            if (child != par[cur]) {
                leaf++;
                // 选和不选
                sum0 += Math.max(dp[child][0], dp[child][1]);
                sum1 += dp[child][1];
            }
        }
        dp[cur][0] = sum0 + vals[cur];
        dp[cur][1] = leaf == 0 ? 0 : Math.max(sum1 + vals[cur], sum0);
    }
    pr(dp)
    return dp[0][1];
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

const main = () => {
    let edges = [[0, 1], [0, 2], [0, 3], [2, 4], [4, 5]], vals = [5, 2, 5, 2, 1, 1]
    let edges2 = [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6]], vals2 = [20, 10, 9, 7, 4, 3, 5]
    let edges_debug1 = [[0, 1]], vals_debug1 = [2, 1]
    pr(maximumScoreAfterOperations(edges, vals))
    pr(maximumScoreAfterOperations(edges2, vals2))
    pr(maximumScoreAfterOperations(edges_debug1, vals_debug1)) // 2
};

main()