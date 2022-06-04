/**
 * 05/30/22 evening
 * https://leetcode.com/problems/minimum-jumps-to-reach-home/
 */

const pr = console.log;

const initialize2DArray = (n, m) => { let d = []; for (let i = 0; i < n; i++) { let t = Array(m).fill(Number.MAX_SAFE_INTEGER); d.push(t); } return d; };

// Accepted --- 5736ms 5.77%
// Accepted --- 6720ms 5.77% modidy
// reference: https://leetcode.com/contest/biweekly-contest-39/ranking/1/
const minimumJumps = (forbidden, a, b, x) => {
    let dis = initialize2DArray(100005, 2), q = [[0, 's']], se = new Set(forbidden);
    dis[0][0] = 0;
    while (q.length) {
        // let [cur, mark] = q.shift(), ne = cur + a, ne2 = cur - b;
        // if (ne < dis.length && !se.has(ne)) {
        //     if (dis[ne][0] > dis[cur][mark == 'b' ? 1 : 0] + 1) {
        //         dis[ne][0] = dis[cur][mark == 'b' ? 1 : 0] + 1;
        //         q.push([ne, 'f']);
        //     }
        // }
        // if (mark != 'b' && ne2 >= 0 && !se.has(ne2)) {
        //     if (dis[ne2][1] > dis[cur][mark == 'b' ? 1 : 0] + 1) {
        //         dis[ne2][1] = dis[cur][mark == 'b' ? 1 : 0] + 1;
        //         q.push([ne2, 'b']);
        //     }
        // }
        let [cur, mark] = q.shift(), next = [cur + a, cur - b];
        let curPos = mark == 'b' ? 1 : 0;
        for (const ne of next) {
            if (se.has(ne)) continue;
            if (ne < 0 || ne >= dis.length) continue;
            if (ne < cur && mark == 'b') continue;
            let pos = ne < cur ? 1 : 0;
            if (dis[ne][pos] > dis[cur][curPos] + 1) {
                dis[ne][pos] = dis[cur][curPos] + 1;
                q.push([ne, ne < cur ? 'b' : 'f']);
            }
        }
    }
    let res = Math.min(dis[x][0], dis[x][1])
    return res == Number.MAX_SAFE_INTEGER ? -1 : res;
};

//////////////////////////////////////////////////////////////////////////////
// WA
let a, b, home, se;
const minimumJumps2 = (forbidden, A, B, x) => {
    a = A, b = B, home = x, se = new Set(forbidden);
    return minDisDigit(0);
};

const MAX = 2005;
const minDisDigit = (start) => {
    let q = [start], dis = Array(MAX).fill(Number.MAX_SAFE_INTEGER), pre = Array(MAX).fill(0), valid = Array(MAX).fill(true);
    dis[start] = 0;
    while (q.length) {
        let cur = q.shift(), next = [cur + a, cur - b];
        if (cur == home) break;
        for (const ne of next) { // cur -> ne
            if (ne < 0 || se.has(ne)) continue;
            if (ne < cur && pre[cur] == 1) {
                valid[ne] = false;
            }
            if (dis[ne] > dis[cur] + 1) {
                dis[ne] = dis[cur] + 1;
                q.push(ne);
                if (ne < cur) pre[ne] = 1;
            }
        }
    }
    return dis[home] == Number.MAX_SAFE_INTEGER || !valid[home] ? -1 : dis[home];
};

const main = () => {
    let forbidden = [14, 4, 18, 1, 15],
        a = 3,
        b = 15,
        x = 9;
    let forbidden2 = [8, 3, 16, 6, 12, 20],
        a2 = 15,
        b2 = 13,
        x2 = 11;
    let forbidden3 = [1, 6, 2, 14, 5, 17, 4],
        a3 = 16,
        b3 = 9,
        x3 = 7;
    let forbidden_debug1 = [162, 118, 178, 152, 167, 100, 40, 74, 199, 186, 26, 73, 200, 127, 30, 124, 193, 84, 184, 36, 103, 149, 153, 9, 54, 154, 133, 95, 45, 198, 79, 157, 64, 122, 59, 71, 48, 177, 82, 35, 14, 176, 16, 108, 111, 6, 168, 31, 134, 164, 136, 72, 98]
    a_debug1 = 29, b_debug1 = 98, x_debug1 = 80;
    let forbidden_debug2 = [1998],
        a_debug2 = 1999,
        b_debug2 = 2000,
        x_debug2 = 2000;
    pr(minimumJumps(forbidden, a, b, x))
    pr(minimumJumps(forbidden2, a2, b2, x2))
    pr(minimumJumps(forbidden3, a3, b3, x3))
    pr(minimumJumps(forbidden_debug1, a_debug1, b_debug1, x_debug1)) // 121
    pr(minimumJumps(forbidden_debug2, a_debug2, b_debug2, x_debug2)) // 3998
};

main()