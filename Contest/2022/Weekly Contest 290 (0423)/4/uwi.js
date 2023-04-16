/**
 * 04/23/22 night
 * https://leetcode.com/contest/weekly-contest-290/problems/number-of-flowers-in-full-bloom/
 */

const pr = console.log;

// Accepted
const fullBloomFlowers = (flowers, persons) => {
    let d = [...flowers.map(x => [x[0], 1]), ...flowers.map(x => [x[1] + 1, -1]), ...persons.map((x, i) => [x, 0, i])];
    // pr(d);
    d.sort((x, y) => x[0] - y[0]);
    // pr(d);
    let h = 0, res = Array(persons.length).fill(0);
    for (const [, mark, idx] of d) {
        if (idx == undefined) { // process flowers
            h += mark;
        } else { // process persons
            res[idx] += h;
        }
        // pr(res, h);
    }
    return res;
};

const main = () => {
    let flowers = [[1, 6], [3, 7], [9, 12], [4, 13]], persons = [2, 3, 7, 11];
    let flowers2 = [[1, 10], [3, 3]], persons2 = [3, 3, 2];
    pr(fullBloomFlowers(flowers, persons))
    pr(fullBloomFlowers(flowers2, persons2))
};

main()