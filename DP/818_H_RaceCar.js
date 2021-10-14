/**
 * 10/11/21 evening
 * https://leetcode.com/problems/race-car/
 */

// Accepted --- 101ms 77.78%
const racecar = (target) => {
    let dp = Array(target + 1);
    for (let i = 1; i <= target; i++) {
        dp[i] = Number.MAX_SAFE_INTEGER;
        let j = 1, cnt1 = 1;
        for (; j < i; j = (1 << cnt1) - 1) {
            for (let k = 0, cnt2 = 0; k < j; k = (1 << cnt2) - 1) {
                dp[i] = Math.min(dp[i], cnt1 + 1 + cnt2 + 1 + dp[i - (j - k)]);
                cnt2++;
            }
            cnt1++;
        }
        dp[i] = Math.min(dp[i], cnt1 + (i == j ? 0 : 1 + dp[j - i]));
    }
    return dp[target];
};

/////////////////////////////////////// BFS /////////////////////////////////////////
// Accepted --- 4585ms 11.11%
// https://www.cnblogs.com/grandyang/p/10360655.html
const racecar2 = (target) => {
    let q = [[0, 1]];
    let visit = new Set(['0 1', '0 -1']);
    let res = 0;
    while (q.length) {
        let t = q.length;
        while (t--) {
            let cur = q.shift();
            let [pos, speed] = cur;
            if (pos == target) return res;
            let pos1 = pos + speed, speed1 = speed * 2;
            let key1 = pos1 + " " + speed1;
            if (!visit.has(key1) && pos1 > 0 && pos1 < 2 * target) {
                q.push([pos1, speed1]);
                visit.add(key1);
            }
            let speed2 = speed > 0 ? -1 : 1;
            let key2 = pos + " " + speed2;
            if (!visit.has(key2) && pos > 0 && pos < 2 * target) {
                q.push([pos, speed2]);
                visit.add(key2);
            }
        }
        res++;
    }
    return -1;
};

// Accepted --- 2529ms 11.11%
// reference: https://zxi.mytechroad.com/blog/searching/leetcode-818-race-car/
const racecar1 = (target) => {
    let q = [[0, 1]];
    let visit = new Set(['0 1', '0 -1']);
    let res = 0;
    while (q.length) {
        let t = q.length;
        while (t--) {
            let cur = q.shift();
            let [pos, speed] = cur;
            let pos1 = pos + speed, speed1 = speed * 2;
            if (pos1 == target) return res + 1;
            if (pos1 > 0 && pos1 < 2 * target) {
                q.push([pos1, speed1]);
                visit.add(pos1 + " " + speed1); // comment this Accepted --- 3012ms 11.11%
            }
            let speed2 = speed > 0 ? -1 : 1;
            let key2 = pos + " " + speed2;
            if (!visit.has(key2)) {
                q.push([pos, speed2]);
                visit.add(key2);
            }
        }
        res++;
    }
    return res;
};

const pr = console.log;
const main = () => {
    let target = 3;
    let target2 = 6;
    let debug1 = 330;
    pr(racecar(target))
    pr(racecar(target2))
    pr(racecar(debug1))
};

main()