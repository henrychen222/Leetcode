/*
 * 12/17/22 night
 * https://leetcode.com/contest/weekly-contest-324/problems/cycle-length-queries-in-a-tree/
 */

const pr = console.log;

// Accepted
// reference: xiaowuc1
const cycleLengthQueries = (n, queries) => {
    let res = [];
    for (let [u, v] of queries) {
        let cnt = 1;
        // pr('begin', u, v)
        while (u != v) { // find LCA
            u > v ? u >>= 1 : v >>= 1;
            cnt++;
            // pr(u, v)
        }
        // pr('after', u, v, cnt)
        res.push(cnt);
    }
    return res;
};

const main = () => {
    let n = 3, queries = [[5, 3], [4, 7], [2, 3]];
    let n2 = 2, queries2 = [[1, 2]];
    pr(cycleLengthQueries(n, queries))
    pr(cycleLengthQueries(n2, queries2))
};

main()