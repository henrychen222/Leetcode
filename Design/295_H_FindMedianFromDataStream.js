/**
 * 03/18/21 afternoon
 * https://leetcode.com/problems/implement-trie-prefix-tree/
 */

const pr = console.log;

// Accepted --- 4392ms 23.74%
class MedianFinder {
    constructor() {
        this.a = [];
    }

    addNum(num) {
        this.a.push(num);
    }

    findMedian() {
        this.a.sort((x, y) => x - y);
        let n = this.a.length;
        let m = n >> 1;
        return n & 1 ? this.a[m] : (this.a[m - 1] + this.a[m]) / 2;
    }
}


const {
    MinPriorityQueue
} = require('@datastructures-js/priority-queue');

// TLE
class MedianFinder2 {
    constructor() {
        this.pq = new MinPriorityQueue({
            priority: x => x[0]
        });
    }

    addNum(num) {
        this.pq.enqueue([num]);
    }

    findMedian() {
        let a = this.pq.toArray();
        let n = a.length;
        let m = n >> 1;
        return n & 1 ? a[m].element[0] : (a[m - 1].element[0] + a[m].element[0]) / 2;
    }
}

const main = () => {
    let medianFinder = new MedianFinder();
    medianFinder.addNum(1);
    medianFinder.addNum(2);
    pr(medianFinder.findMedian()); // 1.5
    medianFinder.addNum(3);
    pr(medianFinder.findMedian()); // 2.0
};

main()