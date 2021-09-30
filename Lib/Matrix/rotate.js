// https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/discuss/1254053/javascript-direct-4-times-clockwise-rotate-92ms
// https://www.geeksforgeeks.org/rotate-a-matrix-by-90-degree-in-clockwise-direction-without-using-any-extra-space/
const rotate_square_matrix_clockwise_self = (g) => {
    let n = g.length;
    for (let i = 0; i < n >> 1; i++) {
        for (let j = i; j < n - i - 1; j++) {
            let tmp = g[i][j];
            g[i][j] = g[n - 1 - j][i];
            g[n - 1 - j][i] = g[n - 1 - i][n - 1 - j];
            g[n - 1 - i][n - 1 - j] = g[j][n - 1 - i];
            g[j][n - 1 - i] = tmp;
        }
    }
};

// https://stackoverflow.com/questions/2799755/rotate-array-clockwise
const rotate_square_matrix_clockwise = (g) => {
    let n = g.length;
    let res = initialize2DArrayNew(n, n);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            res[j][n - 1 - i] = g[i][j];
        }
    }
    return res;
}

// https://leetcode.com/contest/weekly-contest-260/ranking uwi
const transpose = (g) => { // rotate_reverse https://www.geeksforgeeks.org/program-to-find-transpose-of-a-matrix/
    let n = g.length, m = g[0].length;
    let res = initialize2DArrayNew(m, n);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res[i][j] = g[j][i];
        }
    }
    return res;
};

const initialize2DArrayNew = (n, m) => {
    let data = [];
    for (let i = 0; i < n; i++) {
        let tmp = Array(m).fill(0);
        data.push(tmp);
    }
    return data;
};

const pr = console.log;
const main = () => {
    let squre_matrix = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ];
    let grid = [
        [1, 2, 3, 4, 5],
        [5, 6, 7, 8, 9],
        [9, 10, 11, 12, 10],
        [13, 14, 15, 16, 10]
    ];
    pr(rotate_square_matrix_clockwise(squre_matrix))

    pr(transpose(grid))
}
main()