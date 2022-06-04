/**
 * 06/02/22 night
 * https://leetcode.com/problems/subrectangle-queries/
 */

// Accepted --- 131ms
function SubrectangleQueries(g) {
    return { updateSubrectangle, getValue }
    function updateSubrectangle(row1, col1, row2, col2, newValue) {
        for (let i = row1; i <= row2; i++) {
            for (let j = col1; j <= col2; j++) g[i][j] = newValue;
        }
    }
    function getValue(row, col) {
        return g[row][col];
    }
};

const pr = console.log;
const main = () => {
    let subrectangleQueries = new SubrectangleQueries([
        [1, 2, 1],
        [4, 3, 4],
        [3, 2, 1],
        [1, 1, 1]
    ]);
    pr(subrectangleQueries.getValue(0, 2)); // 1
    subrectangleQueries.updateSubrectangle(0, 0, 3, 2, 5);
    pr(subrectangleQueries.getValue(0, 2)); // 5
    pr(subrectangleQueries.getValue(3, 1)); // 5
    subrectangleQueries.updateSubrectangle(3, 0, 3, 2, 10);
    pr(subrectangleQueries.getValue(3, 1)); // 10
    pr(subrectangleQueries.getValue(0, 2)); // 5
};

main()