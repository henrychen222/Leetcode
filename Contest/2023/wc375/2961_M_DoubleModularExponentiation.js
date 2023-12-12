/*
 * 12/09/23 evening
 * https://leetcode.com/contest/weekly-contest-375/problems/double-modular-exponentiation/
 */

const pr = console.log;

const ll = BigInt;

// Accepted
const getGoodIndices = (g, t) => {
    let res = [];
    g.map(([a, b, c, m], i) => {
        a = ll(a), b = ll(b), c = ll(c), m = ll(m);
        // pr(a, b, c, m)
        if ((((a ** b) % 10n) ** c) % m == t) res.push(i)
    })
    return res;
};

const main = () => {
    let g = [[2, 3, 3, 10], [3, 3, 3, 1], [6, 1, 1, 4]], t = 2;
    let g2 = [[39, 3, 1000, 1000]], t2 = 17
    pr(getGoodIndices(g, t))
    pr(getGoodIndices(g2, t2))
};

main()