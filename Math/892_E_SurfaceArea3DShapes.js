/**
 * 10.28 afternoon
 * https://leetcode.com/problems/surface-area-of-3d-shapes/
 */

// Accepted --- 76ms 87.69%
// reference: https://leetcode.com/problems/surface-area-of-3d-shapes/discuss/163414/C%2B%2BJava1-line-Python-Minus-Hidden-Area
const surfaceArea = (grid) => {
    let n = grid.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j]) {
                res += grid[i][j] * 4 + 2;
            }
            if (i > 0) {
                res -= Math.min(grid[i][j], grid[i - 1][j]) * 2; // minus hidden neighbour area
            }
            if (j > 0) {
                res -= Math.min(grid[i][j], grid[i][j - 1]) * 2;
            }
        }
    }
    return res;
};

// Accepted --- 76ms 87.69%
const surfaceArea2 = (grid) => {
    let n = grid.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j]) {
                res += grid[i][j] * 4 + 2;
            }
            if (i) { // same as i > 0
                res -= Math.min(grid[i][j], grid[i - 1][j]) * 2;
            }
            if (j) {
                res -= Math.min(grid[i][j], grid[i][j - 1]) * 2;
            }
        }
    }
    return res;
};

const main = () => {
    let grid = [
        [2]
    ];
    let grid2 = [
        [1, 2],
        [3, 4]
    ];
    let grid3 = [
        [1, 0],
        [0, 2]
    ];
    let grid4 = [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
    ];
    let grid5 = [
        [2, 2, 2],
        [2, 1, 2],
        [2, 2, 2]
    ];
    console.log(surfaceArea(grid));
    console.log(surfaceArea(grid2));
    console.log(surfaceArea(grid3));
    console.log(surfaceArea(grid4));
    console.log(surfaceArea(grid5));
};

main()