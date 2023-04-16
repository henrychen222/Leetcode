/*
 * 12/03/22 evening
 * https://leetcode.com/contest/weekly-contest-322/problems/divide-players-into-teams-of-equal-skill/
 */

const pr = console.log;

// Accepted
const dividePlayers = (a) => {
    let n = a.length, team = n / 2, res = 0, se = new Set();
    a.sort((x, y) => x - y);
    for (let i = 0; i < team; i++) {
        let p = a[i] * a[n - i - 1];
        se.add(a[i] + a[n - i - 1]);
        res += p;
    }
    return se.size == 1 ? res : -1;
};

const main = () => {
    let a = [3, 2, 5, 1, 3, 4];
    let a2 = [3, 4]
    let a3 = [1, 1, 2, 3];
    let debug1 = [2, 1, 5, 2];
    pr(dividePlayers(a))
    pr(dividePlayers(a2))
    pr(dividePlayers(a3))
    pr(dividePlayers(debug1)) // -1

};

main()