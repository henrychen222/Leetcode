/**
 * 11.3 evening
 * https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/
 */

/**
 * Accepted --- 84ms 64.71%
 * reference:
 * https://www.geeksforgeeks.org/maximum-sum-subarray-removing-one-element/
 * https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/discuss/377522/C%2B%2B-forward-and-backward-solution-with-explanation-and-picture
 * https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/discuss/377397/Intuitive-Java-Solution-With-Explanation
 */
const maximumSum = (arr) => {
    let n = arr.length;
    let fw = new Array(n).fill(0);
    let bw = new Array(n).fill(0);
    let cmax = arr[0]; // current max
    let omax = arr[0]; // overall max
    fw[0] = arr[0];
    for (let i = 1; i < n; i++) {
        cmax = Math.max(arr[i], cmax + arr[i]);
        omax = Math.max(omax, cmax);
        fw[i] = cmax;
    }
    cmax = omax = bw[n - 1] = arr[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        cmax = Math.max(arr[i], cmax + arr[i]);
        omax = Math.max(omax, cmax);
        bw[i] = cmax;
    }
    let res = omax;
    for (let i = 1; i < n - 1; i++) {
        res = Math.max(res, fw[i - 1] + bw[i + 1]);
    }
    return res;
};

// Accepted --- 100ms 35.29%
// reference: https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/discuss/377424/Simple-Python-DP-solution
const maximumSum_DP = (arr) => {
    let n = arr.length;
    let f0 = new Array(n).fill(arr[0]); // no deletion
    let f1 = new Array(n).fill(arr[0]); // at most 1 deletion
    for (let i = 1; i < n; i++) {
        f0[i] = Math.max(f0[i - 1] + arr[i], arr[i]);
        f1[i] = Math.max(f1[i - 1] + arr[i], arr[i]);
        if (i >= 2) {
            f1[i] = Math.max(f1[i], f0[i - 2] + arr[i]);
        }
    }
    // console.log(f0, f1);
    return Math.max.apply(Math, f1);
};


// Accepted --- 88ms 58.82%
// reference: https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-1186-maximum-subarray-sum-with-one-deletion/
const maximumSum_DP_huahua = (arr) => {
    let max = Math.max.apply(Math, arr);
    if (max <= 0) return max;
    let f0 = 0;
    let f1 = 0;
    let res = 0;
    for (const item of arr) {
        f1 = Math.max(f0, f1 + item);
        f0 += item;
        res = Math.max(res, Math.max(f0, f1));
        if (f0 < 0) f0 = 0;
        if (f1 < 0) f1 = 0;
    }
    return res;
};


// // Time Limit 30/32
// const maximumSum2 = (arr) => {
//     let n = arr.length;
//     if (n == 1) return arr[0];
//     let res = Number.MIN_SAFE_INTEGER;
//     let pre = preSum(arr, n);
//     // console.log(pre)
//     for (let i = 0; i < n; i++) {
//         for (let j = i; j < n; j++) {
//             let len = j - i + 1;
//             if (len >= 2) {
//                 let sub = arr.slice(i, j + 1);
//                 let min = Math.min.apply(Math, sub);
//                 let sum = pre[j + 1] - pre[i];
//                 res = Math.max(res, sum - min);
//                 // console.log(sub, sum, pre[j + 1], pre[i + 1], res)
//             }
//         }
//     }
//     return res;
// };

// const preSum = (arr, n) => {
//     let pre = new Array(n + 1).fill(0);
//     for (let i = 1; i <= n; i++) {
//         pre[i] = pre[i - 1] + arr[i - 1];
//     }
//     return pre;
// };

// // Time Limit 30/32
// const maximumSum1 = (arr) => {
//     let n = arr.length;
//     if (n == 1) return arr[0];
//     let res = Number.MIN_SAFE_INTEGER;
//     for (let i = 0; i < n; i++) {
//         for (let j = i; j < n; j++) {
//             let len = j - i + 1;
//             if (len >= 2) {
//                 let sub = arr.slice(i, j + 1);
//                 let min = Math.min.apply(Math, sub);
//                 res = Math.max(res, sum(sub) - min);
//                 // console.log(sub, min, sum(sub) - min, res)
//             }
//         }
//     }
//     return res;
// };

// const sum = (arr) => {
//     return arr.reduce((acc, cur) => acc + cur);
// };

const main = () => {
    let arr = [1, -2, 0, 3];
    let arr2 = [1, -2, -2, 3];
    let arr3 = [-1, -1, -1, -1];
    let debug1 = [-50];
    console.log(maximumSum(arr));
    console.log(maximumSum(arr2));
    console.log(maximumSum(arr3));
    console.log(maximumSum(debug1));
};

main()