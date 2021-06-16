/**
 * 06/15/21 night
 * https://leetcode.com/problems/matchsticks-to-square/
 */

// Accepted --- 112ms 63.46%
let a;
const makesquare = (matchsticks) => {
    let sum = matchsticks.reduce((x, y) => x + y);
    if (sum % 4 != 0) return false;
    let edge = sum / 4;
    a = matchsticks;
    a.sort((x, y) => y - x);
    return dfs(Array(4).fill(0), 0, edge);
};

const dfs = (sums, pos, edge) => {
    // pr(sums, pos, edge)
    if (pos >= a.length) return sums[1] == edge && sums[2] == edge && sums[3] == edge;
    for (let i = 0; i < 4; i++) {
        if (sums[i] + a[pos] > edge) continue;
        sums[i] += a[pos];
        if (dfs(sums, pos + 1, edge)) return true;
        sums[i] -= a[pos];
    }
    return false;
};

const pr = console.log;
const main = () => {
    let matchsticks = [1, 1, 2, 2, 2];
    let matchsticks2 = [3, 3, 3, 3, 4];
    pr(makesquare(matchsticks))
    pr(makesquare(matchsticks2))
};

main()