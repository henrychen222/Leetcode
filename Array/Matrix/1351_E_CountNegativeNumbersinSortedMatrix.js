/**
 * 6.10 evening
 * https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
 */

// Accepted --- 88ms 36.5MB 11.95%
const countNegatives = (grid) => {
    let cnt = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] < 0) {
                cnt++;
            }
        }
    }
    return cnt;
};

const main = () => {
    let grid = [
        [4, 3, 2, -1],
        [3, 2, 1, -1],
        [1, 1, -1, -2],
        [-1, -1, -2, -3]
    ];
    let grid2 = [
        [3, 2],
        [1, 0]
    ];
    let grid3 = [
        [1, -1],
        [-1, -1]
    ];
    let grid4 = [
        [-1]
    ];
    console.log(countNegatives(grid));
    console.log(countNegatives(grid2));
    console.log(countNegatives(grid3));
    console.log(countNegatives(grid4));
};

main()