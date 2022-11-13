/**
 * 04/30/22 morning
 * https://leetcode.com/contest/biweekly-contest-77/problems/minimum-average-difference/
 */

const pr = console.log;

const sm = (a) => a.reduce(((x, y) => x + y), 0);
const int = parseInt;

// Accepted
const minimumAverageDifference = (a) => {
    let sum = sm(a), lsum = 0, n = a.length;
    let d = [];
    for (let i = 0; i < n; i++) {
        lsum += a[i];
        rsum = sum - lsum;
        let ld = int(lsum / (i + 1)), rd = int(rsum / (n - i - 1)) || 0, diff = Math.abs(ld - rd);
        // pr(lsum, rsum, ld, rd, diff);
        d.push([diff, i]);
    }
    // pr(d);
    d.sort((x, y) => {
        if (x[0] != y[0]) return x[0] - y[0];
        return x[1] - y[1];
    });
    // pr(d);
    return d[0][1];
};

const main = () => {
    let nums = [2, 5, 3, 9, 5, 3];
    let nums2 = [0];
    pr(minimumAverageDifference(nums))
    pr(minimumAverageDifference(nums2))
};

main()