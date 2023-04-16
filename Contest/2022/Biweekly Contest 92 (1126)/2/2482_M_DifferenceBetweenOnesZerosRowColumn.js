/*
 * 11/26/22 morning
 * https://leetcode.com/contest/biweekly-contest-92/problems/difference-between-ones-and-zeros-in-row-and-column/
 */

const pr = console.log;

const initialize2DArray = (n, m) => { let d = []; for (let i = 0; i < n; i++) { let t = Array(m).fill(0); d.push(t); } return d; };

// Accepted
const onesMinusZeros = (g) => {
    let n = g.length, m = g[0].length, onesRow = [], zerosRow = [], onesCol = [], zerosCol = [], res = initialize2DArray(n, m);
    for (let i = 0; i < n; i++) {
        let oneRow = 0, zeroRow = 0;
        for (let j = 0; j < m; j++) g[i][j] ? oneRow++ : zeroRow++;
        onesRow.push(oneRow);
        zerosRow.push(zeroRow);
    }
    for (let j = 0; j < m; j++) {
        let oneCol = 0, zeroCol = 0;
        for (let i = 0; i < n; i++) g[i][j] ? oneCol++ : zeroCol++;
        onesCol.push(oneCol);
        zerosCol.push(zeroCol);
    }
    // pr(onesRow, zerosRow, onesCol, zerosCol)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let v = onesRow[i] + onesCol[j] - zerosRow[i] - zerosCol[j];
            res[i][j] = v;
        }
    }
    return res;
};

const main = () => {
    let g = [[0, 1, 1], [1, 0, 1], [0, 0, 1]];
    let g2 = [[1, 1, 1], [1, 1, 1]]
    pr(onesMinusZeros(g))
    pr(onesMinusZeros(g2))
};

main()