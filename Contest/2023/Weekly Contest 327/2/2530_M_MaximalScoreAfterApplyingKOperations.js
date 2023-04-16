/*
 * 01/07/22 evening
 * https://leetcode.com/contest/weekly-contest-327/problems/maximal-score-after-applying-k-operations/
 */

const pr = console.log;

const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

// Accepted
const maxKelements = (a, k) => {
    let pq = new MaxPriorityQueue({ compare: (x, y) => y - x }), res = 0;
    for (const x of a) pq.enqueue(x);
    while (k--) {
        let cur = pq.dequeue();
        res += cur;
        pq.enqueue(Math.ceil(cur / 3));
    }
    return res;
};

const main = () => {
    let a = [10, 10, 10, 10, 10], k = 5
    let a2 = [1, 10, 3, 3, 3], k2 = 3
    pr(maxKelements(a, k))
    pr(maxKelements(a2, k2))
};

main()