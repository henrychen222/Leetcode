// 10.27 evening

// Accepted --- 192ms
const DIR = [[0, 1], [0, -1], [1, 0], [-1, 0]];
let h;
const minimumEffortPath = (heights) => {
    h = heights;
    let m = heights.length;
    let n = heights[0].length;
    let res = 0;
    let low = 0;
    let high = 1000000 + 10;
    while (low <= high) {
        let mid = (low + high) >> 1;
        let visited = initialize2DArrayNew(m, n);
        if (dfs(0, 0, mid, visited)) {
            res = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return res;
};

const dfs = (x, y, maxDiff, visited) => {
    let m = h.length;
    let n = h[0].length;
    if (x == m - 1 && y == n - 1) return true;
    if (visited[x][y]) return false;
    visited[x][y] = true;
    for (let i = 0; i < DIR.length; i++) {
        let nx = x + DIR[i][0];
        let ny = y + DIR[i][1];
        if (!(nx >= 0 && nx < m && ny >= 0 && ny < n)) continue;
        if (visited[nx][ny]) continue;
        let diff = Math.abs(h[nx][ny] - h[x][y]);
        if (diff > maxDiff) continue;
        if (dfs(nx, ny, maxDiff, visited)) return true;
    }
    return false;
};

const initialize2DArrayNew = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = new Array(n).fill(false);
        data.push(tmp);
    }
    return data;
};

const main = () => {
    let heights = [[1, 2, 2], [3, 8, 2], [5, 3, 5]];
    let heights2 = [[1, 2, 3], [3, 8, 4], [5, 3, 5]];
    let heights3 = [[1, 2, 1, 1, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 1, 1, 2, 1]];
    let debug1 = [[3]];
    let debug2 = [[1, 10, 6, 7, 9, 10, 4, 9]];
    console.log(minimumEffortPath(heights)); // 2
    console.log(minimumEffortPath(heights2)); // 1
    console.log(minimumEffortPath(heights3)); // 0
    console.log(minimumEffortPath(debug1)); // 0
    console.log(minimumEffortPath(debug2)); // 9
};

main()