/**
 * 05/29/21 evening
 * https://leetcode.com/contest/weekly-contest-243/problems/process-tasks-using-servers/
 */

const pr = console.log;

const { MinPriorityQueue } = require('@datastructures-js/priority-queue')

// Accepted --- 1184ms
const mx = Math.max;
const priorAssign = 2 * 10 ** 5;
const assignTasks = (sv, tk) => {
    let n = sv.length;
    let m = tk.length;
    let spq = new MinPriorityQueue({ priority: x => x[1] * priorAssign + x[2] });
    for (let i = 0; i < n; i++) {
        spq.enqueue([0, sv[i], i]);
    }
    // pr(spq.toArray());
    let tpq = new MinPriorityQueue({ priority: x => x[0] * priorAssign * priorAssign + x[1] * priorAssign + x[2] });
    let t = 0;
    let res = Array(m).fill(0);
    for (let i = 0; i < m; i++) {
        t = mx(t, i);
        while (tpq.size()) {
            if (tpq.front().element[0] <= t) {
                spq.enqueue(tpq.dequeue().element)
            } else {
                break;
            }
        }
        // pr(tpq.front() ? tpq.front().element : [], spq.front() ? spq.front().element : []);
        if (spq.isEmpty()) {
            t = tpq.front().element[0];
            spq.enqueue(tpq.dequeue().element);
        }
        // pr("next", tpq.front() ? tpq.front().element: [], spq.front() ? spq.front().element: []);
        let cur = spq.dequeue().element;
        res[i] = cur[2];
        cur[0] = t + tk[i];
        tpq.enqueue(cur);
        // pr(tpq.toArray())
    }
    return res;
};

const main = () => {
    let servers = [3, 3, 2], tasks = [1, 2, 3, 2, 1, 2];
    let servers2 = [5, 1, 4, 3, 2], tasks2 = [2, 1, 2, 4, 5, 2, 1];
    pr(assignTasks(servers, tasks))
    // pr(assignTasks(servers2, tasks2))
};

main()
