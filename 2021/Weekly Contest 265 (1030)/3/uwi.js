/**
 * 10/30/21 evening
 * https://leetcode.com/contest/weekly-contest-265/problems/minimum-operations-to-convert-number/
 */

const pr = console.log;

// Accepted --- 192ms  204ms
const minimumOperations = (a, x, y) => {
    let dis = Array(1001).fill(Number.MAX_SAFE_INTEGER);
    let q = [];
    q.push(x);
    dis[x] = 0;
    while (q.length) {
        let cur = q.shift();
        // pr(cur);
        if (cur == y) return dis[cur];
        for (const e of a) {
            let t1 = cur + e, t2 = cur - e; t3 = cur ^ e;
            let next = [t1, t2, t3];
            for (const ne of next) {
                if (ne >= 0 && ne <= 1000) {
                    if (dis[ne] > dis[cur] + 1) {
                        dis[ne] = dis[cur] + 1;
                        q.push(ne);
                    }
                } else {
                    if (ne == y) return dis[cur] + 1;
                }
            }
        }
    }
    return -1;
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