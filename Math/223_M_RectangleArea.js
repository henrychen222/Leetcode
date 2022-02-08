/**
 * 02/07/22 evening
 * https://leetcode.com/problems/rectangle-area/
 */

// Accepted --- 120ms 94.67%
const abs = Math.abs, mi = Math.min, mx = Math.max;
const computeArea = (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) => {
    let a = [ax1, ax2, bx1, bx2], b = [ay1, ay2, by1, by2];
    a.sort((x, y) => x - y);
    b.sort((x, y) => x - y);
    let overlap = abs(a[1] - a[2]) * abs(b[1] - b[2]);
    let hasOverlap = true;
    if (mi(bx1, bx2) >= mx(ax1, ax2)) hasOverlap = false;
    if (mx(bx1, bx2) <= mi(ax1, ax2)) hasOverlap = false;
    if (mx(by1, by2) <= mi(ay1, ay2)) hasOverlap = false;
    if (mi(by1, by2) >= mx(ay1, ay2)) hasOverlap = false;
    let areaA = abs(ax1 - ax2) * abs(ay1 - ay2);
    let areaB = abs(bx1 - bx2) * abs(by1 - by2);
    return areaA + areaB - (hasOverlap ? overlap : 0);
};