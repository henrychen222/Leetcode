/**
 * 06/04/21 night
 * https://leetcode.com/problems/open-the-lock/
 * 
 * reference:
 * https://zxi.mytechroad.com/blog/searching/leetcode-752-open-the-lock/
 * https://www.cnblogs.com/grandyang/p/8449211.html
 */

// Accepted --- 312ms
const ups = (s, i, c) => s.slice(0, i) + c + s.slice(i + 1);
const openLock = (deadends, target) => {
    let start = '0000';
    let dead = new Set(deadends);
    if (dead.has(start)) return -1;
    if (start == target) return 0;
    let q = [];
    visit = new Set([start]);
    let step = 0;
    q.push(start);
    while (q.length) {
        step++;
        let t = q.length;
        while (t--) {
            let cur = q.shift();
            for (let i = 0; i < 4; i++) {
                for (let j = -1; j <= 1; j += 2) {
                    let next = cur;
                    let update = (next[i] - '0' + j + 10) % 10 + '';
                    next = ups(next, i, update);
                    if (next == target) return step;
                    if (dead.has(next) || visit.has(next)) continue;
                    q.push(next);
                    visit.add(next);
                }
            }
        }
    }
    return -1;
};

// Accepted --- 672ms 13.26%
const openLock2 = (deadends, target) => {
    let start = '0000';
    let dead = new Set(deadends);
    if (dead.has(start)) return -1;
    if (start == target) return 0;
    let q = [];
    visit = new Set([start]);
    let step = 0;
    q.push(start);
    while (q.length) {
        step++;
        let t = q.length;
        while (t--) {
            let cur = q.shift();
            // pr(cur, q.length);
            for (let i = 0; i < 4; i++) {
                for (let j = -1; j <= 1; j += 2) {
                    let next = cur.split("");
                    // pr("f", next[i], j);
                    next[i] = (next[i] - '0' + j + 10) % 10 + '';
                    // pr("s", next[i]);
                    let ss = next.join("");
                    if (ss == target) return step;
                    if (dead.has(ss) || visit.has(ss)) continue;
                    q.push(ss);
                    visit.add(ss);
                }
            }
        }
    }
    return -1;
};

////////////////////////////////////////////////////////////////////////
let dead, a, res, t, memo, diff;
const MAX = Number.MAX_SAFE_INTEGER;
const openLock1 = (deadends, target) => {
    dead = new Set(deadends);
    a = ['0', '0', '0', '0'];
    res = MAX;
    t = target;
    memo = new Set();
    diff = [];
    for (let i = 0; i < 4; i++) {
        if (target[i] != a[i]) diff.push(i);
    }
    // pr(diff)
    for (const i of diff) {
        dfs(i, a, 0);
    }
    return res;
};

const dfs = (idx, cur, step) => {
    if (idx >= 4) return;
    let s = cur.join("");
    // pr(idx, step, s);
    if (dead.has(s)) return;
    if (memo.has(s)) return;
    if (s == t) {
        // pr("reach", step, s)
        res = Math.min(res, step);
        return;
    }
    memo.add(s);
    for (const i of diff) {
        let next = rotate(cur[i]);
        for (const e of next) {
            cur[i] = e;
            dfs(i, cur, step + 1);
        }
    }
};

const rotate = (wheel) => {
    if (wheel == '0') return ['1', '9'];
    if (wheel == '9') return ['0', '8'];
    return [wheel - 1 + '', Number(wheel) + 1 + ''];
};

const pr = console.log;
const main = () => {
    let deadends = ["0201", "0101", "0102", "1212", "2002"],
        target = "0202";
    let deadends2 = ["8888"],
        target2 = "0009";
    let deadends3 = ["8887", "8889", "8878", "8898", "8788", "8988", "7888", "9888"],
        target3 = "8888";
    let deadends_debug1 = ["0201", "0101", "0102", "1212", "2002"];
    target_debug1 = "0000";
    pr(openLock(deadends, target));
    pr(openLock(deadends2, target2));
    pr(openLock(deadends3, target3));
    pr(openLock(deadends_debug1, target_debug1)); // 0
};

main()

// pr(rotate('7'), rotate('8'));