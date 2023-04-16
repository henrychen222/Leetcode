/**
 * 05/21/22 evening
 * https://leetcode.com/contest/weekly-contest-294/problems/minimum-lines-to-represent-a-line-chart/
 */

const pr = console.log;

const ll = BigInt;

// reference: Tlatoani 
// Accepted --- 476ms
const minimumLines = (stockPrices) => {
    let n = stockPrices.length, res = 1;
    if (n == 1) return 0;
    stockPrices.sort((x, y) => x[0] - y[0]);
    for (let i = 1; i < n - 1; i++) {
        if (!threePointsInLine(stockPrices[i - 1], stockPrices[i], stockPrices[i + 1])) res++;
    }
    return res;
};

const threePointsInLine = (p1, p2, p3) => {
    let [x1, y1] = p1, [x2, y2] = p2, [x3, y3] = p3;
    return ll((x2 - x1)) * ll((y3 - y2)) == ll((x3 - x2)) * ll((y2 - y1));
};

// Accepted --- 428ms
const minimumLines2 = (stockPrices) => {
    let n = stockPrices.length, res = 1;
    if (n == 1) return 0;
    stockPrices.sort((x, y) => x[0] - y[0]);
    for (let i = 1; i < n - 1; i++) {
        let [preX, preY] = stockPrices[i - 1], [curX, curY] = stockPrices[i], [nextX, nextY] = stockPrices[i + 1];
        if (ll((curX - preX)) * ll((nextY - curY)) != ll((nextX - curX)) * ll((curY - preY))) res++;
    }
    return res;
};

///////////////////////////////////////////////////////////////////

// WA
// https://www.geeksforgeeks.org/minimum-lines-cover-points/
const minimumLines1 = (stockPrices) => {
    let res = Number.MAX_SAFE_INTEGER;
    for (const [x, y] of stockPrices) {
        let tmp = minLinesToCoverPoints(stockPrices, x, y);
        res = Math.min(res, tmp);
    }
    return res / 2;
};

const gcd = (a, b) => b == 0 ? a : gcd(b, a % b);
const minLinesToCoverPoints = (points, x0, y0) => {
    let st = new Set(), minLines = 0;
    for (const [curX, curY] of points) {
        let tmp = getReducedForm(curY - y0, curX - x0);
        if (!st.has(tmp.join(""))) {
            st.add(tmp.join(""));
            minLines++;
        }
    }
    return minLines;
};

const getReducedForm = (dy, dx) => {
    let g = gcd(Math.abs(dy), Math.abs(dx));
    let sign = (dy < 0) ^ (dx < 0);
    if (sign) {
        return [Math.floor(-Math.abs(dy) / g), Math.floor(Math.abs(dx) / g)];
    }
    else {
        return [Math.floor(Math.abs(dy) / g), Math.floor(Math.abs(dx) / g)];
    }
};

const main = () => {
    let stockPrices = [[1, 7], [2, 6], [3, 5], [4, 4], [5, 4], [6, 3], [7, 2], [8, 1]];
    let stockPrices2 = [[3, 4], [1, 2], [7, 8], [2, 3]];
    let debug1 = [[36, 9], [17, 93], [34, 4], [30, 11], [11, 41], [53, 36], [5, 92], [81, 92], [28, 36], [3, 45], [72, 33], [64, 1], [4, 70], [16, 73], [99, 20], [49, 33], [47, 74], [83, 91]];
    let debug2 = [[1, 1]];
    let debug3 = [[1, 1], [500000000, 499999999], [1000000000, 999999998]];
    let points = [[-1, 3], [4, 3], [2, 1], [-1, -2], [3, -3]];
    pr(minimumLines(stockPrices));
    pr(minimumLines(stockPrices2));
    pr(minimumLines(debug1)); // 17
    pr(minimumLines(debug2)); // 0
    pr(minimumLines(debug3)); // 2
    // pr(minimumLines(points));
};

main()