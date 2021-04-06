/**
 * 04/05/21 night
 * https://leetcode.com/problems/single-element-in-a-sorted-array/
 */

// Accepted --- 88ms 9.16%
const singleNonDuplicate = (a) => {
    let m = new Map();
    for (const e of a) m.set(e, m.get(e) + 1 || 1);
    for (const [k, v] of m) {
        if (v == 1) return k;
    }
};