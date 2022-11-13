/**
 * 04/03/21 evening
 * https://leetcode.com/contest/weekly-contest-235/problems/finding-the-users-active-minutes/
 */

const pr = console.log;

// Accepted
const findingUsersActiveMinutes = (logs, k) => {
    let m = new Map();
    for (const e of logs) {
        if (!m.has(e[0])) m.set(e[0], new Set());
        m.get(e[0]).add(e[1]);
    }
    // pr(m);
    let uam = new Map();
    for (const [k, v] of m) {
        uam.set(k, v.size);
    }
    // pr(uam);
    let res = Array(k).fill(0);
    for (const [k, v] of uam) {
        res[v - 1]++;
    }
    return res;
};

const main = () => {
    let logs = [[0, 5], [1, 2], [0, 2], [0, 5], [1, 3]], k = 5;
    let logs2 = [[1, 1], [2, 2], [2, 3]], k2 = 4;
    pr(findingUsersActiveMinutes(logs, k))
    pr(findingUsersActiveMinutes(logs2, k2))
};

main()