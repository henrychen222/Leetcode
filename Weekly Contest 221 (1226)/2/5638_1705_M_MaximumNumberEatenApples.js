/**
 * 12.26 evening
 * https://leetcode.com/contest/weekly-contest-221/problems/maximum-number-of-eaten-apples/
 */

const {
    MinPriorityQueue,
} = require('@datastructures-js/priority-queue');

// Accepted --- 312ms  uwi
const eatenApples = (apples, days) => {
    let pq = new MinPriorityQueue({
        priority: x => x.first // apples with less days left until rot eat first
    });
    let res = 0;
    for (let d = 0; d < 100000; d++) {
        if (d < apples.length) pq.enqueue({ first: d + days[d] - 1, second: apples[d] }); // first: days left until rot, second: apples
        while (!pq.isEmpty()) {
            let cur = pq.front().element;
            if (cur.first < d) {
                pq.dequeue();
            } else {
                break;
            }
        }
        if (!pq.isEmpty()) {
            res++;
            let cur = pq.dequeue().element;
            // if (cur.first - 1 > 0) pq.enqueue({ first: cur.first, second: cur.second - 1 }); // Also accepted --- 360ms
            if (cur.second - 1 > 0) pq.enqueue({ first: cur.first, second: cur.second - 1 });
        }
    }
    return res;
};

// wrong
const eatenApples1 = (apples, days) => {
    let n = apples.length;
    let eat = 0;
    for (let i = 0; ; i++) {
        if ([...new Set(apples)].length == 1) break;
        for (let d = 0; d <= i - 1; d++) {
            if (days[d] > 0) {
                days[d]--;
            }
        }
        for (let j = 0; j < n; j++) {
            if (apples[j] > 0) {
                if (days[i] > 0) {
                    eat++;
                    apples[j]--;
                    break;
                } else { // rot
                    apples[j] = 0;
                }
            }
        }
        console.log(apples, days);
    }
    return eat;
};

const main = () => {
    let apples = [1, 2, 3, 5, 2], days = [3, 2, 1, 4, 2];
    let apples2 = [3, 0, 0, 0, 0, 2], days2 = [3, 0, 0, 0, 0, 2];
    let apples_debug1 = [1], days_debug2 = [2];
    console.log(eatenApples(apples, days));
    console.log(eatenApples(apples2, days2));
    console.log(eatenApples(apples_debug1, days_debug2)); // 1

};

main()