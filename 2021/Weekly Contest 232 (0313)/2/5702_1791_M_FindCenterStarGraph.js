/**
 * 03/13/21 evening
 * https://leetcode.com/contest/weekly-contest-232/problems/check-if-one-string-swap-can-make-strings-equal/
 */

const pr = console.log;

// Accepted
const findCenter = (edges) => {
    let m = new Map();
    for (const e of edges) {
        m.set(e[0], m.get(e[0]) + 1 || 1);
        m.set(e[1], m.get(e[1]) + 1 || 1);
    }
    m = sortMapByValue(m);
    // pr(m);
    return m.keys().next().value;
};

const sortMapByValue = (map) => {
    return new Map([...map].sort((a, b) => b[1] - a[1]));
};

const main = () => {
    let edges = [[1, 2], [2, 3], [4, 2]];
    let edges2 = [[1, 2], [5, 1], [1, 3], [1, 4]];
    pr(findCenter(edges));
    pr(findCenter(edges2));
};

main()