/**
 * 9.11 evening
 * https://leetcode.com/problems/search-a-2d-matrix-ii/
 */

// Accepted --- 560ms 17.37%
const searchMatrix = (matrix, target) => {
    let m = matrix.length;
    if (m == 0) return false;
    let n = matrix[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] == target) {
                return true;
            }
        }
    }
    return false;
};

const main = () => {
    let matrix = [
        [1, 4, 7, 11, 15],
        [2, 5, 8, 12, 19],
        [3, 6, 9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30]
    ];
    let target = 5;
    let target2 = 20;
    let matrix_debug1 = [], target_debug1 = 0;
    
    console.log(searchMatrix(matrix, target));
    console.log(searchMatrix(matrix, target2));
    console.log(searchMatrix(matrix_debug1, target_debug1));
};

main()