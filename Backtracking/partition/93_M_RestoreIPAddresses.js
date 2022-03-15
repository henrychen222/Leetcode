/**
 * 03/10/22 evening
 * https://leetcode.com/problems/restore-ip-addresses/
 */

// Accepted --- 348ms 5.01%
let s, n, res;
const restoreIpAddresses = (S) => {
    s = S;
    n = s.length;
    res = [];
    dfs(0, "");
    return res;
};

const dfs = (pos, cur) => {
    // pr("pos", pos, cur)
    if (ok(cur)) {
        // pr("ok", cur)
        if (cur[cur.length - 1] == '.') cur = cur.slice(0, -1);
        res.push(cur);
    }
    for (let i = pos; i < n; i++) {
        // if (cur.length == 0 && s[i] == '0') continue;
        cur += s[i];
        cur += '.';
        dfs(i + 1, cur);
        cur = cur.slice(0, -1);
    }
};

const ok = (t) => {
    let a = t.split(".").filter(e => e.length != 0).map(Number);
    if (a.length != 4) return false;
    for (let i = 0; i < 4; i++) {
        if (i == 0) {
            if (a[i] > 255) return false;
        } else {
            if (a[i] > 255) return false;
        }
    }
    // pr("a", a, a.join(""), s)
    return a.join("") == s;
};

const pr = console.log;
const main = () => {
    let s = "25525511135";
    let s2 = "0000";
    let s3 = "101023";
    pr(restoreIpAddresses(s))
    pr(restoreIpAddresses(s2))
    pr(restoreIpAddresses(s3))
};

main()