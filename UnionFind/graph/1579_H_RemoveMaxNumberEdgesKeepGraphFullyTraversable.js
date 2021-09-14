/**
 * 09/14/21 noon
 * https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/
 */

function DJSet(n) {
    // parent[i] < 0, -parent[i] is the group size which root is i. example: (i -> parent[i] -> parent[parent[i]] -> parent[parent[parent[i]]] ...)
    // parent[i] >= 0, i is not the root and parent[i] is i's parent. example: (... parent[parent[parent[i]]] -> parent[parent[i]] -> parent[i] -> i)
    let parent = Array(n).fill(-1);
    return { find, union, count, equiv, getParent }
    function find(x) {
        return parent[x] < 0 ? x : parent[x] = find(parent[x]);
    }
    function union(x, y) {
        x = find(x);
        y = find(y);
        if (x != y) {
            if (parent[x] < parent[y])[x, y] = [y, x];
            parent[x] += parent[y];
            parent[y] = x;
        }
        return x == y;
    }
    function count() { // total connected groups (value < 0)
        return parent.filter(v => v < 0).length;
    }
    function equiv(x, y) {
        return find(x) == find(y);
    }
    function getParent() {
        return parent;
    }
}

// Accepted --- 370ms 100.00%
// reference: https://leetcode.com/contest/weekly-contest-205/ranking/1/ uwi
// read: https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/discuss/831506/C%2B%2B-Java-Textbook-Union-Find-Data-Structure-Code-with-Explanation-and-comments
const maxNumEdgesToRemove = (n, edges) => {
    let alice = new DJSet(n);
    let bob = new DJSet(n);
    let connect = 0;
    for (const [type, u, v] of edges) {
        if (type == 3 && !alice.equiv(u - 1, v - 1)) { // (u - 1, v - 1) doesn't have same root
            alice.union(u - 1, v - 1);
            bob.union(u - 1, v - 1);
            connect++;
        }
    }
    for (const [type, u, v] of edges) {
        if (type == 1) {
            alice.union(u - 1, v - 1);
        } else if (type == 2) {
            bob.union(u - 1, v - 1);
        }
    }
    if (alice.count() == 1 && bob.count() == 1) { // == 1 means  all nodes united into a single root
        return edges.length - (n - 1 - connect) * 2 - connect;
    }
    return -1;
};

const pr = console.log;
const main = () => {
    let n = 4,
        edges = [
            [3, 1, 2],
            [3, 2, 3],
            [1, 1, 3],
            [1, 2, 4],
            [1, 1, 2],
            [2, 3, 4]
        ];
    let n2 = 4,
        edges2 = [
            [3, 1, 2],
            [3, 2, 3],
            [1, 1, 4],
            [2, 1, 4]
        ];
    let n_debug1 = 13,
        edges_debug1 = [
            [1, 1, 2],
            [2, 1, 3],
            [3, 2, 4],
            [3, 2, 5],
            [1, 2, 6],
            [3, 6, 7],
            [3, 7, 8],
            [3, 6, 9],
            [3, 4, 10],
            [2, 3, 11],
            [1, 5, 12],
            [3, 3, 13],
            [2, 1, 10],
            [2, 6, 11],
            [3, 5, 13],
            [1, 9, 12],
            [1, 6, 8],
            [3, 6, 13],
            [2, 1, 4],
            [1, 1, 13],
            [2, 9, 10],
            [2, 1, 6],
            [2, 10, 13],
            [2, 2, 9],
            [3, 4, 12],
            [2, 4, 7],
            [1, 1, 10],
            [1, 3, 7],
            [1, 7, 11],
            [3, 3, 12],
            [2, 4, 8],
            [3, 8, 9],
            [1, 9, 13],
            [2, 4, 10],
            [1, 6, 9],
            [3, 10, 13],
            [1, 7, 10],
            [1, 1, 11],
            [2, 4, 9],
            [3, 5, 11],
            [3, 2, 6],
            [2, 1, 5],
            [2, 5, 11],
            [2, 1, 7],
            [2, 3, 8],
            [2, 8, 9],
            [3, 4, 13],
            [3, 3, 8],
            [3, 3, 11],
            [2, 9, 11],
            [3, 1, 8],
            [2, 1, 8],
            [3, 8, 13],
            [2, 10, 11],
            [3, 1, 5],
            [1, 10, 11],
            [1, 7, 12],
            [2, 3, 5],
            [3, 1, 13],
            [2, 4, 11],
            [2, 3, 9],
            [2, 6, 9],
            [2, 1, 13],
            [3, 1, 12],
            [2, 7, 8],
            [2, 5, 6],
            [3, 1, 9],
            [1, 5, 10],
            [3, 2, 13],
            [2, 3, 6],
            [2, 2, 10],
            [3, 4, 11],
            [1, 4, 13],
            [3, 5, 10],
            [1, 4, 10],
            [1, 1, 8],
            [3, 3, 4],
            [2, 4, 6],
            [2, 7, 11],
            [2, 7, 10],
            [2, 3, 12],
            [3, 7, 11],
            [3, 9, 10],
            [2, 11, 13],
            [1, 1, 12],
            [2, 10, 12],
            [1, 7, 13],
            [1, 4, 11],
            [2, 4, 5],
            [1, 3, 10],
            [2, 12, 13],
            [3, 3, 10],
            [1, 6, 12],
            [3, 6, 10],
            [1, 3, 4],
            [2, 7, 9],
            [1, 3, 11],
            [2, 2, 8],
            [1, 2, 8],
            [1, 11, 13],
            [1, 2, 13],
            [2, 2, 6],
            [1, 4, 6],
            [1, 6, 11],
            [3, 1, 2],
            [1, 1, 3],
            [2, 11, 12],
            [3, 2, 11],
            [1, 9, 10],
            [2, 6, 12],
            [3, 1, 7],
            [1, 4, 9],
            [1, 10, 12],
            [2, 6, 13],
            [2, 2, 12],
            [2, 1, 11],
            [2, 5, 9],
            [1, 3, 8],
            [1, 7, 8],
            [1, 2, 12],
            [1, 5, 11],
            [2, 7, 12],
            [3, 1, 11],
            [3, 9, 12],
            [3, 2, 9],
            [3, 10, 11]
        ]
    pr(maxNumEdgesToRemove(n, edges))
    pr(maxNumEdgesToRemove(n2, edges2))
    pr(maxNumEdgesToRemove(n_debug1, edges_debug1)) // 114
};

main()