/**
 * 04/23/22 evening
 * https://leetcode.com/contest/weekly-contest-290/problems/count-number-of-rectangles-containing-each-point/
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
    function bisect_left(a, x, lo = 0, hi = null) {
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = parseInt((lo + hi) / 2);
            a[mid] < x ? lo = mid + 1 : hi = mid;
        }
        return lo;
    }
}

const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };

// Accepted
const countRectangles = (rectangles, points) => {
    let maxHeight = Math.max(...rectangles.map(e => e[1])), g = initializeGraph(maxHeight + 1), res = [], bi = new Bisect();
    for (const [x, y] of rectangles) {
        g[y].push(x);
    }
    for (let i = 1; i <= maxHeight; i++) g[i].sort((x, y) => x - y); // Till now collect all width based on height
    // pr(maxHeight, g)
    for (const [x, y] of points) {
        let cnt = 0;
        for (let i = y; i <= maxHeight; i++) { // only larger height will be valid
            let idx = bi.bisect_left(g[i], x) // search for all valid width     >= lower_bound
            cnt += g[i].length - idx;
        }
        res.push(cnt);
    }
    return res;
};

const main = () => {
    let rectangles = [[1, 2], [2, 3], [2, 5]], points = [[2, 1], [1, 4]]
    let rectangles2 = [[1, 1], [2, 2], [3, 3]], points2 = [[1, 3], [1, 1]];
    let rectangles_debug1 = [[7, 1], [2, 6], [1, 4], [5, 2], [10, 3], [2, 4], [5, 9]],
        points_debug1 = [[10, 3], [8, 10], [2, 3], [5, 4], [8, 5], [7, 10], [6, 6], [3, 6]]
    let rectangle3 = [[7, 2], [7, 1], [1, 4], [5, 2], [10, 3], [2, 4], [5, 9]]
    pr(countRectangles(rectangles, points))
    pr(countRectangles(rectangles2, points2))
    pr(countRectangles(rectangles_debug1, points_debug1)) // [1,0,4,1,0,0,0,1]
    pr(countRectangles(rectangle3, points_debug1)) // [1,0,3,1,0,0,0,1]
};

main()