/**
 * 06/04/22 evening
 * https://leetcode.com/contest/weekly-contest-296/problems/replace-elements-in-an-array/
 */

const pr = console.log;

// Accepted
const arrayChange = (a, operations) => {
    let n = a.length, m = new Map(), res = Array(n).fill(0);
    for (let i = 0; i < n; i++) m.set(a[i], i);
    for (const [x, y] of operations) {
        let idx = m.get(x);
        m.delete(x);
        m.set(y, idx);
    }
    for (const [x, idx] of m) res[idx] = x;
    return res;
};

const main = () => {
    let a = [1, 2, 4, 6], operations = [[1, 3], [4, 7], [6, 1]];
    let a2 = [1, 2], operations2 = [[1, 3], [2, 1], [3, 2]];
    pr(arrayChange(a, operations))
    pr(arrayChange(a2, operations2))
};

main()