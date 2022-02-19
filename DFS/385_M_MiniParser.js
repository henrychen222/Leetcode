/**
 * 02/08/22 afternoon
 * https://leetcode.com/problems/mini-parser/
 */

const pr = console.log;

// Accepted --- 174ms 50%
// reference: https://leetcode.com/problems/mini-parser/discuss/86060/Python-and-C%2B%2B-solutions
const deserialize = (s) => {
    let a = JSON.parse(s);
    return dfs(a);
};

const dfs = (input) => {
    // if (!Array.isArray(input)) return new NestedInteger(input); // Accepted --- 131ms 75.00%
    if (Number.isInteger(input)) return new NestedInteger(input);
    let l = new NestedInteger();
    for (const e of input) l.add(dfs(e));
    return l;
};

///////////////////////////////////////////////////////
// let res;
// const deserialize = function (s) {
//     let a = JSON.parse(s);
//     res = [];
//     dfs(a);
//     return res;
// };

// const dfs = (input) => {
//     // pr("input", input);
//     if (Array.isArray(input)) {
//         for (const e of input) {
//             dfs(e);
//         }
//     } else {
//        res.push(input);
//     }
// };


const main = () => {
    let s = "324";
    let s2 = "[123,[456,[789]]]";
    // pr(deserialize(s))
    pr(deserialize(s2))
};

main()