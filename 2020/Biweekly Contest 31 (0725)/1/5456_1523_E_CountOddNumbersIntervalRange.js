/**
 * 7.25 morning
 * https://leetcode.com/contest/biweekly-contest-31/problems/count-odd-numbers-in-an-interval-range/
 */

// Accepted
const countOdds = (low, high) => {
    let cnt = 0;
    for (let i = low; i <= high; i++) {
        if (i % 2 != 0) cnt++;
    }
    return cnt;
};

const main = () => {
    let low = 3, high = 7;
    let low2 = 8, high2 = 10;
    console.log(countOdds(low, high));
    console.log(countOdds(low2, high2));
};

main()