/**
 * 06/05/21 night submit Java to get daily points
 * 06/06/21 night
 * https://leetcode.com/problems/maximum-performance-of-a-team/
 */

const {
    MinPriorityQueue
} = require('@datastructures-js/priority-queue');

// Accepted --- 352ms 50.00%
// reference: https://leetcode.com/problems/maximum-performance-of-a-team/discuss/539687/JavaC%2B%2BPython-Priority-Queue
const ll = BigInt;
const BMOD = ll(1e9 + 7);
const maxPerformance = (n, speed, efficiency, k) => {
    let d = [];
    for (let i = 0; i < n; i++) d.push([efficiency[i], speed[i]]);
    d.sort((x, y) => y[0] - x[0]);
    let pq = new MinPriorityQueue({ priority: x => x });
    let sum = res = 0n;
    for (const [eff, sp] of d) {
        pq.enqueue(sp);
        sum += ll(sp);
        if (pq.size() > k) sum -= ll(pq.dequeue().element);
        let tmp = sum * ll(eff);
        if (tmp > res) res = tmp;
    }
    return Number(res % BMOD);
};

const pr = console.log;
const main = () => {
    let n = 6,
        speed = [2, 10, 3, 1, 5, 8],
        efficiency = [5, 4, 3, 9, 7, 2],
        k = 2;
    let n2 = 6,
        speed2 = [2, 10, 3, 1, 5, 8],
        efficiency2 = [5, 4, 3, 9, 7, 2],
        k2 = 3;
    let n3 = 6,
        speed3 = [2, 10, 3, 1, 5, 8],
        efficiency3 = [5, 4, 3, 9, 7, 2],
        k3 = 4;
    pr(maxPerformance(n, speed, efficiency, k))
    pr(maxPerformance(n2, speed2, efficiency2, k2))
    pr(maxPerformance(n3, speed3, efficiency3, k3))
};

main()