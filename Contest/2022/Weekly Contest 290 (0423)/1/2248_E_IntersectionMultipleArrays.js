/**
 * 04/23/22 evening
 * https://leetcode.com/contest/weekly-contest-290/problems/intersection-of-multiple-arrays/
 */

const pr = console.log;

// think wrong
// const intersection1 = (g) => {
//     let se = new Set();
//     g = g.map(a => {
//         let m = new Map();
//         for (let i = 0; i < a.length; i++) {
//             m.set(a[i], i);
//             se.add(a[i]);
//         }
//         return m;
//     });
//     let u = [...se], res = [];
//     u.sort((x, y) => x - y);
//     pr(g);
//     pr(u);
//     for (const x of u) {
//         if (res.length == 0) {
//             if (inAll(x, g)) res.push(x);
//         } else {
//             let pre = res[res.length - 1];
//             if (inAll(x, g) && allIncreasing(pre, x, g)) res.push(x);
//         }
//     }
//     return res;
// };

// Accepted
const intersection = (g) => {
    let se = new Set();
    g = g.map(a => {
        let m = new Map();
        for (let i = 0; i < a.length; i++) {
            m.set(a[i], i);
            se.add(a[i]);
        }
        return m;
    });
    let u = [...se], res = [];
    u.sort((x, y) => x - y);
    // pr(u);
    for (const x of u) {
        if (inAll(x, g)) res.push(x);
    }
    return res;
};

const inAll = (x, g) => {
    for (const m of g) {
        if (!m.has(x)) return false;
    }
    return true;
};

// const allIncreasing = (x, y, g) => {
//     for (const m of g) {
//         if (m.get(x) > m.get(y)) return false;
//     }
//     return true;
// };

const main = () => {
    let nums = [[3, 1, 2, 4, 5], [1, 2, 3, 4], [3, 4, 5, 6]];
    let nums2 = [[1, 2, 3], [4, 5, 6]];
    let debug1 = [[7, 34, 45, 10, 12, 27, 13], [27, 21, 45, 10, 12, 13]]
    pr(intersection(nums))
    pr(intersection(nums2))
    pr(intersection(debug1)) // [10,12,13,27,45]
};

main()