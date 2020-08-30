/**
 * 8.28 evening
 * https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation/
 */

// Accepted --- 636ms 14.67%
const findSolution = (customfunction, z) => {
    let res = [];
    for (let x = 1; x <= 1000; x++) {
        for (let y = 1; y <= 1000; y++) {
            if (customfunction.f(x, y) == z) {
                res.push([x, y]);
            }
        }
    }
    return res;
};