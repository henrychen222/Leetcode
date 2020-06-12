/**
 * 6.11 night
 * https://leetcode.com/problems/minimum-time-visiting-all-points/
 */

// Accepted --- 72ms 36.9MB 40.79%
const minTimeToVisitAllPoints = (points) => {
    let sum = 0;
    for (let i = 1; i < points.length; i++) {
        let xiDiff = Math.abs(points[i - 1][0] - points[i][0]);
        let yiDiff = Math.abs(points[i - 1][1] - points[i][1]);
        if (points[i - 1][0] == points[i][0]) {
            sum += yiDiff;
        } else if (points[i - 1][1] == points[i][1]) {
            sum += xiDiff;
        } else {
            sum += Math.max(xiDiff, yiDiff);
        }
    }
    return sum;
};

// Accepted --- 72ms 36.5MB 40.79%
const minTimeToVisitAllPoints_refine = (points) => {
    let sum = 0;
    for (let i = 1; i < points.length; i++) {
        let xiDiff = Math.abs(points[i - 1][0] - points[i][0]);
        let yiDiff = Math.abs(points[i - 1][1] - points[i][1]);
        sum += Math.max(xiDiff, yiDiff);
    }
    return sum;
};

const main = () => {
    let points = [
        [1, 1],
        [3, 4],
        [-1, 0]
    ];
    let points2 = [
        [3, 2],
        [-2, 2]
    ];
    console.log(minTimeToVisitAllPoints(points));
    console.log(minTimeToVisitAllPoints(points2));
    console.log(minTimeToVisitAllPoints_refine(points));
    console.log(minTimeToVisitAllPoints_refine(points2));
};

main()