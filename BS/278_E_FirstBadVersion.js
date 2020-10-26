/**
 * 6.24 evening 10.25 afternoon complete
 * https://leetcode.com/problems/first-bad-version/
 */

// Accepted --- 80ms 33.44%
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        if (n == 1 && isBadVersion(1)) return 1;
        if (!isBadVersion(n - 1) && isBadVersion(n)) return n;
        let low = 0;
        let high = n;
        while (low < high) {
            mid = low + ((high - low) >> 1);
            if (!isBadVersion(mid)) {
                low = mid;
            } else {
                if (!isBadVersion(mid - 1)) return mid;
                high = mid;
            }
        }
    };
};


////////////////////////// 6.24 evening /////////////////////////
// var solution = function (isBadVersion) {
//     return function (n) {
//         if (n == 1) return 1;
//         if (n == 2 && isBadVersion(1) == true) {
//             return 1;
//         } else if (n == 2 && isBadVersion(2) == true) {
//             return 2;
//         }
//         for (let i = 2; i <= n; i++) {
//             if (isBadVersion(i - 1) != isBadVersion(i)) {
//                 return i;
//             }
//         }
//     };
// };