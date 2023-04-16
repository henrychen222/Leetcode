// 08/14/21 night

const pr = console.log;

const initialize2DArrayNew = (n, m) => { let data = []; for (let i = 0; i < n; i++) { let tmp = Array(m).fill(1); data.push(tmp); } return data; };

const dx = [-1, 1, 0, 0], dy = [0, 0, -1, 1];
let n, m;

// Accepted --- 336ms
const latestDayToCross = (row, col, cells) => {
    n = row, m = col;
    let low = 0, high = n * m;
    while (low < high) {
        let mid = low + high + 1 >> 1;
        let visit = initialize2DArrayNew(n, m);
        bfs(visit, mid, cells) ? low = mid : high = mid - 1;
    }
    return low;
};

const bfs = (visit, mid, cells) => {
    for (let i = 0; i < mid; i++) {
        let [x, y] = cells[i];
        visit[x - 1][y - 1] = 0;
    }
    // pr(visit);
    let q = [];
    for (let j = 0; j < m; j++) { // first row start
        if (visit[0][j]) {
            visit[0][j] = 2;
            q.push([0, j]);
        }
    }
    while (q.length) {
        let [x, y] = q.shift();
        for (let k = 0; k < 4; k++) {
            let nx = x + dx[k], ny = y + dy[k];
            if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
                if (visit[nx][ny] == 1) {
                    visit[nx][ny] = 2;
                    q.push([nx, ny]);
                }
            }
        }
    }
    let ok = false;
    for (let j = 0; j < m; j++) {
        ok |= visit[n - 1][j] == 2;
    }
    return ok;
    // Accepted also 356ms
    // for (let j = 0; j < m; j++) {
    //     if (visit[n - 1][j] == 2) return true;
    // }
    // return false;
};

const main = () => {
    let row = 2, col = 2, cells = [[1, 1], [2, 1], [1, 2], [2, 2]];
    let row2 = 2, col2 = 2, cells2 = [[1, 1], [1, 2], [2, 1], [2, 2]];
    let row3 = 3, col3 = 3, cells3 = [[1, 2], [2, 1], [3, 3], [2, 2], [1, 1], [1, 3], [2, 3], [3, 2], [3, 1]];
    let row_debug1 = 34, col_debug1 = 3, cells_debug1 = [[2, 1], [20, 1], [8, 2], [7, 1], [26, 3], [14, 2], [9, 1], [11, 3], [16, 3], [34, 1], [29, 2], [23, 2], [12, 3], [32, 3], [34, 2], [33, 1], [26, 2], [15, 1], [2, 3], [11, 2], [30, 2], [16, 1], [6, 1], [1, 1], [5, 3], [25, 1], [28, 1], [19, 1], [10, 3], [27, 3], [31, 2], [4, 3], [30, 3], [24, 1], [20, 3], [10, 2], [29, 1], [24, 3], [1, 2], [22, 1], [19, 3], [14, 1], [25, 2], [17, 1], [3, 2], [27, 2], [20, 2], [7, 2], [17, 2], [31, 1], [26, 1], [6, 3], [3, 3], [4, 2], [6, 2], [24, 2], [18, 2], [21, 2], [11, 1], [2, 2], [31, 3], [32, 1], [13, 1], [23, 1], [21, 1], [17, 3], [7, 3], [4, 1], [13, 2], [15, 2], [8, 1], [28, 2], [10, 1], [9, 2], [13, 3], [23, 3], [12, 1], [5, 1], [12, 2], [18, 3], [15, 3], [30, 1], [3, 1], [5, 2], [14, 3], [21, 3], [34, 3], [9, 3], [22, 3], [16, 2], [22, 2], [27, 1], [28, 3], [8, 3], [19, 2], [33, 3], [25, 3], [18, 1], [1, 3], [32, 2], [29, 3], [33, 2]];
    pr(latestDayToCross(row, col, cells))
    pr(latestDayToCross(row2, col2, cells2))
    pr(latestDayToCross(row3, col3, cells3))
    pr(latestDayToCross(row_debug1, col_debug1, cells_debug1))
};

main()