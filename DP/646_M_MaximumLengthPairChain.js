/**
 * 10.21 afternoon  10.22 evening
 * https://leetcode.com/problems/maximum-length-of-pair-chain/
 */

/**
 * Greedy Solution
 * reference:
 * https://www.cnblogs.com/grandyang/p/7381633.html
 * https://leetcode.com/problems/maximum-length-of-pair-chain/discuss/105649/earliest-deadline-first-algorithm-greedy-same-as-maximum-jobs-we-can-accomplish
 * 
 * Similar problem 435
 * https://leetcode.com/problems/non-overlapping-intervals/
 */
// Accepted --- 96ms 87.30%
const findLongestChain = (pairs) => {
    pairs.sort((a, b) => a[1] - b[1]); // need to sort based on the end
    let stack = [pairs[0]];
    for (const p of pairs) {
        let end = stack[stack.length - 1];
        if (p[0] > end[1]) {
            stack.push(p);
        }
    }
    console.log(stack);
    return stack.length;
};

// Accepted --- 100ms 77.78%
const findLongestChain_origin = (pairs) => {
    pairs.sort((a, b) => a[1] - b[1]);
    let end = pairs[0][1];
    let cnt = 1;
    for (const p of pairs) {
        if (p[0] > end) {
            cnt++;
            end = p[1];
        }
    }
    return cnt;
};

/**
 * DP Solution
 * reference:
 * https://leetcode.com/problems/maximum-length-of-pair-chain/discuss/105613/Java-solution-10-lines-DP
 *    https://www.geeksforgeeks.org/maximum-length-chain-of-pairs-dp-20/
 * https://leetcode.com/problems/maximum-length-of-pair-chain/discuss/105608/Python-DP-solution
 */
// Accepted --- 136ms 50.79%
const findLongestChain_DP = (pairs) => {
    let n = pairs.length;
    pairs.sort((a, b) => a[0] - b[0]);
    let dp = new Array(n).fill(1);
    for (let i = 1; i < n; i++) { // DP bottom up
        for (let j = 0; j < i; j++) {
            if (pairs[i][0] > pairs[j][1] && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
            }
        }
    }
    console.log(dp);
    return Math.max.apply(Math, dp);
};

// Accepted --- 140ms 47.62%
const findLongestChain_DP_modify = (pairs) => {
    let n = pairs.length;
    pairs.sort((a, b) => a[0] - b[0]);
    let dp = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (pairs[i][0] > pairs[j][1] && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
            }
        }
    }
    return dp[n - 1]; // difference
};


// wrong
// const findLongestChain = (pairs) => {
//     let n = pairs.length;
//     pairs.sort((a, b) => a[0] - b[0]);
//     let res = 0;
//     console.log("arr:", pairs);
//     for (let i = 0; i < n; i++) {
//         let tmp = n - 1;
//         for (let j = i + 1; j < n; j++) { // miss situations
//             if (pairs[j][0] <= pairs[j - 1][1]) {
//                 tmp = j;
//                 break;
//             }
//         }
//         console.log(pairs.slice(i, tmp + 1))
//         res = Math.max(res, tmp - i + 1);
//     }
//     return res;
// };

const main = () => {
    let pairs = [
        [1, 2],
        [2, 3],
        [3, 4]
    ];
    let debug1 = [
        [-10, -8],
        [8, 9],
        [-5, 0],
        [6, 10],
        [-6, -4],
        [1, 7],
        [9, 10],
        [-4, 7]
    ];
    let debug2 = [
        [9, 10],
        [-4, 9],
        [-5, 6],
        [-5, 9],
        [8, 9]
    ];
    console.log(findLongestChain(pairs)); // 2
    console.log(findLongestChain(debug1)); // 4   [ [ -10, -8 ], [ -5, 0 ], [ 1, 7 ], [8, 9]]
    console.log(findLongestChain(debug2)); // 2

    console.log("");
    console.log(findLongestChain_DP(pairs));
    console.log(findLongestChain_DP(debug1));
    console.log(findLongestChain_DP(debug2));

};

main()