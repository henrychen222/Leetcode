/**
 * 1.16 evening
 * https://leetcode.com/contest/weekly-contest-224/problems/number-of-rectangles-that-can-form-the-largest-square/
 */

// Accepted
const countGoodRectangles = (rectangles) => {
    let res = rectangles.map(x => Math.min(x[0], x[1]));
    let max = Math.max.apply(Math, res);
    return res.filter(x => x == max).length;
};

const main = () => {
    let rectangles = [[5, 8], [3, 9], [5, 12], [16, 5]];
    let rectangles2 = [[2, 3], [3, 7], [4, 3], [3, 7]];
    console.log(countGoodRectangles(rectangles));
    console.log(countGoodRectangles(rectangles2));
};

main()