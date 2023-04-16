/**
 * 05/29/21 evening
 * https://leetcode.com/contest/weekly-contest-243/problems/process-tasks-using-servers/
 */

const pr = console.log;

const { MinPriorityQueue } = require('@datastructures-js/priority-queue')

// fuck, debugged two hours from 12:00-1:55, don't know
const priorAssign = 2 * 10 ** 5;
const assignTasks = (sv, tk) => {
    tk = tk.map((x, i) => [x, i]);
    // pr(tk);
    let n = sv.length;
    let m = tk.length;
    let spq = new MinPriorityQueue({ priority: x => x[0] * priorAssign + x[1] });
    for (let i = 0; i < n; i++) {
        spq.enqueue([sv[i], i]);
    }
    // pr(spq.toArray());
    let res = [];
    let tpq = new MinPriorityQueue({ priority: x => x[0] });
    let t = 0;
    let wait = [tk.shift()];
    while (wait.length || tpq.size()) {
        // pr(t, tk, tpq.size(), spq.size())
        // pr(wait.length)
        if (wait.length == 0) break;
        let [pt, ti] = wait.shift();
        let et = pt + t;
        if (spq.size()) {
            // pr(spq.toArray())
            let [, si] = spq.dequeue().element;
            // pr(t, "task", [pt, ti], "rest task", tk, "server", si, "end time", et, res)
            tpq.enqueue([et, si]);
            res.push(si);
            t++;
            if (wait.length == 0 && tk.length) {
                wait.push(tk.shift());
            }
        } else {
            t++;
            ("not find server")
        }
        // t++;
        // pr(tpq.front().element[0], t)
        if (tpq.size() && tpq.front().element[0] == t) { // issue
            // pr("11111")
            let [, si] = tpq.dequeue().element;
            spq.enqueue([sv[si], si]);
        }
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
