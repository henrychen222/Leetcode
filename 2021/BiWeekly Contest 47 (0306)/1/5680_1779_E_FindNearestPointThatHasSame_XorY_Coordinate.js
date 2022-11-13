/**
 * 03/06/21 morning
 * https://leetcode.com/contest/biweekly-contest-47/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/
 */

const pr = console.log;

const mi = Math.min;
const abs = Math.abs;
// const nearestValidPoint = (x, y, points) => {
//     let a = [];
//     for (const p of points) {
//         if (p[0] == x || p[1] == y) a.push([p[0], p[1]]);
//     }
//     let min = Number.MAX_SAFE_INTEGER;
//     for (const e of a) {
//         let tmp = abs(e[0] - x) + abs(e[1] - y);
//         min = mi(min, tmp);
//     }
//     pr(a, min);
//     for (let i = 0; i < points.length; i++) {
//         let tmp = abs(points[i][0] - x) + abs(points[i][1] - y);
//         if (tmp == min) {
//             return i;
//         }
//     }
//     return -1;
// };


// Accepted
const nearestValidPoint = (x, y, points) => {
    let min = Number.MAX_SAFE_INTEGER;
    let n = points.length;
    for (const p of points) {
        if (p[0] == x || p[1] == y) {
            // pr(p);
            let tmp = abs(p[0] - x) + abs(p[1] - y);
            min = mi(min, tmp);
        }
    }
    // pr(min);
    for (let i = 0; i < n; i++) {
        if (points[i][0] == x || points[i][1] == y) {
            let tmp = abs(points[i][0] - x) + abs(points[i][1] - y);
            if (tmp == min) {
                return i;
            }
        }
    }
    return -1;
};

const main = () => {
    let x = 3, y = 4, points = [[1, 2], [3, 1], [2, 4], [2, 3], [4, 4]];
    let x2 = 3, y2 = 4, points2 = [[3, 4]];
    let x3 = 3, y3 = 4, points3 = [[2, 3]];
    let x4 = 5, y4 = 1, points4 = [[1, 1], [6, 2], [1, 5], [3, 1]]
    pr(nearestValidPoint(x, y, points));
    pr(nearestValidPoint(x2, y2, points2));
    pr(nearestValidPoint(x3, y3, points3));
    pr(nearestValidPoint(x4, y4, points4)); // 3
}

main()