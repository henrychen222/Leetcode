/**
 * 06/26/21 evening
 * https://leetcode.com/contest/weekly-contest-247/problems/maximum-product-difference-between-two-pairs/
 */

const pr = console.log;

// Accepted
const stin = (a) => a.sort((x, y) => x - y);
const maxProductDifference = (a) => {
    stin(a);
    let n = a.length;
    return a[n - 1] * a[n - 2] - a[0] * a[1];
};

const main = () => {
    let nums = [5, 6, 2, 7, 4];
    let nums2 = [4, 2, 5, 9, 7, 4, 8];
    pr(maxProductDifference(nums))
    pr(maxProductDifference(nums2))
};

main()