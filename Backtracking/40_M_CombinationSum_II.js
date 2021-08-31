/**
 * 07/17/20 afternoon  08/30/21 night complete
 * https://leetcode.com/problems/combination-sum-ii/
 */

// Accepted --- 128ms 21.99% (Solution 2, Solution 1 TLE)
// reference: https://zxi.mytechroad.com/blog/searching/leetcode-40-combination-sum-ii/
let can, n;
const combinationSum2 = (a, target) => {
    a.sort((x, y) => x - y);
    let res = [];
    can = a, n = a.length;
    dfs(target, 0, res, []);
    return res;
};

const dfs = (sum, start, res, path) => {
    if (sum == 0) return res.push([...path]);
    for (let i = start; i < n; i++) {
        if (can[i] > sum) return;
        if (i > start && can[i] == can[i - 1]) continue;
        path.push(can[i]);
        dfs(sum - can[i], i + 1, res, path);
        path.pop();
    }
};

// 08/29/21 night TLE 124 / 175 , idea comes from 491
const combinationSum2_1 = (a, target) => {
    a.sort((x, y) => x - y);
    let res = new Set();
    let n = a.length;
    let N = 2 ** n;
    outer:
    for (let i = 0; i < N; i++) {
        let sub = [];
        let sum = 0;
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                if (sum >= target) continue outer;
                sum += a[j];
                sub.push(a[j]);
            }
        }
        if (sub.length > 0 && sum == target) res.add(JSON.stringify(sub));
    }
    return [...res].map(x => JSON.parse(x));
};

const main = () => {
    let candidates = [10, 1, 2, 7, 6, 1, 5],
        target = 8;
    let candidates2 = [2, 5, 2, 1, 2],
        target2 = 5;
    let candidates_debug1 = [14, 6, 25, 9, 30, 20, 33, 34, 28, 30, 16, 12, 31, 9, 9, 12, 34, 16, 25, 32, 8, 7, 30, 12, 33, 20, 21, 29, 24, 17, 27, 34, 11, 17, 30, 6, 32, 21, 27, 17, 16, 8, 24, 12, 12, 28, 11, 33, 10, 32, 22, 13, 34, 18, 12],
        target_debug1 = 27
    let candidates_debug2 = [4, 4, 2, 1, 4, 2, 2, 1, 3],
        target_debug2 = 6;
    let candidates_debug3 = [2, 5, 2, 1, 2],
        target_debug3 = 5;
    let candidates_debug4 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        target_debug4 = 30;
    console.log(combinationSum2(candidates, target));
    console.log(combinationSum2(candidates2, target2));
    console.log(combinationSum2(candidates_debug2, target_debug2)); // [[1,1,2,2],[1,1,4],[1,2,3],[2,2,2],[2,4]]
    console.log(combinationSum2(candidates_debug3, target_debug3)); // [[1,2,2],[5]]
    console.log(combinationSum2(candidates_debug1, target_debug1));
    console.log(combinationSum2(candidates_debug4, target_debug4));
};

main()


/////////////////////////////// 07/17/20 afternoon ////////////////////////////
// Time Limit 122/172
// const combinationSum2 = (candidates, target) => {
//     candidates.sort((a, b) => a - b);
//     let res = [];
//     let n = candidates.length;
//     let N = 2 ** n;
//     for (let i = 0; i < N; i++) {
//         let data = [];
//         for (let j = 0; j < n; j++) {
//             if (i & (1 << j)) {
//                 data.push(candidates[j]);
//             }
//         }
//         if (data.length != 0 && sum(data) == target) res.push(data);
//     }
//     return removeDuplicatesMultiArray(res);
// };

// const sum = (arr) => {
//     return arr.reduce((acc, cur) => acc + cur);
// };

// const removeDuplicatesMultiArray = (arr) => {
//     return arr.map(JSON.stringify).reverse().filter((item, index, arr) => {
//         return arr.indexOf(item, index + 1) === -1;
//     }).reverse().map(JSON.parse);
// };