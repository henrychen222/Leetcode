/**
 * 11.18 evening
 * https://leetcode.com/problems/last-stone-weight-ii/
 */

// Accepted --- 84ms 71.67%
// reference: https://www.acwing.com/solution/LeetCode/content/2139/
const lastStoneWeightII = (stones) => {
    let n = stones.length;
    let dp = new Array(n).fill(false);
    dp[0] = true;
    let sum = stones.reduce((a, b) => a + b);
    for (let i = 0; i < n; i++) {
        for (let j = sum >> 1; j >= stones[i]; j--) {
            dp[j] |= dp[j - stones[i]];
        }
    }
    // console.log(dp);
    for (let i = sum >> 1; ~i; i--) {
        if (dp[i]) return sum - i - i;
    }
    return sum;
};

// Accepted --- 80ms 88.33%
// reference: https://leetcode.com/problems/last-stone-weight-ii/discuss/294888/JavaC%2B%2BPython-Easy-Knapsacks-DP
const lastStoneWeightII2 = (stones) => {
    let n = stones.length;
    let dp = new Array(n).fill(false);
    dp[0] = true;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += stones[i];
        for (let j = Math.min(1500, sum); j >= stones[i]; j--) {
            dp[j] |= dp[j - stones[i]];
        }
    }
    // console.log(dp);
    for (let i = sum >> 1; ~i; i--) {
        if (dp[i]) return sum - i - i;
    }
    return sum;
};

// greedy wrong 74/82
// const lastStoneWeightII = (stones) => {
//     while (stones.length > 1) {
//         stones.sort((a, b) => b - a);
//         // console.log(stones);
//         let fi = stones[0];
//         let se = stones[1];
//         stones.shift();
//         stones.shift();
//         if (fi != se) {
//             stones.unshift(fi - se);
//         }
//     }
//     return stones.length == 1 ? stones[0] : 0;
// };

const main = () => {
    let stones = [2, 7, 4, 1, 8, 1];
    let debug1 = [1, 1, 4, 2, 2];
    let debug2 = [31, 26, 33, 21, 40];
    console.log(lastStoneWeightII(stones));
    console.log(lastStoneWeightII(debug1));
    console.log(lastStoneWeightII(debug2)); // 5   [26, 33, 21, 9]  [5, 21, 9] [14, 9] [5]
};

main()