/**
 * 02/17/22 night
 * https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/
 */


// Accepted --- 121ms 43.24%
const longestSubarray = (a) => {
    let d = cutMaxConsecutive(a), res = 0, n = d.length;
    if (d.length == 1 && d[0][0] == 1) return d[0].length - 1;
    for (let i = 0; i < n; i++) {
        if (d[i][0] == 1) res = Math.max(res, d[i].length);
        let len = 0;
        if (d[i].length == 1 && d[i][0] == 0) {
            for (let j = i + 1; j < n; j++) {
                if (d[j][0] == 1) {
                    len += d[j].length;
                } else {
                    break;
                }
            }
            for (let j = i - 1; ~j; j--) {
                if (d[j][0] == 1) {
                    len += d[j].length;
                } else {
                    break;
                }
            }
            res = Math.max(res, len);
        }
    }
    return res;
};