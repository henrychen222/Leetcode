/**
 * 04/23/22 evening
 * https://leetcode.com/contest/weekly-contest-290/problems/count-number-of-rectangles-containing-each-point/
 */

const pr = console.log;

const countRectangles = (rectangles, points) => {
    let d = rectangles.concat(points.map((x, i) => [...x, i]));
    // pr(d);
    // d.sort((x, y) => {
    //     if (x[0] != y[0]) return y[0] - x[0]; // larger width
    //     return x.length - y.length;
    // })
    d.sort((x, y) => y[0] - x[0]);
    // pr(d);
    let f = Array(101).fill(0), res = Array(points.length).fill(0);
    for (const [, y, idx] of d) {
        if (idx == undefined) { // process rectangles
            for (let height = 0; height <= y; height++) f[height]++; // larger height
        } else { // process points
            res[idx] = f[y];
        }
        // pr(res);
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