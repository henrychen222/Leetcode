/*
 * 01/07/22 evening
 * https://leetcode.com/contest/weekly-contest-327/problems/time-to-cross-a-bridge/
 */

const pr = console.log;

/*
  k works
  new      -------------  old
*/

const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

// Accepted
// reference: uwi Tlatoani
const findCrossingTime = (n, k, time) => {
    let collect = new MinPriorityQueue({ compare: (x, y) => x.startTime - y.startTime });
    let waiting = new MinPriorityQueue({
        compare: (x, y) => {
            if (x.endTime != y.endTime) return y.endTime - x.endTime;
            if (x.LR + x.RL != y.LR + y.RL) return (y.LR + y.RL) - (x.LR + x.RL);
            if (x.idx != y.idx) return y.idx - x.idx;
        }
    });
    for (let i = 0; i < time.length; i++) {
        let item = { startTime: 0, endTime: 0, idx: i, LR: time[i][0], pickOld: time[i][1], RL: time[i][2], putNew: time[i][3] };
        collect.enqueue(item)
    }
    // pr(collect.toArray())
    let clock = 0, np = n;
    while (1) {
        if (waiting.size() == 0 && collect.front().startTime > clock) clock = collect.front().startTime;
        while (collect.size() && collect.front().startTime <= clock) waiting.enqueue(collect.dequeue());
        let cur = waiting.dequeue();
        // pr(cur.endTime, clock)
        if (cur.endTime != 0 || np != 0) {
            let nextClock = 0;
            if (cur.endTime == 0) {
                np--;
                cur.endTime = 1;
                nextClock = clock + cur.LR;
                cur.startTime = clock + cur.LR + cur.pickOld;
            } else {
                if (--n == 0) return clock + cur.RL;
                cur.endTime = 0;
                nextClock = clock + cur.RL;
                cur.startTime = clock + cur.RL + cur.putNew;
            }
            clock = nextClock;
            collect.enqueue(cur);
        }
    }
    return res;
};

// WA chatGPT
// const findCrossingTime1 = (n, k, time) => {
//     time.sort((a, b) => {
//         if (a[0] + a[2] > b[0] + b[2]) return 1;
//         if (a[0] + a[2] < b[0] + b[2]) return -1;
//         if (a[0] + a[2] === b[0] + b[2]) return a[3] - b[3];
//         return 0;
//     });
//     let boxes = n, res = 0, workersOnRight = [], workersOnLeft = [];
//     while (boxes > 0) {
//         let worker;
//         if (workersOnRight.length) {
//             worker = workersOnRight.shift();
//             res += worker[2];
//             workersOnLeft.push(worker);
//         } else if (workersOnLeft.length) {
//             worker = workersOnLeft.shift();
//             res += worker[0];
//             workersOnRight.push(worker);
//         } else {
//             worker = time.shift();
//             res += worker[0];
//             workersOnRight.push(worker);
//         }
//         pr(worker)
//         res += worker[1] + worker[3];
//         boxes--;
//     }
//     return res;
// }

const main = () => {
    let n = 1, k = 3, time = [[1, 1, 2, 1], [1, 1, 3, 1], [1, 1, 4, 1]];
    let n2 = 3, k2 = 2, time2 = [[1, 9, 1, 8], [10, 10, 10, 10]];
    pr(findCrossingTime(n, k, time))
    pr(findCrossingTime(n2, k2, time2))
};

main()