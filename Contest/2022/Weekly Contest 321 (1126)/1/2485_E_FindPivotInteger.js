/*
 * 11/26/22 evening
 * https://leetcode.com/contest/weekly-contest-321/problems/find-the-pivot-integer/
 */

const pr = console.log;

const sumOfRange = (l, r) => (l + r) * (r - l + 1) / 2;

const pivotInteger = (n) => {
    for (let x = 1; x <= n; x++) {
        if (sumOfRange(1, x) == sumOfRange(x, n)) return x;
    }
    return -1;
};

const main = () => {
    let n = 8;
    let n2 = 1;
    let n3 = 4;
    pr(pivotInteger(n))
    pr(pivotInteger(n2))
    pr(pivotInteger(n3))
};

main()