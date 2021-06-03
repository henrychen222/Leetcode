/**
 * 06/02/21 afternoon
 * https://leetcode.com/problems/valid-square/
 */

// Accepted --- 112ms 5.34%
const validSquare = (i, j, k, m) => {
    if (isOverlap(i, j) || isOverlap(i, k) || isOverlap(i, m) || isOverlap(j, k) || isOverlap(j, m) || isOverlap(k, m)) return 0;
    if (ok(i, j, k, m) || ok(i, j, m, k) || ok(i, m, j, k) || ok(i, m, k, j) || ok(i, k, j, m) || ok(i, k, m, j)) return 1;
    if (ok(j, i, k, m) || ok(j, i, m, k) || ok(j, m, i, k) || ok(j, m, k, i) || ok(j, k, i, m) || ok(j, k, m, i)) return 1;
    if (ok(k, j, i, m) || ok(k, j, m, i) || ok(k, m, j, i) || ok(k, m, i, j) || ok(k, i, j, m) || ok(k, i, m, j)) return 1;
    if (ok(m, j, k, i) || ok(m, j, i, k) || ok(m, i, j, k) || ok(m, i, k, j) || ok(m, k, j, i) || ok(m, k, i, j)) return 1;
    return 0;
};

const ok = (p1, p2, p3, p4) => {
    let a = dissq(p1, p2);
    let b = dissq(p2, p3);
    let c = dissq(p3, p4);
    let d = dissq(p1, p4);
    let diag13 = dissq(p1, p3);
    let disg24 = dissq(p2, p4);
    // pr(a, b, c, d, diag13, disg24)
    return a == b && b == c && c == d && diag13 == disg24;
};

const dissq = (x, y) => (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2;
const isOverlap = (x, y) => x[0] == y[0] && x[1] == y[1];

const pr = console.log;
const main = () => {
    let p1 = [0, 0],
        p2 = [1, 1],
        p3 = [1, 0],
        p4 = [0, 1];
    let p1_2 = [0, 0],
        p2_2 = [1, 1],
        p3_2 = [1, 0],
        p4_2 = [0, 12];
    let p1_3 = [1, 0],
        p2_3 = [-1, 0],
        p3_3 = [0, 1],
        p4_3 = [0, -1];
    let p1_debug1 = [0, 0],
        p2_debu1 = [0, 0],
        p3_debug1 = [0, 0],
        p4_debug1 = [0, 0];
    pr(validSquare(p1, p2, p3, p4));
    pr(validSquare(p1_2, p2_2, p3_2, p4_2));
    pr(validSquare(p1_3, p2_3, p3_3, p4_3));
    pr(validSquare(p1_debug1, p2_debu1, p3_debug1, p4_debug1));
};

main()