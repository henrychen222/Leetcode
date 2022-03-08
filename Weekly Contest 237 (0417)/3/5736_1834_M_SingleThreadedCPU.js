/**
 * 04/17/21 evening
 * https://leetcode.com/contest/weekly-contest-237/problems/single-threaded-cpu/
 */

const pr = console.log;

const {
    MinPriorityQueue,
    MaxPriorityQueue
} = require('@datastructures-js/priority-queue');

// don't know
const getOrder = (tasks) => {
    // tasks.sort((x, y) => x[0] - y[0]);
    let n = tasks.length;
    let m = new Map();
    for (let i = 0; i < n; i++) {
        let e = tasks[i];
        if (!m.has(e[0])) m.set(e[0], []);
        m.get(e[0]).push([e[1], i]);
    }
    pr(m);
    // let pq = new MinPriorityQueue({
    //     priority: x => x[1]
    // });
    // let cur = 0;
    // let t = tasks[0][0];
    // let res = [];
    // let curEt = tasks[cur] + pt;
    for (const [k, v] of m) {
        let curt = k;
        let a = v;
        a.sort((x, y) => {
            if (x[0] == y[0]) return x[1] - y[1];
            return x[0] - y[0];
        });
        let process = a[0];
        let pt = process[0];
        let et = curt + pt;
    }
};

const getOrder1 = (tasks) => {
    let m = new Map();
    let n = tasks.length;
    for (let i = 0; i < n; i++) {
        let e = tasks[i];
        let tmp = e[0] + ' ' + e[1];
        m.set(tmp, i);
    }
    tasks.sort((x, y) => {
        let sx = x[0] + ' ' + x[1];
        let sy = y[0] + ' ' + y[1];
        if (x[1] == y[1]) {
            return m.get(sx) - m.get(sy);
        }
        return x[1] - y[1];
    });
    pr(tasks);
};

const main = () => {
    let tasks = [[1, 2], [2, 4], [3, 2], [4, 1]];
    let tasks2 = [[7, 10], [7, 12], [7, 5], [7, 4], [7, 2]];
    pr(getOrder(tasks));
    // pr(getOrder(tasks2));
};

main()