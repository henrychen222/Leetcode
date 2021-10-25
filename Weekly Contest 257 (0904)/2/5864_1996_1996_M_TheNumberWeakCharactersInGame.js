/**
 * 09/04/21 evening
 * https://leetcode.com/contest/weekly-contest-257/problems/the-number-of-weak-characters-in-the-game/
 */

const pr = console.log;

// TLE
const numberOfWeakCharacters = (a) => {
    let n = a.length;
    // a = a.map((x, i) => [...x, i]);
    let origin = [...a];
    a.sort((x, y) => {
        if (x[0] == y[0]) return x[1] - y[1];
        return x[0] - y[0];
    });
    let m = new Map();
    for (let i = 0; i < n; i++) {
        let ke = a[i][0] + ' ' + a[i][1];
        m.set(ke, i);
    }
    pr(origin);
    // pr(a);
    pr(m);
    let res = 0;
    for (const [at, de] of origin) {
        let ke = at + ' ' + de;
        let idx = m.get(ke);
        // pr(idx)
        let sum = at + de;
        let find = false;
        for (let i = idx; i < n; i++) {
            let e = a[i];
            if (sum > e[0] + e[1]) continue;
            if (e[0] > at && e[1] > de) {
                find = true;
                break;
            }
        }
        if (find) res++;
    }
    return res;
};


// const stde = (a) => a.sort((x, y) => y - x);
// const numberOfWeakCharacters = (a) => {
//     let n = a.length;
//     let att = [], def = [];
//     for (const e of a) {
//         att.push(e[0]);
//         def.push(e[1]);
//     }
//     stde(att);
//     stde(def);
//     pr(att)
//     pr(def);
//     for (const e of a) {
//     }
// };

// const stmkey_de = (m) => new Map([...m].sort((x, y) => y[0] - x[0]));
// const numberOfWeakCharacters = (a) => {
//     let m = new Map();
//     for (const e of a) {
//         let sum = e[0] + e[1];
//         m.set(sum, m.get(sum) + 1 || 1);
//     }
//     // pr(m);
//     m = stmkey_de(m);
//     pr(m);
//     let res = 0;
//     for (const [at, de] of a) {
//         let sum = at + de;
//         let find = false;
//         for (const [k, occ] of m) {
//             pr(sum, k)
//             if (k > sum) {
//                 find = true;
//                 break;
//             }
//         }
//         // pr("find", sum, find)
//         if (find) res++;
//     }
//     return res;
// };

const main = () => {
    let properties = [[5, 5], [6, 3], [3, 6]];
    let properties2 = [[2, 2], [3, 3]];
    let properties3 = [[1, 5], [10, 4], [4, 3]]
    pr(numberOfWeakCharacters(properties))
    pr(numberOfWeakCharacters(properties2))
    pr(numberOfWeakCharacters(properties3))
};

main()