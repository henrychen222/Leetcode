/*
 * 01/14/22 evening
 * https://leetcode.com/contest/weekly-contest-328/problems/increment-submatrices-by-one/
 */

const pr = console.log;

const initialize2DArray = (n, m) => [...Array(n)].map(() => Array(m).fill(0));

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