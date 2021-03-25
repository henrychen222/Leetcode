/**
 * 03/23/21 evening
 * https://leetcode.com/problems/iterator-for-combination/
 * 
 * // reference: https://leetcode.com/contest/biweekly-contest-15/ranking/
 */

// richardjcy
// Accepted --- 128ms 46.77%
let res, k, idx, s, sn;
const dfs = (idx, cur) => {
    if (idx == sn) {
        if (cur.length == k) res.push(cur);
        return;
    }
    dfs(idx + 1, cur);
    cur += s[idx];
    dfs(idx + 1, cur);
    // cur = cur.slice(0, cur.length - 1);
    cur = cur.slice(0, -1); // Accepted --- 112ms 79.03%
};

function CombinationIterator(characters, combinationLength) {
    s = characters;
    sn = s.length;
    k = combinationLength;
    idx = 0;
    res = [];
    dfs(0, '');
    res.sort((x, y) => x.localeCompare(y));
    pr(res);
    return {
        next,
        hasNext
    };

    function next() {
        return res[idx++];
    }

    function hasNext() {
        return idx < res.length;
    }

    // Accepted --- 124ms
    // function next() {
    //     return res.shift();
    // }

    // function hasNext() {
    //     return res.length ? 1 : 0;
    // }
};

// WA 5/16
// reference: https://www.geeksforgeeks.org/print-all-combinations-of-given-length/
// let res;
// const dfs = (u, cur, n, k) => {
//     if (k == 0) {
//         res.add(cur);
//         return;
//     }
//     for (const c of u) {
//         let next = cur + c;
//         let a = next.split("");
//         if (res.has(next) || new Set(a).size != a.length) {
//             k--;
//             continue;
//         }
//         dfs(u, next, n, k - 1);
//     }
// };

// function CombinationIterator1(characters, combinationLength) {
//     res = new Set();
//     let u = [...new Set(characters.split(""))];
//     u.sort((x, y) => y.localeCompare(x));
//     // pr(u);
//     let n = u.length;
//     let k = combinationLength;
//     dfs(u, "", n, k);
//     let a = [...res];
//     a.sort((x, y) => x.localeCompare(y));
//     // pr(a);
//     return {
//         next,
//         hasNext
//     };

//     function next() {
//         return a.shift();
//     }

//     function hasNext() {
//         return a.length ? 1 : 0;
//     }
// };

const pr = console.log;
const main = () => {
    let itr = new CombinationIterator("abc", 2);
    pr(itr.next()); // "ab"
    pr(itr.hasNext()); // true
    pr(itr.next()); // "ac"
    pr(itr.hasNext()); // return True
    pr(itr.next()); // "bc"
    pr(itr.hasNext()); // false
};

main()


// new CombinationIterator("abcdefghijklmnop", 15);