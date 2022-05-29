/*
05/27/22 evening
*/

const ord = (c) => c.charCodeAt();
const counter = (a_or_s) => { let m = new Map(); for (const x of a_or_s) m.set(x, m.get(x) + 1 || 1); return m; };

// Accepted
const canConvertString = (s, t, k) => {
    if (s.length != t.length) return false;
    let n = s.length, step = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        if (s[i] <= t[i]) {
            step[i] = ord(t[i]) - ord(s[i]);
        } else {
            step[i] = 122 - ord(s[i]) + 1 + ord(t[i]) - 97;
        }
    }
    let m = counter(step);
    // pr(step, m, "k", k);
    for (const [x, occ] of m) {
        if (x == 0) continue;
        if (x > k) return false;
        let can = parseInt((k - x) / 26) + 1;
        // let can = (k - (k % x)) / x;
        // pr(x, "can", can)
        if (occ > can) return false;
    }
    return true;
};

// TLE 145/155
const canConvertString1 = (s, t, k) => {
    if (s.length != t.length) return false;
    let n = s.length, step = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        if (s[i] <= t[i]) {
            step[i] = ord(t[i]) - ord(s[i]);
        } else {
            step[i] = 122 - ord(s[i]) + 1 + ord(t[i]) - 97;
        }
    }
    // pr(step);
    let used = new Set();
    for (let i = 0; i < n; i++) {
        let move = step[i], ok = false;
        if (move == 0) continue;
        if (used.has(move)) {
            for (let j = 1; ; j++) {
                let roundMove = j * 26 + move;
                if (roundMove > k) break;
                if (!used.has(roundMove)) {
                    // pr(move, "roundMove", roundMove);
                    used.add(roundMove);
                    ok = true;
                    break;
                }
            }
        } else {
            if (move <= k) {
                used.add(move);
                ok = true;
            }
        }
        // pr(move, ok);
        if (!ok) return false;
    }
    return true;
};


const pr = console.log;
const main = () => {
    let s = "input", t = "ouput", k = 9;
    let s2 = "abc", t2 = "bcd", k2 = 10;
    let s3 = "aab", t3 = "bbb", k3 = 27;
    let s_debug1 = "abc", t_debug1 = "abcd", k_debug1 = 1000;
    let s_debug2 = "atmtxzjkz", t_debug2 = "tvbtjhvjd", k_debug2 = 35;
    let s_debug3 = "mpzzwh", t_debug3 = "kaeblv", k_debug3 = 24;
    let s_debug4 = "jicfxaa", t_debug4 = "ocxltbp", k_debug4 = 15;
    let s_debug5 = "bpmaaaljbfdp", t_debug5 = "djzbvyjrkkbs", k_debug5 = 115;
    pr(canConvertString(s, t, k)); // true
    pr(canConvertString(s2, t2, k2)); // false
    pr(canConvertString(s3, t3, k3)); // true
    pr(canConvertString(s_debug1, t_debug1, k_debug1)); // false
    pr(canConvertString(s_debug2, t_debug2, k_debug2)); // false
    pr(canConvertString(s_debug3, t_debug3, k_debug3)); // true
    pr(canConvertString(s_debug4, t_debug4, k_debug4)); // false
    pr(canConvertString(s_debug5, t_debug5, k_debug5)); // true
};

main()


// pr(122 - ord('y') + 1 + ord('b') - 97) // 3