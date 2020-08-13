/**
 * 8.11 night
 * https://leetcode.com/problems/toeplitz-matrix/
 */


const isToeplitzMatrix = (matrix) => {
    let row = matrix.length;
    let col = matrix[0].length;
    let data = [];
    for (let i = 1; i <= row + col - 1; i++) {
        let start_col = max(0, i - row);
        let cnt = minThree(i, (col - start_col), row);
        let tmp = [];
        for (let j = cnt - 1; j>=0; j--) {
            let item = matrix[minTwo(row, i) - j - 1][start_col + j];
            tmp.push(item);
        }
        console.log(tmp)
        data.push(tmp);
    }
    console.log(data);
};

const diagnalTraversal = (matrix) => {
    let row = matrix.length;
    let col = matrix[0].length;
    let data = [];
    for (let i = 1; i <= row + col - 1; i++) {
        let start_col = max(0, i - row);
        let cnt = minThree(i, (col - start_col), row);
        let tmp = [];
        for (let j = cnt - 1; j>=0; j--) {
            let item = matrix[minTwo(row, i) - j - 1][start_col + j];
            tmp.push(item);
        }
        console.log(tmp)
        data.push(tmp);
    }
    console.log(data);
};

const minTwo = (a, b) => {
    return (a < b) ? a : b;
};

const minThree = (a, b, c) => {
    return minTwo(minTwo(a, b), c);
};

const max = (a, b) => {
    return (a > b) ? a : b;
};

const main = () => {
    let matrix = [
        [1, 2, 3, 4],
        [5, 1, 2, 3],
        [9, 5, 1, 2]
    ]
    let matrix2 = [
        [1, 2],
        [2, 2]
    ]
    console.log(isToeplitzMatrix(matrix));
    // console.log(isToeplitzMatrix(matrix2));
};

main()