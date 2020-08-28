/**
 * 6.14 night
 * https://leetcode.com/problems/largest-triangle-area/
 */

// Accepted --- 88ms 68.00%  (fixed, issue with Math.max return NaN)
const largestTriangleArea1 = (points) => {
    let max = Number.MIN_VALUE;
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            for (let k = j + 1; k < points.length; k++) {
                let tmp = getTriangleArea(points[i], points[j], points[k]);
                if (!isNaN(tmp)) { // fixed, because getTriangleArea() will return NaN in some cases
                    max = Math.max(max, tmp);
                }
                // max = Math.max(max, getTriangleArea(points[i], points[j], points[k]));
                // console.log(max);
            }
        }
    }
    return roundToXDigits(max, 2);
};

// Accepted --- 140ms 20.00% (fixed same issue)
const largestTriangleArea = (points) => {
    let res = [];
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            for (let k = j + 1; k < points.length; k++) {
                let tmp = getTriangleArea(points[i], points[j], points[k]);
                if (!isNaN(tmp)) { // fixed
                    res.push(tmp);
                }
                // res.push(getTriangleArea(points[i], points[j], points[k]));
            }
        }
    }
    res.sort((a, b) => a - b);
    return roundToXDigits(res[res.length - 1]);
};

const getTriangleArea = (point1, point2, point3) => {
    // console.log(point1, point2, point3);
    let e12 = Math.sqrt((point1[0] - point2[0]) ** 2 + (point1[1] - point2[1]) ** 2);
    let e13 = Math.sqrt((point1[0] - point3[0]) ** 2 + (point1[1] - point3[1]) ** 2);
    let e23 = Math.sqrt((point2[0] - point3[0]) ** 2 + (point2[1] - point3[1]) ** 2);
    // console.log(e12, e13, e23);
    let p = (e12 + e13 + e23) / 2;
    // console.log(p)
    // console.log(Math.sqrt(p * (p - e12) * (p - e13) * (p - e23)))
    return Math.sqrt(p * (p - e12) * (p - e13) * (p - e23));
};

const roundToXDigits = (value, digits) => {
    if (!digits) {
        digits = 2;
    }
    value = value * Math.pow(10, digits);
    value = Math.round(value);
    value = value / Math.pow(10, digits);
    return value;
};

const main = () => {
    let points = [
        [0, 0],
        [0, 1],
        [1, 0],
        [0, 2],
        [2, 0]
    ];
    let debug1 = [
        [1, 0],
        [0, 0],
        [0, 1]
    ];
    let debug2 = [
        [35, -23],
        [-12, -48],
        [-34, -40],
        [21, -25],
        [-35, -44],
        [24, 1],
        [16, -9],
        [41, 4],
        [-36, -49],
        [42, -49],
        [-37, -20],
        [-35, 11],
        [-2, -36],
        [18, 21],
        [18, 8],
        [-24, 14],
        [-23, -11],
        [-8, 44],
        [-19, -3],
        [0, -10],
        [-21, -4],
        [23, 18],
        [20, 11],
        [-42, 24],
        [6, -19]
    ];
    let debug3 = [
        [-40, -17],
        [44, 22],
        [-32, 29],
        [8, -49],
        [-8, 20],
        [-47, 49],
        [21, -31],
        [13, 1],
        [12, -41],
        [-23, -8],
        [9, 5],
        [-3, 17],
        [38, -36],
        [48, 0],
        [15, 40],
        [34, -20],
        [3, 16],
        [49, -1],
        [-48, 12],
        [-28, 22],
        [-35, 10],
        [12, -21],
        [-43, -22],
        [-18, 11],
        [-16, 32],
        [-18, 7],
        [-33, -5],
        [34, 36],
        [29, 25],
        [41, -49],
        [8, -9],
        [29, -44],
        [-22, 12],
        [35, 44],
        [34, 15],
        [-37, -33],
        [-5, 26],
        [14, 50],
        [49, -50],
        [35, 5]
    ];
    let debug4 = [
        [-18, 12],
        [42, -41],
        [-12, 4],
        [37, 9],
        [-43, -19],
        [-40, 43],
        [-31, 20],
        [42, 16],
        [-45, 44],
        [-48, 11],
        [17, -17],
        [-20, -17],
        [32, 47],
        [23, 41],
        [3, -23],
        [-37, 29],
        [27, 30],
        [-10, -15],
        [-44, -46],
        [48, -50],
        [7, -28],
        [28, -8],
        [-45, 14],
        [-15, 6],
        [22, 26],
        [-21, 2],
        [50, -23],
        [-29, -5],
        [-32, -17],
        [-5, -21],
        [5, -30],
        [-38, 41],
        [46, -17],
        [10, 29],
        [36, 7],
        [46, -16],
        [-23, 42],
        [-31, -22],
        [49, -3],
        [-45, -48],
        [-6, -36],
        [-46, -35],
        [36, 18],
        [22, -24],
        [-50, 33],
        [-45, 46],
        [-13, 0],
        [18, -39],
        [-49, -17],
        [6, -37]
    ];
    console.log(largestTriangleArea1(points));
    console.log(largestTriangleArea1(debug1));
    console.log(largestTriangleArea1(debug2));
    console.log(largestTriangleArea1(debug3));
    console.log(largestTriangleArea1(debug4));

    console.log("");
    console.log(largestTriangleArea(points)); // 2
    console.log(largestTriangleArea(debug1)); // 0.5
    console.log(largestTriangleArea(debug2)); // 3627
    console.log(largestTriangleArea(debug3)); // 4128  why lc is 3952
    console.log(largestTriangleArea(debug4)); // 4494.5  why lc is 4465 (fixed, same issue, because of NaN)
};

main()