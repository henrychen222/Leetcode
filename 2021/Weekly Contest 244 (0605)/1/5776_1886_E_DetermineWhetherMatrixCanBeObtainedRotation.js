/**
 * 06/05/21 evening
 * https://leetcode.com/contest/weekly-contest-244/problems/determine-whether-matrix-can-be-obtained-by-rotation/
 */

const pr = console.log;

// Accepted
const findRotation = (g, t) => {
    for (let i = 1; i <= 4; i++) {
        rotate(g);
        if (isSame(g, t)) return 1;
    }
    return 0;
};

const isSame = (g, t) => {
    let n = g.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (g[i][j] != t[i][j]) return 0;
        }
    }
    return 1;
}

// https://www.geeksforgeeks.org/rotate-a-matrix-by-90-degree-in-clockwise-direction-without-using-any-extra-space/
const rotate = (g) => {
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

const main = () => {
    let mat = [[0, 1], [1, 0]], target = [[1, 0], [0, 1]];
    let mat2 = [[0, 1], [1, 1]], target2 = [[1, 0], [0, 1]];
    let mat3 = [[0, 0, 0], [0, 1, 0], [1, 1, 1]], target3 = [[1, 1, 1], [0, 1, 0], [0, 0, 0]];
    pr(findRotation(mat, target))
    pr(findRotation(mat2, target2))
    pr(findRotation(mat3, target3))
};

main()