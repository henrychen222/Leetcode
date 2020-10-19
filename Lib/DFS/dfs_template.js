/**
 * 10.18 night
 * https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/discuss/899798/javacript-DFS-with-endless-loop-768ms
 */

let res = [];
let set = new Set();
const findLexSmallestString = (s, a, b) => {
    res = [];
    dfs(res, s, a, b);
    res.sort((a, b) => a.localeCompare(b));
    return res[0];
};

const dfs = (res, s, a, b) => {
    while (true) {
        let ad = add(s, a); // selection 1   left tree
        let ro = rotate(s, b); // selection 2  right tree
        if (set.has(ad)) {
            if (set.has(ro)) {
                return;
            } else {
                res.push(ro);
                set.add(ro);
                dfs(res, ro, a, b);
            }
        } else {
            if (set.has(ro)) {
                res.push(ad);
                set.add(ad);
                dfs(res, ad, a, b);
            } else {
                res.push(ro);
                res.push(ad);
                set.add(ro);
                set.add(ad);
                dfs(res, ad, a, b);
                dfs(res, ro, a, b);
            }
        }
    }
};

const add = (s, a) => {
    let n = s.length;
    let arr = s.split("").map(x => Number(x));
    for (let i = 0; i < n; i++) {
        if (i % 2 == 1) {
            let origin = arr[i];
            let add = origin + a;
            if (add > 9) {
                arr[i] = add - 9 - 1;
            } else {
                arr[i] = add;
            }
        }
    }
    return arr.join("");
};

const rotate = (s, b) => {
    let n = s.length;
    let r = s.slice(n - b);
    let l = s.slice(0, n - b);
    return r + l;
};