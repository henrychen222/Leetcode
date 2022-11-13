/**
 * 03/05/22 morning
 * https://leetcode.com/contest/biweekly-contest-73/problems/sort-the-jumbled-numbers/
 */

const pr = console.log;

// Accepted
const sortJumbled = (m, a) => {
    let res = [];
    for (let i = 0; i < a.length; i++) {
        let s = a[i] + '', t = '';
        for (const c of s) t += m[c - '0'];
        res.push([a[i], t - '0', i]);
    }
    res.sort((x, y) => {
        if (x[1] != y[1]) return x[1] - y[1];
        return x[2] - y[2];
    });
    return res.map(x => x[0]);
};

const main = () => {
    let m = [8, 9, 4, 0, 2, 1, 3, 5, 7, 6], a = [991, 338, 38];
    let m2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], a2 = [789, 456, 123];
    pr(sortJumbled(m, a))
    pr(sortJumbled(m2, a2))
};

main()