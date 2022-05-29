/**
 * 02/07/22 noon
 * https://leetcode.com/problems/beautiful-arrangement/
 * 
 * read:
 * https://leetcode.com/problems/beautiful-arrangement/discuss/99707/Java-Solution-Backtracking
 * 
 * same idea from 1415 967
 */

const pr = console.log;

// Accepted --- 9328ms 5.08%
let n;
const countArrangement = (N) => {
    n = N;
    res = new Set();
    dfs([]);
    return res.size;
};

const dfs = (cur) => {
    if (cur.length > n) return;
    // pr(cur);
    if (cur.length == n && ok(cur)) res.add(JSON.stringify(cur));
    for (let i = 1; i <= n; i++) { // build 1 - n array
        cur.push(i);
        if (ok(cur)) dfs(cur);
        cur.pop();
    }
};

const ok = (a) => {
    let n = a.length, se = new Set();
    for (let i = 0; i < n; i++) {
        let x = a[i], y = i + 1;
        if (se.has(x)) return false;
        se.add(x);
        if (x % y != 0 && y % x != 0) return false;
    }
    return true;
};

const main = () => {
    let n = 1;
    let n2 = 2;
    let debug1 = 12;
    pr(countArrangement(n))
    pr(countArrangement(n2))
    pr(countArrangement(debug1)) // 4010
};

main()