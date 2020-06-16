/**
 * 6.14 night
 * https://leetcode.com/problems/valid-boomerang/
 */

// Accepted --- 68ms 33.5MB 32.47%
const isBoomerang = (points) => {
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            if (points[i][0] == points[j][0] && points[i][1] == points[j][1]) {
                return false;
            }
        }
    }
    if (checkStraightLine(points) == true) return false;
    return true;
};

// 1232 code
const checkStraightLine = (coordinates) => {
    let x = [];
    let y = [];
    for (let i = 0; i < coordinates.length; i++) {
        x.push(coordinates[i][0]);
        y.push(coordinates[i][1]);
    }
    let res = [];
    for (let i = 0; i < x.length; i++) {
        for (let j = i + 1; j < x.length; j++) {
            let k = Math.abs((y[j] - y[i]) / (x[j] - x[i]));
            res.push(k);
        }
    }
    let removeDup = [...new Set(res)];
    if (removeDup.length == 1) {
        return true;
    }
    return false;
};

const main = () => {
    let points = [
        [1, 1],
        [2, 3],
        [3, 2]
    ];
    let points2 = [
        [1, 1],
        [2, 2],
        [3, 3]
    ];
    let debug1 = [
        [0, 0],
        [1, 1],
        [1, 1]
    ];
    console.log(isBoomerang(points));
    console.log(isBoomerang(points2));
    console.log(isBoomerang(debug1)); // false
};

main()