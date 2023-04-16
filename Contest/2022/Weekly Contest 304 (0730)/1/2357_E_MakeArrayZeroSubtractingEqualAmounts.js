/**
 * 07/30/22 evening
 * https://leetcode.com/contest/weekly-contest-304/problems/make-array-zero-by-subtracting-equal-amounts/
 */

const pr = console.log;

// Accepted
const minimumOperations = (a) => {
    let res = 0;
    while (!allZero(a)) {
        let min = Math.min(...a.filter(x => x > 0));
        for (let i = 0; i < a.length; i++) {
            if (a[i] > 0) a[i] -= min;
        }
        res++;
        // pr(min, a);
    }
    return res;
};

const allZero = (a) => a.every(x => x == 0);

const main = () => {
    let a = [1, 5, 0, 3, 5];
    let a2 = [0];
    pr(minimumOperations(a))
    pr(minimumOperations(a2))
};

main()