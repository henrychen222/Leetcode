/**
 * 12/11/21 morning
 * https://leetcode.com/contest/biweekly-contest-67/problems/sequentially-ordinal-rank-tracker/
 */

const pr = console.log;

const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

const comp = (x, y) => {
    if (x[1] != y[1]) return y[1] - x[1];
    return x[0].localeCompare(y[0]);
};

const comp2 = (x, y) => {
    if (x[1] != y[1]) return x[1] - y[1];
    return y[0].localeCompare(x[0]);
};

// Accepted
function SORTracker() {
    let pq = new MinPriorityQueue({ compare: comp });
    let best = new MinPriorityQueue({ compare: comp2 });
    return { add, get }
    function add(name, score) {
        pq.enqueue([name, score]);
        while (best.size() && comp(pq.front(), best.front()) < 0) {
            let b = best.dequeue(), a = pq.dequeue();
            best.enqueue(a);
            pq.enqueue(b);
        }
        pr(pq.toArray(), best.toArray())
    }
    function get() {
        let res = pq.dequeue();
        best.enqueue(res);
        return res[0];
    }
}

const main = () => {
    let tracker = new SORTracker();
    tracker.add("bradford", 2);
    tracker.add("branford", 3);
    pr(tracker.get());        // "branford"
    tracker.add("alps", 2);
    pr(tracker.get());            // "alps"
    tracker.add("orland", 2);
    pr(tracker.get());            // "bradford"
    tracker.add("orlando", 3);
    pr(tracker.get());            // "bradford"
    tracker.add("alpine", 2);
    pr(tracker.get());            // "bradford".
    pr(tracker.get());            // "orland".
};

main()
