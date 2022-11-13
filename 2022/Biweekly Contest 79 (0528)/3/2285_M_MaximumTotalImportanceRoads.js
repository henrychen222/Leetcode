/**
 * 05/28/22 morning
 * https://leetcode.com/contest/biweekly-contest-79/problems/maximum-total-importance-of-roads/
 */

const pr = console.log;

const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };
const packUG = (g, edges) => { for (const [u, v] of edges) { g[u].push(v); g[v].push(u); } };

// Accepted
const maximumImportance = (n, roads) => {
    let g = initializeGraph(n);
    packUG(g, roads);
    g = g.map((x, i) => [[...x], i]);
    g.sort((x, y) => x[0].length - y[0].length);
    // pr(g);
    let res = Array(n).fill(0), assign = 1, sum = 0;
    for (const [, node] of g) res[node] = assign++;
    // pr(res);
    for (const [x, y] of roads) {
        sum += res[x];
        sum += res[y];
    }
    return sum;
};

const main = () => {
    let n = 5, roads = [[0, 1], [1, 2], [2, 3], [0, 2], [1, 3], [2, 4]];
    let n2 = 5, roads2 = [[0, 3], [2, 4], [1, 3]];
    pr(maximumImportance(n, roads))
    pr(maximumImportance(n2, roads2))
};

main()