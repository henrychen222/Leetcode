/**
 * 05/09/21 night
 * https://leetcode.com/problems/construct-target-array-with-multiple-sums/
 */

const {
    MinPriorityQueue,
    MaxPriorityQueue
} = require('@datastructures-js/priority-queue');

// reference: https://leetcode.com/problems/construct-target-array-with-multiple-sums/discuss/510256/JavaC%2B%2BPython-Backtrack-OJ-is-wrong
// Accepted --- 120ms 92.86%
const isPossible = (target) => {
    let pq = new MaxPriorityQueue({priority: x => x});
    let sum = target.reduce((x, y) => {
        pq.enqueue(y);
        return x + y;
    }, 0);
    // pr(pq.toArray(), sum);
    while (1) {
        let cur = pq.dequeue().element; // each round get current maximum value 
        sum -= cur;
        if (cur == 1 || sum == 1) return 1;
        if (cur < sum || sum == 0 || cur % sum == 0) return 0;
        cur %= sum;
        sum += cur;
        pq.enqueue(cur);
        // pr(pq.toArray(), cur, sum);
    }
};


// https://leetcode.com/contest/weekly-contest-176/ranking/1/  uwi TLE
const isPossible2 = (target) => {
    let pq = new MinPriorityQueue({priority: x => x});
    let sum = target.reduce((x, y) => {
        pq.enqueue(-y);
        return x + y;
    }, 0);
    while (1) {
        let cur = -pq.dequeue().element;
        if (cur == 1) break;
        let tmp = cur - (sum - cur);
        if (tmp > 0 && tmp < cur) {
            sum -= cur - tmp;
            cur = tmp;
            pq.enqueue(-cur);
        } else {
            return 0;
        }
        pr(pq.toArray(), sum);
    }
    return 1;
};

const pr = console.log;

const main = () => {
    let target = [9, 3, 5];
    let target2 = [1, 1, 1, 2];
    let target3 = [8, 5];
    let debug1 = [1,1000000000];
    pr(isPossible(target));
    pr(isPossible(target2));
    pr(isPossible(target3));
    pr(isPossible(debug1));
};
main()