/*
 * 12/09/23 evening
 * https://leetcode.com/contest/weekly-contest-375/problems/count-tested-devices-after-test-operations/
 */

const pr = console.log;

// Accepted
const countTestedDevices = (a) => {
    let n = a.length, res = 0;
    for (let i = 0; i < n; i++) {
        if (a[i] > 0) {
            res++;
            for (let j = i + 1; j < n; j++)a[j]--;
        }
    }
    return res;
};

const main = () => {
    let a = [1, 1, 2, 1, 3]
    let a2 = [0, 1, 2];
    pr(countTestedDevices(a))
    pr(countTestedDevices(a2))
};

main()