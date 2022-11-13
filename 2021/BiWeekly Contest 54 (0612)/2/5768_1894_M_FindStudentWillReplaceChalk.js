/**
 * 06/12/21 morning
 * https://leetcode.com/contest/biweekly-contest-54/problems/find-the-student-that-will-replace-the-chalk/
 */

const pr = console.log;

const sm = (a) => a.reduce(((x, y) => x + y), 0);

// WA, hidden case
const chalkReplacer1 = (chalk, k) => {
    let tot = sm(chalk);
    let rest = k % tot;
    pr(tot, rest);
    let sum = 0;
    for (let i = 0; i < rest; i++) {
        sum += chalk[i];
        // pr(rest);
        if (sum >= rest) return i;
    }
    // return rest;
};

// Accepted
const chalkReplacer = (chalk, k) => {
    let tot = sm(chalk);
    k %= tot;
    let n = chalk.length;
    for (let i = 0; i < n; i++) {
        if (k < chalk[i]) return i;
        k -= chalk[i];
    }
};

const main = () => {
    let chalk = [5, 1, 5], k = 22;
    let chalk2 = [3, 4, 1, 2], k2 = 25;
    let chalk_debug1 = [22, 25, 39, 3, 45, 45, 12, 17, 32, 9], k_debug1 = 835;
    pr(chalkReplacer(chalk, k))
    pr(chalkReplacer(chalk2, k2))
    pr(chalkReplacer(chalk_debug1, k_debug1)) // 3

    let chalk3 = [2, 3, 4], k3 = 6;
    pr(chalkReplacer(chalk3, k3))
};

main()