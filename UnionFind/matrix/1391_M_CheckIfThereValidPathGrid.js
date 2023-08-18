/*
 * 07/14/23 evening + night
 * https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/
 */

const pr = console.log;

function DJSet(n) {
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

// Accepted --- 475ms 15.79%
const hasValidPath = (g) => {
    let se = new Set([
        'H11', 'H13', 'H41', 'H15', 'H61',
        'V22', 'V32', 'V42', 'V25', 'V26',
        'H43', 'V35', 'V36', 'H63',
        'V45', 'H45', 'V46',
        'H65']);
    let n = g.length, m = g[0].length, ds = new DJSet(n * m);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let mark;
            if (i + 1 < n) {
                mark = 'V' + g[i][j] + g[i + 1][j];
                // pr(mark, se.has(mark))
                if (se.has(mark)) ds.union(i * m + j, (i + 1) * m + j)
            }
            if (i - 1 >= 0) {
                mark = 'V' + g[i - 1][j] + g[i][j];
                // pr(mark, se.has(mark))
                if (se.has(mark)) ds.union(i * m + j, (i - 1) * m + j)
            }
            if (j + 1 < m) {
                mark = 'H' + g[i][j] + g[i][j + 1];
                // pr(mark, se.has(mark))
                if (se.has(mark)) ds.union(i * m + j, i * m + j + 1);
            }
            if (j - 1 >= 0) {
                mark = 'H' + g[i][j - 1] + g[i][j];
                // pr(mark, se.has(mark))
                if (se.has(mark)) ds.union(i * m + j, i * m + j - 1);
            }
        }
    }
    // pr(ds.par())
    return ds.equiv(0, (n - 1) * m + m - 1);
};

const main = () => {
    let g = [[2, 4, 3], [6, 5, 2]];
    let g2 = [[1, 2, 1], [1, 2, 1]];
    let g3 = [[1, 1, 2]];
    let debug1 = [[1, 1, 1, 1, 1, 1, 3]];
    let debug2 = [[3,4,3,4],[2,2,2,2],[6,5,6,5]];
    pr(hasValidPath(g))
    pr(hasValidPath(g2))
    pr(hasValidPath(g3))
    pr(hasValidPath(debug1))
    pr(hasValidPath(debug2))
};

main()