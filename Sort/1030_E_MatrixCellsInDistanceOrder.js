/**
 * 5.31 evening
 * https://leetcode.com/problems/matrix-cells-in-distance-order/
 */

// Accepted --- 136ms 45.7MB 97.89%
const allCellsDistOrder = (R, C, r0, c0) => {
    let res = [];
    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            res.push([r, c]);
        }
    }
    res.sort((a, b) => {
        // (a[0], a[1]) ---- (r1, c1)  (b[0], b[1]) --- (r2, c2), calculate the distance with (r0 , c0) in increasing order
        return (Math.abs(a[0] - r0) + Math.abs(a[1] - c0)) - (Math.abs(b[0] - r0) + Math.abs(b[1] - c0));
    })
    return res;
};

const main = () => {
    let R = 1,
        C = 2,
        r0 = 0,
        c0 = 0;
    let R2 = 2,
        C2 = 2,
        r0_2 = 0,
        c0_2 = 1;
    let R3 = 2,
        C3 = 3,
        r0_3 = 1,
        c0_3 = 2;

    console.log(allCellsDistOrder(R, C, r0, c0));
    console.log(allCellsDistOrder(R2, C2, r0_2, c0_2));
    console.log(allCellsDistOrder(R3, C3, r0_3, c0_3));
};

main()