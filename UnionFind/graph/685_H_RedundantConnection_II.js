/**
 * 06/24/21 night
 * https://leetcode.com/problems/redundant-connection-ii/
 * 
 * reference:
 * https://www.cnblogs.com/grandyang/p/8445733.html
 * https://leetcode.com/problems/redundant-connection-ii/discuss/108045/C%2B%2BJava-Union-Find-with-explanation-O(n)
 * https://leetcode.com/problems/redundant-connection-ii/discuss/278105/topic
 */

// Accepted --- 72ms 100.00%
// Accepted --- 84ms 95.65%
const findRedundantDirectedConnection = (edges) => {
    let n = edges.length;
    let parent = Array(n + 1).fill(0);
    let first = [];
    let second = [];
    // step 1, check whether there is a node with two parents
    for (const e of edges) {
        if (parent[e[1]] == 0) {
            parent[e[1]] = e[0];
        } else {
            first = [parent[e[1]], e[1]];
            second = [...e];
            // second = e;
            e[1] = 0;
        }
    }
    // pr(edges, "second", second)
    // step 2, union find 
    for (let i = 0; i <= n; ++i) parent[i] = i;
    for (const e of edges) {
        if (e[1] == 0) continue;
        // Now every node only has 1 parent, so root of y is implicitly y
        let [x, y] = [find(parent, e[0]), find(parent, e[1])];
        if (x == y) return first.length == 0 ? e : first;
        parent[x] = y;
    }
    // pr("parent", parent)
    return second;
};

const find = (parent, x) => {
    return x == parent[x] ? x : find(parent, parent[x]);
};

const pr = console.log;
const main = () => {
    let edges = [
        [1, 2],
        [1, 3],
        [2, 3]
    ];
    let edges2 = [
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 1],
        [1, 5]
    ];
    let debug1 = [
        [2, 1],
        [3, 1],
        [4, 2],
        [1, 4]
    ];
    pr(findRedundantDirectedConnection(edges)); // [2,3]
    pr(findRedundantDirectedConnection(edges2));
    pr(findRedundantDirectedConnection(debug1)); // [2,1]
};

main()