/**
 * 08/07/21 evening
 * https://leetcode.com/contest/weekly-contest-253/problems/remove-stones-to-minimize-the-total/
 */

const pr = console.log;

const {MaxPriorityQueue} = require('@datastructures-js/priority-queue');

// Accepted
const minStoneSum = (a, k) => {
    let pq = new MaxPriorityQueue({priority: x => x});
    for (const e of a) pq.enqueue(e);
    while(k--) {
        let cur = pq.dequeue().element;
        let remove = parseInt(cur / 2);
        pq.enqueue(cur - remove);
    }
    let aa = pq.toArray();
    let res = 0;
    for (const e of aa) {
        res += e.element;
    }
    return res;
};

const main = () => {
    let piles = [5,4,9], k = 2;
    let piles2 = [4,3,6,7], k2 = 3;
    pr(minStoneSum(piles, k))
    pr(minStoneSum(piles2, k2))
};

main()