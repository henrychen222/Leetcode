/*
 * 05/20/23 evening
 * https://leetcode.com/contest/weekly-contest-346/problems/find-the-punishment-number-of-an-integer/
 */

const pr = console.log;

const sumOfDigit = (x) => { let s = x + '', res = 0; for (const c of s) res += c - '0'; return res; };

// Accepted
// reference problem: https://leetcode.com/problems/additive-number/
const punishmentNumber = (n) => {
    let res = 0;
    for (let i = 1; i <= n; i++) {
        let check = go(i, (i * i) + "");
        if (check) {
            res += i * i;
        }
    }
    return res;
};

let s, n, work, x;
const go = (X, S) => {
    s = S;
    x = X;
    n = s.length;
    work = false;
    dfs(0, []);
    // pr(x, s, work)
    return work;
};

const dfs = (pos, cur) => {
    // pr("\npos", pos, cur, n)
    if (pos == n && ok(cur)) {
        // pr("ok", cur)
        work = true;
        return;
    }
    for (let i = pos; i < n; i++) {
        if (work) break;
        let next = s.slice(pos, i + 1);
        // pr("next", next)
        cur.push(next);
        dfs(i + 1, cur);
        cur.pop();
    }
};

const ok = (a) => {
    let sum = 0;
    for (const s of a) sum += Number(s);
    // pr("sum", a, sum)
    return sum == x;
};

const main = () => {
    let n = 10;
    let n2 = 37;
    pr(punishmentNumber(n))
    pr(punishmentNumber(n2))
};

main()