/**
 * 07/06/21 noon
 * https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/
 * 
 * reference:
 * https://www.cnblogs.com/grandyang/p/5617660.html
 */

function Bisect() {
    return { insort_right, insort_left, bisect_left, bisect_right }
    function insort_right(a, x, lo = 0, hi = null) {
        lo = bisect_right(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_right(a, x, lo = 0, hi = null) {
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = lo + hi >> 1;
            x < a[mid] ? hi = mid : lo = mid + 1;
        }
        return lo;
    }
    function insort_left(a, x, lo = 0, hi = null) {
        lo = bisect_left(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_left(a, x, lo = 0, hi = null) {
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = lo + hi >> 1;
            a[mid] < x ? lo = mid + 1 : hi = mid;
        }
        return lo;
    }
}

function TreeSet(elements) {
    let ts = [];
    let se = new Set();
    let bisect = new Bisect();
    if (elements) addAll(elements);
    return { add, floor, ceiling, lower, remove, contains, size, clear, toArray };
    function addAll(elements) {
        for (const e of elements) {
            if (se.has(e)) continue;
            add(e);
            se.add(e);
        }
    }
    function add(e) {
        if (!se.has(e)) {
            bisect.insort_right(ts, e);
            se.add(e);
        }
    }
    function ceiling(e) {
        let idx = bisect.bisect_right(ts, e);
        if (ts[idx - 1] == e) return e;
        return ts[bisect.bisect_right(ts, e)];
    }
    function floor(e) {
        let idx = bisect.bisect_left(ts, e);
        if (ts[idx] == e) {
            return e;
        } else {
            return ts[bisect.bisect_left(ts, e) - 1];
        }
    }
    function lower(e) {
        let idx = bisect.bisect_left(ts, e);
        if (ts[idx] < e) {
            return ts[idx];
        } else {
            return ts[bisect.bisect_left(ts, e) - 1];
        }
    }
    function remove(e) {
        let res = new Set(ts);
        res.delete(e);
        ts = [...res];
        se.delete(e);
    }
    function contains(e) {
        return se.has(e);
    }
    function size() {
        return ts.length;
    }
    function clear() {
        ts = [];
    }
    function toArray() {
        return ts;
    }
}

// Accepted --- 792ms 23.94%
const maxSumSubmatrix1 = (g, k) => {
    let [n, m, res] = [g.length, g[0].length, Number.MIN_SAFE_INTEGER];
    for (let i = 0; i < m; i++) {
        let sum = Array(n).fill(0);
        for (let j = i; j < m; j++) {
            for (let k = 0; k < n; k++) {
                sum[k] += g[k][j];
            }
            let curSum = 0;
            let ts = new TreeSet([0]);
            for (const x of sum) {
                curSum += x;
                let tmp = ts.ceiling(curSum - k);
                if (tmp != undefined) res = Math.max(res, curSum - tmp);
                ts.add(curSum);
            }
        }
    }
    return res;
};

// 944ms 16.49%
const maxSumSubmatrix = (g, k) => {
    let [n, m, res] = [g.length, g[0].length, Number.MIN_SAFE_INTEGER];
    let dp = initialize2DArrayNew(n, m);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let sum = g[i][j];
            if (i > 0) sum += dp[i - 1][j];
            if (j > 0) sum += dp[i][j - 1];
            if (i > 0 && j > 0) sum -= dp[i - 1][j - 1];
            dp[i][j] = sum;
            for (let r = 0; r <= i; r++) {
                for (let c = 0; c <= j; c++) {
                    let curSum = dp[i][j];
                    if (r > 0) curSum -= dp[r - 1][j];
                    if (c > 0) curSum -= dp[i][c - 1];
                    if (r > 0 && c > 0) curSum += dp[r - 1][c - 1];
                    if (curSum <= k) res = Math.max(res, curSum);
                }
            }
        }
    }
    return res;
};

const initialize2DArrayNew = (n, m) => {
    let data = [];
    for (let i = 0; i < n; i++) {
        let tmp = Array(m).fill(0);
        data.push(tmp);
    }
    return data;
};

const pr = console.log;
const main = () => {
    let matrix = [
            [1, 0, 1],
            [0, -2, 3]
        ],
        k = 2;
    let matrix2 = [
            [2, 2, -1]
        ],
        k2 = 3;
    pr(maxSumSubmatrix(matrix, k));
    pr(maxSumSubmatrix(matrix2, k2));
};

main()