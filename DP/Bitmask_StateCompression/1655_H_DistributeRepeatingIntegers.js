/*
 * 05/18/23 evening
 * https://leetcode.com/problems/distribute-repeating-integers/
 * 
 * reference:
 * https://leetcode.com/contest/biweekly-contest-39/ranking djqq89djq + ykx_akks
 */

const pr = console.log;

// TLE
// let b, f;
// const canDistribute = (a, B) => {
//     B.sort((x, y) => y - x);
//     let max = Math.max(...a);
//     b = B, f = Array(max + 1).fill(0);
//     a.map(x => f[x]++);
//     return dfs(0);
// };

// Accepted (加上离散化缩小数据范围 https://blog.csdn.net/weixin_42977872/article/details/84592396)
let b, f;
const canDistribute = (a, B) => {
    B.sort((x, y) => y - x);
    let [d, ct] = discretize(a);
    b = B, f = Array(ct + 1).fill(0);
    // pr(d, f.length)
    d.map(x => f[x]++);
    f.sort((x, y) => x - y);
    // pr(f);
    f = f.filter((x, i) => i >= f.length - Math.min(f.length, b.length))
    // pr(f)
    return dfs(0);
};

const dfs = (idx) => {
    if (idx >= b.length) return true;
    // pr(idx, f)
    for (let i = 0; i < f.length; i++) {
        // pr(i)
        if (f[i] >= b[idx]) {
            f[i] -= b[idx];
            if (dfs(idx + 1)) return true;
            f[i] += b[idx];
        }
    }
    return false;
};

const discretize = (a) => {
    let n = a.length, d = a.map((x, i) => [i, x]).sort((x, y) => x[1] - y[1] || x[0] - y[0]), cur = 0, res = Array(n).fill(0);
    // pr(d)
    d.map((e, i) => {
        if (i - 1 >= 0 && e[1] != d[i - 1][1]) cur++;
        res[e[0]] = cur;
    })
    return [res, cur];
};

const main = () => {
    let a = [1, 2, 3, 4], b = [2];
    let a2 = [1, 2, 3, 3], b2 = [2];
    let a3 = [1, 1, 2, 2], b3 = [2, 2]
    let a_debug1 = [1, 1, 2, 3], b_debug1 = [2, 2]
    let a_debug2 = [1, 1, 2, 2, 1], b_debug2 = [2, 3];
    let a_debug3 = [420, 420, 420, 235, 687, 420, 420, 591, 759, 420, 420, 420, 326, 756, 420, 376, 420, 989, 387, 212, 420, 89, 420, 420, 326, 420, 420, 420, 387, 387],
        b_debug3 = [1, 3, 1, 4];
    pr(canDistribute(a, b))
    pr(canDistribute(a2, b2))
    pr(canDistribute(a3, b3))
    pr(canDistribute(a_debug1, b_debug1)) // false
    pr(canDistribute(a_debug2, b_debug2)) // true
    pr(canDistribute(a_debug3, b_debug3)) // true
};

main()


pr(discretize([535,535,547,413,547])) // [ 1, 1, 2, 0, 2 ]