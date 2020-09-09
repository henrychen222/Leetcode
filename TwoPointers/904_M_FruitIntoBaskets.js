/**
 * 9.8 morning
 * https://leetcode.com/problems/fruit-into-baskets/
 */

// Accepted --- 188ms 41.28%
const totalFruit = (tree) => {
    let n = tree.length;
    let len = [...new Set(tree)].length;
    if (len == 1 || len == 2) return n;
    let res = 0;
    for (let i = 0; i < n; i++) {
        let tmp = [];
        let set = new Set();
        for (let j = i; j < n; j++) {
            if (set.size == 3) break;
            tmp.push(tree[j]);
            set.add(tree[j]);
        }
        if (set.size == 3) tmp.pop();
        res = Math.max(res, tmp.length);
    }
    return res;
};

// Accepted --- 804ms 7.83%
const totalFruit1 = (tree) => {
    let n = tree.length;
    let len = [...new Set(tree)].length;
    if (len == 1 || len == 2) return n;
    let res = 0;
    for (let i = 0; i < n; i++) {
        let tmp = [tree[i]];
        for (let j = i + 1; j < n; j++) {
            if ([...new Set(tmp)].length == 3) break;
            tmp.push(tree[j]);
        }
        if ([...new Set(tmp)].length == 3) tmp.pop();
        res = Math.max(res, tmp.length);
    }
    return res;
};

// time limit 70/90
// const totalFruit = (tree) => {
//     let n = tree.length;
//     let res = 0;
//     for (let i = 0; i < n; i++) {
//         let tmp = [tree[i]];
//         for (let j = i + 1; j < n; j++) {
//             // console.log(tmp, [...new Set(tmp)]);
//             if ([...new Set(tmp)].length == 3) break;
//             tmp.push(tree[j]);
//         }
//         // console.log(tmp); 
//         if ([...new Set(tmp)].length == 3) tmp.pop();
//         res = Math.max(res, tmp.length);
//     }
//     return res;
// };

const main = () => {
    let tree = [1, 2, 1];
    let tree2 = [0, 1, 2, 2]
    let tree3 = [1, 2, 3, 2, 2];
    let tree4 = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4];
    console.log(totalFruit(tree));
    console.log(totalFruit(tree2));
    console.log(totalFruit(tree3));
    console.log(totalFruit(tree4));

    console.log("");
    console.log(totalFruit1(tree));
    console.log(totalFruit1(tree2));
    console.log(totalFruit1(tree3));
    console.log(totalFruit1(tree4));
};

main()