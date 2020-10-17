/**
 * 10.16 evening
 * https://leetcode.com/problems/arithmetic-slices/
 */

// Accepted --- 72ms 83.52%
/**
 * DP Solution
 * https://leetcode.com/problems/arithmetic-slices/discuss/90093/3ms-c-standard-dp-solution-with-very-detailed-explanation
 * https://www.cnblogs.com/grandyang/p/5968340.html
 */
const numberOfArithmeticSlices_DP = (A) => {
    let n = A.length;
    let dp = new Array(n).fill(0); // dp[i] means the number of arithmetic slices ending with A[i]
    let res = 0;
    for (let i = 1; i + 1 < n; i++) {
        if (A[i + 1] - A[i] == A[i] - A[i - 1]) {
            dp[i] = dp[i - 1] + 1;
        }
        res += dp[i];
    }
    return res;
};

// Accepted --- 76ms 63.74%
/**
 * https://leetcode.com/problems/arithmetic-slices/discuss/90058/simple-java-solution-9-lines-2ms
 * https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-413-arithmetic-slices/
 */
const numberOfArithmeticSlices2 = (A) => {
    let cur = sum = 0;
    let n = A.length;
    for (let i = 2; i < n; i++) {
        if (A[i] - A[i - 1] == A[i - 1] - A[i - 2]) {
            cur++;
            sum += cur;
        } else {
            cur = 0;
        }
    }
    return sum;
};

// Accepted --- 88ms 16.48%
const numberOfArithmeticSlices = (A) => {
    let n = A.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        let cnt = 0;
        if ((i + 2 < n) && (A[i + 1] - A[i]) != (A[i + 2] - A[i + 1])) continue;
        for (let j = i; j < n; j++) {
            if ((j - 2 >= 0) && (A[j] - A[j - 1]) != (A[j - 1] - A[j - 2])) continue;
            let len = j - i + 1;
            if (len >= 3) {
                let tmp = A.slice(i, j + 1);
                if (ok(tmp, len)) {
                    cnt++;
                }
            }
        }
        sum += cnt;
    }
    return sum;
};

// Time limit 13/15
// const numberOfArithmeticSlices = (A) => {
//     let n = A.length;
//     let sum = 0;
//     for (let i = 0; i < n; i++) {
//         let cnt = 0;
//         for (let j = i; j < n; j++) {
//             let len = j - i + 1;
//             if (len >= 3) {
//                 let tmp = A.slice(i, j + 1);
//                 if (ok(tmp, len)) {
//                     cnt++;
//                 }
//             }
//         }
//         sum += cnt;
//     }
//     return sum;
// };

const ok = (arr, n) => {
    for (let i = 1; i + 1 < n; i++) {
        if ((arr[i + 1] - arr[i]) != (arr[i] - arr[i - 1])) return false;
    }
    return true;
};

const main = () => {
    let A = [1, 2, 3, 4];
    let debug1 = [1, 2, 3, 8, 9, 10];
    console.log(numberOfArithmeticSlices(A));
    console.log(numberOfArithmeticSlices(debug1)); // 2
};

main()