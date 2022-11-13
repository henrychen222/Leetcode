/**
 * 07/31/21 evening
 * https://leetcode.com/contest/weekly-contest-252/problems/maximum-number-of-weeks-for-which-you-can-work/
 */

const pr = console.log;

const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

// TLE
const stde = (a) => a.sort((x, y) => y - x);
const numberOfWeeks1 = (a) => {
    stde(a);
    let res = 0;
    while (1) {
        if (a.length == 0) {
            return res;
        } else if (a.length == 1) {
            return res + 1;
        }
        a[0]--;
        a[a.length - 1]--;
        if (a[0] == 0) a.shift();
        if (a[a.length - 1] == 0) a.pop();
        res += 2;
        // pr(a, res);
        stde(a);
    }
};

// WA
const numberOfWeeks2 = (a) => {
    stde(a);
    let res = 0;
    while (1) {
        if (a.length == 0) {
            return res;
        } else if (a.length == 1) {
            return res + 1;
        }
        let min = a[a.length - 1];
        a[0] -= min;
        a.pop();
        if (a[0] == 0) a.shift();
        res += 2 * min;
        pr(a, res);
        if (a[0] < a[a.length - 1]) stde(a);
    }
};

// WA
const numberOfWeeks3 = (a) => {
    let pq = new MaxPriorityQueue({ priority: x => x });
    a.map((x, i) => {
        pq.enqueue(x);
    });
    let res = 0;
    while (1) {
        pr(pq.toArray())
        if (pq.size() == 0) {
            return res;
        } else if (pq.size() == 1) {
            return res + 1;
        }
        let max = pq.dequeue().element;
        let smax = pq.dequeue().element;
        let rest = max - smax;
        if (rest > 0) pq.enqueue(rest);
        res += 2 * smax;
    }
};

// TLE
const numberOfWeeks4 = (a) => {
    let pq = new MaxPriorityQueue({ priority: x => x });
    a.map((x, i) => {
        pq.enqueue(x);
    });
    let res = 0;
    while (1) {
        pr(pq.toArray())
        if (pq.size() == 0) {
            return res;
        } else if (pq.size() == 1) {
            return res + 1;
        }
        let max = pq.dequeue().element;
        let smax = pq.dequeue().element;
        max--;
        smax--;
        if (max > 0) pq.enqueue(max);
        if (smax > 0) pq.enqueue(smax);
        res += 2;
    }
};

////////////////////////// After Contest ///////////////////////////
// WA 72/73
const numberOfWeeks = (a) => {
    let pq = new MaxPriorityQueue({ priority: x => x });
    a.map((x, i) => {
        pq.enqueue(x);
    });
    let res = 0;
    while (1) {
        pr(pq.toArray())
        if (pq.size() == 0) {
            return res;
        } else if (pq.size() == 1) {
            return res + 1;
        } else if (pq.size() == 2) {
            let max = pq.dequeue().element;
            let smax = pq.dequeue().element;
            max -= smax;
            if (max > 0) pq.enqueue(max);
            res += 2 * smax;
        } else {
            let max = pq.dequeue().element;
            let smax = pq.dequeue().element;
            let tmax = pq.front().element;
            if (tmax == smax) {
                max--;
                smax--;
                res += 2;
            } else {
                max -= tmax;
                smax -= tmax;
                res += 2 * tmax;
            }
            if (max > 0) pq.enqueue(max);
            if (smax > 0) pq.enqueue(smax);
        }
    }
};

const main = () => {
    let milestones = [1, 2, 3];
    let milestones2 = [5, 2, 1];
    let debug1 = [9, 3, 6, 8, 2, 1];
    let debug2 = [5, 9, 4, 4, 8, 9, 9, 8, 7, 3];
    let debug3 = [5, 7, 5, 7, 9, 7];
    let debug4 = [1000000000,1000000000,1000000000];
    // pr(numberOfWeeks(milestones))
    // pr(numberOfWeeks(milestones2))
    // pr(numberOfWeeks(debug1)) // 29
    // pr(numberOfWeeks(debug2)) // 66
    // pr(numberOfWeeks(debug3)) // 40
    pr(numberOfWeeks(debug4)) // 3000000000
};

main()



// const numberOfWeeks = (a) => {
//     let pq = new MaxPriorityQueue({ priority: x => x[0] });
//     a.map((x, i) => {
//         pq.enqueue([x, i]);
//     });
//     pr(pq.toArray())
//     let res = 0;
//     let lastIdx;
//     while (!pq.isEmpty()) {
//         if (pq.size == 1) {

//         } else {
//             let max = pq.dequeue().element;
//             let smax = pq.dequeue().element;
//             max[0]--;
//             smax[0]--;
//             lastIdx == smax[1];
//             if (max[0] > 0) pq.enqueue(max);
//             if (smax[0] > 0) pq.enqueue(smax);
//             res += 2;
//         }
//     }
// };

