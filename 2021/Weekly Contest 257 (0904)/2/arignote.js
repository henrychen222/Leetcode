/**
 * 09/04/21 evening
 * https://leetcode.com/contest/weekly-contest-257/problems/the-number-of-weak-characters-in-the-game/
 */

const pr = console.log;

// Accepted
const numberOfWeakCharacters = (a) => {
    let res = 0, max = 0;
    a.sort((x, y) => x[0] == y[0] ? x[1] - y[1] : y[0] - x[0]);
    pr(a);
    for (const [, de] of a) {
        if (de < max) res++;
        max = Math.max(max, de);
    }
    return res;
};

const main = () => {
    let properties = [[5, 5], [6, 3], [3, 6]];
    let properties2 = [[2, 2], [3, 3]];
    let properties3 = [[1, 5], [10, 4], [4, 3]]
    pr(numberOfWeakCharacters(properties))
    pr(numberOfWeakCharacters(properties2))
    pr(numberOfWeakCharacters(properties3))
};

main()