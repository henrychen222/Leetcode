/**
 * 9.9 afternoon
 * https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/
 */

const kthSmallest = (matrix, k) => {
    let m = matrix.length;
    let n = matrix[0].length;
    let data = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            data.push(matrix[i][j]);
        }
    }
    data.sort((a, b) => a - b);
    console.log(data);
    return data[k - 1];
};

const main = () => {
    let matrix = [
            [1, 5, 9],
            [10, 11, 13],
            [12, 13, 15]
        ],
        k = 8;
    console.log(kthSmallest(matrix, k));
};

main()