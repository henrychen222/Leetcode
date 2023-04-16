/*
 * 03/18/23 evening
 * https://leetcode.com/contest/weekly-contest-337/problems/check-knight-tour-configuration/
 */

const pr = console.log;

// Accepted
const checkValidGrid = (g) => {
    if (g[0][0] != 0) return false;
    let n = g.length, a = Array(n * n);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) a[g[i][j]] = [i, j];
    }
    for (let i = 1; i < n * n; i++) {
        let [x1, y1] = a[i - 1], [x2, y2] = a[i];
        if (!ok(x1, y1, x2, y2)) return false;
    }
    return true;
};

const ok = (x1, y1, x2, y2) => {
    let dx = Math.abs(x1 - x2), dy = Math.abs(y1 - y2);
    return (dx == 1 && dy == 2) || (dx == 2 && dy == 1)
};

const main = () => {
    let g = [[0, 11, 16, 5, 20], [17, 4, 19, 10, 15], [12, 1, 8, 21, 6], [3, 18, 23, 14, 9], [24, 13, 2, 7, 22]]
    let g2 = [[0, 3, 6], [5, 8, 1], [2, 7, 4]];
    let g_debug1 = [[24, 11, 22, 17, 4], [21, 16, 5, 12, 9], [6, 23, 10, 3, 18], [15, 20, 1, 8, 13], [0, 7, 14, 19, 2]];
    pr(checkValidGrid(g))
    pr(checkValidGrid(g2))
    pr(checkValidGrid(g_debug1)) // false
};

main()

/*
24 11 22 17 4
21 16 5  12 9
6  23 10 3  18
15 20 1  8  13
0  7  14 19 2
*/