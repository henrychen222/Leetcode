/**
 * 12.21 evening 12.22 evening
 * https://leetcode.com/problems/can-i-win/
 * 
 * read:
 * https://zxi.mytechroad.com/blog/searching/leetcode-464-can-i-win/
 */

// Accepted --- 124ms 98.21%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/6103525.html
 * https://leetcode.com/problems/can-i-win/discuss/95283/brute-force-and-memoization
 */
let memo;
const canIWin = (maxChoosableInteger, desiredTotal) => {
    memo = new Map();
    if (maxChoosableInteger >= desiredTotal) return true;
    if (maxChoosableInteger * (maxChoosableInteger + 1) / 2 < desiredTotal) return false;
    return dfs(maxChoosableInteger, desiredTotal, 0);
};

const dfs = (len, total, used) => {
    // console.log(memo, len, total, used);
    if (memo.has(used)) return memo.get(used);
    for (let i = 0; i < len; i++) { // 遍历所有数字
        let mask = 1 << i; // 数字对应的mask
        if ((mask & used) == 0) { // 相与为0, 说明该数字没有使用过
            // (condition 1): total <= i + 1: 目标值小于等于当前数字,win. (condition 2)调用递归函数, 如果返回false, win. reason: 因为当前已经选过数字了, 此时就该对第二个人调用递归函数，只有返回的结果是false, 我们才能赢
            if (total <= i + 1 || !dfs(len, total - i - 1, mask | used)) {
                memo.set(used, true);
                return true;
            }
        }
    }
    memo.set(used, false);
    return false;
};

const main = () => {
    let maxChoosableInteger = 10,
        desiredTotal = 11;
    let maxChoosableInteger2 = 10,
        desiredTotal2 = 0;
    let maxChoosableInteger3 = 10,
        desiredTotal3 = 1;
    console.log(canIWin(maxChoosableInteger, desiredTotal));
    console.log(canIWin(maxChoosableInteger2, desiredTotal2));
    console.log(canIWin(maxChoosableInteger3, desiredTotal3));
};

main()