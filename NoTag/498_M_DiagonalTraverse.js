/**
 * 05/24/21 evening
 * https://leetcode.com/problems/diagonal-traverse/
 */

const findDiagonalOrder = (mat) => {
    let g = diagonal_traverse_bottomLeft_to_topRight(mat);
    // pr(g);
    let n = g.length;
    // pr(g);
    let res = [];
    for (let i = 0; i < n; i++) {
        let m = g[i].length;
        if (i & 1) {
            for (let j = m - 1; ~j; j--) {
                res.push(g[i][j]);
            }
        } else {
            for (let j = 0; j < m; j++) {
                res.push(g[i][j]);
            }
        }
    }
    return res;
};

// Accepted --- 128ms 30.38%
const diagonal_traverse_bottomLeft_to_topRight = (g) => { // think in middle diagonal
    let n = g.length;
    let m = g[0].length;
    let down = []; // down part
    for (let j = 1; j < m; j++) { // last row as starting point, j = 1, ignore the middle diagonal, has in top
        let tmp = [];
        let rde = n - 1; // row control
        let cin = 0; // col control
        while (rde >= 0 && j + cin < m) { // read diagonally
            tmp.push(g[rde][j + cin]); // row-- col++
            rde--;
            cin++;
        }
        down.push(tmp);
    }
    let top = []; // top part
    for (let i = n - 1; ~i; i--) { // first col as starting point
        let tmp = [];
        let share = 0; // shared increase control
        while (i - share >= 0 && share < m) { // read diagonally
            tmp.push(g[i - share][share]); // row-- col++
            share++;
        }
        top.unshift(tmp);
    }
    return top.concat(down);
};

// Accepted --- 116ms 54.43%
// Accepted --- 124ms 36.29% 120ms 43.46% change top reverse() push() -> unshift()
const diagonal_traverse_bottomLeft_to_topRight1 = (g) => {
    let n = g.length;
    let m = g[0].length;
    let down = [];
    for (let j = 0; j < m; j++) {
        let tmp = [];
        let rde = n - 1;
        let cin = 0;
        while (rde >= 0 && j + cin < m) {
            tmp.push(g[rde][j + cin]);
            rde--;
            cin++;
        }
        down.push(tmp);
    }
    let top = [];
    for (let i = n - 1; ~i; i--) {
        let tmp = [];
        let share = 0;
        while (i - share >= 0 && share < m) {
            tmp.push(g[i - share][share]);
            share++;
        }
        top.unshift(tmp);
    }
    return top.concat(down.slice(1));
};

const pr = console.log;
const main = () => {
    let mat = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    let mat2 = [
        [1, 2],
        [3, 4]
    ];
    pr(findDiagonalOrder(mat));
    pr(findDiagonalOrder(mat2));
};

main()