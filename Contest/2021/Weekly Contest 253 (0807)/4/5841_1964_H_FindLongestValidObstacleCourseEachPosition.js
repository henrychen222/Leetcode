/**
 * 08/07/21 evening
 * https://leetcode.com/contest/weekly-contest-253/problems/find-the-longest-valid-obstacle-course-at-each-position/
 */

const pr = console.log;

// WA, Correct thinking of LIS
const longestObstacleCourseAtEachPosition = (obstacles) => {
    let n = obstacles.length;
    let res = Array(n).fill(0);
    let a = [];
    for (let i = 0; i < n; i++) {
        a.push(obstacles[i]);
        let len = LIS(a, obstacles[i]);
        pr(len, a)
        res[i] = len;
    }
    return res;
};

const LIS = (nums, cover) => {
    let n = nums.length;
    let dp = Array(n).fill(1);
    let res = 1;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] <= nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        res = Math.max(res, dp[i]);
    }
    return res;
};

const main = () => {
    let obstacles = [1, 2, 3, 2];
    let obstacles2 = [2, 2, 1];
    let obstacles3 = [3, 1, 5, 6, 4, 2];
    // pr(longestObstacleCourseAtEachPosition(obstacles))
    // pr(longestObstacleCourseAtEachPosition(obstacles2))
    pr(longestObstacleCourseAtEachPosition(obstacles3))
};

main()