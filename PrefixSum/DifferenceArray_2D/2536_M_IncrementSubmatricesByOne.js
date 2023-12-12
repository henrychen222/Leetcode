/*
 * 01/14/22 evening
 * https://leetcode.com/contest/weekly-contest-328/problems/increment-submatrices-by-one/
 * https://leetcode.com/problems/increment-submatrices-by-one/
 */

const pr = console.log;

const initialize2DArray = (n, m) => [...Array(n)].map(() => Array(m).fill(0));

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

// Accepted --- 358ms 08/21/23 afternoon
const rangeAddQueries2 = (n, queries) => {
    let g = [...Array(n)].map(() => Array(n).fill(0)), da = new DiffArray2D(g);
    for (const [x1, y1, x2, y2] of queries) da.addRange(x1, y1, x2, y2, 1);
    let res = da.recover();
    return res;
};

///////////////////////////////////////////////////////////////////////////////////
// Accepted
const rangeAddQueries = (n, q) => {
    let g = initialize2DArray(n, n);
    for (const [x1, y1, x2, y2] of q)
        for (let r = x1; r <= x2; r++)
            for (let c = y1; c <= y2; c++) g[r][c]++;
    return g;
};

const main = () => {
    let n = 3, q = [[1, 1, 2, 2], [0, 0, 1, 1]]
    let n2 = 2, q2 = [[0, 0, 1, 1]]
    pr(rangeAddQueries(n, q));
    pr(rangeAddQueries(n2, q2));
};

main()