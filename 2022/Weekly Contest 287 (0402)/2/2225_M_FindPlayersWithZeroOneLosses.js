/**
 * 04/02/22 evening
 * https://leetcode.com/contest/weekly-contest-287/problems/find-players-with-zero-or-one-losses/
 */

const pr = console.log;

const counter = (a_or_s) => { let m = new Map(); for (const x of a_or_s) m.set(x, m.get(x) + 1 || 1); return m; };

// Accepted
const findWinners = (matches) => {
    let lose = matches.map(x => x[1]), m = counter(lose);
    //pr(lose, m)
    let res = [new Set(), new Set()];
    for (const [x, occ] of m) {
        if (occ == 1) res[1].add(x);
    }
    for (const [winner,] of matches) {
        if (!m.has(winner)) res[0].add(winner);
    }
    // pr(res)
    return res.map(se => [...se].sort((x, y) => x - y));
};

const main = () => {
    let matches = [[1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [4, 9], [10, 4], [10, 9]];
    let matches2 = [[2, 3], [1, 3], [5, 4], [6, 4]];
    pr(findWinners(matches))
    pr(findWinners(matches2))
};

main()