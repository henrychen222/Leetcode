/**
 * 9.5 evening
 * https://leetcode.com/contest/weekly-contest-205/problems/minimum-deletion-cost-to-avoid-repeating-letters/
 */

// Accepted --- 136ms 100.00% (after contest 12:16-12:35 another 20 minute complete)
const minCost = (s, cost) => {
    let n = s.length;
    let arr = s.split("");
    let res = 0;
    if ([...new Set(arr)].length == n) return 0;
    for (let i = 0; i + 1 < n; i++) {
        if (s[i + 1] == s[i]) {
            // console.log(s[i], s[i + 1]);
            let max = Number.MIN_VALUE;
            let sum = 0;
            let j = i;
            for (; j < n; j++) {
                if (s[j] != s[i]) {
                    // i = j - 1;
                    break;
                }
                // console.log(s[j], cost[j], j);
                sum += cost[j];
                max = Math.max(max, cost[j]);
            }
            // console.log(sum, max);
            res += sum - max;
            i = j - 1;
        }
    }
    return res;
};

const main = () => {
    let s = "abaac", cost = [1, 2, 3, 4, 5];
    let s2 = "abc", cost2 = [1, 2, 3];
    let s3 = "aabaa", cost3 = [1, 2, 3, 4, 1];
    let s_debug1 = "cddcdcae", cost_debug1 = [4, 8, 8, 4, 4, 5, 4, 2];
    let s_debug2 = "bbbaaa", cost_debug2 = [4, 9, 3, 8, 8, 9];
    console.log(minCost(s, cost));
    console.log(minCost(s2, cost2));
    console.log(minCost(s3, cost3));
    console.log(minCost(s_debug1, cost_debug1)); // 8
    console.log(minCost(s_debug2, cost_debug2)); // 23
};

main()