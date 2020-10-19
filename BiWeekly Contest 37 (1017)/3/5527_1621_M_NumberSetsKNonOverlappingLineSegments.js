/**
 * 10.17 noon  10.19 morning
 * https://leetcode.com/contest/biweekly-contest-37/problems/number-of-sets-of-k-non-overlapping-line-segments/
 * https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments/
 * 
 * 区间[0, n - 1]上画k条线段, 线段长度>=1, 多少种画法
 */

// Accepted --- 88ms
/**
 * reference:
 * https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments/discuss/898830/Python-O(N)-Solution-with-Prove
 * https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments/discuss/898922/Python-1-line-combinatorics-with-explanations
 */
let mod = BigInt(1e9 + 7);
const numberOfSets1 = (n, k) => {
    return Number(combination(n + k - 1, k * 2) % mod);
};

const combination = (m, n) => {
    return factorial(m, n) / factorial(n, n);
}

const factorial = (m, n) => {
    let num = BigInt(1);
    let cnt = 0;
    for (let i = BigInt(m); i > 0; i--) {
        if (cnt == n) break;
        num = num * i;
        cnt++;
    }
    return num;
};

// Accepted --- 88ms
const numberOfSets2 = (n, k) => {
    let mod = BigInt(1e9 + 7);
    let res = BigInt(1);
    for (let i = 1; i < k * 2 + 1; i++) {
        res *= BigInt(n + k - i);
        res /= BigInt(i);
    }
    return Number(res % mod);
};

// const numberOfSets = (n, k) => {
//     let cnt = 0;
//     for (let i = 0; i < n; i+=k) {
//         for (let j = i + 1; j < n; j++) {
//             let l = [i, ];
//             let r = [i + k + 1, i + k + 1 + k];
//             console.log(l, r);
//             cnt++;
//         }
//         // if (i + k < n) {
//         // }
//     }
//     return cnt;
// };

const main = () => {
    let n = 4, k = 2;
    let n2 = 3, k2 = 1;
    let n3 = 30, k3 = 7;
    let n4 = 5, k4 = 3;
    let n5 = 3, k5 = 2;
    let n_debug1 = 18, k_debug1 = 12;
    let n_debug2 = 48, k_debug2 = 12;
    console.log(numberOfSets(n, k));
    console.log(numberOfSets(n2, k2));
    console.log(numberOfSets(n3, k3));
    console.log(numberOfSets(n4, k4));
    console.log(numberOfSets(n5, k5));
    console.log(numberOfSets(n_debug1, k_debug1)); // 118755
    console.log(numberOfSets(n_debug2, k_debug2)); // 337883431
};

main()