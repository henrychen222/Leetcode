/**
 * 03/10/22 evening
 * https://leetcode.com/problems/split-array-into-fibonacci-sequence/
 */

// Accepted --- 756ms 5.88%
let s, n, res, find;
const splitIntoFibonacci = (S) => {
    s = S;
    n = s.length;
    res = [];
    find = false;
    dfs(0, []);
    return res;
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
        // pr("cur", cur, ok(cur));
        if (cur.length > 2 && !ok(cur)) break; // continue will TLE
        cur.push(third);
        dfs(i + 1, cur);
        if (find) break;
        cur.pop();
    }
};

const MAX = 2 ** 31;
const ok = (a) => {
    // pr("check array", a)
    if (a.length < 3) return false;
    for (const s of a) {
        if (s[0] == '0' && s.length > 1) return false; // number should not have leading zeros
        if (s.length > 10 || s - '0' > MAX) return false; // fit 31 bits
    }
    a = a.map(Number);
    for (let i = 0; i + 2 < a.length; i++) {
        if (a[i] + a[i + 1] != a[i + 2]) return false;
    }
    return true;
};

const pr = console.log;
const main = () => {
    let num = "1101111";
    let num2 = "112358130";
    let num3 = "0123";
    let debug1 = "214748364721474836422147483641";
    let debug2 = "11235813";
    let debug3 = "0000";
    let debug4 = "539834657215398346785398346991079669377161950407626991734534318677529701785098211336528511";
    let debug5 = "3611537383985343591834441270352104793375145479938855071433500231900737525076071514982402115895535257195564161509167334647108949738176284385285234123461518508746752631120827113919550237703163294909";
    pr(splitIntoFibonacci(num))
    pr(splitIntoFibonacci(num2))
    pr(splitIntoFibonacci(num3))
    pr(splitIntoFibonacci(debug1))
    pr(splitIntoFibonacci(debug2)) // [1,1,2,3,5,8,13]
    pr(splitIntoFibonacci(debug3)) // [0,0,0,0]
    pr(splitIntoFibonacci(debug4)) // []
    pr(splitIntoFibonacci(debug5))
};

main()

// pr(2 ** 31);