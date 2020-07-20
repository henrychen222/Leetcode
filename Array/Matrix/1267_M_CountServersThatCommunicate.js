/**
 * 7.19 afternoon 7.19 evening
 * https://leetcode.com/problems/count-servers-that-communicate/
 */

// Accepted --- 128ms 42MB 28.57%
const countServers = (grid) => {
    let data = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1) {
                data.push({
                    item: grid[i][j],
                    row: i + 1,
                    col: j + 1,
                });
            }
        }
    }
    // console.log(data);
    let cnt = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i].row == data[j].row || data[i].col == data[j].col) && i != j) {
                cnt++;
                break;
            }
        }
    }
    return cnt;
};

// understand wrong at the first time
const countServers1 = (grid) => {
    let cnt = 0;
    let m = grid.length;
    let n = grid[0].length;

    // corner 4 point
    if (grid[0][0] == 1) {
        if (grid[1][0] == 1 || grid[0][1] == 1) cnt++;
    }
    if (grid[0][n - 1] == 1) {
        if (grid[1][n - 1] == 1 || grid[0][n - 2] == 1) cnt++;
    }
    if (grid[m - 1][0] == 1) {
        if (grid[m - 2][0] == 1 || grid[m - 1][1] == 1) cnt++;
    }
    if (grid[m - 1][n - 1] == 1) {
        if (grid[m - 2][n - 1] == 1 || grid[m - 1][n - 2] == 1) cnt++;
    }

    // top line
    for (let j = 1; j < n - 1; j++) {
        if (grid[0][j] == 1) {
            let left = grid[0][j - 1];
            let right = grid[0][j + 1];
            if (left == 1 || right == 1) cnt++;
        }
    }

    // bottom line
    for (let j = 1; j < n - 1; j++) {
        if (grid[m - 1][j] == 1) {
            let left = grid[m - 1][j - 1];
            let right = grid[m - 1][j + 1];
            if (left == 1 || right == 1) cnt++;
        }
    }

    // left column
    for (let i = 1; i < m - 1; i++) {
        if (grid[i][0] == 1) {
            let top = grid[i - 1][0];
            let bottom = grid[i + 1][0];
            if (top == 1 || bottom == 1) cnt++;
        }
    }

    // right column
    for (let i = 1; i < m - 1; i++) {
        if (grid[i][n - 1] == 1) {
            let top = grid[i - 1][n - 1];
            let bottom = grid[i + 1][n - 1];
            if (top == 1 || bottom == 1) cnt++;
        }
    }

    // inside
    for (let i = 1; i < m - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            if (grid[i][j] == 1) {
                let top = grid[i - 1][j];
                let down = grid[i + 1][j];
                let left = grid[i][j - 1];
                let right = grid[i][j + 1];
                if (top == 1 || down == 1 || left == 1 || right == 1) {
                    cnt++;
                }
            }
        }
    }
    return cnt;
};

const main = () => {
    let grid = [
        [1, 0],
        [0, 1]
    ];
    let grid2 = [
        [1, 0],
        [1, 1]
    ];
    let grid3 = [
        [1, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1]
    ];
    let debug1 = [
        [1, 0, 0, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0]
    ];
    console.log(countServers(grid)); // 0
    console.log(countServers(grid2)); // 3
    console.log(countServers(grid3)); // 4
    console.log(countServers(debug1)); // 3
};

main()