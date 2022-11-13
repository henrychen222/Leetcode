/**
 * 04/17/21 night
 * https://leetcode.com/contest/weekly-contest-237/ranking/75/
 * https://leetcode.com/problems/single-threaded-cpu/discuss/1164169/javascript-sort-to-mock-the-priorityqueue-in-javascript
 */
const pr = console.log;

// Accepted --- 6272ms
const getOrder = (tasks) => {
    let n = tasks.length;
    tasks = tasks.map((t, i) => [...t, i]);
    // pr(tasks);
    tasks.sort((x, y) => x[0] - y[0]);
    let q = [];
    let curT = tasks[0][0];
    let res = [];
    let idx = 0; // enqueue idx;
    while (res.length < n) {
        let top = tasks[idx];
        if (q.length == 0 && curT < top[0]) {
            curT = top[0];
        }
        let curL = q.length;
        while (idx < n && tasks[idx][0] <= curT) {
            q.push(tasks[idx]);
            idx++;
        }
        if (curL < q.length && q.length > 0) {
            q.sort((x, y) => {
                if (x[1] == y[1]) {
                    return x[2] - y[2]; // same process time, smaller index
                }
                return x[1] - y[1];
            })
        }
        // pr(q);
        let pick = q.shift();
        res.push(pick[2]);
        curT += pick[1];
    }
    return res;
};

const main = () => {
    let tasks = [[1, 2], [2, 4], [3, 2], [4, 1]];
    let tasks2 = [[7, 10], [7, 12], [7, 5], [7, 4], [7, 2]];
    let debug1 = [[19, 13], [16, 9], [21, 10], [32, 25], [37, 4], [49, 24], [2, 15], [38, 41], [37, 34], [33, 6], [45, 4], [18, 18], [46, 39], [12, 24]];
    pr(getOrder(tasks));
    pr(getOrder(tasks2));
    pr(getOrder(debug1)); // [6,1,2,9,4,10,0,11,5,13,3,8,12,7]
};

main()