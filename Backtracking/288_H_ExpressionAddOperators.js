/**
 * 09/18/21 night  09/22/21 afternoon complete
 * https://leetcode.com/problems/expression-add-operators/
 */

// Accepted --- 116ms 89.74%
// reference: https://zxi.mytechroad.com/blog/searching/leetcode-282-expression-add-operators/
let s, n, t;
const addOperators = (num, target) => {
    s = num, n = s.length, t = target;
    let res = [];
    dfs(0, '', 0, 0, res);
    return res;
};

const dfs = (pos, exp, pre, cur, res) => {
    // pr(pos, exp, pre, cur, res)
    if (pos == n) {
        if (cur == t) return res.push(exp);
    }
    for (let i = 1; i <= n - pos; i++) {
        let tmp = s.substr(pos, i);
        if (tmp[0] == '0' && tmp.length > 1) break;
        let x = tmp - '0';
        // if (x > Number.MAX_SAFE_INTEGER) break;
        if (pos == 0) {
            dfs(i, tmp, x, x, res);
            continue;
        }
        dfs(pos + i, exp + '+' + tmp, x, cur + x, res);
        dfs(pos + i, exp + '-' + tmp, -x, cur - x, res);
        dfs(pos + i, exp + '*' + tmp, pre * x, cur - pre + pre * x, res);
    }
};

const pr = console.log;
const main = () => {
    let num = "123",
        target = 6;
    let num2 = "232",
        target2 = 8;
    let num3 = "105",
        target3 = 5;
    let num4 = "00",
        target4 = 0;
    let num5 = "3456237490",
        target5 = 9191;
    pr(addOperators(num, target))
    pr(addOperators(num2, target2))
    pr(addOperators(num3, target3))
    pr(addOperators(num4, target4))
    pr(addOperators(num5, target5))
};

main()