/**
 * 07/09/22 evening
 * https://leetcode.com/contest/weekly-contest-301/problems/minimum-amount-of-time-to-fill-cups/
 */

const pr = console.log;

// Accepted
const fillCups = (a) => {
    let res = 0;
    while (!valid(a)) {
        a.sort((x, y) => x - y);
        // pr(a);
        if (a[1] > 0) {
            a[2]--;
            a[1]--;
            res++;
        } else {
            res += a[2];
            break;
        }
    }
    pr(a)
    return res;
};

const valid = (a) => a.every(x => x <= 0);

const main = () => {
    let a = [1, 4, 2];
    let a2 = [5, 4, 4];
    pr(fillCups(a))
    pr(fillCups(a2))
};

main()