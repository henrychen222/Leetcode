/*
 * 11/05/22 evening
 * https://leetcode.com/contest/weekly-contest-318/problems/total-cost-to-hire-k-workers/
 */

const pr = console.log;

const { MinPriorityQueue } = require('@datastructures-js/priority-queue')

// Accepted
// reference: kmjp
const totalCost = (a, k, m) => {
    let pq = new MinPriorityQueue({
        compare: (x, y) => {
            if (x[0] != y[0]) return x[0] - y[0];
            return x[1] - y[1];
        }
    });
    let n = a.length, l = 0, r = n - 1, res = 0;
    for (let i = 0; i < m; i++) {
        if (l <= r) {
            pq.enqueue([a[l], l]);
            l++;
        }
    }
    for (let i = 0; i < m; i++) {
        if (l <= r) {
            pq.enqueue([a[r], r]);
            r--;
        }
    }
    for (let i = 0; i < k; i++) {
        let cur = pq.dequeue();
        // pr('cur', cur);
        res += cur[0];
        if (cur[1] < l && l <= r) {
            pq.enqueue([a[l], l]);
            l++;
        } else if (cur[1] > r && l <= r) {
            pq.enqueue([a[r], r]);
            r--;
        }
    }
    return res;
};

// WA: choose the worker with the lowest cost from either the first candidates workers or the last candidates workers
const totalCost1 = (a, k, m) => {
    let pq = new MinPriorityQueue({
        compare: (x, y) => {
            if (x[0] != y[0]) return x[0] - y[0];
            return x[1] - y[1];
        }
    });
    let n = a.length, res = 0;
    // pr(n);
    for (let i = 0; i < n; i++) pq.enqueue([a[i], i]);
    for (let i = 0; i < k; i++) {
        let cur = pq.dequeue();
        // pr('cur', cur);
        res += cur[0];
    }
    return res;
};

const main = () => {
    let a = [17, 12, 10, 2, 7, 2, 11, 20, 8], k = 3, m = 4;
    let a2 = [1, 2, 4, 1], k2 = 3, m2 = 3;
    let a_debug1 = [31, 25, 72, 79, 74, 65, 84, 91, 18, 59, 27, 9, 81, 33, 17, 58], k_debug1 = 11, m_debug1 = 2;
    pr(totalCost(a, k, m))
    pr(totalCost(a2, k2, m2))
    pr(totalCost(a_debug1, k_debug1, m_debug1)) // 423
};

main()