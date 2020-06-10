/**
 * 6.9 afternoon
 * https://leetcode.com/problems/transpose-matrix/
 */

// Accepted --- 84ms 39.3MB 29.26%
const transpose = (A) => {
    let res = [];
    for (let i = 0; i < A[0].length; i++) {
        res[i] = [];
        for (let j = 0; j < A.length; j++) {
            res[i][j] = A[j][i];
        }
    }
    return res;
};

const main = () => {
    let A = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    let A2 = [
        [1, 2, 3],
        [4, 5, 6]
    ];
    let A_debug = [[3]];
    console.log(transpose(A));
    console.log(transpose(A2));
    console.log(transpose(A_debug));

};

main()