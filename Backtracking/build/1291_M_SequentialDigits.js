/**
 * 09/13/20 evening  05/27/22 afternoon completed
 * https://leetcode.com/problems/sequential-digits/
 */

const pr = console.log;

// Accepted --- 69ms 54.84%
const sequentialDigits = (low, high) => {
    let res = [];
    dfs("", res, low, high);
    return res.sort((x, y) => x - y);
};

const dfs = (cur, res, low, high) => {
    // pr("cur", cur, "res", res);
    let start = cur.length == 0 ? '1' : '0';
    for (let i = start; i <= '9'; i++) {
        cur += i;
        let x = cur - '0';
        // pr("x", x)
        if (isSequential(cur)) {
            if (x >= low && x <= high) res.push(cur);
            dfs(cur, res, low, high);
        }
        cur = cur.slice(0, -1);
    }
};


//////////////////////////////////////////////////////////
// Time limit
const sequentialDigits1 = (low, high) => {
    let res = [];
    for (let i = low; i <= high; i++) {
        if (isSequential(i)) {
            res.push(i);
        }
    }
    return res;
};

const isSequential = (n) => {
    let s = n + '';
    let len = s.length;
    for (let i = 0; i + 1 < len; i++) {
        if (Number(s[i + 1]) - Number(s[i]) != 1) {
            return false;
        }
    }
    return true;
};

const main = () => {
    let low = 100,
        high = 300;
    let low2 = 1000,
        high2 = 13000;
    let low_debug1 = 10,
        high_debug1 = 1000000000;
    pr(sequentialDigits(low, high));
    pr(sequentialDigits(low2, high2));
    pr(sequentialDigits(low_debug1, high_debug1));
};

main()