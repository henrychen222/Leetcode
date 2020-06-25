/**
 * 6.24 evening 
 * https://leetcode.com/problems/first-bad-version/  cannot debug pass
 */

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        if (n == 1) return 1;
        if (n == 2 && isBadVersion(1) == true) {
            return 1;
        } else if (n == 2 && isBadVersion(2) == true) {
            return 2;
        }
        for (let i = 2; i <= n; i++) {
            if (isBadVersion(i - 1) != isBadVersion(i)) {
                return i;
            }
        }
    };
};