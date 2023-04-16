/*
 * 12/10/22 afternoon
 * https://leetcode.com/contest/biweekly-contest-93/problems/maximum-star-sum-of-a-graph/
 */

const pr = console.log;


const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };
const packUG = (g, edges) => { for (const [u, v] of edges) { g[u].push(v); g[v].push(u); } };

// Accepted
const maxStarSum = (v, edges, k) => {
    let n = v.length, g = initializeGraph(n), res = Number.MIN_SAFE_INTEGER;
    packUG(g, edges);
    // pr(g)
    for (let i = 0; i < n; i++) {
        let a = g[i].map(x => v[x]), sum = v[i], cnt = 0;
        a.sort((x, y) => y - x);
        for (const x of a) {
            if (x > 0 && cnt < k) {
                sum += x;
                cnt++;
            } else {
                break;
            }
        }
        // pr(i, a, sum, cnt)
        res = Math.max(res, sum);
    }
    return res;
};

const main = () => {
    let v = [1, 2, 3, 4, 10, -10, -20], edges = [[0, 1], [1, 2], [1, 3], [3, 4], [3, 5], [3, 6]], k = 2;
    let v2 = [-5], edges2 = [], k2 = 0
    let v_debug1 = [0, -36, 4, 35, 27, -13], edges_debug1 = [[5, 3], [4, 3], [0, 4], [2, 4], [0, 2]], k_debug1 = 1
    pr(maxStarSum(v, edges, k))
    pr(maxStarSum(v2, edges2, k2))
    pr(maxStarSum(v_debug1, edges_debug1, k_debug1))

};

main()