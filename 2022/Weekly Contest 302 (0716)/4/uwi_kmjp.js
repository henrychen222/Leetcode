// 07/16/22 night

const pr = console.log

const counter = (a_or_s) => { let m = new Map(); for (const x of a_or_s) m.set(x, m.get(x) + 1 || 1); return m; };
const gcd = (a, b) => b == 0 ? a : gcd(b, a % b);
const gcdArray = (a) => { let res = 0; for (const x of a) { res = gcd(res, x); if (res == 1) return 1; } return res };
const stmkey_in = (m) => new Map([...m].sort((x, y) => x[0] - y[0]));

/*
https://leetcode.cn/circle/discuss/BBxY1r/
只有 numsDivide 的最大公约数的因数才能整除 numsDivide 中的所有数。

设该最大公约数为g，问题变为
从 nums 中删除尽量少的元素，使得nums中的最小值可以整除g
*/
const minOperations = (a, b) => {
    let m = counter(a), g = gcdArray(b), res = 0, hasAnswer = false;
    // pr(m, g);
    m = stmkey_in(m);
    // pr(m);
    for (const [x, occ] of m) {
        if (g % x == 0) {
            // pr(x, g);
            hasAnswer = true;
            break;
        }
        res += occ;
    }
    return hasAnswer ? res : -1;
};

const main = () => {
    let a = [2, 3, 2, 4, 3], b = [9, 6, 9, 3, 15];
    let a2 = [4, 3, 6], b2 = [8, 2, 6, 10];
    let a_debug1 = [3, 2, 6, 2, 35, 5, 35, 2, 5, 8, 7, 3, 4], b_debug1 = [105, 70, 70, 175, 105, 105, 105]
    let a_debug2 = [40, 38, 18, 19, 18, 18, 16], b_debug2 = [430222122, 345833946, 609158196, 173124594, 25468560, 990277596, 295095510, 354571344, 931500936, 636837210]
    pr(minOperations(a, b))
    pr(minOperations(a2, b2))
    pr(minOperations(a_debug1, b_debug1)) // 6
    pr(minOperations(a_debug2, b_debug2)) // 1
};

main()