/**
 * 01/24/22 evening
 * https://leetcode.com/problems/determine-if-two-strings-are-close/
 */

const counter = (a_or_s) => { let m = new Map(); for (const x of a_or_s) m.set(x, m.get(x) + 1 || 1); return m; };
const aeq = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);

// Accepted --- 258ms 8.70%
const closeStrings = (s, t) => {
    let ms = counter(s), mt = counter(t)
    let cs = [...ms.keys()], ct = [...mt.keys()];
    cs.sort((x, y) => x.localeCompare(y));
    ct.sort((x, y) => x.localeCompare(y));
    let fs = [...ms.values()], ft = [...mt.values()];
    fs.sort((x, y) => x - y);
    ft.sort((x, y) => x - y);
    return aeq(cs, ct) && aeq(fs, ft);
};