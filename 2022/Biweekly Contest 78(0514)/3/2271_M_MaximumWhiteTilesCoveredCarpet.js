/**
 * 05/14/22 morning
 * https://leetcode.com/contest/biweekly-contest-78/problems/maximum-white-tiles-covered-by-a-carpet/
 */

const pr = console.log;


function Bisect() {
    return { insort_right, insort_left, bisect_left, bisect_right }
    function insort_right(a, x, lo = 0, hi = null) {
        lo = bisect_right(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_right(a, x, lo = 0, hi = null) { // > upper_bound
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = parseInt((lo + hi) / 2);
            a[mid] > x ? hi = mid : lo = mid + 1;
        }
        return lo;
    }
    function insort_left(a, x, lo = 0, hi = null) {
        lo = bisect_left(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_left(a, x, lo = 0, hi = null) { // >= lower_bound
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = parseInt((lo + hi) / 2);
            a[mid] < x ? lo = mid + 1 : hi = mid;
        }
        return lo;
    }
}

const preSum = (a) => { let pre = [0]; for (let i = 0; i < a.length; i++) { pre.push(pre[i] + a[i]); } return pre; };
const subArraySum = (a, l, r) => a[r + 1] - a[l];

// Accepted
const maximumWhiteTiles = (tiles, carpetLen) => {
    tiles.sort((x, y) => x[0] - y[0]);
    let n = tiles.length, a = tiles.map(x => x[0]), dis = tiles.map(e => e[1] - e[0] + 1), bi = new Bisect();
    let pre = preSum(dis), res = Number.MIN_SAFE_INTEGER;
    // pr(tiles)
    // pr(dis)
    for (let i = 0; i < n; i++) {
        let l = tiles[i][0];
        let end = l + carpetLen - 1;
        let idx = bi.bisect_right(a, end) - 1;
        let stop = tiles[idx];
        let lastLen = Math.min(end, stop[1]) - stop[0] + 1;
        // pr("\n", end, stop, lastLen)
        let rangeSum = subArraySum(pre, i, idx - 1);
        let use = rangeSum + lastLen;
        // pr("l", l, "end", end, "r", stop[1], "range", i, idx, "rangeSum", rangeSum, "lastLen", lastLen, "use", use);
        res = Math.max(res, use);
    }
    return res;
};

const main = () => {
    let tiles = [[1, 5], [10, 11], [12, 18], [20, 25], [30, 32]], carpetLen = 10;
    let tiles2 = [[10, 11], [1, 1]], carpetLen2 = 2;
    pr(maximumWhiteTiles(tiles, carpetLen))
    pr(maximumWhiteTiles(tiles2, carpetLen2))
};

main()