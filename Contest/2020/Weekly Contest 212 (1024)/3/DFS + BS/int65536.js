// 10.27 evening

// Accepted --- 296ms
const minimumEffortPath = (heights) => {
    let low = -1;
    let high = 2000000;
    while (high - low > 1) {
        let mid = low + ((high - low) >> 1);
        let m = heights.length;
        let n = heights[0].length;
        let visited = initialize2DArrayNew(m, n);
        const dfs = (x, y, prev) => {
            if (x < 0 || x >= m || y < 0 || y >= n) return;
            if (visited[x][y]) return;
            if (prev >= 0 && Math.abs(prev - heights[x][y]) > mid) return;
            visited[x][y] = 1;
            dfs(x + 1, y, heights[x][y]);
            dfs(x - 1, y, heights[x][y]);
            dfs(x, y + 1, heights[x][y]);
            dfs(x, y - 1, heights[x][y]);
        };
        dfs(0, 0, -1);
        if (visited[m - 1][n - 1]) {
            high = mid;
        } else {
            low = mid;
        }
    }
    return high;
};

const initialize2DArrayNew = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = new Array(n).fill(0);
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