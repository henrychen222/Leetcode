/**
 * 07/24/21 morning
 * https://leetcode.com/contest/biweekly-contest-57/problems/the-number-of-the-smallest-unoccupied-chair/
 */

const pr = console.log;

const { MinPriorityQueue, MaxPriorityQueue } = require('@datastructures-js/priority-queue')

// Accepted --- 200ms
// const smallestChair1 = (times, targetFriend) => {
//     let pq = new MinPriorityQueue({ priority: x => x[1] });
//     let release = new MinPriorityQueue({ priority: x => x });
//     let a = [];
//     let i = 0;
//     for (const [start, end] of times) {
//         a.push([start, end, i, 0]);
//         release.enqueue(i);
//         i++;
//     }
//     a.sort((x, y) => x[0] - y[0]);
//     // pr(a);
//     for (const e of a) {
//         let cur = e;
//         // pr('\n\ncur', cur)
//         // pr('pq', pq.toArray())
//         // pr('release', release.toArray())
//         while (!pq.isEmpty() && pq.front().element[1] <= cur[0]) {
//             // pr("1111", pq.front().element)
//             release.enqueue(pq.dequeue().element[3]);
//         }
//         //  pr('pq after', pq.toArray())
//         // pr('release after', release.toArray())
//         let chair = release.dequeue().element;
//         // pr("chair", chair);
//         if (cur[2] == targetFriend) return chair;
//         // cur.push(chair);
//         cur[cur.length - 1] = chair;
//         // pr(cur)
//         pq.enqueue(cur);
//     }
// };

// // Accepted --- 236ms
// const smallestChair2 = (times, targetFriend) => {
//     let pq = new MinPriorityQueue({ priority: x => x[1] });
//     let release = new MinPriorityQueue({ priority: x => x });
//     let a = [];
//     let i = 0;
//     for (const [start, end] of times) {
//         a.push([start, end, i]);
//         release.enqueue(i);
//         i++;
//     }
//     a.sort((x, y) => x[0] - y[0]);
//     for (const e of a) {
//         let cur = e;
//         while (!pq.isEmpty() && pq.front().element[1] <= cur[0]) {
//             release.enqueue(pq.dequeue().element[3]);
//         }
//         let chair = release.dequeue().element;
//         if (cur[2] == targetFriend) return chair;
//         cur.push(chair)
//         pq.enqueue(cur);
//     }
// };

///////////////// Test /////////////////////////////////
// Accepted --- 244ms
const peek = (pq) => pq.front().element;
const poll = (pq) => pq.dequeue().element;
const add = (pq, item) => pq.enqueue(item);
const smallestChair = (times, targetFriend) => {
    let pq = new MinPriorityQueue({ priority: x => x[1] });
    let release = new MinPriorityQueue({ priority: x => x });
    let a = [];
    let i = 0;
    for (const [start, end] of times) {
        a.push([start, end, i]);
        add(release, i);
        i++;
    }
    a.sort((x, y) => x[0] - y[0]);
    for (const e of a) {
        let cur = e;
        while (!pq.isEmpty() && peek(pq)[1] <= cur[0]) {
            release.enqueue(poll(pq)[3]);
        }
        let chair = (poll(release))
        if (cur[2] == targetFriend) return chair;
        cur.push(chair)
        add(pq, cur);
    }
};

const main = () => {
    let times = [[1, 4], [2, 3], [4, 6]], targetFriend = 1;
    let times2 = [[3, 10], [1, 5], [2, 6]], targetFriend2 = 0;
    let time_debug1 = [[33889, 98676], [80071, 89737], [44118, 52565], [52992, 84310], [78492, 88209], [21695, 67063], [84622, 95452], [98048, 98856], [98411, 99433], [55333, 56548], [65375, 88566], [55011, 62821], [48548, 48656], [87396, 94825], [55273, 81868], [75629, 91467]],
        targetFriend_debug1 = 6
    pr(smallestChair(times, targetFriend))
    pr(smallestChair(times2, targetFriend2))
    pr(smallestChair(time_debug1, targetFriend_debug1)) // 2
};

main()