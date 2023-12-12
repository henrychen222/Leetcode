/*
 * 11/05/23 morning
 * https://leetcode.com/contest/weekly-contest-370/problems/find-champion-i/
 */

const pr = console.log;

// Accepted
const findChampion = (g) => {
    let n = g.length;
    for (let i = 0; i < n; i++) {
        let one = g[i].filter(x => x == 1).length;
        if (one == n-1) return i;
    }
    return -1;
};



const main = () => {
    let g = [[0,1],[0,0]]
    let g2 = [[0,0,1],[1,0,1],[0,0,0]]
    pr(findChampion(g))
    pr(findChampion(g2))
};

main()