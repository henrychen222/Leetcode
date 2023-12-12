/**
 * 05/24/21 evening 09/10/23 night rewrite and clean
 * 
 * example:
 * https://leetcode.com/problems/sort-the-matrix-diagonally/
 * https://leetcode.com/problems/diagonal-traverse/
 * https://leetcode.com/problems/diagonal-traverse-ii/
 */

const diagonal_traverse_with_middle_bottomLeft_to_topRight = (g) => {
    let n = g.length, m = g[0].length, res = [];
    for (let i = 0; i < n; i++) { // first col as starting point, contains middle diagonal
        let cur = [];
        for (let y = 0; i - y >= 0 && y < m; y++) cur.push(g[i - y][y]);
        res.push(cur);
    }
    for (let j = 1; j < m; j++) { // last row as starting point
        let cur = [];
        for (let x = n - 1, y = 0; x >= 0 && j + y < m; x--, y++) cur.push(g[x][j + y]);
        res.push(cur);
    }
    return res;
};

////////////////////////////////////////////////////////////////////////////////////////////////////
const diagonal_traverse_with_middle_topLeft_to_bottomRight = (g) => {
    let n = g.length, m = g[0].length, res = [];
    for (let i = n - 1; i > 0; i--) { // first col starting point
        let cur = [];
        for (let y = 0; i + y < n && y < m; y++) cur.push(g[i + y][y]);
        res.push(cur);
    }
    for (let j = 0; j < m; j++) { // first row as starting point, contain middle diagonal
        let cur = [];
        for (let x = 0; x < n && x + j < m; x++) cur.push(g[x][x + j]);
        res.push(cur);
    }
    return res;
};

const pr = console.log;
const main = () => {
    let mat = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    pr(diagonal_traverse_with_middle_bottomLeft_to_topRight(mat)); // [ [ 1 ], [ 4, 2 ], [ 7, 5, 3 ], [ 8, 6 ], [ 9 ] ]
    pr(diagonal_traverse_with_middle_topLeft_to_bottomRight(mat)); // [ [ 7 ], [ 4, 8 ], [ 1, 5, 9 ], [ 2, 6 ], [ 3 ] ]
};

main()