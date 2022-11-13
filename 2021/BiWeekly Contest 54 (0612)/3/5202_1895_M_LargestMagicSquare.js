/**
 * 06/12/21 morning
 * https://leetcode.com/contest/biweekly-contest-54/problems/check-if-all-the-integers-in-a-range-are-covered/
 */

const pr = console.log;

// Accepted
const largestMagicSquare = (g) => {
    let n = g.length;
    let m = g[0].length;
    for (let edge = 50; edge > 1; edge--) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                let nexti = i + edge - 1;
                let nextj = j + edge - 1;
                if (nexti >= n || nextj >= m) continue;
                let topL = g[i][j];
                let bottomL = g[nexti][j];
                let topR = g[i][nextj];
                let bottomR = g[nexti][nextj];
                // pr(topL, bottomL, topR, bottomR, "edge", edge)
                if (ok(g, i, j, nexti, nextj)) return edge;
            }
        }
    }
    return 1;
};

const ok = (g, i, j, nexti, nextj) => {
    let rowse = new Set();
    for (let row = i; row <= nexti; row++) {
        let rowSum = 0;
        for (let col = j; col <= nextj; col++) {
            rowSum += g[row][col];
        }
        rowse.add(rowSum);
        if (rowse.size > 1) return false;
    }
    let colse = new Set();
    for (let col = j; col <= nextj; col++) {
        let colSum = 0;
        for (let row = i; row <= nexti; row++) {
            colSum += g[row][col];
        }
        colse.add(colSum);
        if (colse.size > 1) return false;
    }
    // pr(rowse, colse);
    if (rowse.values().next().value != colse.values().next().value) return false;
    let [x, y] = [i, j];
    let d1sum = g[x][y];
    while (x + 1 <= nexti && y + 1 <= nextj) {
        x++;
        y++;
        d1sum += g[x][y];
        // pr("d1sum", d1sum);
    }
    // pr("d1sum", d1sum);
    x = nexti;
    y = j;
    let d2sum = g[x][y];
    while (x - 1 >= i && y + 1 <= nextj) {
        x--;
        y++;
        d2sum += g[x][y];
    }
    // pr("d2sum", d2sum);
    if (rowse.values().next().value != d1sum) return false; // bug fix
    if (d1sum != d2sum) return false;
    return true;
};

const main = () => {
    let grid = [[7, 1, 4, 5, 6], [2, 5, 1, 6, 4], [1, 5, 4, 3, 2], [1, 2, 7, 3, 4]];
    let grid2 = [[5, 1, 3, 1], [9, 3, 3, 1], [1, 3, 3, 8]];
    pr(largestMagicSquare(grid))
    pr(largestMagicSquare(grid2))
};

main()

// let se = new Set([1]);
// pr(se.values().next().value)