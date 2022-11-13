/**
 * 12/11/21 morning
 * https://leetcode.com/contest/biweekly-contest-67/problems/find-good-days-to-rob-the-bank/
 */

const pr = console.log;

// Accepted
// reference: uwi
const goodDaysToRobBank = (a, time) => {
    let n = a.length, pre = Array(n).fill(0), suf = Array(n).fill(0), res = [];
    for (let i = 0; i < n; i++) {
        if (i - 1 >= 0 && a[i] <= a[i - 1]) {
            pre[i] = pre[i - 1] + 1;
        } else {
            pre[i] = 1;
        }
    }
    for (let i = n - 1; ~i; i--) {
        if (i + 1 < n && a[i] <= a[i + 1]) {
            suf[i] = suf[i + 1] + 1;
        } else {
            suf[i] = 1;
        }
    }
    pr("pre", pre);
    pr("suf", suf);
    for (let i = 0; i < n; i++) {
        let t = time + 1;
        if (t <= pre[i] && t <= suf[i]) res.push(i);
    }
    return res;
};

const main = () => {
    let security = [5, 3, 3, 3, 5, 6, 2], time = 2;
    let security2 = [1, 1, 1, 1, 1], time2 = 0;
    let security3 = [1, 2, 3, 4, 5, 6], time3 = 2;
    let security4 = [1], time4 = 5;
    pr(goodDaysToRobBank(security, time))
    pr(goodDaysToRobBank(security2, time2))
    pr(goodDaysToRobBank(security3, time3))
    pr(goodDaysToRobBank(security4, time4))
};

main()