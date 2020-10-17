/**
 * 10.16 evening
 * https://leetcode.com/problems/minimum-cost-for-tickets/
 */

const max = Math.max;
const min = Math.min;

// Accepted --- 84ms 56.36%
/**
 * reference:
 * https://blog.csdn.net/fuxuemingzhu/article/details/86697224
 * https://leetcode.com/problems/minimum-cost-for-tickets/discuss/226659/Two-DP-solutions-with-pictures
 */
const mincostTickets = (days, costs) => {
    let dp = new Array(366).fill(Number.MAX_VALUE);
    for (const day of days) {
        dp[day] = 0;
    }
    dp[0] = 0;
    for (let i = 1; i < 366; i++) {
        if (dp[i] == Number.MAX_VALUE) {
            dp[i] = dp[i - 1]; // days no need to travel
        } else {
            dp[i] = min(dp[i - 1] + costs[0], dp[max(0, i - 7)] + costs[1], dp[max(0, i - 30)] + costs[2]);
        }
    }
    return dp[365];
    // return dp[days[days.length - 1]];
};

// Accepted --- 76ms 88.49%
const mincostTickets2 = (days, costs) => {
    let n = days.length;
    let dp = new Array(366).fill(Number.MAX_VALUE);
    for (const day of days) {
        dp[day] = 0;
    }
    dp[0] = 0;
    for (let i = 1; i <= days[n - 1]; i++) {
        if (dp[i] == Number.MAX_VALUE) {
            dp[i] = dp[i - 1];
        } else {
            dp[i] = min(dp[i - 1] + costs[0], dp[max(0, i - 7)] + costs[1], dp[max(0, i - 30)] + costs[2]);
        }
    }
    return dp[days[n - 1]];
};

const main = () => {
    let days = [1, 4, 6, 7, 8, 20],
        costs = [2, 7, 15];
    let days2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31],
        costs2 = [2, 7, 15];
    console.log(mincostTickets(days, costs));
    console.log(mincostTickets(days2, costs2));
};

main()