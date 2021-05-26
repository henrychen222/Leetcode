/**
 * 05/25/21 afternoon
 * https://leetcode.com/problems/diagonal-traverse-ii/
 */

const findDiagonalOrder = (g) => {
    return diagonal_traverse_bottomLeft_to_topRight2(g);
};

// Accepted --- 496ms 38.18%
const diagonal_traverse_bottomLeft_to_topRight2 = (g) => {
    let n = g.length;
    let ma = new Map();
    for (let i = 0; i < n; i++) {
        let m = g[i].length;
        for (let j = 0; j < m; j++) {
            let sum = i + j;
            if (!ma.has(sum)) ma.set(sum, []);
            ma.get(sum).push([g[i][j], j]);
        }
    }
    let res = [];
    // pr(ma);
    for (const [, a] of ma) {
        a.sort((x, y) => x[1] - y[1]);
        for (const e of a) {
            res.push(e[0]);
        }
    }
    // pr(ma);
    return res;
};

// TLE 54/56
const diagonal_traverse_bottomLeft_to_topRight = (g) => {
    let n = g.length;
    let m = Math.max.apply(Math, g.map(x => x.length));
    let res = [];
    for (let i = 0; i < n; i++) {
        let share = 0;
        while (i - share >= 0 && share < m) {
            if (g[i - share][share]) res.push(g[i - share][share]);
            share++;
        }
    }
    for (let j = 1; j < m; j++) {
        let rde = n - 1;
        let cin = 0;
        while (rde >= 0 && j + cin < m) {
            if (g[rde][j + cin]) res.push(g[rde][j + cin]);
            rde--;
            cin++;
        }
    }
    return res;
};


const pr = console.log;
const main = () => {
    let nums = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    let nums2 = [
        [1, 2, 3, 4, 5],
        [6, 7],
        [8],
        [9, 10, 11],
        [12, 13, 14, 15, 16]
    ];
    let nums3 = [
        [1, 2, 3],
        [4],
        [5, 6, 7],
        [8],
        [9, 10, 11]
    ];
    let nums4 = [
        [1, 2, 3, 4, 5, 6]
    ];
    let debug1 = [
        [6],
        [8],
        [6, 1, 6, 16]
    ];
    pr(findDiagonalOrder(nums));
    pr(findDiagonalOrder(nums2));
    pr(findDiagonalOrder(nums3));
    pr(findDiagonalOrder(nums4));
    pr(findDiagonalOrder(debug1));
};

main()