/**
 * 11.13 evening
 * https://leetcode.com/problems/range-sum-query-2d-immutable/
 */

// Accepted --- 180ms 17.12%
class NumMatrix {
    constructor(matrix) {
        this.matrix = matrix;
    }

    sumRegion(row1, col1, row2, col2) {
        let sum = 0;
        for (let i = row1; i <= row2; i++) {
            for (let j = col1; j <= col2; j++) {
                sum += this.matrix[i][j];
            }
        }
        return sum;
    }
}

const main = () => {
    let matrix = [
        [3, 0, 1, 4, 2],
        [5, 6, 3, 2, 1],
        [1, 2, 0, 1, 5],
        [4, 1, 0, 1, 7],
        [1, 0, 3, 0, 5]
    ];
    let nm = new NumMatrix(matrix);
    console.log(nm.sumRegion(2, 1, 4, 3));
    console.log(nm.sumRegion(1, 1, 2, 2));
    console.log(nm.sumRegion(1, 2, 2, 4));
}

main()