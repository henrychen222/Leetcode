/**
 * 08/28/21 evening
 * https://leetcode.com/contest/weekly-contest-256/problems/minimum-number-of-work-sessions-to-finish-the-tasks/
 */

const pr = console.log;

const { MaxPriorityQueue } = require('@datastructures-js/priority-queue')

// don't know
const peek = (pq) => pq.front().element;
const poll = (pq) => pq.dequeue().element;
const minSessions1 = (tasks, sessionTime) => {
    let pq = new MaxPriorityQueue({ priority: x => x });
    for (const task of tasks) pq.enqueue(task);
    pr(pq.toArray());
    let sess = 0, sum = 0;
    while (pq.size()) {
        while (sum < sessionTime) {
            sum += poll(pq);
        }
    }
};

///////////////////////////// After Contest ///////////////////////////
// reference: Heltion, uwi
// Accepted --- 140ms
const minSessions2 = (tasks, sessionTime) => {
    let n = tasks.length;
    let dp = Array(1 << n).fill(Number.MAX_SAFE_INTEGER);
    let sum = Array(1 << n).fill(0);
    for (let i = 0; i < 1 << n; i++) {
        for (let j = 0; j < n; j++) {
            if (1 & (i >> j)) sum[i] += tasks[j];
        }
    }
    // pr(sum);
    dp[0] = 0;
    for (let i = 0; i < 1 << n; i++) {
        for (let j = i; j > 0; j = (j - 1) & i) {
            let valid = sum[j] <= sessionTime;
            if (valid) {
                dp[i] = Math.min(dp[i], dp[i - j] + 1);
            }
        }
    }
    // pr(dp);
    return dp[(1 << n) - 1];
};

// Accepted --- 148ms
const minSessions = (tasks, sessionTime) => {
    let n = tasks.length;
    let dp = Array(1 << n).fill(Number.MAX_SAFE_INTEGER);
    let valid = Array(1 << n).fill(false);
    for (let i = 0; i < 1 << n; i++) {
        let sum = 0;
        for (let j = 0; j < n; j++) {
            if (1 & (i >> j)) sum += tasks[j];
            // if (i << ~j < 0) sum += tasks[j]; // Accepted --- 144ms
        }
        valid[i] = sum <= sessionTime;
    }
    // pr(valid);
    dp[0] = 0;
    for (let i = 0; i < 1 << n; i++) {
        for (let j = i; j > 0; j = (j - 1) & i) {
            if (valid[j]) {
                dp[i] = Math.min(dp[i], dp[i - j] + 1);
            }
        }
    }
    pr(dp);
    return dp[(1 << n) - 1];
};


const main = () => {
    let tasks = [1, 2, 3], sessionTime = 3;
    let tasks2 = [3, 1, 3, 1, 1], sessionTime2 = 8;
    let tasks3 = [1, 2, 3, 4, 5], sessionTime3 = 15;
    pr(minSessions(tasks, sessionTime))
    pr(minSessions(tasks2, sessionTime2))
    pr(minSessions(tasks3, sessionTime3))
};

main()


pr(1 & 2, 1 & 10, 1 & -3, 1 & -4, 1 & -2000)