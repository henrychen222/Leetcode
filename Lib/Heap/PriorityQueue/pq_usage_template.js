// 11.12 night

const {
    MinPriorityQueue,
    MaxPriorityQueue
} = require('@datastructures-js/priority-queue');


// https://leetcode.com/problems/cheapest-flights-within-k-stops/discuss/115541/JavaPython-Priority-Queue-Solution
const template = (a, b, c, d, e) => {
    let pq = new MinPriorityQueue({
        priority: x => x.first
    });
    pq.enqueue({
        first: a,
        second: b,
        third: c
    })
    while (!pq.isEmpty()) {
        let cur = pq.front().element;
        pq.dequeue();
        let first = cur.first;
        let second = cur.second;
        let third = cur.third;
        for (;;) {
            pq.enqueue({
                first: cost + next[1],
                second: next[0],
                third: stop - 1
            });
        }
    }
    return -1;
};

/**
 * save Array in pq
 * 
 * Example:
 * https://leetcode.com/problems/distant-barcodes/
 * https://leetcode.com/problems/maximum-average-pass-ratio/
 */
const template = () => {
    let pq = new MaxPriorityQueue({priority: x => x[1]});
    for (const [k, occ] of map) pq.enqueue([k, occ]);
    let res = [];
    while (!pq.isEmpty()) {
        let cur = pq.dequeue().element;
        cur[1]--;
        if (cur[1] > 0) pq.enqueue(f);
    }
    return res;
};