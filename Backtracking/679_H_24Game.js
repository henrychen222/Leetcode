/**
 * 10/01/21 evening
 * https://leetcode.com/problems/24-game/
 * 
 * reference:
 * https://www.cnblogs.com/grandyang/p/8395062.html
 * https://leetcode.com/problems/24-game/discuss/107673/java-easy-to-understand-backtracking
 */

// Accepted --- 76ms 92.98%
let eps, res;
const judgePoint24 = (nums) => {
    res = false, eps = 0.001;
    dfs(nums);
    return res;
};

const dfs = (a) => { // 每次dfs都是选取两张牌
    // pr(a);
    if (res) return;
    if (a.length == 1) {
        if (Math.abs(a[0] - 24) < eps) res = true; // 如果此时list只剩下了一张牌
        return;
    }
    for (let i = 0; i < a.length; i++) { // 选取两张牌
        for (let j = 0; j < i; j++) {
            let p = a[i], q = a[j]; // 对于每下一个可能的产生的组合
            let next = [p + q, p - q, q - p, p * q]; // 计算下一个可能产生的组合
            if (p > eps) next.push(q / p);
            if (q > eps) next.push(p / q);
            a.splice(i, 1);
            a.splice(j, 1);
            // pr('remove', a)
            for (const x of next) {
                a.push(x);
                dfs(a);
                a.pop();
            }
            // pr('add before', a)
            a.splice(j, 0, q);
            a.splice(i, 0, p);
            // pr('add after', a)
        }
    }
};

const pr = console.log;
const main = () => {
    let cards = [4, 1, 8, 7];
    let cards2 = [1, 2, 1, 2];
    pr(judgePoint24(cards))
    pr(judgePoint24(cards2))
};

main()