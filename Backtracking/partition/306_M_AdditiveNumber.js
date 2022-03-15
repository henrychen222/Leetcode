/**
 * 03/10/22 night
 * https://leetcode.com/problems/additive-number/
 */

// Accepted --- 77ms 65.93%
let s, n, res, find;
const isAdditiveNumber = (S) => {
    s = S;
    n = s.length;
    res = [];
    find = false;
    dfs(0, []);
    // pr(res);
    return res.length != 0;
};

const dfs = (pos, cur) => {
    // pr("\npos", pos, cur, ok(cur))
    if (pos == n && ok(cur)) {
        // pr("ok", cur, cur.join("") == s)
        res = cur;
        find = true;
        return;
    }
    for (let i = pos; i < n; i++) {
        let third = s.slice(pos, i + 1);
        if (cur.length > 2 && !ok(cur)) break;
        cur.push(third);
        dfs(i + 1, cur);
        if (find) break;
        cur.pop();
    }
};

const ok = (a) => {
    if (a.length < 3) return false;
    for (const s of a) {
        if (s[0] == '0' && s.length > 1) return false; // number should not have leading zeros
    }
    a = a.map(Number);
    for (let i = 0; i + 2 < a.length; i++) {
        if (a[i] + a[i + 1] != a[i + 2]) return false;
    }
    return true;
};

const pr = console.log;
const main = () => {
    let num = "112358";
    let num2 = "199100199";
    pr(isAdditiveNumber(num))
    pr(isAdditiveNumber(num2))
};

main()