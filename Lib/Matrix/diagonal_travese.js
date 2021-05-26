/**
 * 05/24/21 evening
 * 
 * example:
 * https://leetcode.com/problems/sort-the-matrix-diagonally/
 * https://leetcode.com/problems/diagonal-traverse/
 * https://leetcode.com/problems/diagonal-traverse-ii/
 */

const diagonal_traverse_bottomLeft_to_topRight2 = (g) => {
    let n = g.length;
    let m = g[0].length;
    let ma = new Map();
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let sum = i + j;
            if (!ma.has(sum)) ma.set(sum, []);
            ma.get(sum).push([g[i][j], j]);
        }
    }
    let res = [];
    for (const [, a] of ma) {
        a.sort((x, y) => x[1] - y[1]);
        let tmp = [];
        for (const e of a) tmp.push(e[0]);
        res.push(tmp);
    }
    return res;
};

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
    // for (let i = 0; i < n; i++) { // also works
    //     let tmp = [];
    //     let share = 0;
    //     while (i - share >= 0 && share < m) {
    //         tmp.push(g[i - share][share]);
    //         share++;
    //     }
    //     top.push(tmp);
    // }
    return top.concat(down);
};

////////////////////////////////////////////////////////////////////////////////////////////////////
const diagonal_traverse_topLeft_to_bottomRight = (g) => { // think in middle diagonal
    let n = g.length;
    let m = g[0].length;
    let top = [];
    for (let j = 0; j < m; j++) { // first row as starting point
        let tmp = [];
        let share = 0; // shared increase control
        while (share < n && j + share < m) { // read Diagonally
            tmp.push(g[share][j + share]); // row++ col++
            share++;
        }
        top.push(tmp);
    }
    let down = [];
    for (let i = 1; i < n; i++) { // first col starting point, i = 1, ignore the middle diagonal, has in top
        let tmp = [];
        let share = 0; // shared increase control
        while (i + share < n && share < m) { // read Diagonally
            tmp.push(g[i + share][share]);
            share++;
        }
        down.unshift(tmp);
    }
    return down.concat(top);
};

const pr = console.log;
const main = () => {
    let mat = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    pr(diagonal_traverse_bottomLeft_to_topRight(mat));
    pr(diagonal_traverse_topLeft_to_bottomRight(mat));
};

main()