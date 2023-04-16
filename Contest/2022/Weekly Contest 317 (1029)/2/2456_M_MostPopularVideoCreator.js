/*
 * 10/29/22 evening
 * https://leetcode.com/contest/weekly-contest-317/problems/most-popular-video-creator/
 */

const pr = console.log;

const addOneOrManyMap = (m, x, cnt = 1) => m.set(x, m.get(x) + cnt || cnt);
const stmvalue_de = (m) => new Map([...m].sort((x, y) => y[1] - x[1]));
const lexical_smallest_comp = (x, y) => x < y ? -1 : x > y ? 1 : 0;

// Accepted
const mostPopularCreator = (a, b, c) => {
    let m = new Map(), im = new Map(), n = a.length;
    for (let i = 0; i < n; i++) {
        addOneOrManyMap(m, a[i], c[i]);
        if (!im.has(a[i])) im.set(a[i], []);
        im.get(a[i]).push([b[i], c[i]]);
    }
    m = stmvalue_de(m);
    // pr(m);
    // pr(im)
    let max = m.values().next().value, res = [];
    for (const [name, cnt] of m) {
        if (cnt == max) {
            res.push([name, cnt]);
        } else {
            break;
        }
    }
    // pr(res);
    for (let i = 0; i < res.length; i++) {
        let d = im.get(res[i][0]);
        d.sort((x, y) => {
            if (x[1] != y[1]) return y[1] - x[1];
            return lexical_smallest_comp(x[0], y[0]);
        })
        res[i][1] = d[0][0];
    }
    return res;
};

const main = () => {
    let creators = ["alice", "bob", "alice", "chris"], ids = ["one", "two", "three", "four"], views = [5, 10, 5, 4];
    let creators2 = ["alice", "alice", "alice"], ids2 = ["a", "b", "c"], views2 = [1, 2, 2]
    pr(mostPopularCreator(creators, ids, views))
    pr(mostPopularCreator(creators2, ids2, views2))
};

main()