/**
 * 04/13/22 evening
 * https://leetcode.com/problems/spiral-matrix-iii/
 */

const pr = console.log;

const initialize2DArray = (n, m) => { let d = []; for (let i = 0; i < n; i++) { let t = Array(m).fill(0); d.push(t); } return d; };

// Accepted --- 99ms 91.18%
let n, m, x, y;
const spiralMatrixIII = (rows, cols, rStart, cStart) => {
    n = rows, m = cols, x = rStart, y = cStart;
    let tot = n * m, d = 'R', res = [], visit = initialize2DArray(n, m);
    while (res.length < tot) {
        // pr("cur", x, y, d)
        if (ok(x, y)) {
            res.push([x, y]);
            visit[x][y] = 1;
        }
        if (d == 'R') {
            y++;
            if (ok(x + 1, y)) {
                if (!visit[x + 1][y]) d = 'D'; // go right, down neighbour not visited, turn
            } else {
                d = 'D'; // out of border turn
            }
        } else if (d == 'D') {
            x++;
            if (ok(x, y - 1)) {
                if (!visit[x][y - 1]) d = 'L'; // go down, left neighbour not visited, turn
            } else {
                d = 'L';
            }
        } else if (d == 'L') {
            y--;
            if (ok(x - 1, y)) {
                if (!visit[x - 1][y]) d = 'U'; // go left, up neighbour not visited, turn
            } else {
                d = 'U';
            }
        } else if (d == 'U') {
            x--;
            if (ok(x, y + 1)) {
                if (!visit[x][y + 1]) d = 'R'; // go up, right neighbour not visited, turn
            } else {
                d = 'R';
            }
        }
    }
    return res;
};

const ok = (x, y) => x >= 0 && x < n && y >= 0 && y < m;

const main = () => {
    let rows = 1,
        cols = 4,
        rStart = 0,
        cStart = 0;
    let rows2 = 5,
        cols2 = 6,
        rStart2 = 1,
        cStart2 = 4;
    pr(spiralMatrixIII(rows, cols, rStart, cStart))
    pr(spiralMatrixIII(rows2, cols2, rStart2, cStart2))
};

main()