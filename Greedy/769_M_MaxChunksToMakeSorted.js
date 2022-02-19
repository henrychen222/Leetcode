/**
 * 02/09/22 night
 * https://leetcode.com/problems/max-chunks-to-make-sorted/
 */

const aeq = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);

// Accepted --- 99ms 40.96%
const maxChunksToSorted = (a) => {
    let b = [...a].sort((x, y) => x - y);
    let res = 0, n = a.length;
    for (let i = 0; i < n; i++) {
        let p = a.slice(0, i + 1), expect = b.slice(0, i + 1);
        p.sort((x, y) => x - y);
        if (aeq(p, expect)) res++;
    }
    return res;
};