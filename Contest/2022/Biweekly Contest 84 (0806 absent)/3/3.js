/**
 * 08/06/22 night
 * https://leetcode.com/contest/biweekly-contest-84/problems/task-scheduler-ii/
 */

const pr = console.log;

const { MaxPriorityQueue } = require('@datastructures-js/priority-queue')

const counter = (a_or_s) => { let m = new Map(); for (const x of a_or_s) m.set(x, m.get(x) + 1 || 1); return m; };
const counter_value_in_indexA_in = (a_or_s) => { let m = new Map(); let n = a_or_s.length; for (let i = 0; i < n; i++) { if (!m.has(a_or_s[i])) m.set(a_or_s[i], []); m.get(a_or_s[i]).push(i); } return m; };

// Accepted reference: arignote
const taskSchedulerII = (a, space) => {
    let m = new Map(), res = 0;
    for (const x of a) {
        let cnt = m.get(x) || 0;
        res = Math.max(res, cnt);
        res++;
        m.set(x, res + space);
        // pr(m, res)
    }
    return res;
};

// WA
const taskSchedulerII1 = (a, space) => {
    let typeKeep = new Set(a), used = new Set(), M = counter(a), pq = new MaxPriorityQueue({ compare: (x, y) => y[1] - x[1] }), order = [];
    for (const [x, occ] of M) pq.enqueue([x, occ]);
    while (pq.size()) {
        // pr("used", used, "typeKeep", typeKeep, "order", order)
        if (used.size < typeKeep.size) {
            let tmp = [];
            while (used.has(pq.front()[0])) tmp.push(pq.dequeue());
            let cur = pq.dequeue();
            // pr('cur', cur);
            cur[1]--;
            order.push(cur[0]);
            used.add(cur[0]);
            if (cur[1] > 0) {
                pq.enqueue(cur);
            } else {
                typeKeep.delete(cur[0]);
            }
            for (const e of tmp) pq.enqueue(e);
        } else {
            used.clear();
        }
    }
    let res = 0, m = counter_value_in_indexA_in(order);
    for (const [, a] of m) {
        for (let i = 1; i < a.length; i++) {
            if (a[i] - a[i - 1] - 1 < space) res++;
        }
    }
    pr('order', order, m, res);
    return res + a.length;
};

const main = () => {
    let a = [1, 2, 1, 2, 3, 1], space = 3;
    let a2 = [5, 8, 8, 5], space2 = 2;
    let a_debug1 = [4, 10, 10, 9, 10, 4, 10, 4], space_debug1 = 8
    pr(taskSchedulerII(a, space))
    pr(taskSchedulerII(a2, space2))
    pr(taskSchedulerII(a_debug1, space_debug1)) // 30
};

main()