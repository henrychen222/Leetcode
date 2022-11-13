// 10.24 night
class DJSet {
    constructor(n) {
        this.upper = new Array(n).fill(-1);
    }

    find(x) {
        return this.upper[x] < 0 ? x : (this.upper[x] = this.find(this.upper[x]));
    }

    equiv(x, y) {
        return this.find(x) == this.find(y);
    }

    union(x, y) {
        x = this.find(x);
        y = this.find(y);
        if (x != y) {
            if (this.upper[x] < this.upper[y]) {
                let tmp = x;
                x = y;
                y = tmp;
            }
            this.upper[x] += this.upper[y];
            this.upper[y] = x;
        }
        return x == y;
    }

    count() {
        let cnt = 0;
        for (const u of this.upper) {
            if (u < 0) cnt++;
        }
        return cnt;
    }
}

// Accepted --- 260ms
const minimumEffortPath = (heights) => {
    let m = heights.length;
    let n = heights[0].length;
    if (m + n == 2) return 0;
    let es = new Array(2 * m * n).fill(0);
    let p = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i + 1 < m) {
                es[p++] = [i * n + j, (i + 1) * n + j, Math.abs(heights[i][j] - heights[i + 1][j])];
            }
            if (j + 1 < n) {
                es[p++] = [i * n + j, i * n + j + 1, Math.abs(heights[i][j] - heights[i][j + 1])];
            }
        }
    }
    // console.log(p, es);
    es = es.slice(0, p);
    // console.log(es);
    es.sort((a, b) => a[2] - b[2]);
    let ds = new DJSet(m * n);
    for (const e of es) {
        ds.union(e[0], e[1]);
        if (ds.equiv(0, (m - 1) * n + (n - 1))) {
            return e[2];
        }
    }
    return -1;
};

// Accepted --- 248ms
const minimumEffortPath_modify = (heights) => {
    let m = heights.length;
    let n = heights[0].length;
    if (m + n == 2) return 0;
    let es = new Array(2 * m * n).fill(0);
    let p = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i + 1 < m) {
                es[p] = [i * n + j, (i + 1) * n + j, Math.abs(heights[i][j] - heights[i + 1][j])];
                p++;
            }
            if (j + 1 < n) {
                es[p] = [i * n + j, i * n + j + 1, Math.abs(heights[i][j] - heights[i][j + 1])];
                p++;
            }
        }
    }
    es = es.slice(0, p);
    es.sort((a, b) => a[2] - b[2]);
    let ds = new DJSet(m * n);
    for (const e of es) {
        ds.union(e[0], e[1]);
        if (ds.equiv(0, (m - 1) * n + (n - 1))) {
            return e[2];
        }
    }
    return -1;
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