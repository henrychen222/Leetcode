/**
 * 07/24/21 morning
 * https://leetcode.com/contest/biweekly-contest-57/problems/the-number-of-the-smallest-unoccupied-chair/
 */

const pr = console.log;

const { MinPriorityQueue, MaxPriorityQueue } = require('@datastructures-js/priority-queue')
const MAX = 10 ** 5 + 10;

// WA, issue
const smallestChair = (times, targetFriend) => {
    let a = [];
    let i = 0;
    for (const [start, end] of times) {
        a.push([start, end, i]);
        i++;
    }
    // pr(a);
    a.sort((x, y) => x[0] - y[0]);
    let pq = new MaxPriorityQueue({ priority: x => x[1] });
    let chair = 0;
    let release = new MinPriorityQueue({ priority: x => x });
    for (const e of a) {
        let cur = e;
        pr("\ncur", cur);
        pr("pq", pq.toArray())
        while (!pq.isEmpty()) {
            let x = pq.front().element;
            pr(x, cur)
            if (x[1] <= cur[0]) {
                // if (x[1] <= cur[1]) {
                release.enqueue(x[3]);
                pq.dequeue();
            } else {
                break;
            }
        }
        pr('pq after', pq.toArray())
        pr('release', release.toArray())
        if (!release.isEmpty()) {
            cur.push(release.dequeue().element);
        } else {
            cur.push(chair);
            chair++;
        }
        pr(cur)
        if (cur[2] == targetFriend) return cur[3];
        pq.enqueue(cur);
    }
};


const main = () => {
    let times = [[1, 4], [2, 3], [4, 6]], targetFriend = 1;
    let times2 = [[3, 10], [1, 5], [2, 6]], targetFriend2 = 0;
    let time_debug1 = [[33889, 98676], [80071, 89737], [44118, 52565], [52992, 84310], [78492, 88209], [21695, 67063], [84622, 95452], [98048, 98856], [98411, 99433], [55333, 56548], [65375, 88566], [55011, 62821], [48548, 48656], [87396, 94825], [55273, 81868], [75629, 91467]],
        targetFriend_debug1 = 6
    // pr(smallestChair(times, targetFriend))
    // pr(smallestChair(times2, targetFriend2))
    pr(smallestChair(time_debug1, targetFriend_debug1)) // 2
};

main()