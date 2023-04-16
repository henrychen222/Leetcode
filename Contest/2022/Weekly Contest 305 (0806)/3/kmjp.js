/**
 * 08/06/22 evening
 * https://leetcode.com/contest/weekly-contest-305/problems/check-if-there-is-a-valid-partition-for-the-array/
 */

const pr = console.log;

// Accepted
const validPartition = (a) => {
    let n = a.length, dp = Array(n + 1).fill(false);
    dp[0] = true;
    for (let i = 2; i <= n; i++) {
        if (dp[i - 2] && a[i - 2] == a[i - 1]) dp[i] = true;
        if (i - 3 >= 0 && dp[i - 3] && a[i - 1] == a[i - 2] && a[i - 2] == a[i - 3]) dp[i] = true;
        if (i - 3 >= 0 && dp[i - 3] && a[i - 1] - a[i - 2] == 1 && a[i - 2] - a[i - 3] == 1) dp[i] = true;
    }
    // pr(dp);
    return dp[n];
};

const main = () => {
    let a = [4, 4, 4, 5, 6];
    let a2 = [1, 1, 1, 2];
    let debug1 = [993335, 993336, 993337, 993338, 993339, 993340, 993341];
    let debug2 = [730480, 730481, 730482, 730483, 730484, 730485];
    let debug3 = [676575, 676575, 676575, 533985, 533985, 40495, 40495, 40495, 40495, 40495, 40495, 40495, 782020, 782021, 782022, 782023, 782024, 782025, 782026, 782027, 782028, 782029, 782030, 782031, 782032, 782033, 782034, 782035, 782036, 782037, 782038, 782039, 782040, 378070, 378070, 378070, 378071, 378072, 378073, 378074, 378075, 378076, 378077, 378078, 378079, 378080, 378081, 378082, 378083, 378084, 378085, 378086, 378087, 378088, 378089, 378090, 378091, 378092, 378093, 129959, 129959, 129959, 129959, 129959, 129959];
    pr(validPartition(a))
    pr(validPartition(a2))
    pr(validPartition(debug1)) // false
    pr(validPartition(debug2)) // true
    pr(validPartition(debug3)) // true
};

main()