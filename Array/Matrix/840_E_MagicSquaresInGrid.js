/**
 * 6.4 night
 * https://leetcode.com/problems/magic-squares-in-grid/
 */

// don't know how to do
const numMagicSquaresInside = (grid) => {
    let m = grid.length;
    let n = grid[0].length;
    let arr = [];
    for (let i = 0; i < m; i++) {
        // arr.push(grid[i]);
        for (let j = 0; j < 3; j++) {
            arr.push(grid[i][j]);
        }
    }
    console.log(arr);
};

const main = () => {
    let grid = [
        [4, 3, 8, 4],
        [9, 5, 1, 9],
        [2, 7, 6, 2]
    ];
    console.log(numMagicSquaresInside(grid))
};

main()