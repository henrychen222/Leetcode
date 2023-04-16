/**
 * 07/16/22 evening
 * https://leetcode.com/contest/weekly-contest-302/problems/query-kth-smallest-trimmed-number/
 */

const pr = console.log

// Accepted
const smallestTrimmedNumbers = (a, queries) => {
    let res = [];
    for (const [k, trim] of queries) {
        let b = a.map((s, i) => [s.slice(s.length - trim), i]);
        // pr(b)
        b.sort((x, y) => {
            if (x[0] == y[0]) return x[1] - y[1];
            return x[0].localeCompare(y[0]);
        })
        // pr("sort b", b, k, b[k-1])
        res.push(b[k - 1][1]);
    }
    return res;
};

const main = () => {
    let a = ["102", "473", "251", "814"], queries = [[1, 1], [2, 3], [4, 2], [1, 2]];
    let a2 = ["24", "37", "96", "04"], queries2 = [[2, 1], [2, 2]];
    pr(smallestTrimmedNumbers(a, queries))
    pr(smallestTrimmedNumbers(a2, queries2))
};

main()