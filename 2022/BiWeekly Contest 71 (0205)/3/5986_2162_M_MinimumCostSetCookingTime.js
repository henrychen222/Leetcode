/**
 * 02/05/22 morning
 * https://leetcode.com/contest/biweekly-contest-71/problems/minimum-cost-to-set-cooking-time/
 */

const pr = console.log;

// Accepted
let start, mc, pc, res, sec;
const minCostSetTime = (startAt, moveCost, pushCost, targetSeconds) => {
    start = startAt, mc = moveCost, pc = pushCost, res = Number.MAX_SAFE_INTEGER, sec = targetSeconds;
    // pr(cal("1000"), cal("0960"), cal("960"))
    // pr(cal("0076"), cal("076"))
    dfs(0, '');
    return res;
};

const dfs = (idx, cur) => {
    if (cur.length > 4) return;
    // pr(idx, "cur", cur);
    if (cur.length == 1) {
        if (cur - '0' == sec) {
            // pr("length 1", cur, cal(cur))
            res = Math.min(res, cal(cur))
        }
    }
    if (cur.length == 2) {
        if (cur - '0' == sec) {
            // pr("length 2", cur, cal(cur))
            res = Math.min(res, cal(cur))
        }
    }
    if (cur.length == 4 || cur.length == 3) {
        let h, m;
        if (cur.length == 3) {
            h = cur.slice(0, 1) - '0';
            m = cur.slice(1) - '0';
        } else if (cur.length == 4) {
            h = cur.slice(0, 2) - '0';
            m = cur.slice(2) - '0';
        }
        if (h * 60 + m == sec) {
            // pr("length 3|4 ", cur, cal(cur), h * 60 + m, sec)
            res = Math.min(res, cal(cur))
        }
    }
    for (let i = 0; i < 10; i++) {
        cur += i + '';
        dfs(i, cur);
        cur = cur.slice(0, -1);
    }
};

const cal = (s) => {
    let sum = 0, pre = start;
    for (const c of s) {
        if (c - '0' != pre) {
            sum += mc;
        }
        sum += pc;
        pre = c - '0';
    }
    return sum;
};

const main = () => {
    let startAt = 1, moveCost = 2, pushCost = 1, targetSeconds = 600;
    let startAt2 = 0, moveCost2 = 1, pushCost2 = 2, targetSeconds2 = 76;
    let startAt_debug1 = 0, moveCost_debug1 = 1, pushCost_debug1 = 4, targetSeconds_debug1 = 9;
    pr(minCostSetTime(startAt, moveCost, pushCost, targetSeconds))
    pr(minCostSetTime(startAt2, moveCost2, pushCost2, targetSeconds2))
    pr(minCostSetTime(startAt_debug1, moveCost_debug1, pushCost_debug1, targetSeconds_debug1)) // 5
};

main()
