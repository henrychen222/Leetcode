/**
 * 03/13/21 night
 */
const pr = console.log;
const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

// Accepted --- 1056ms
const maxAverageRatio = (c, ex) => {
    let n = c.length;
    let pq = new MaxPriorityQueue({
        priority: x => x[0]
    });
    for (const e of c) {
        pq.enqueue([(e[0] + 1) / (e[1] + 1) - e[0] / e[1], e[0], e[1]]);
    }
    while (ex--) {
        let cur = pq.dequeue().element;
        // pr(cur[0], cur[1], cur[2])
        cur[1]++;
        cur[2]++;
        cur[0] = (cur[1] + 1) / (cur[2] + 1) - cur[1] / cur[2];
        pq.enqueue(cur);
    }
    let res = 0;
    let a = pq.toArray();
    // pr(a);
    for (const o of a) {
        let e = o.element;
        // pr(e[1], e[2], res)
        res += e[1] / e[2];
    }
    // pr(res, n)
    return res / n;
};

// Accepted --- 1064ms
const maxAverageRatio2 = (c, ex) => {
    let n = c.length;
    let pq = new MaxPriorityQueue({
        priority: x => x.first
    });
    for (const e of c) {
        pq.enqueue({ first: (e[0] + 1) / (e[1] + 1) - e[0] / e[1], second: e[0], third: e[1] });
    }
    while (ex--) {
        let cur = pq.dequeue().element;
        // pr(cur.first, cur.second, cur.third)
        cur['second']++;
        cur['third']++;
        cur.first = (cur.second + 1) / (cur.third + 1) - (cur.second) / (cur.third);
        pq.enqueue(cur);
    }
    let res = 0;
    for (const o of pq.toArray()) {
        let e = o.element;
        res += e.second / e.third;
    }
    return res / n;
};

const main = () => {
    let classes = [[1, 2], [3, 5], [2, 2]], extraStudents = 2;
    let classes2 = [[2, 4], [3, 9], [4, 5], [2, 10]], extraStudents2 = 4;
    pr(maxAverageRatio(classes, extraStudents));
    pr(maxAverageRatio(classes2, extraStudents2)); // 0.53485
};

main()