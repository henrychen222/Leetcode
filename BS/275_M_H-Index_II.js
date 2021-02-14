/**
 * 2.13 night
 * https://leetcode.com/problems/h-index-ii/
 * 
 * same question of 274
 */

// Accepted --- 92ms 24.19%
const hIndex = (c) => {
    let n = c.length;
    if (n == 0) return 0;
    c.sort((a, b) => b - a);
    let res = n;
    for (let h = 0; h < n; h++) {
        let ln = h + 1;
        if ((c[h] || 0) >= h && (c[h + 1] || 0) <= h) {
            res = Math.min(ln, c[h]);
            break;
        }
    }
    return res;
};