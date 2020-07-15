/**
 * 7.14 night
 * https://leetcode.com/problems/search-a-2d-matrix/
 */

// Accepted --- 96ms 34.1MB 10.27%
const searchMatrix = (matrix, target) => {
    for (const m of matrix) {
        if (m.indexOf(target) != -1) {
            return true;
        }
    }
    return false;
};

// Accepted --- 72ms 34.4MB 53.87%
const searchMatrix2 = (matrix, target) => {
    for (const m of matrix) {
        if (m.find(x => x == target) != undefined) {
            return true;
        }
    }
    return false;
};

const main = () => {
    let matrix = [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 50]
    ];
    let target = 3;
    let matrix2 = [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 50]
    ]
    target2 = 13;
    console.log(searchMatrix(matrix, target));
    console.log(searchMatrix(matrix2, target2));

    console.log(searchMatrix2(matrix, target));
    console.log(searchMatrix2(matrix2, target2));

};

main()