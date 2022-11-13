/**
 * 09/12/20 evening  05/02/22 afternoon redo AC
 * https://leetcode.com/contest/weekly-contest-206/problems/count-unhappy-friends/
 */

const initializeGraphSet = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push(new Set()); } return g; };
const packUG_Set = (g, edges) => { for (const [u, v] of edges) { g[u].add(v); g[v].add(u); } };

const counter_ui = (a_or_s) => { let m = new Map(); for (let i = 0; i < a_or_s.length; i++) m.set(a_or_s[i], i); return m; }

// Accepted --- 211ms 23.53%
const unhappyFriends = (n, preferences, pairs) => {
    let happy = Array(n).fill(true), pairG = initializeGraphSet(n);
    packUG_Set(pairG, pairs);
    preferences = preferences.map(a => counter_ui(a))
    // console.log(preferences, pairG);
    for (const [x, y] of pairs) {
        checkUnhappy(happy, preferences, pairG, x, y);
        checkUnhappy(happy, preferences, pairG, y, x);
    }
    // console.log(happy);
    return happy.filter(h => !h).length;
};

const checkUnhappy = (happy, preferences, pairG, x, y) => {
    let mx = preferences[x];
    for (const [u, iu] of mx) {
        if (mx.has(y)) { // x has u and y
            if (iu < mx.get(y)) { // u over y
                let mu = preferences[u];
                if (mu.has(x)) {
                    for (const v of pairG[u]) { // u pair with v
                        if (mu.has(v) && mu.get(x) < mu.get(v)) { // u has x and v, x over v
                            // console.log("x", x, "y", y, "u", u)
                            happy[x] = false;
                            break;
                        }
                    }
                }
            }
        }
    }
};

////////////////////////////////////////////////////////////////////////////////////////////////
// issue  18/99
const unhappyFriends1 = (n, preferences, pairs) => {
    let cnt = 0;
    for (const pa of pairs) {
        let l = pa[0];
        let r = pa[1];
        if (isUnhappy(l, preferences, r, pairs)) cnt++;
        if (isUnhappy(r, preferences, l, pairs)) cnt++;
    }
    return cnt;
};

const isUnhappy = (f, preferences, over, pairs) => {
    // console.log(f, over);
    for (const p of preferences) {
        let idx = p.indexOf(over);
        if (idx != -1) {
            for (let i = idx; i >= 0; i--) {
                let tmp = preferences[p[i]]; // [1, 2, 0]
                let prefer = tmp.indexOf(f);
                for (const pa of pairs) {
                    if (pa[0] == p[i]) {
                        let pos = tmp.indexOf(pa[1]);
                        if (prefer > pos) {
                            console.log(tmp, prefer)
                            return true;
                        }
                    }
                    if (pa[1] == p[i]) {
                        let pos = tmp.indexOf(pa[0]);
                        if (prefer > pos) {
                            console.log(tmp, prefer)
                            return true;
                        }
                    }
                }
            }
        }
    }
    return false;
};

const main = () => {
    let n = 4, preferences = [[1, 2, 3], [3, 2, 0], [3, 1, 0], [1, 2, 0]], pairs = [[0, 1], [2, 3]];
    let n2 = 2, preferences2 = [[1], [0]], pairs2 = [[1, 0]];
    let n3 = 4, preferences3 = [[1, 3, 2], [2, 3, 0], [1, 3, 0], [0, 2, 1]], pairs3 = [[1, 3], [0, 2]];

    let debug1 = 4, preferences_debug1 = [[1, 3, 2], [2, 3, 0], [1, 0, 3], [1, 0, 2]], pair_debug1 = [[2, 1], [3, 0]];
    console.log(unhappyFriends(n, preferences, pairs));
    console.log(unhappyFriends(n2, preferences2, pairs2));
    console.log(unhappyFriends(n3, preferences3, pairs3));
    console.log(unhappyFriends(debug1, preferences_debug1, pair_debug1)); // 0
};

main()