/**
 * 02/07/22 noon
 * https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/
 * 
 * same logic from 967
 * https://leetcode.com/problems/numbers-with-same-consecutive-differences/
 */

const pr = console.log;

// Accepted --- 1337ms 5.13%
let n, k, res;
const getHappyString = (N, K) => {
    n = N;
    k = K;
    res = new Set();
    dfs('');
    return [...res].sort((x, y) => x.localeCompare(y))[k - 1] || '';
};

const dfs = (cur) => {
    if (cur.length > n) return;
    // pr(cur);
    if (cur.length == n && isHappy(cur)) res.add(cur);
    for (let i = 97; i <= 99; i++) { // build 'a-c' string
        let c = String.fromCharCode(i);
        cur += c;
        if (isHappy(cur)) {
            dfs(cur);
            cur = cur.slice(0, -1);
        } else {
            cur = cur.slice(0, -1);
        }
    }
};

const isHappy = (s) => {
    let se = new Set('abc'), n = s.length;
    for (let i = 0; i < n; i++) {
        if (i + 1 < n && s[i] == s[i + 1]) {
            return false;
        }
        if (!se.has(s[i])) return false;
    }
    return true;
};

const main = () => {
    let n = 1,
        k = 3;
    let n2 = 1,
        k2 = 4;
    let n3 = 3;
        k3 = 9;
    pr(getHappyString(n, k))
    pr(getHappyString(n2, k2))
    pr(getHappyString(n3, k3))
};

main()