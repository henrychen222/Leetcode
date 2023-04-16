/**
 * 06/18/22 evening
 * https://leetcode.com/contest/weekly-contest-298/problems/sum-of-numbers-with-units-digit-k/
 */

const pr = console.log;

// Accepted
// reference: liouzhou_101
const minimumNumbers = (x, k) => {
    let a = [], dp = Array(x + 1).fill(Number.MAX_SAFE_INTEGER);
    for (let v = k; v <= x; v++) {
        let s = v + '';
        if (s[s.length - 1] - '0' == k) a.push(v);
    }
    // pr(a);
    dp[0] = 0;
    for (const v of a) {
        pr("v", v);
        for (let i = v; i <= x; i++) {
            dp[i] = Math.min(dp[i], dp[i - v] + 1); // pre value: i - v
            pr(i, i - v);
        }
    }
    // pr(dp);
    return dp[x] == Number.MAX_SAFE_INTEGER ? -1 : dp[x];
};

/////////////////////////////////////////////////////////////
const minimumNumbers2 = (x, k) => {
    if (x == 0) return 0;
    if (k == 0 && x % 10 == 0) return 1;
    // if (x % 2 != 0 && k % 2 == 0) return -1;
    let a = [];
    for (let v = k; v <= x; v++) {
        let s = v + '';
        if (s[s.length - 1] - '0' == k && k != 0) a.push(v);
    }
    // pr("data", a);
    let n = a.length, cur = x, d = [];
    while (cur > 0) {
        let find = false;
        for (let i = n - 1; ~i; i--) { // greedy wrong here
            if (cur >= a[i]) {
                cur -= a[i];
                d.push(a[i]);
                find = true;
                break;
            }
        }
        // pr(d);
        if (!find) break;
    }
    // pr(d, cur);
    if (cur != 0) {
        return x % k == 0 ? x / k : -1;
    } else {
        return x % k == 0 ? Math.min(x / k, d.length) : d.length;
    }
}

// const minimumNumbers1 = (x, k) => {
//     if (x == 0) return 0;
//     // if (k == 1) return x;
//     let a = [];
//     for (let v = k; v <= x; v++) {
//         let s = v + '';
//         if (s[s.length - 1] - '0' == k) a.push(v);
//     }
//     pr(a);
//     let n = a.length, se = new Set(a);
//     for (const v of a) {
//         if (v == x) return 1;
//     }
//     if (x % 2 == 0) {
//         // if (k % 2 == 0) { // even = even + even
//         // } else { // even = odd + odd
//         // }
//         for (let i = 0; i < n; i++) {
//             let v1 = a[i], v2 = x - v1;
//             if (se.has(v2)) return 2;
//         }
//     } else {
//         if (k % 2 == 0) {
//         } else { // odd = odd + odd + odd
//             for (let i = 0; i < n; i++) {
//                 for (let j = 0; j < n; j++) {
//                     let v1 = a[i], v2 = a[j], v3 = x - v1 - v2;
//                     // pr(v1, v2, v3);
//                     if (se.has(v3)) return 3;
//                 }
//             }
//         }
//     }
//     if (x % k == 0) return x / k;
//     return -1;
// };

const main = () => {
    let x = 58, k = 9;
    let x2 = 37, k2 = 2;
    let x3 = 0, k3 = 7;
    let x_debug1 = 1, k_debug1 = 1;
    let x_debug2 = 5, k_debug2 = 1;
    let x_debug3 = 10, k_debug3 = 0;
    let x_debug4 = 6, k_debug4 = 2;
    let x_debug5 = 19, k_debug5 = 3;
    let x_debug6 = 20, k_deug6 = 1;

    let x_debug7 = 2, k_debug7 = 8;
    let x_debug8 = 4, k_debug8 = 0;
    let x_debug9 = 18, k_debug9 = 0;
    let x_debug10 = 18, k_debug10 = 3;
    let x_debug11 = 30, k_debug11 = 4;
    // pr(minimumNumbers(x, k))
    // pr(minimumNumbers(x2, k2))
    // pr(minimumNumbers(x3, k3))
    // pr(minimumNumbers(x_debug1, k_debug1)) // 1
    // pr(minimumNumbers(x_debug2, k_debug2)) // 5
    // pr(minimumNumbers(x_debug3, k_debug3)) // 1
    // pr(minimumNumbers(x_debug4, k_debug4)) // 3
    // pr(minimumNumbers(x_debug5, k_debug5)) // 3
    // pr(minimumNumbers(x_debug6, k_deug6)) // 10 [11, 1, 1, .....]   9 1's
    // pr(minimumNumbers(x_debug7, k_debug7)) // -1
    // pr(minimumNumbers(x_debug9, k_debug9)) // -1
    // pr(minimumNumbers(x_debug10, k_debug10)) // 6
    pr(minimumNumbers(x_debug11, k_debug11)) // 5    14 + 4 * 4
};

main()