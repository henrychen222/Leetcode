/**
 * 10/30/21 evening
 * https://leetcode.com/contest/weekly-contest-265/problems/minimum-operations-to-convert-number/
 */

const pr = console.log;

// TLE
const minimumOperations = (a, x, y) => {
    let visit = Array(1001).fill(false);
    let q = [x];
    for (let i = 0; q.length; i++) {
        let len = q.length;
        while (len--) {
            let cur = q.shift();
            // pr(cur, i);
            if (cur == y) {
                return i;
            } else if (cur >= 0 && cur <= 1000) {
                if (!visit[cur]) {
                    visit[cur] = true;
                    for (const e of a) {
                        let t1 = cur + e, t2 = cur - e; t3 = cur ^ e;
                        q.push(t1);
                        q.push(t2);
                        q.push(t3);
                    }
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