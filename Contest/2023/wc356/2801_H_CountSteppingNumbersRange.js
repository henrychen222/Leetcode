/*
 * 07/29/23 night
 * https://leetcode.com/contest/weekly-contest-356/problems/count-stepping-numbers-in-range/
 */

const pr = console.log;

const minus_mod = (x, y, mod) => ((x - y) % mod + mod) % mod;
const mod = 1e9 + 7, ll = BigInt;

////////////////////////////////////////////////////////////////////////////////////////////
// Accepted
// https://leetcode.cn/circle/discuss/VZAN41/https://leetcode.cn/circle/discuss/VZAN41/ 
// 灵茶山艾府 数位DP板子
const countSteppingNumbers = (low, high) => {
    let x = go(high), y = go((ll(low) - 1n).toString());
    return minus_mod(x, y, mod);
};

let memo;
const go = (s) => {
    memo = new Map();
    return dfs(0, 0, true, false, s);
};

const dfs = (i, mask, isLimit, isNum, s) => {
    let ke = i + " " + mask + " " + isLimit + " " + isNum;
    if (memo.has(ke)) return memo.get(ke);
    if (i == s.length) return isNum - '0';
    let res = 0;
    if (!isNum) res = dfs(i + 1, mask, false, false, s);
    let leading = isNum ? 0 : 1;
    let up = isLimit ? s[i] - '0' : 9;
    // pr(leading, up)
    for (let digit = leading; digit <= up; digit++) {
        if (!isNum || Math.abs(digit - mask) == 1) {
            res += dfs(i + 1, digit, isLimit && digit == up, true, s);
        }
    }
    res %= mod;
    // pr(res)
    memo.set(ke, res);
    return res;
};

const main = () => {
    let low = "1", high = "11";
    let low2 = "90", high2 = "101"
    pr(countSteppingNumbers(low, high))
    pr(countSteppingNumbers(low2, high2))
};

main()
