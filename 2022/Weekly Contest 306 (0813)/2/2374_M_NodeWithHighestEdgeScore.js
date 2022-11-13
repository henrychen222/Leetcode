/**
 * 08/13/22 evening
 * https://leetcode.com/contest/weekly-contest-306/problems/node-with-highest-edge-score/
 */

const pr = console.log;

// Accepted
const edgeScore = (edges) => {
    let n = edges.length, p = Array(n).fill(0);
    for (let i = 0; i < n; i++) p[edges[i]] += i;
    p = p.map((x, i) => [x, i]);
    p.sort((x, y) => {
        if (x[0] != y[0]) return y[0] - x[0];
        return x[1] - y[1];
    })
    return p[0][1];
};


const main = () => {
    let edges = [1, 0, 0, 0, 0, 7, 7, 5];
    let edges2 = [2, 0, 0, 2];
    pr(edgeScore(edges))
    pr(edgeScore(edges2))
};

main()