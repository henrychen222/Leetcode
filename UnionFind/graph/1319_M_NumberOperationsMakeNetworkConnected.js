/**
 * 06/13/22 morning
 * https://leetcode.com/problems/number-of-operations-to-make-network-connected/
 */

const pr = console.log;

function DJSet(n) {
    // parent[i] < 0, -parent[i] is the group size which root is i. example: (i -> parent[i] -> parent[parent[i]] -> parent[parent[parent[i]]] ...)
    // parent[i] >= 0, i is not the root and parent[i] is i's parent. example: (... parent[parent[parent[i]]] -> parent[parent[i]] -> parent[i] -> i)
    let parent = Array(n).fill(-1);
    return { find, union, count, equiv, par }
    function find(x) {
        return parent[x] < 0 ? x : parent[x] = find(parent[x]);
    }
    function union(x, y) {
        x = find(x);
        y = find(y);
        if (x == y) return false;
        if (parent[x] < parent[y])[x, y] = [y, x];
        parent[x] += parent[y];
        parent[y] = x;
        return true;
    }
    function count() { // total groups
        return parent.filter(v => v < 0).length;
    }
    function equiv(x, y) { // isConnected
        return find(x) == find(y);
    }
    function par() {
        return parent;
    }
}

// Accepted --- 207ms 52.87%
const makeConnected = (n, connections) => {
    if (connections.length < n - 1) return -1;
    let ds = new DJSet(n);
    for (const [x, y] of connections) ds.union(x, y);
    return ds.count() - 1;
};

const main = () => {
    let n = 4,
        connections = [
            [0, 1],
            [0, 2],
            [1, 2]
        ];
    let n2 = 6,
        connections2 = [
            [0, 1],
            [0, 2],
            [0, 3],
            [1, 2],
            [1, 3]
        ];
    let n3 = 6,
        connections3 = [
            [0, 1],
            [0, 2],
            [0, 3],
            [1, 2]
        ];
    pr(makeConnected(n, connections))
    pr(makeConnected(n2, connections2))
    pr(makeConnected(n3, connections3))
};

main()