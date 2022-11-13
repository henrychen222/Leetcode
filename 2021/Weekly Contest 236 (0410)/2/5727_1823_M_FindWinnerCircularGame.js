/**
 * 04/10/21 evening
 * https://leetcode.com/contest/weekly-contest-236/problems/find-the-winner-of-the-circular-game/
 */

const pr = console.log;

// don't know
const findTheWinner = (n, k) => {
    let a = [];
    for (let i = 0; i < n; i++) a.push(i + 1);
    let leave = new Set();
    let i = 1;
    // for (let t = 1; t <= 5; t++) {
    while (a.length > 1) {
        let n = a.length;
        for (; i < n; i += k) {
            leave.add(a[i]);
        }
        // pr(a, i, a[i])
        a = a.filter((x, i) => !leave.has(x));
        // let idx = a.lastIndexOf(a[i]);
        pr(leave, a, i);
        i = 0;
    }
    return a;
};

const main = () => {
    let n = 5, k = 2;
    let n2 = 6, k2 = 5;
    pr(findTheWinner(n, k))
    pr(findTheWinner(n2, k2))
};

main()