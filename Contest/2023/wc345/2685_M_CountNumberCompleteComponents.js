/*
 * 05/13/23 evening
 * https://leetcode.com/contest/weekly-contest-345/problems/count-the-number-of-complete-components/
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
        if (parent[x] < parent[y]) [x, y] = [y, x];
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

const initializeGraphSet = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push(new Set()); } return g; };

// Accepted
const countCompleteComponents = (n, edges) => {
    let ds = new DJSet(n), g = initializeGraphSet(n), groups = new Set(), d = new Set();
    for (const [x, y] of edges) {
        d.add(x + " " + y);
        d.add(y + " " + x);
        ds.union(x, y);
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (ds.equiv(i, j)) {
                g[i].add(j);
                g[j].add(i);
            }
        }
    }
    // pr(ds.par(), g)
    for (const se of g) {
        let a = [...se].sort((x, y) => x - y);
        groups.add(JSON.stringify(a))
    }
    // pr(groups, d)
    for (const gr of groups) {
        let a = JSON.parse(gr);
        //   pr(a)
        for (let i = 0; i < a.length; i++) {
            for (let j = i + 1; j < a.length; j++) {
                let ke = a[i] + " " + a[j];
                // pr(ke)
                if (!d.has(ke)) groups.delete(gr);
            }
        }
    }
    return groups.size;
};

const main = () => {
    let n = 6, edges = [[0, 1], [0, 2], [1, 2], [3, 4]];
    let n2 = 6, edges2 = [[0, 1], [0, 2], [1, 2], [3, 4], [3, 5]]
    pr(countCompleteComponents(n, edges))
    pr(countCompleteComponents(n2, edges2))
};

main()