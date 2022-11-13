/**
 * 11/19/21 evening
 * https://leetcode.com/problems/frog-position-after-t-seconds/
 */

const initializeGraph = (n) => { let G = []; for (let i = 0; i < n; i++) { G.push([]); } return G; };
const packUG = (G, Edges) => { for (const [u, v] of Edges) { G[u].push(v); G[v].push(u); } };

// Accepted --- 100ms 27.27%
// reference: https://leetcode.com/problems/frog-position-after-t-seconds/discuss/532505/Java-Straightforward-BFS-Clean-code-O(N)
const frogPosition = (n, edges, t, target) => {
    let g = initializeGraph(n + 1);
    packUG(g, edges);
    let visit = Array(n + 1).fill(false), q = [1], p = Array(n + 1).fill(0);
    visit[1] = true;
    p[1] = 1;
    while (t--) {
        // pr(q);
        let len = q.length;
        while (len--) {
            let cur = q.shift(), childCnt = 0;
            // pr(cur)
            for (const child of g[cur]) {
                if (!visit[child]) childCnt++;
            }
            for (const child of g[cur]) {
                if (!visit[child]) {
                    visit[child] = true;
                    q.push(child);
                    p[child] = p[cur] / childCnt;
                }
            }
            if (childCnt > 0) p[cur] = 0;
        }
    }
    // pr(p);
    return p[target];
};

const pr = console.log;
const main = () => {
    let n = 7,
        edges = [
            [1, 2],
            [1, 3],
            [1, 7],
            [2, 4],
            [2, 6],
            [3, 5]
        ];
    pr(frogPosition(n, edges, 2, 4))
    pr(frogPosition(n, edges, 1, 7))
    pr(frogPosition(n, edges, 20, 6))
};

main()