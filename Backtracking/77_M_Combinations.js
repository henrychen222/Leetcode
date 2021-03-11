/**
 * 9.13 afternoon   03/10/21 fix failed, see reference
 * https://leetcode.com/problems/combinations/
 */

const pr = console.log;

// Accepted --- 116ms 86.49%
let res;
const combine = (n, k) => {
    res = [];
    dfs([], 1, n, k);
    return res;
};

const dfs = (a, start, n, k) => {
    if (k == 0) return res.push([...a]);
    for (let i = start; i <= n; i++) {
        a.push(i);
        dfs(a, i + 1, n, k - 1);
        a.pop();
    }
};

// Accepted --- 116ms 86.49%
const combine2 = (n, k) => {
    let res = [];
    let a = Array(k).fill(0);
    for (let i = 0; ~i;) {
        a[i]++;
        if (a[i] > n) {
            i--;
        } else if (i == k - 1) {
            res.push([...a]);
        } else {
            i++;
            a[i] = a[i - 1];
        }
    }
    return res;
};

// WA 18/27  lack
// const sa = JSON.stringify;
// const combine1 = (n, k) => {
//     let res = new Set();
//     let start = 1;
//     for (; start <= n - k + 1; start++) {
//         let a = [];
//         let t = k;
//         for (let i = start; t--; i++) a.push(i);
//         res.add(sa(a));
//         for (let j = 1; j <= n; j++) {
//             for (let i = 0; i < k; i++) {
//                 let tmp = [...a];
//                 tmp[i] = j;
//                 if ([...new Set(tmp)].length != k) continue;
//                 tmp.sort((x, y) => x - y);
//                 res.add(sa(tmp));
//             }
//         }
//     }
//     pr(res.size)
//     return [...res].map(x => JSON.parse(x));
// };

const main = () => {
    let n = 4,
        k = 2;
    let n2 = 1,
        k2 = 1;
    let n3 = 4,
        k3 = 3;
    let n_debug1 = 5,
        k_debug1 = 3;
    let n_debug2 = 7,
        k_debug2 = 3;
    console.log(combine(n, k));
    console.log(combine(n2, k2));
    console.log(combine(n3, k3)); // [[1,2,3],[2,3,4],[1,3,4],[1,2,4]]
    console.log(combine(n_debug1, k_debug1)); // [[1,2,3],[1,2,4],[1,2,5],[1,3,4],[1,3,5],[1,4,5],[2,3,4],[2,3,5],[2,4,5],[3,4,5]]
    console.log(combine(n_debug2, k_debug2));
};

main()


// don't know
// const combine = (n, k) => {
//     permArr = [];
//     usedChars = []; 
//     let items = [];
//     for (let i = 1; i <= n; i++) {
//         items.push(i);
//     }
//     console.log(items);
// };