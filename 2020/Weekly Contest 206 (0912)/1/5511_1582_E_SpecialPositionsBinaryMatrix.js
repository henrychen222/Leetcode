/**
 * 9.12 evening
 * https://leetcode.com/contest/weekly-contest-206/problems/special-positions-in-a-binary-matrix/
 */

// Accepted
const numSpecial = (mat) => {
    let data = [];
    let m = mat.length;
    let n = mat[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] == 1) {
                data.push({
                    item: mat[i][j],
                    row: i,
                    col: j,
                });
            }
        }
    }
    // console.log(data)
    let cnt = 0;
    for (const d of data) {
        //console.log(check(mat, m, n, d));
        if (check(mat, m, n, d)) cnt++;
    }
    return cnt;
};

const check = (mat, m, n, d) => {
    // let data = [];
    for (let i = 0; i < m; i++) {
        if (i != d.row) {
            if (mat[i][d.col] == 1) {
                return false;
            }
            // data.push(mat[i][d.col]);
        }
    }
    for (let j = 0; j < n; j++) {
        if (j != d.col) {
            if (mat[d.row][j] == 1) {
                return false;
            }
            // data.push(mat[d.row][j]);
        }
    }
    // console.log(data);
    return true;
};

const main = () => {
    let mat = [[1, 0, 0], [0, 0, 1], [1, 0, 0]];
    let mat2 = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
    let mat3 = [[0, 0, 0, 1], [1, 0, 0, 0], [0, 1, 1, 0], [0, 0, 0, 0]];
    let mat4 = [[0, 0, 0, 0, 0], [1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 1]];
    console.log(numSpecial(mat));
    console.log(numSpecial(mat2));
    console.log(numSpecial(mat3));
    console.log(numSpecial(mat4));
};

main()