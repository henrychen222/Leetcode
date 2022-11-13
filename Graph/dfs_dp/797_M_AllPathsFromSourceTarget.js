/**
 * 01/23/21 evening
 * https://leetcode.com/problems/all-paths-from-source-to-target/
 */

const pr = console.log;

// Accepted --- 157ms 33.62%
let G, n;
const allPathsSourceTarget1 = (g) => {
    G = g;
    n = g.length;
    let res = [], path = [];
    dfs(0, path, res);
    return res;
};

const dfs = (node, path, res) => {
    // pr(node, path, res)
    path.push(node);
    if (node == n - 1) res.push([...path]);
    for (const child of G[node]) {
        // pr("child", child);
        dfs(child, path, res);
    }
    path.pop();
};

// Accepted --- 116ms 66.88%
// reference: https://leetcode.com/problems/all-paths-from-source-to-target/discuss/1008179/Python-DFS-and-BFS
const allPathsSourceTarget = (g) => {
    let n = g.length, q = [[0, [0]]], res = [];
    while (q.length) {
        let [cur, path] = q.shift();
        // pr("cur", cur, path)
        if (cur == n - 1) {
            res.push([...path]);
        }
        for (const child of g[cur]) {
            q.push([child, path.concat([child])]);
        }
    }
    return res;
};

const main = () => {
    let graph = [
        [1, 2],
        [3],
        [3],
        []
    ];
    let graph2 = [
        [4, 3, 1],
        [3, 2, 4],
        [3],
        [4],
        []
    ];
    pr(allPathsSourceTarget(graph))
    pr(allPathsSourceTarget(graph2))
};

main()