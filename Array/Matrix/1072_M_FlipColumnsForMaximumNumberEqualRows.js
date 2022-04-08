/**
 * 03/30/22 evening
 * https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows/
 */

const pr = console.log;

const counter = (a_or_s) => { let m = new Map(); for (const x of a_or_s) m.set(x, m.get(x) + 1 || 1); return m; };

// Accepted --- 169ms 83.33%
const maxEqualRowsAfterFlips = (g) => {
    g = g.map(a => a.join(""));
    let m = counter(g), res = 0;
    // pr(m);
    for (const [s, occ] of m) {
        let f = flip(s), focc = m.get(f) || 0;
        res = Math.max(res, occ + focc); // '110' and '001' when one flipped col 1 and 2 become 000 and 111
    }
    return res;
};

const flip = (s) => {
    let res = '';
    for (const c of s) res += c ^ 1;
    return res;
};

const main = () => {
    let matrix = [
        [0, 1],
        [1, 1]
    ];
    let matrix2 = [
        [0, 1],
        [1, 0]
    ];
    let matrix3 = [
        [0, 0, 0],
        [0, 0, 1],
        [1, 1, 0]
    ];
    pr(maxEqualRowsAfterFlips(matrix))
    pr(maxEqualRowsAfterFlips(matrix2))
    pr(maxEqualRowsAfterFlips(matrix3))
};

main()

// pr(0 ^ 0 ^ 1, 0 ^ 0 ^ 1, 0 ^ 1 ^ 0)
// pr(flip('001'))