/**
 * 02/05/22 morning
 * https://leetcode.com/contest/biweekly-contest-71/problems/partition-array-according-to-given-pivot/
 */

const pr = console.log;

// Accepted
const pivotArray = (A, pivot) => {
    let a = [], b = [], c = [];
    for (const x of A) {
        if (x < pivot) {
            a.push(x);
        } else if (x > pivot) {
            c.push(x);
        } else {
            b.push(x);
        }
    }
    return [...a, ...b, ...c];
};

const main = () => {
    let nums = [9, 12, 5, 10, 14, 3, 10], pivot = 10;
    let nums2 = [-3, 4, 3, 2], pivot2 = 2;
    pr(pivotArray(nums, pivot))
    pr(pivotArray(nums2, pivot2))
};

main()
