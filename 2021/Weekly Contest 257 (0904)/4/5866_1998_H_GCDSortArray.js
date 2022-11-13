/**
 * 09/04/21 evening
 * https://leetcode.com/contest/weekly-contest-257/problems/count-special-quadruplets/
 */

const pr = console.log;

const gcd = (a, b) => b == 0 ? a : gcd(b, a % b);

function calculateSetBit(n) {
    let count = 0;
    for (let i = 0; i < 32; i++) {
        if ((n & 1) != 0) count++;
        n = n >> 1;
    }
    return count;
}

// https://www.geeksforgeeks.org/check-if-array-can-be-sorted-by-swapping-pairs-with-gcd-of-set-bits-count-equal-to-that-of-the-smallest-array-element/
// not work
var gcdSort = function (a) {
    let n = a.length;
    let dup = [];
    for (let i = 0; i < n; i++) dup[i] = a[i];
    dup.sort();
    let flag = 1;
    let bit = calculateSetBit(dup[0]);
    for (let i = 0; i < n; i++) {
        if (a[i] != dup[i]) {
            if (gcd(calculateSetBit(a[i]), bit) <= 1) {
                flag = 0;
                break;
            }
        }
    }
    return flag != 0;
};

const main = () => {
    let nums = [7, 21, 3];
    let nums2 = [5, 2, 6, 2];
    let nums3 = [10, 5, 9, 3, 15];
    pr(gcdSort(nums))
    pr(gcdSort(nums2))
    pr(gcdSort(nums3))
};

main()