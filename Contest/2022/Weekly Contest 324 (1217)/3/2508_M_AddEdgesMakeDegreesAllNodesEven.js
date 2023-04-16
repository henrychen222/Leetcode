/*
 * 12/17/22 evening
 * https://leetcode.com/contest/weekly-contest-324/problems/add-edges-to-make-degrees-of-all-nodes-even/
 */

const pr = console.log;

const initializeGraphSet = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push(new Set()); } return g; };
const packUG_Set = (g, edges) => { for (const [u, v] of edges) { g[u - 1].add(v - 1); g[v - 1].add(u - 1); } };

const isPossible = (n, edges) => {
    let g = initializeGraphSet(n);
    packUG_Set(g, edges);
    // pr(g);
    return canAddAtMost2EdgesMakeALLNodesDegreeEven(g);
};

// Accepted
// reference:https://cs.stackexchange.com/questions/135300/graph-add-at-most-2-edges-to-make-all-graph-nodes-degree-even
const canAddAtMost2EdgesMakeALLNodesDegreeEven = (g) => {
    let oddNodes = [];
    for (let i = 0; i < g.length; i++) {
        let deg = g[i].size;
        if (deg % 2 == 1) {
            oddNodes.push(i);
        }
    }
    // pr(oddNodes.length, oddNodes)
    if (oddNodes.length == 0) { // 不加边
        return true;
    } else if (oddNodes.length == 2) { // 加一条边
        let [a, b] = oddNodes;
        for (let k = 0; k < g.length; k++) { // a <-> k  b <-> k (k as transition node)
            if (!g[a].has(k) && !g[b].has(k)) return true;
        }
        return false;
    } else if (oddNodes.length == 4) { // 加两条边
        let [a, b, c, d] = oddNodes; // find two pairs
        if (!g[a].has(b) && !g[c].has(d)) return true;
        if (!g[a].has(c) && !g[b].has(d)) return true;
        if (!g[a].has(d) && !g[c].has(b)) return true;
        return false;
    } else {
        return false;
    }
}

// WA
function isPossible1(n, edges) {
    // Step 1: Count the number of odd degree nodes
    let oddDegreeCount = 0;
    for (let i = 0; i < n; i++) {
        let degree = 0;
        for (let j = 0; j < edges.length; j++) {
            if (edges[j][0] === i + 1 || edges[j][1] === i + 1) {
                degree++;
            }
        }
        if (degree % 2 === 1) {
            oddDegreeCount++;
        }
    }
    if (oddDegreeCount > 2) {
        return false;
    }

    // Step 2: Add the necessary edges to make the degree of each node even
    if (oddDegreeCount === 2) {
        // Add two edges to the graph
        edges.push([1, 2]);
        edges.push([3, 4]);
    } else if (oddDegreeCount === 0) {
        // Add one edge to the graph
        edges.push([1, 2]);
    }
    return true;
}

const main = () => {
    let n = 5, edges = [[1, 2], [2, 3], [3, 4], [4, 2], [1, 4], [2, 5]];
    let n2 = 4, edges2 = [[1, 2], [3, 4]];
    let n3 = 4, edges3 = [[1, 2], [1, 3], [1, 4]]
    pr(isPossible(n, edges))
    pr(isPossible(n2, edges2))
    pr(isPossible(n3, edges3))
};

main()
