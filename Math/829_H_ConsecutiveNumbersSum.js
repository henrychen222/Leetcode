/**
 * 10/11/21 morning
 * https://leetcode.com/problems/consecutive-numbers-sum/
 * 
 * similar problem
 * https://codeforces.com/contest/1594/problem/A
 */

// Accepted --- https://leetcode.com/problems/consecutive-numbers-sum/
// reference: https://leetcode.com/problems/consecutive-numbers-sum/discuss/129015/5-lines-C%2B%2B-solution-with-detailed-mathematical-explanation.
const consecutiveNumbersSum = (n) => {
    let cnt = 1;
    for (let t = 2; t < Math.sqrt(2 * n); t++) {
        if ((n - t * (t - 1) / 2) % t == 0) cnt++;
    }
    return cnt;
};

const pr = console.log;
const main = () => {
    let n = 5;
    let n2 = 9;
    let n3 = 15;
    pr(consecutiveNumbersSum(n))
    pr(consecutiveNumbersSum(n2))
    pr(consecutiveNumbersSum(n3))
};

main()