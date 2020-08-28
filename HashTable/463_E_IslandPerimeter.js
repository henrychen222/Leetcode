/**
 * 8.27 night
 * https://leetcode.com/problems/island-perimeter/
 */

// Accepted --- 208ms 82.14%
const islandPerimeter = (grid) => {
    let data = [];
    let m = grid.length;
    let n = grid[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                data.push({
                    item: grid[i][j],
                    row: i,
                    col: j,
                });
            }
        }
    }
    // console.log(data);
    let sum = 0;
    /**
     * check each island four neighbors (top, down, left, right)
     * if neighbor out of bound, means this island (neighbor's direction) reach the grid border, so island (neighbor's direction) side should be calculated as one side of Perimeter.
     * otherwise if neighbor not out of bound, but it is lake (=0), island (neighbor's direction) side should also be calculated.
     */
    for (const d of data) {
        let top = d.row - 1;
        let down = d.row + 1;
        let left = d.col - 1;
        let right = d.col + 1;
        // console.log(top, down, left, right);
        let cnt = 0;
        if (top == -1) {
            cnt++;
        } else {
            if (grid[top][d.col] == 0) {
                cnt++;
            }
        }
        if (left == -1) {
            cnt++;
        } else {
            if (grid[d.row][left] == 0) {
                cnt++;
            }
        }
        if (down == m) {
            cnt++;
        } else {
            if (grid[down][d.col] == 0) {
                cnt++;
            }
        }
        if (right == n) {
            cnt++;
        } else {
            if (grid[d.row][right] == 0) {
                cnt++;
            }
        }
        // console.log(cnt);
        sum += cnt;
    }
    return sum;
};

const main = () => {
    let grid = [
        [0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 0, 0],
        [1, 1, 0, 0]
    ];
    console.log(islandPerimeter(grid))
}

main()