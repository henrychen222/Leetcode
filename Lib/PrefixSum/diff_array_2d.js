/*
08/21/23 afternoon
reference:
https://www.geeksforgeeks.org/two-dimensional-difference-array/

Example problem:
https://leetcode.com/contest/weekly-contest-328/problems/increment-submatrices-by-one/
*/

function DiffArray2D(g) {
    let n = g.length, m = g[0].length, d = [...Array(n)].map(() => Array(m + 1).fill(0));
    initialize();
    return { addRange, recover, D }
    function initialize() {
        for (let i = 0; i < n; i++) d[i][0] = g[i][0];
        for (let i = 0; i < n; i++)
            for (let j = 1; j < m; j++)
                d[i][j] = g[i][j] - g[i][j - 1];
    }
    function addRange(x1, y1, x2, y2, v) {
        for (let i = x1; i <= x2; i++) {
            d[i][y1] += v;
            d[i][y2 + 1] -= v;
        }
    }
    function recover() {
        let res = [...Array(n)].map(() => Array(m).fill(0));
        for (let i = 0; i < n; i++)
            for (let j = 0; j < m; j++)
                res[i][j] = j == 0 ? d[i][j] : d[i][j] + res[i][j - 1];
        return res;
    }
    function D() {
        return d;
    }
}

const solve = (g, queries) => {
    let da = new DiffArray2D(g);
    for (const [x1, y1, x2, y2, k] of queries) da.addRange(x1, y1, x2, y2, k);
    // pr(da.D())
    let res = da.recover();
    return res;
};

const pr = console.log;

const main = () => {
    let g = [[1, 2, 3], [1, 1, 0], [4, -2, 2]], queries = [[0, 0, 1, 1, 2], [1, 0, 2, 2, -1]];
    pr(solve(g, queries)); // [[ 3, 4, 3 ], [ 2, 2, -1 ], [3, -3, 1]]
};

main()