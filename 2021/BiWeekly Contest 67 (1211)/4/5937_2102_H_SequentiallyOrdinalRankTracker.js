/**
 * 12/11/21 morning
 * https://leetcode.com/contest/biweekly-contest-67/problems/sequentially-ordinal-rank-tracker/
 */

const pr = console.log;

const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

// TLE
function SORTracker1() {
    let pq = new MinPriorityQueue({
        compare: (x, y) => {
            if (x[1] != y[1]) return y[1] - x[1];
            return x[0].localeCompare(y[0]);
        }
    });
    let t = 0;
    return { add, get }
    function add(name, score) {
        pq.enqueue([name, score]);
    }
    function get() {
        let a = pq.toArray();
        let i = t;
        // pr(a);
        t++;
        return a[i][0];
    }
}

// Wrong
const stmkey_de = (m) => new Map([...m].sort((x, y) => y[0] - x[0]));
function SORTracker() {
    let m = new Map();
    let t = 1;
    return { add, get }
    function add(name, score) {
        if (!m.has(score)) m.set(score, []);
        m.get(score).push(name);
    }
    function get() {
        let i = t, cur = 0, res;
        m = stmkey_de(m);
        // pr(m, i);
        for (const [score, a] of m) {
            let len = a.length;
            if (cur + len >= i) {
                let rest = i - cur;
                a.sort((x, y) => x.localeCompare(y));
                pr("a", a)
                res = a[rest-1];
                break;
            }
            cur += score;
        }
        t++;
        return res;
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
