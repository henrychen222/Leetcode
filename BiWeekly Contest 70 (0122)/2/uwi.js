const pr = console.log;

const preSum = (a) => { let pre = [0]; for (let i = 0; i < a.length; i++) { pre.push(pre[i] + a[i]); } return pre; };

// Accepted --- 468ms
const numberOfArrays = (a, lower, upper) => {
    let n = a.length, m = n + 1;
    let pre = preSum(a);
    pre.sort((x, y) => x - y);
    let min = pre[0], max = pre[m - 1];
    // pr(min, max);
    let l = lower - min, r = upper - max;
    // pr(l, r, upper);
    return Math.max(r - l + 1, 0);
};

const main = () => {
    let differences = [1, -3, 4], lower = 1, upper = 6;
    let differences2 = [3, -4, 5, 1, -2], lower2 = -4, upper2 = 5;
    let differences3 = [4, -7, 2], lower3 = 3, upper3 = 6;
    let differences_debug1 = [-40], lower_debug1 = -46, upper_debug1 = 53;
    let differences_debug2 = [-36115], lower_debug2 = 50665, upper_debug2 = 89472;
    let differences_debug3 = [83702, -5216], lower_debug3 = -82788, upper_debug3 = 14602;
    let differences_debug4 = [94357], lower_debug4 = -45280, upper_debug4 = 54014;
    pr(numberOfArrays(differences, lower, upper))
    pr(numberOfArrays(differences2, lower2, upper2))
    pr(numberOfArrays(differences3, lower3, upper3))
    pr(numberOfArrays(differences_debug1, lower_debug1, upper_debug1)) // 60
    pr(numberOfArrays(differences_debug2, lower_debug2, upper_debug2)) // 2693
    pr(numberOfArrays(differences_debug3, lower_debug3, upper_debug3)) // 13689
    pr(numberOfArrays(differences_debug4, lower_debug4, upper_debug4)) // 4938
};

main()
