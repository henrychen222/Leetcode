/**
 * 03/30/22 night
 * https://leetcode.com/problems/escape-the-ghosts/
 */

// Accepted --- 79ms 83.33%
const abs = Math.abs;
const escapeGhosts = (ghosts, target) => {
    let min = Number.MAX_SAFE_INTEGER, [endX, endY] = target;
    for (const [x, y] of ghosts) {
        let dis = abs(x - endX) + abs(y - endY);
        min = Math.min(min, dis);
    }
    let d = abs(endX) + abs(endY);
    return d < min;
};