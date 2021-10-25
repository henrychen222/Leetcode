/**
 * 09/11/21 evening
 * https://leetcode.com/contest/weekly-contest-258/problems/number-of-pairs-of-interchangeable-rectangles/
 */

const pr = console.log;

const ll = BigInt;
const combination = (m, n) => { return factorial(m, n) / factorial(n, n); };
const factorial = (m, n) => { let num = 1n; let cnt = 0; for (let i = ll(m); i > 0; i--) { if (cnt == n) break; num *= i; cnt++; } return num; };

// Accepted
const interchangeableRectangles = (rectangles) => {
    let m = new Map(), res = 0n;
    for (const [w, h] of rectangles) {
        let tmp = w / h;
        m.set(tmp, m.get(tmp) + 1 || 1);
    }
    // pr(m);
    for (const [, occ] of m) {
        res += combination(occ, 2);
    }
    return res;
};


const main = () => {
    let rectangles = [[4, 8], [3, 6], [10, 20], [15, 30]];
    let rectangles2 = [[4, 5], [7, 8]];
    pr(interchangeableRectangles(rectangles))
    pr(interchangeableRectangles(rectangles2))
};

main()