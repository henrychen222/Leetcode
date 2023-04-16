/*
 * 10/08/22 evening
 * https://leetcode.com/contest/weekly-contest-314/problems/the-employee-that-worked-on-the-longest-task/
 */

const pr = console.log;

// Accepted
const hardestWorker = (n, a) => {
    let d = [], pre = 0;
    for (const [id, leave] of a) {
        d.push([id, leave - pre]);
        pre = leave;
    }
    // pr(d);
    d.sort((x, y) => {
        if (x[1] != y[1]) return y[1] - x[1];
        return x[0] - y[0];
    })
    // pr(d);
    return d[0][0];
};

const main = () => {
    let n = 10, logs = [[0, 3], [2, 5], [0, 9], [1, 15]];
    let n2 = 26, logs2 = [[1, 1], [3, 7], [2, 12], [7, 17]];
    let n3 = 2, logs3 = [[0, 10], [1, 20]]
    pr(hardestWorker(n, logs))
    pr(hardestWorker(n2, logs2))
    pr(hardestWorker(n3, logs3))
};

main()