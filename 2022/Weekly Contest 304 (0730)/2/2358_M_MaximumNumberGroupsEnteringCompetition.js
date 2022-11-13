/**
 * 07/30/22 evening
 * https://leetcode.com/contest/weekly-contest-304/problems/maximum-number-of-groups-entering-a-competition/
 */

const pr = console.log;

// Accepted
const maximumGroups = (a) => {
    a.sort((x, y) => x - y);
    let n = a.length, g = [], sum = 0, cur = [];
    g.push([[a[0]], a[0]])
    // pr(g);
    for (let i = 1; i < n; i++) {
        let [preGroup, preSum] = g[g.length - 1];
        sum += a[i];
        cur.push(a[i]);
        if (sum > preSum && cur.length > preGroup.length) {
            g.push([cur, sum]);
            sum = 0;
            cur = [];
        }
    }
    // pr(g);
    return g.length;
};

const main = () => {
    let a = [10, 6, 12, 7, 3, 5];
    let a2 = [8, 8];
    pr(maximumGroups(a))
    pr(maximumGroups(a2))
};

main()