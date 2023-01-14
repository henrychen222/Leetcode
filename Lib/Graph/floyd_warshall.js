/**
 * 12/07/22 night
 * https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups/
 * 
 * reference:
 * https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm
 */

const floyd_warshall = (n, edges) => {
    let d = [...Array(n)].map(() => Array(n).fill(Number.MAX_SAFE_INTEGER)), start = 1;
    for (let i = start; i < n; i++) d[i][i] = 0;
    for (const [u, v, weight] of edges) {
        let w = weight || 1;
        d[u][v] = w;
        d[v][u] = w;
    }
    for (let k = start; k < n; k++) {
        for (let i = start; i < n; i++) {
            for (let j = start; j < n; j++) {
                if (d[i][j] > d[i][k] + d[k][j]) d[i][j] = d[i][k] + d[k][j];
            }
        }
    }
    return d;
};