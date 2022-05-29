/**
 * 05/14/22 morning
 * https://leetcode.com/contest/biweekly-contest-78/problems/number-of-ways-to-split-array/
 */

const pr = console.log;

const sm = (a) => a.reduce(((x, y) => x + y), 0);

// Accepted
const waysToSplitArray = (a) => {
    let n = a.length, sum = sm(a), lsum = 0, res = 0;
    for (let i = 0; i < n - 1; i++) {
        lsum += a[i];
        let rsum = sum - lsum;
        if (lsum >= rsum) res++
    }
    return res;
};

const main = () => {
    let a = [10, 4, -8, 7];
    let a2 = [2, 3, 1, 0];
    pr(waysToSplitArray(a))
    pr(waysToSplitArray(a2))
};

main()