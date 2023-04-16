/*
 * 03/11/23 evening
 * https://leetcode.com/contest/weekly-contest-336/problems/rearrange-array-to-maximize-prefix-score/
 */

const pr = console.log;

const preSum = (a) => { let pre = [0]; for (let i = 0; i < a.length; i++) { pre.push(pre[i] + a[i]); } return pre; };

const maxScore = (a) => {
    let pos = [], neg = [], res = 0;
    for (const x of a) x > 0 ? pos.push(x) : neg.push(x);
    neg.sort((x, y) => y - x);
    for (const x of neg) pos.push(x);
    let pre = preSum(pos);
    for (let i = 1; i < pre.length; i++) {
        if (pre[i] > 0) res++;
    }
    return res;
};

const main = () => {
    let a = [2, -1, 0, 1, -3, 3, -3];
    let a2 = [-2, -3, 0];
    pr(maxScore(a))
    pr(maxScore(a2))
};

main()