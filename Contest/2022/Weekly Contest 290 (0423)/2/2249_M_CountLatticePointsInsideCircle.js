/**
 * 04/23/22 evening
 * https://leetcode.com/contest/weekly-contest-290/problems/count-lattice-points-inside-a-circle/
 */

const pr = console.log;

// Accepted
const countLatticePoints = (circles) => {
    let res = new Set();
    for (const [x, y, r] of circles) {
        // let topRight = [x + r, y + r], bottomRight = [x + r, y - r];
        // let topLeft = [x - r, y + r], bottomLeft = [x - r, y - r];
        // pr(topLeft, bottomLeft, topRight, bottomRight)
        for (let i = x - r; i <= x + r; i++) {
            for (let j = y - r; j <= y + r; j++) {
                if (inCircle(i, j, x, y, r)) res.add(i + ' ' + j);
            }
        }
    }
    return res.size;
};

const inCircle = (x, y, cx, cy, r) => {
    let disPow = Math.abs(x - cx) ** 2 + Math.abs(y - cy) ** 2;
    return disPow <= r * r;
};

const main = () => {
    let circles = [[2, 2, 1]];
    let circles2 = [[2, 2, 2], [3, 4, 1]];
    pr(countLatticePoints(circles))
    pr(countLatticePoints(circles2))
};

main()