/**
 * 7.18 night   05/30/21 evening fix
 * https://leetcode.com/problems/array-nesting/
 */

// Accepted --- 156ms 7.84%
const arrayNesting = (A) => {
    let memo = new Map();
    let n = A.length;
    let res = 0;
    let se = new Set();
    for (let i = 0; i < n; i++) {
        // let se = new Set([i]);
        se.add(i);
        let nextIdx = A[i];
        while (!se.has(nextIdx)) {
            se.add(nextIdx);
            nextIdx = A[nextIdx];
            if (memo.has(nextIdx)) {
                let tmp = memo.get(nextIdx);
                res = Math.max(res, tmp);
                let startIdx = se.values().next().value;
                memo.set(startIdx, tmp);
                se.clear();
                break;
            }
        }
        // pr(nextIdx, A[nextIdx], se, memo)
        res = Math.max(res, se.size);
        let startIdx = se.values().next().value;
        memo.set(startIdx, se.size);
        se.clear();
    }
    return res;
};

// Accepted --- 168ms 7.84%
let res, a, memo;
const arrayNesting1 = (A) => {
    a = A;
    memo = new Map();
    let n = a.length;
    res = 0;
    for (let i = 0; i < n; i++) dfs(i, new Set([i]));
    return res;
};

const dfs = (idx, se) => {
    let nextIdx = a[idx];
    // pr(nextIdx, a[nextIdx], se, memo)
    if (memo.has(nextIdx)) {
        let tmp = se.size + memo.get(nextIdx);
        res = Math.max(res, tmp);
        let startIdx = se.values().next().value;
        se.clear();
        memo.set(startIdx, tmp);
        return;
    }
    if (se.has(nextIdx)) {
        // pr("clean", se, "duplicate", a[nextIdx], "count", se.size);
        res = Math.max(res, se.size);
        // memo.set(idx, cnt);
        let startIdx = se.values().next().value;
        se.clear();
        memo.set(startIdx, se.size);
        return;
    }
    se.add(nextIdx);
    dfs(nextIdx, se);
};

const pr = console.log;
const main = () => {
    let nums = [5, 4, 0, 3, 1, 6, 2];
    let nums2 = [0, 1, 2];
    pr(arrayNesting(nums));
    pr(arrayNesting(nums2)); // 1
};

main()

/////////////////////////////// 07/18/20 night ////////////////
// // Time Limit 853 / 856
// const arrayNesting3 = (A) => {
//     let data = [];
//     for (let i = 0; i < A.length; i++) {
//         let res = [];
//         res.push(A[i]);
//         let next = A[i];
//         while (res.indexOf(A[next]) == -1) {
//             res.push(A[next]);
//             next = A[next];
//         }
//         data.push(res.length);
//     }
//     return data.sort((a, b) => b - a)[0];
// };

// // Time Limit 853 / 856
// const arrayNesting2 = (A) => {
//     let max = 0;
//     for (let i = 0; i < A.length; i++) {
//         let res = [];
//         res.push(A[i]);
//         let next = A[i];
//         while (res.indexOf(A[next]) == -1) {
//             res.push(A[next]);
//             next = A[next];
//         }
//         max = Math.max(max, res.length);
//     }
//     return max;
// };

// // Time Limit 853 / 856
// const arrayNesting1 = (nums) => {
//     let max = 0;
//     for (let i = 0; i < nums.length; i++) {
//         max = Math.max(max, getSet(nums, i).length);
//     }
//     return max;
// };

// const getSet = (A, idx) => {
//     let res = [];
//     res.push(A[idx]);
//     let next = A[idx];
//     while (res.indexOf(A[next]) == -1) {
//         res.push(A[next]);
//         next = A[next];
//     }
//     return res;
// };