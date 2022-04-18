/**
 * 04/18/22 afternoon
 * https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/
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
        if (x != y) {
            if (parent[x] < parent[y])[x, y] = [y, x];
            parent[x] += parent[y];
            parent[y] = x;
        }
        return x == y;
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

// Accepted --- 140ms 69.91%
const removeStones = (g) => {
    let n = g.length, ds = new DJSet(n);
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (g[i][0] == g[j][0] || g[i][1] == g[j][1]) ds.union(i, j);
        }
    }
    // pr(ds.par());
    return n - ds.count();
};

const main = () => {
    let stones = [
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 2],
        [2, 1],
        [2, 2]
    ];
    let stones2 = [
        [0, 0],
        [0, 2],
        [1, 1],
        [2, 0],
        [2, 2]
    ];
    let stones3 = [
        [0, 0]
    ];
    pr(removeStones(stones))
    pr(removeStones(stones2))
    pr(removeStones(stones3))
};

main()