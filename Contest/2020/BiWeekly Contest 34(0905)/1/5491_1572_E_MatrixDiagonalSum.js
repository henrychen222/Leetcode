/**
 * 9.5 morning
 * https://leetcode.com/contest/biweekly-contest-34/problems/matrix-diagonal-sum/
 */

// Accepted
const diagonalSum = (mat) => {
    let n = mat[0].length;
    let diag = [];
    let diag2 = [];
    for (let t = 0; t < n; t++) {
        diag.push(mat[t][t]);
    }
    let t = 0;
    while ((n - 1 - t) >= 0) {
        diag2.push(mat[t][n - 1 - t])
        t++;
    }
    // console.log(diag, diag2);
    let data = diag.concat(diag2);
    let sum = data.reduce((acc, cur) => acc + cur);
    if (n % 2 == 1) {
        let middle = mat[n >> 1][n >> 1];
        // console.log(middle)
        sum-=middle;
    }
    return sum;
};

const main = () => {
    let mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    let mat2 = [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]];
    let mat3 = [[5]];
    console.log(diagonalSum(mat));
    console.log(diagonalSum(mat2));
    console.log(diagonalSum(mat3));
};

main()