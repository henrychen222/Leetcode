/**
 * 10/02/21 evening
 * https://leetcode.com/contest/weekly-contest-261/problems/stone-game-ix/
 */

const pr = console.log;

const stoneGameIX = (a) => {
    let f = Array(3).fill(0);
    for (const x of a) f[x % 3]++;
    // pr(f);
    f[0] %= 2;
    // pr(f);
    if (f[0] == 0) {
        if (f[1] == 0 || f[2] == 0) {
            return false;
        }
        return true;
    }
    return Math.abs(f[1] - f[2]) <= 2 ? false : true;
};

const main = () => {
    let stones = [2, 1];
    let stones2 = [2];
    let stones3 = [5, 1, 2, 4, 3];
    pr(stoneGameIX(stones))
    pr(stoneGameIX(stones2))
    pr(stoneGameIX(stones3))
};

main()