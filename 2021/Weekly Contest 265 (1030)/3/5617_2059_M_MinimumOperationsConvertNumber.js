/**
 * 10/30/21 evening
 * https://leetcode.com/contest/weekly-contest-265/problems/minimum-operations-to-convert-number/
 */

const pr = console.log;

function Node(val, level) {
    this.val = val;
    this.level = level;
}

// WA, dead loop remove return -1;
const minimumOperations = (a, x, y) => {
    a.sort((x, y) => y - x);
    let visit = new Set();
    let q = [];
    q.push(new Node(x, 0));
    while (q.length) {
        let cur = q.shift();
        // pr(cur, q);
        // pr(visit)
        // pr(visit.size)
        if (cur.val == y) return cur.level;
        visit.add(cur.val);
        let cnt = 0;
        for (const e of a) {
            let t1 = cur.val + e, t2 = cur.val - e; t3 = cur.val ^ e;
            // pr("operation", t1, t2, t3, 'each', e);
            if (t1 == y || t2 == y || t3 == y) {
                // pr('111', t1, t2, t3, y)
                return cur.level + 1;
            }
            if (visit.has(t1) && visit.has(t2) && visit.has(t3)) return -1;
            if (!visit.has(t1) && t1 < y) {
                q.push(new Node(t1, cur.level + 1));
            }
            if (!visit.has(t2) && t2 > y) {
                q.push(new Node(t2, cur.level + 1));
            }
            if (!visit.has(t3)) {
                q.push(new Node(t3, cur.level + 1));
            }
        }
    }
};

const main = () => {
    let nums = [1, 3], start = 6, goal = 4;
    let nums2 = [2, 4, 12], start2 = 2, goal2 = 12;
    let nums3 = [3, 5, 7], start3 = 0, goal3 = -4;
    let nums4 = [2, 8, 16], start4 = 0, goal4 = 1;
    let nums5 = [1], start5 = 0, goal5 = 3;
    let nums_debug1 = [-21, 36, -12, 43, -4, -52, -93, 5, 12, 81, -90, 7, -31, -97, -49, 93, -65, 82, -37, 29, 87, -36, 70, 51, 60, -19, -73, -32, -13, -51, -23, 50],
        start_debug1 = 4,
        goal_debug1 = 789;
    pr(minimumOperations(nums, start, goal));
    pr(minimumOperations(nums2, start2, goal2));
    pr(minimumOperations(nums3, start3, goal3));
    pr(minimumOperations(nums4, start4, goal4));
    pr(minimumOperations(nums5, start5, goal5));
    pr(minimumOperations(nums_debug1, start_debug1, goal_debug1)); // 9
};

main()


// pr(0 ^ 1, 0 ^ 2, 0 ^ 3, 0 ^ 4, 0 ^ 5, 0 ^ 6, 0 ^ 7, 0 ^ 8, 0 ^ 9, 0 ^ 10)

// pr(6 ^ 1, 6 ^ 2, 6 ^ 3, 6 ^ 4, 6 ^ 5, 6 ^ 6, 6 ^ 7, 6 ^ 8, 6 ^ 9, 6 ^ 10)

// pr(5 ^ 1, 5 ^ 2, 5 ^ 3, 5 ^ 4, 5 ^ 5, 5 ^ 6, 5 ^ 7, 5 ^ 8, 5 ^ 9, 5 ^ 10, 5 ^ 11, 5 ^ 12, 5 ^ 99, 5 ^ 100)

// pr(7 ^ 1, 7 ^ 2, 7 ^ 3, 7 ^ 4, 7 ^ 5, 7 ^ 6, 7 ^ 7, 7 ^ 8, 7 ^ 9, 7 ^ 10, 7 ^ 11, 7 ^ 12, 7 ^ 99, 7 ^ 100)
// pr(4 ^ 3);