/**
 * 10.26 noon
 * https://leetcode.com/problems/rectangle-overlap/
 */

// Accepted --- 30.84% 
const isRectangleOverlap2 = (rec1, rec2) => {
    let x1 = rec1[0];
    let y1 = rec1[1];
    let x2 = rec1[2];
    let y2 = rec1[3];
    let x3 = rec2[0];
    let y3 = rec2[1];
    let x4 = rec2[2];
    let y4 = rec2[3];
    if (x1 == x2 || y1 == y2 || x3 == x4 || y3 == y4) return false;
    if (x1 >= x4 || x3 >= x2 || y1 >= y4 || y3 >= y2) return false;
    return true;
};

/**
 * Accepted --- 80ms 30.84%
 * reference:
 * https://leetcode.com/problems/rectangle-overlap/discuss/133175/C%2B%2B-Solution-with-easy-explanation
 * https://leetcode.com/problems/rectangle-overlap/discuss/132340/C%2B%2BJavaPython-1-line-Solution-1D-to-2D
 * https://leetcode.com/problems/rectangle-overlap/discuss/901909/just-add-2-if-statements-to-check-for-badly-defined-rectangles
 * https://leetcode.com/problems/rectangle-overlap/discuss/899266/Java-solution-with-invalid-testcases-check
 */
const isRectangleOverlap = (rec1, rec2) => {
    let x1 = rec1[0];
    let y1 = rec1[1];
    let x2 = rec1[2];
    let y2 = rec1[3];
    let x3 = rec2[0];
    let y3 = rec2[1];
    let x4 = rec2[2];
    let y4 = rec2[3];
    if (x1 == x2 || y1 == y2 || x3 == x4 || y3 == y4) return false; // Handle Invalid testcases like [-1,0,1,1] [0,-1,0,1] 
    return x1 < x4 && x3 < x2 && y1 < y4 && y3 < y2;
};

// Time limit 23/54
// const isRectangleOverlap = (rec1, rec2) => {
//     let points1 = generate(rec1);
//     let points2 = generate(rec2);
//     // console.log(points1, points2);
//     for (const p1 of points1) {
//         let tmp1 = JSON.stringify(p1);
//         for (const p2 of points2) {
//             if (tmp1 == JSON.stringify(p2)) {
//                 let p1x = p1[0];
//                 let p1y = p1[1];
//                 if (p1x != rec2[0] && p1x != rec2[2] && p1y != rec2[1] && p1y != rec2[3]) {
//                     return true;
//                 }
//             }
//         }
//     }
//     for (const p2 of points2) {
//         let tmp2 = JSON.stringify(p2);
//         for (const p1 of points1) {
//             if (tmp2 == JSON.stringify(p1)) {
//                 let p2x = p2[0];
//                 let p2y = p2[1];
//                 if (p2x != rec1[0] && p2x != rec1[2] && p2y != rec1[1] && p2y != rec1[3]) {
//                     return true;
//                 }
//             }
//         }
//     }
//     return false;
// };

// const generate = (rec) => {
//     let x1 = rec[0];
//     let y1 = rec[1];
//     let x2 = rec[2];
//     let y2 = rec[3];
//     let points = [];
//     for (let i = x1; i <= x2; i++) {
//         for (let j = y1; j <= y2; j++) {
//             let p = [i, j];
//             points.push(p);
//         }
//     }
//     return points;
// };

const main = () => {
    let rec1 = [0, 0, 2, 2],
        rec2 = [1, 1, 3, 3];
    let rec1_2 = [0, 0, 1, 1],
        rec2_2 = [1, 0, 2, 1];
    let rec1_3 = [0, 0, 1, 1],
        rec2_3 = [2, 2, 3, 3];
    let rec1_debug1 = [-10, -4, -3, 2],
        rec2_debug1 = [-3, -4, 5, 3];
    let rec1_debug2 = [-1,0,1,1],
        rec2_debug2 = [0,-1,0,1];
    console.log(isRectangleOverlap(rec1, rec2));
    console.log(isRectangleOverlap(rec1_2, rec2_2));
    console.log(isRectangleOverlap(rec1_3, rec2_3));
    console.log(isRectangleOverlap(rec1_debug1, rec2_debug1)); // false
    console.log(isRectangleOverlap(rec1_debug2, rec2_debug2)); // false
};

main()