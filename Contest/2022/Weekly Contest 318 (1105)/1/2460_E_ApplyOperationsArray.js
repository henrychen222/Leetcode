/*
 * 11/05/22 evening
 * https://leetcode.com/contest/weekly-contest-318/problems/apply-operations-to-an-array/
 */

const pr = console.log;

// Accepted
const applyOperations = (a) => {
    let n = a.length, zero = 0;
    for (let i = 0; i < n - 1; i++) {
        if (a[i] == a[i + 1]) {
            a[i] *= 2;
            a[i + 1] = 0;
        }
    }
    let res = [];
    for (const x of a) x == 0 ? zero++ : res.push(x);
    return [...res, ...Array(zero).fill(0)];
};

const main = () => {
    let a = [1, 2, 2, 1, 1, 0]
    let a2 = [0, 1]
    pr(applyOperations(a))
    pr(applyOperations(a2))
};

main()