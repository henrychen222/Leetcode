/**
 * 10.28 evening
 * https://leetcode.com/problems/projection-area-of-3d-shapes/
 */

// Accepted --- 72ms 92.31%
// reference: https://leetcode.com/problems/projection-area-of-3d-shapes/discuss/156726/C%2B%2BJavaPython-Straight-Forward-One-Pass
const projectionArea = (grid) => {
    let n = grid.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        let x = 0;
        let y = 0;
        for (let j = 0; j < n; j++) {
            x = Math.max(x, grid[i][j]);
            y = Math.max(y, grid[j][i]);
            if (grid[i][j] > 0) res++;
        }
        res += x + y;
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
    console.log(projectionArea(grid));
    console.log(projectionArea(grid2));
    console.log(projectionArea(grid3));
    console.log(projectionArea(grid4));
    console.log(projectionArea(grid5));
};

main()