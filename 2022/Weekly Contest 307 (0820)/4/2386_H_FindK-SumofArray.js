/**
 * 08/20/22 evening
 * https://leetcode.com/contest/weekly-contest-307/problems/find-the-k-sum-of-an-array/
 * 
 * https://leetcode.com/discuss/interview-question/1895396/amazon-sde-new-grad-oa-k-most-popular-combos
 */

const pr = console.log;

const { MaxPriorityQueue } = require('@datastructures-js/priority-queue')

// Accepted
// reference:arignote
const kSum = (a, k) => {
    let sum = 0, n = a.length, pq = new MaxPriorityQueue({ compare: (x, y) => y[0] - x[0] });
    for (let i = 0; i < n; i++) {
        if (a[i] < 0) {
            a[i] *= -1;
        } else {
            sum += a[i];
        }
    }
    if (k == 1) return sum;
    a.sort((x, y) => x - y);
    pq.enqueue([sum - a[0], 0]);
    for (let i = 2; i < k; i++) {
        let [x, idx] = pq.dequeue();
        // pr("cur", x, idx);
        if (idx + 1 < n) {
            // pr([x + a[idx] - a[idx + 1], idx + 1]);
            // pr([x - a[idx + 1], idx + 1]);
            pq.enqueue([x + a[idx] - a[idx + 1], idx + 1]); // 把 a_{i + 1}a 
            pq.enqueue([x - a[idx + 1], idx + 1]);
        }
    }
    return pq.front()[0];
};

const kSum1 = (a, k) => {
    let n = a.length, d = [];
    for (let i = 0; i < 1 << n; i++) {
        let sum = 0;
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) sum += a[j];
        }
        d.push(sum);
    }
    d.sort((x, y) => y - x);
    return d[k - 1];
};

const main = () => {
    let a = [2, 4, -2], k = 5;
    let a2 = [1, -2, 3, 4, -10, 12], k2 = 16;
    let a_debug1 = [-1,1], k_debug1 = 1;
    pr(kSum(a, k))
    pr(kSum(a2, k2))
    pr(kSum(a_debug1, k_debug1)) // 1
};

main()