/*
 * 05/06/23 evening
 * https://leetcode.com/contest/weekly-contest-344/problems/make-costs-of-paths-equal-in-a-binary-tree/
 */

const pr = console.log;

const sm = (a) => a.reduce(((x, y) => x + y), 0);

// Accepted
/*
reference:
https://leetcode.cn/circle/discuss/xy4IZe/ + lucifer1006
https://leetcode.cn/circle/discuss/FDkyPg/ TsReaper
*/
let n, res, a;
const minIncrements = (N, cost) => {
    n = N, res = 0, a = cost;
    DFS(1);
    return res;
};

const DFS = (i) => {
    if (!ok(i)) return 0;
    let lsum = DFS(left(i)), rsum = DFS(right(i)), more = Math.max(lsum, rsum), less = Math.min(lsum, rsum);
    // pr(lsum, rsum);
    res += more - less; // to make path sum equal, do operation at children's to make left == sum (root->cur is equal)
    return more + a[i - 1];
};


//////////////////////////////////////////////////////////////
// let n;
// const minIncrements1 = (N, cost) => {
//     n = N;
//     let p = getAllPathSegmentTree(cost), max = 0, res = 0;
//     let a = p.map(e => sm(e));
//     for (const x of a) max = Math.max(max, x);
//     pr(max, p, a);
//     for (const x of a) {
//         pr(max - x);
//         res += max - x;
//     }
//     return res;
// };

// const getAllPathSegmentTree = (a) => {
//     let res = [];
//     let path = [];
//     dfs(1, a, path, res);
//     return res;
// };

// const dfs = (i, a, path, res) => {
//     if (!ok(i)) return;
//     path.push(a[i - 1]);
//     pr(i)
//     if (!ok(left(i)) && !ok(right(i))) res.push([...path]);
//     dfs(left(i), a, path, res);
//     dfs(right(i), a, path, res);
//     path.pop();
// };

const left = (i) => 2 * i;
const right = (i) => 2 * i + 1;
const ok = (i) => i >= 1 && i <= n;

const main = () => {
    let n = 7, cost = [1, 5, 2, 2, 3, 3, 1];
    let n2 = 3, cost2 = [5, 3, 3]
    pr(minIncrements(n, cost))
    pr(minIncrements(n2, cost2))
};

main()


/*
[ [ 1, 5, 2 ], [ 1, 5, 3 ], [ 1, 2, 3 ], [ 1, 2, 1 ] ]

[ [ 1, 5, 3 ], [ 1, 5, 3 ], [ 1, 5, 3 ], [ 1, 5, 3 ] ]
*/