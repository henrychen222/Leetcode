/**
 * 06/16/22 morning
 * https://leetcode.com/problems/jump-game-iii/
 */

const pr = console.log;

// Accepted --- 146ms 11.93%
const canReach = (a, start) => {
    let n = a.length, q = [start], visit = Array(n).fill(false)
    while (q.length) {
        let cur = q.shift(), nexts = [];
        // pr(cur);
        if (a[cur] == 0) return true;
        if (cur + a[cur] < n) nexts.push(cur + a[cur]);
        if (cur - a[cur] >= 0) nexts.push(cur - a[cur]);
        for (const next of nexts) {
            if (!visit[next]) {
                visit[next] = true;
                q.push(next);
            }
        }
    }
    return false;
};

const main = () => {
    let a = [4, 2, 3, 0, 3, 1, 2], start = 5;
    let a2 = [4, 2, 3, 0, 3, 1, 2], start2 = 0;
    let a3 = [3, 0, 2, 1, 2], start3 = 2;
    pr(canReach(a, start))
    pr(canReach(a2, start2))
    pr(canReach(a3, start3))
};

main()