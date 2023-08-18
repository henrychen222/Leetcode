/*
 * 05/06/23 evening
 * https://leetcode.com/contest/weekly-contest-344/problems/number-of-adjacent-elements-with-the-same-color/
 */

const pr = console.log;

// Accepted
const colorTheArray = (n, queries) => {
    let a = Array(n).fill(0), res = [], same = 0;
    for (const [i, color] of queries) {
        let oldColor = a[i];
        a[i] = color;
        if (oldColor != color) {
            if (i - 1 >= 0) {
                if (a[i - 1] == oldColor && oldColor != 0) same--;
                if (a[i - 1] == color) same++;
            }
            if (i + 1 < n) {
                if (a[i + 1] == oldColor && oldColor != 0) same--;
                if (a[i + 1] == color) same++;
            }
        }
        // pr("\n", a, same)
        res.push(same)
    }
    return res;
};

// const colorTheArray1 = (n, queries) => {
//     let a = Array(n).fill(0), res = [], m = new Map();
//     for (let i = 0; i < n; i++) {
//         if (!m.has(0)) m.set(0, new Set());
//         m.get(0).add(i);
//     }
//     pr(m)
//     for (const [idx, color] of queries) {
//         removeIndex(m, a[idx], idx);
//         a[idx] = color;
//         addIndex(m, color, idx);
//         pr("\n", a, m)

//     }
//     return res;
// };

const addIndex = (m, color, idx) => {
    if (!m.has(color)) m.set(color, new Set());
    m.get(color).add(idx);
};

const removeIndex = (m, color, idx) => {
    if (m.has(color)) {
        let se = m.get(color);
        se.delete(idx);
        if (se.size == 0) {
            m.delete(color);
        } else {
            m.set(color, se);
        }
    }
};

const main = () => {
    let n = 4, queries = [[0, 2], [1, 2], [3, 1], [1, 1], [2, 1]];
    let n2 = 1, queries2 = [[0, 100000]]
    pr(colorTheArray(n, queries))
    pr(colorTheArray(n2, queries2))
};

main()