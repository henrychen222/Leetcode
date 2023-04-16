/*
 * 01/22/23 night 02/10/23 night  02/11/23 night complete
 * https://leetcode.com/problems/number-of-squareful-arrays/
 */

const pr = console.log;

// Accepted --- 63ms 81.82%
// reference: https://zxi.mytechroad.com/blog/searching/leetcode-996-number-of-squareful-arrays/
let n, a, res;
const numSquarefulPerms = (A) => {
    a = A;
    n = a.length;
    a.sort((x, y) => x - y);
    res = 0;
    let cur = [], used = new Set();
    dfs(cur, used);
    return res;
};

const dfs = (cur, used) => {
    if (cur.length == n) {
        res++;
        return;
    }
    for (let i = 0; i < n; i++) {
        if (used.has(i)) continue;
        if (i > 0 && !used.has(i - 1) && a[i] == a[i - 1]) continue;
        if (cur.length && !isSqaure(cur[cur.length - 1] + a[i])) continue;
        cur.push(a[i]);
        used.add(i);
        dfs(cur, used);
        used.delete(i);
        cur.pop();
    }
};

const isSqaure = (x) => {
    let sq = Math.sqrt(x);
    return sq == sq >> 0;
};

// TLE
const numSquarefulPerms1 = (a) => {
    a.sort((x, y) => x - y);
    let res = 0;
    let cnt = 0;
    do {
        if (ok(a)) res++;
        cnt++;
    } while (next_permutation(a));
    pr("cnt", cnt)
    return res;
};

const ok = (a) => {
    let n = a.length;
    for (let i = 1; i < n; i++) {
        let sum = a[i] + a[i - 1], sq = Math.sqrt(sum);
        if (sq != sq >> 0) return false;
    }
    return true;
};

const next_permutation = (a) => {
    let n = a.length;
    let i, j;
    for (i = n - 2; i >= 0 && a[i] >= a[i + 1]; i--);
    if (i === -1) return false;
    for (j = i + 1; j < n && a[i] < a[j]; j++);
    [a[i], a[j - 1]] = [a[j - 1], a[i]];
    for (let p = i + 1, q = n - 1; p < q; p++, q--) [a[p], a[q]] = [a[q], a[p]];
    return true;
};

const main = () => {
    let a = [1, 17, 8]
    let a2 = [2, 2, 2]
    let debug1 = [848794614, 363066684, 644139345, 901228257, 920075576, 652971402, 185853092, 497420790, 144209880, 832005234, 162672565, 585586758];
    let debug2 = [1,1,8,1,8];
    pr(numSquarefulPerms(a))
    pr(numSquarefulPerms(a2))
    pr(numSquarefulPerms(debug1))
    pr(numSquarefulPerms(debug2)) // 1
};

main()