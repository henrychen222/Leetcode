/**
 * 6.25 evening
 * https://leetcode.com/problems/baseball-game/
 */

// Accepted --- 80ms 36.6MB 27.87%
const calPoints = (ops) => {
    let points = [];
    let current = 0;
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] == 'C') {
            let removePoint = points.pop();
            current -= removePoint;
            // console.log(current);
        } else if (ops[i] == 'D') {
            let point = points[points.length - 1] * 2;
            points.push(point);
            current += point;
            // console.log(current);
        } else if (ops[i] == '+') {
            let point = points[points.length - 1] + points[points.length - 2];
            points.push(point);
            current += point;
            // console.log(current);
        } else {
            let point = Number(ops[i]);
            points.push(point);
            current += point;
            // console.log(current);
        }
    }
    // console.log(points);
    return current;
};

const main = () => {
    let ops = ["5", "2", "C", "D", "+"];
    let ops2 = ["5", "-2", "4", "C", "D", "9", "+", "+"];
    console.log(calPoints(ops));
    console.log(calPoints(ops2));
};

main()