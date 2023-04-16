// 10.27 afternoon 10.27 evening

const initialize2DArrayNew = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = new Array(n).fill(0);
        data.push(tmp);
    }
    return data;
};

// Accepted --- 212ms
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
const visited = initialize2DArrayNew(105, 105);
const minimumEffortPath = (heights) => {
    let m = heights.length;
    let n = heights[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            visited[i][j] = 0;
        }
    }
    // console.log(visited);
    let l = 0;
    let r = 1000000;
    let tag = 1;
    while (l < r) {
        let mid = (l + r) >> 1;
        dfs(heights, 0, 0, mid, tag);
        if (visited[m - 1][n - 1] == tag) {
            r = mid;
        } else {
            l = mid + 1;
        }
        tag++;
    }
    return l;
};

const dfs = (h, x, y, cell, tag) => {
    // console.log(h, x, y, cell, tag);
    if (visited[x][y] == tag) return;
    visited[x][y] = tag;
    for (let d = 0; d < 4; d++) {
        let xx = x + dx[d];
        let yy = y + dy[d];
        if (xx < 0 || xx >= h.length || yy < 0 || yy >= h[0].length) continue;
        if (Math.abs(h[x][y] - h[xx][yy]) > cell) continue;
        dfs(h, xx, yy, cell, tag);
    }
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