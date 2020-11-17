/**
 * 11.15 night
 * https://leetcode.com/problems/ugly-number-ii/
 */

// Accepted --- 100ms 43.37%
// reference: https://leetcode.com/problems/ugly-number-ii/discuss/69364/My-16ms-C%2B%2B-DP-solution-with-short-explanation
const nthUglyNumber = (n) => {
    let dp = new Array(n).fill(0);
    let i2 = i3 = i5 = 0;
    dp[0] = 1;
    for (let i = 1; i < n; i++) {
        let next2 = dp[i2] * 2;
        let next3 = dp[i3] * 3;
        let next5 = dp[i5] * 5;
        let min = Math.min(next2, next3, next5);
        dp[i] = min;
        if (min == next2) i2++;
        if (min == next3) i3++;
        if (min == next5) i5++;
        // console.log(dp);
    }
    return dp[n - 1];
};

// Accepted --- 104ms 30.72%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/4743837.html
 * https://leetcode.com/problems/ugly-number-ii/discuss/69368/Elegant-C%2B%2B-Solution-O(N)-space-time-with-detailed-explanation.
 * https://zxi.mytechroad.com/blog/math/leetcode-264-ugly-number-ii/
 */
const nthUglyNumber1 = (n) => {
    let res = [1];
    let i2 = i3 = i5 = 0;
    while (res.length < n) {
        let next2 = res[i2] * 2;
        let next3 = res[i3] * 3;
        let next5 = res[i5] * 5;
        let min = Math.min(next2, next3, next5);
        if (min == next2) i2++;
        if (min == next3) i3++;
        if (min == next5) i5++;
        res.push(min);
    }
    return res[n - 1];
};

const {
    MinPriorityQueue
} = require('@datastructures-js/priority-queue');

// Accepted --- 272ms 7.23%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/4743837.html
 * https://leetcode.com/problems/ugly-number-ii/discuss/69372/Java-solution-using-PriorityQueue
 */
const nthUglyNumber_PQ = (n) => {
    let pq = new MinPriorityQueue({
        priority: (x) => x.first
    });
    pq.enqueue({
        first: 1,
    })
    for (let i = 1; i < n; i++) {
        let tmp = pq.front().element.first;
        pq.dequeue();
        while (!pq.isEmpty() && pq.front().element.first == tmp) {
            tmp = pq.front().element.first;
            pq.dequeue();
        }
        pq.enqueue({
            first: tmp * 2
        });
        pq.enqueue({
            first: tmp * 3
        });
        pq.enqueue({
            first: tmp * 5
        });
        // console.log(pq.toArray());
    }
    return pq.front().element.first;
};

const nthUglyNumber_PQ_improve = (n) => {
    let pq = new MinPriorityQueue({
        priority: (x) => x.first
    });
    pq.enqueue({
        first: 1,
    })
    for (let i = 1; i < n; i++) {
        let tmp = pq.dequeue().element.first; // difference  dequeue() works same as Poll() in java PQ
        while (!pq.isEmpty() && pq.front().element.first == tmp) {
            tmp = pq.dequeue().element.first;
        }
        pq.enqueue({
            first: tmp * 2
        });
        pq.enqueue({
            first: tmp * 3
        });
        pq.enqueue({
            first: tmp * 5
        });
    }
    return pq.front().element.first;
};

// TLE 504/596
// const nthUglyNumber = (n) => {
//     let cnt = 0;
//     for (let i = 1; cnt <= 1690; i++) {
//         if (isUgly(i)) cnt++;
//         if (cnt == n) return i;
//     }
// };

// // from 263
// const isUgly = (num) => {
//     if (num == 0) return false;
//     if (num == 1) return true;
//     while (num != 1) {
//         if (num % 2 == 0) {
//             num /= 2;
//         } else if (num % 3 == 0) {
//             num /= 3;
//         } else if (num % 5 == 0) {
//             num /= 5;
//         } else {
//             return false;
//         }
//     }
//     return true;
// };

const main = () => {
    let n = 10;
    let debug1 = 103;
    let debug2 = 1147;
    console.log(nthUglyNumber(n));
    console.log(nthUglyNumber(debug1)); // 1728
    console.log(nthUglyNumber(debug2));
};

main()