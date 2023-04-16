/**
 * 10.31 morning
 * https://leetcode.com/contest/biweekly-contest-38/problems/widest-vertical-area-between-two-points-containing-no-points/
 */

// Accepted
const maxWidthOfVerticalArea = (points) => {
    let n = points.length;
    points.sort((a, b) => a[0] - b[0]);
    // console.log(points);
    let max = 0;
    for (let i = 0; i < n; i++) {
        loop:
        for (let j = i + 1; j < n; j++) {
            for (let k = i; k <= j; k++) {
                if (points[k][0] > points[i][0] && points[k][0] < points[j][0]) break loop;
            }
            let tmp = points[j][0] - points[i][0];
            max = Math.max(max, tmp);
        }
    }
    return max;
};

const main = () => {
    let points = [[8, 7], [9, 9], [7, 4], [9, 7]];
    let points2 = [[3, 1], [9, 0], [1, 0], [1, 4], [5, 3], [8, 8]];
    console.log(maxWidthOfVerticalArea(points));
    console.log(maxWidthOfVerticalArea(points2))
};

main()