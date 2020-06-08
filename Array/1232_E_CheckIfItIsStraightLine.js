/**
 * 6.5 night
 * https://leetcode.com/problems/check-if-it-is-a-straight-line/
 */

// Accepted --- 528ms 84.9MB 5.18%
const checkStraightLine = (coordinates) => {
    let x = [];
    let y = [];
    for (let i = 0; i < coordinates.length; i++) {
        x.push(coordinates[i][0]);
        y.push(coordinates[i][1]);
    }
    // console.log(x);
    // console.log(y);
    let res = [];
    for (let i = 0; i < x.length; i++) {
        for (let j = i + 1; j < x.length; j++) {
            let k = Math.abs((y[j] - y[i]) / (x[j] - x[i]));
            // console.log(k);
            res.push(k);
        }
    }
    // console.log(res);
    let removeDup = [...new Set(res)];
    // console.log(removeDup);
    if (removeDup.length == 1) {
        return true;
    }
    return false;
};

const main = () => {
    let coordinates = [
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
        [5, 6],
        [6, 7]
    ];
    let coordinates2 = [
        [1, 1],
        [2, 2],
        [3, 4],
        [4, 5],
        [5, 6],
        [7, 7]
    ];
    let debug1 = [
        [-2, 12],
        [2, -8],
        [6, -28],
        [-10, 52],
        [-7, 37],
        [4, -18],
        [7, -33],
        [1, -3],
        [-1, 7],
        [8, -38]
    ];
    console.log(checkStraightLine(coordinates));
    console.log(checkStraightLine(coordinates2));
    console.log(checkStraightLine(debug1));
};

main()