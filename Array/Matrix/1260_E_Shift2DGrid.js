/**
 * 8.16 night
 * https://leetcode.com/problems/shift-2d-grid/
 */

// Accepted --- 120ms 43.6MB  55.56%
const shiftGrid = (grid, k) => {
    let m = grid.length;
    let n = grid[0].length;
    for (let i = 1; i <= k; i++) {
        let data = [];
        for (let i = 0; i < m; i++) { // Step 1  the old matrix (grid) each column moves right to the new matrix (data) except the rightest column
            let tmp = [];
            for (let j = 0; j < n - 1; j++) {
                tmp.push(grid[i][j]);
            }
            data.push(tmp);
        }
        // console.log(data);
        for (let i = 0; i < m - 1; i++) { // Step 2  get all the rightest column data from the old matrix except the bottom one, set to new matrix start from second row
            data[i + 1].unshift(grid[i][n - 1]);
        }
        // console.log(data);
        data[0].unshift(grid[m - 1][n - 1]); // Step 3  the old matrix rightest column bottom one, set to new matrix top left place
        // console.log(data);
        grid = [];
        grid = data; // each next time shift, update old matrix (grid) to be the last time updated new matrix (data)
    }
    return grid;
};

const main = () => {
    let grid = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ],
        k = 1;
    let grid2 = [
            [3, 8, 1, 9],
            [19, 7, 2, 5],
            [4, 6, 11, 10],
            [12, 0, 21, 13]
        ],
        k2 = 4;
    let grid3 = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ],
        k3 = 9;
    console.log(shiftGrid(grid, k));
    console.log(shiftGrid(grid2, k2));
    console.log(shiftGrid(grid3, k3));
};

main()