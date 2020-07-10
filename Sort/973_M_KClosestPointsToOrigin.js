/**
 * 7.9 afternoon
 * https://leetcode.com/problems/k-closest-points-to-origin/
 */

// Accepted --- 176ms 44.6MB
const kClosest = (points, K) => {
    return points.sort((a, b) => (a[0] ** 2 + a[1] ** 2) - (b[0] ** 2 + b[1] ** 2)).slice(0, K);
};

const main = () => {
    let points = [
            [1, 3],
            [-2, 2]
        ],
        K = 1;
    let points2 = [
            [3, 3],
            [5, -1],
            [-2, 4]
        ],
        K2 = 2;
    console.log(kClosest(points, K));
    console.log(kClosest(points2, K2));
};

main()