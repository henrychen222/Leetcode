/**
 * 08/13/22 evening
 * https://leetcode.com/contest/weekly-contest-306/problems/construct-smallest-number-from-di-string/
 */

const pr = console.log;

// Accepted
let p, res, n;
const smallestNumber = (pattern) => {
    p = pattern;
    n = p.length;
    res = '';
    dfs([]);
    return res;
};

const dfs = (cur) => {
    if (cur.length > n + 1) return;
    if (cur.length == n + 1) {
        // pr("cur", cur)
        let t = cur.join("")
        if (res.length == 0) {
            res = t;
        } else {
            if (t < res) res = t;
        }
    }
    for (let i = '1'; i <= '9'; i++) {
        cur.push(i);
        if (ok(cur)) dfs(cur);
        cur.pop();
    }
};

const ok = (a) => {
    let u = new Set(a);
    if (u.size != a.length) return false;
    for (let i = 1; i < a.length; i++) {
        let mark = a[i] > a[i - 1] ? 'I' : 'D';
        if (mark != p[i - 1]) return false;
    }
    return true;
};

const main = () => {
    let p = "IIIDIDDD";
    let p2 = "DDD";
    pr(smallestNumber(p))
    pr(smallestNumber(p2))
};

main()