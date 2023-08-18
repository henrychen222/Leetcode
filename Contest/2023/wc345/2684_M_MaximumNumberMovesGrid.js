/*
 * 05/13/23 evening
 * https://leetcode.com/contest/weekly-contest-345/problems/maximum-number-of-moves-in-a-grid/
 */

const pr = console.log;

const initialize2DArray = (n, m) => [...Array(n)].map(() => Array(m).fill(0));

// Accepted
const maxMoves = (g) => {
    let n = g.length, m = g[0].length, f = initialize2DArray(n, m);
    for (let i = 0; i < n; i++) f[i][0] = 1;
    for (let j = 1; j < m; j++) {
        for (let i = 0; i < n; i++) {
            // for (let i = 0; i < n; i++) { // fuck issue
            //     for (let j = 1; j < m; j++) {
            if (g[i][j] > g[i][j - 1] && f[i][j - 1]) {
                f[i][j] = 1;
            }
            if (i - 1 >= 0 && g[i][j] > g[i - 1][j - 1] && f[i - 1][j - 1]) {
                f[i][j] = 1;
            }
            if (i + 1 < n && g[i][j] > g[i + 1][j - 1] && f[i + 1][j - 1]) {
                f[i][j] = 1;
            }
        }
    }
    // pr(f)
    for (let j = m - 1; j >= 0; j--) {
        let canReach = false;
        for (let i = 0; i < n; i++) {
            if (f[i][j]) {
                canReach = true;
                break;
            }
        }
        if (canReach) return j;
    }
    return 0;
};

const main = () => {
    let g = [[2, 4, 3, 5], [5, 4, 9, 3], [3, 4, 2, 11], [10, 9, 13, 15]];
    let g2 = [[3, 2, 4], [2, 1, 9], [1, 1, 7]]
    let g_debug1 = [[65, 200, 263, 220, 91, 183, 2, 187, 175, 61, 225, 120, 39], [111, 242, 294, 31, 241, 90, 145, 25, 262, 214, 145, 71, 294], [152, 25, 240, 69, 279, 238, 222, 9, 137, 277, 8, 143, 143], [189, 31, 86, 250, 20, 63, 188, 209, 75, 22, 127, 272, 110], [122, 94, 298, 25, 90, 169, 68, 3, 208, 274, 202, 135, 275], [205, 20, 171, 90, 70, 272, 280, 138, 142, 151, 80, 122, 130], [284, 272, 271, 269, 265, 134, 185, 243, 247, 50, 283, 20, 232], [266, 236, 265, 234, 249, 62, 98, 130, 122, 226, 285, 168, 204], [231, 24, 256, 101, 142, 28, 268, 82, 111, 63, 115, 13, 144], [277, 277, 31, 144, 49, 132, 28, 138, 133, 29, 286, 45, 93], [163, 96, 25, 9, 3, 159, 148, 59, 25, 81, 233, 127, 12], [127, 38, 31, 209, 300, 256, 15, 43, 74, 64, 73, 141, 200]];
    pr(maxMoves(g))
    pr(maxMoves(g2))
    pr(maxMoves(g_debug1)) // 3
};

main()