// 10.24 night

// Accepted --- 312ms
const d4 = [[1, 0], [0, 1], [-1, 0], [0, -1]];
const minimumEffortPath1 = (heights) => {
    let m = heights.length;
    let n = heights[0].length;
    let low = 0;
    let high = 1e6;
    let flag = new Array(m * n);
    while (low != high) {
        let mid = low + ((high - low) >> 1);
        flag.fill(false);
        flag[0] = true;
        let q = [];
        q.push(0);
        while (q.length != 0) {
            let pos = q[0];
            q.shift();
            let x = Math.floor(pos / n);
            let y = pos % n;
            for (let k = 0; k < 4; k++) {
                let nx = x + d4[k][0];
                let ny = y + d4[k][1];
                if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
                if (Math.abs(heights[nx][ny] - heights[x][y]) > mid) continue;
                let npos = nx * n + ny;
                if (flag[npos]) continue;
                flag[npos] = true;
                q.push(npos);
            }
            // console.log(q, flag)
        }
        if (!flag[m * n - 1]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return high;
};

// Accepted --- 316ms
const minimumEffortPath = (heights) => {
    let m = heights.length;
    let n = heights[0].length;
    let low = 0;
    let high = 1e6;
    let flag = new Array(m * n);
    while (low != high) {
        let mid = low + ((high - low) >> 1);
        flag.fill(false);
        flag[0] = true;
        let q = [];
        q.push(0);
        while (q.length != 0) {
            let pos = q[0];
            q.shift();
            let x = parseInt(pos / n); // difference
            let y = pos % n;
            for (let k = 0; k < 4; k++) {
                let nx = x + d4[k][0];
                let ny = y + d4[k][1];
                if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
                if (Math.abs(heights[nx][ny] - heights[x][y]) > mid) continue;
                let npos = nx * n + ny;
                if (flag[npos]) continue;
                flag[npos] = true;
                q.push(npos);
            }
        }
        if (!flag[m * n - 1]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return high;
};

const main = () => {
    let heights = [[1, 2, 2], [3, 8, 2], [5, 3, 5]];
    let heights2 = [[1, 2, 3], [3, 8, 4], [5, 3, 5]];
    let heights3 = [[1, 2, 1, 1, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 1, 1, 2, 1]];
    let debug1 = [[3]];
    let debug2 = [[1, 10, 6, 7, 9, 10, 4, 9]];
    console.log(minimumEffortPath(heights));
    console.log(minimumEffortPath(heights2));
    console.log(minimumEffortPath(heights3));
    console.log(minimumEffortPath(debug1)); // 0
    console.log(minimumEffortPath(debug2)); // 9
};

main()