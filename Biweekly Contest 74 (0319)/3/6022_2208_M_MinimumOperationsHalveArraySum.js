/**
 * 03/19/22 morning
 * https://leetcode.com/contest/biweekly-contest-74/problems/minimum-operations-to-halve-array-sum/
 */

const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
const pr = console.log;

const sm = (a) => a.reduce(((x, y) => x + y), 0);

// Accepted
const halveArray = (a) => {
    let sum = sm(a), half = sum / 2, pq = new MaxPriorityQueue(), res = 0;
    for (const x of a) pq.enqueue(x);
    while (sum > half) {
        let cur = pq.dequeue().element;
        pq.enqueue(cur / 2);
        sum = sum + cur / 2 - cur;
        res++;
        // pr(pq.toArray());
    }
    return res;
};

const main = () => {
    let a = [5, 19, 8, 1];
    let a2 = [3, 8, 20];
    pr(halveArray(a));
    pr(halveArray(a2));
};

main()