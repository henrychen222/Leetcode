/**
 * 04/23/22 evening
 * https://leetcode.com/contest/weekly-contest-290/problems/count-number-of-rectangles-containing-each-point/
 */

const pr = console.log;

function Bisect() {
    // return { insort_right, insort_left, bisect_left_L, bisect_left_R, bisect_right }
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
    // function bisect_left_L(a, x, lo = 0, hi = null) {
    //     if (lo < 0) throw new Error('lo must be non-negative');
    //     if (hi == null) hi = a.length;
    //     while (lo < hi) {
    //         let mid = parseInt((lo + hi) / 2);
    //         a[mid][0] < x ? lo = mid + 1 : hi = mid;
    //     }
    //     return lo;
    // }
    // function bisect_left_R(a, x, lo = 0, hi = null) {
    //     if (lo < 0) throw new Error('lo must be non-negative');
    //     if (hi == null) hi = a.length;
    //     while (lo < hi) {
    //         let mid = parseInt((lo + hi) / 2);
    //         a[mid][1] < x ? lo = mid + 1 : hi = mid;
    //     }
    //     return lo;
    // }

    // function bisect_left(a, p, lo = 0, hi = null) { // >= lower_bound
    //     if (lo < 0) throw new Error('lo must be non-negative');
    //     if (hi == null) hi = a.length;
    //     while (lo < hi) {
    //         let mid = parseInt((lo + hi) / 2);
    //         if (possible(a, mid, p)) {
    //             lo = mid + 1;
    //         } else {
    //             hi = mid;
    //         }
    //     }
    //     return hi;
    // }
    // function possible (a, mid, p) {
    //    let [topRX, topRY] = a[mid], [x, y] = p;
    //    return x <= topRX && y <= topRY;
    // }
}

// TLE 40/47
// const countRectangles4 = (rectangles, points) => {
//     rectangles.sort((x, y) => x[0] - y[0]);
//     let bi = new Bisect(), res = [];
//     for (const [x, y] of points) {
//         let ix = bi.bisect_left_L(rectangles, x)
//         let valid = rectangles.slice(ix);
//         let b = valid.sort((p, q) => p[1] - q[1]);
//         let iy = bi.bisect_left_R(b, y), cnt = b.length - iy;
//         res.push(cnt);
//     }
//     return res;
// };

// // TLE 40/47
const countRectangles = (rectangles, points) => {
    rectangles.sort((x, y) => x[0] - y[0]);
    let a = rectangles.map(e => e[0]);
    // pr("rectangles", rectangles);
    // pr("x", a);
    let bi = new Bisect(), res = [];
    for (const [x, y] of points) {
        let ix = bi.bisect_left(a, x)
        let valid = rectangles.slice(ix);
        let b = valid.map(e => e[1]).sort((p, q) => p - q);
        let iy = bi.bisect_left(b, y), cnt = b.length - iy;
        // pr([x, y], "ix", ix, "valid", valid, "b", b, "iy", iy, "cnt", cnt)
        res.push(cnt);
    }
    return res;
};

////////////////////////////////////////////////////////////////////////
// const countRectangles2 = (rectangles, points) => {
//     let n = rectangles.length;
//     rectangles.sort((x, y) => {
//         if (x[0] != y[0]) return x[0] - y[0];
//         return x[1] - y[1];
//     })
//     let bi = new Bisect(), res = [];
//     pr(rectangles)
//     for (const p of points) {
//         let idx = bi.bisect_left(rectangles, p);
//         let cnt = n - idx;
//         pr(p, "idx", idx, "cnt", cnt)
//         res.push(cnt);
//     }
//     return res;
// };

// const countRectangles1 = (rectangles, points) => {
//     let n = rectangles.length;
//     rectangles.sort((x, y) => {
//         if (x[0] != y[0]) return x[0] - y[0];
//         return x[1] - y[1];
//     })
//     let a = [], b = [], bi = new Bisect(), res = [];
//     rectangles.map(e => {
//         a.push(e[0]);
//         b.push(e[1]);
//     });
//     //    pr("x", a);
//     //    pr("y", b)
//     for (const [x, y] of points) {
//         let ix = bi.bisect_left(a, x), iy = bi.bisect_left(b, y);
//         let can = Math.max(ix, iy);
//         // pr("x", x, "ix", ix, "y", y, "iy", iy)
//         res.push(n - can);
//     }
//     return res;
// };

const test = (rectangles, points) => {
    let res = [];
    for (const [x, y] of points) {
        let cnt = 0;
        pr("cur", [x, y])
        for (const [rx, ry] of rectangles) {
            if (inRectangles(rx, ry, x, y)) {
                pr("ok", [rx, ry])
                cnt++;
            }
        }
        res.push(cnt);
    }
    return res;
}

const inRectangles = (topRX, topRY, x, y) => x <= topRX && y <= topRY;

const main = () => {
    let rectangles = [[1, 2], [2, 3], [2, 5]], points = [[2, 1], [1, 4]]
    let rectangles2 = [[1, 1], [2, 2], [3, 3]], points2 = [[1, 3], [1, 1]];
    let rectangles_debug1 = [[7, 1], [2, 6], [1, 4], [5, 2], [10, 3], [2, 4], [5, 9]],
        points_debug1 = [[10, 3], [8, 10], [2, 3], [5, 4], [8, 5], [7, 10], [6, 6], [3, 6]]
    pr(countRectangles(rectangles, points))
    pr(countRectangles(rectangles2, points2))
    pr(countRectangles(rectangles_debug1, points_debug1)) // [1,0,4,1,0,0,0,1]
};

main()

/*
[10, 3]    [10, 3]

[ 2, 3 ]

[ 2, 4 ]
[ 2, 6 ]
[ 5, 9 ]
[ 10, 3 ] 
*/