/**
 * 03/20/21 morning
 * https://leetcode.com/contest/biweekly-contest-48/problems/maximum-number-of-consecutive-values-you-can-make/
 */

const pr = console.log;

// don't know
const getMaximumConsecutive = (coins) => {
    // let u = [...new Set(coins)];
    let m = new Map();
    for (const e of coins) {
        m.set(e, m.get(e) + 1 || 1);
    }
    m = sortMapByKey(m)
    pr(m);
    let next = 0;
    let res = 1;
    for (const [k, v] of m) {
        if (k == 1) {
            res += m.get(k);
            next = k;
        } else {
            if (next + m.get(1) == k) {
                res += m.get(1);
                next = k;
            }
        }
        pr(next, res)
    }
    return res;
};

const sortMapByKey = (map) => {
    return new Map([...map].sort((a, b) => a[0] - b[0]));
};

const main = () => {
    let coins = [1, 3];
    let coins2 = [1, 1, 1, 4];
    let coins3 = [1, 4, 10, 3, 1]
    pr(getMaximumConsecutive(coins));
    pr(getMaximumConsecutive(coins2));
    pr(getMaximumConsecutive(coins3));
};

main()