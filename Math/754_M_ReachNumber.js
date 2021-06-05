/**
 * 06/03/21 evening
 * https://leetcode.com/problems/reach-a-number/
 */

// Accepted --- 84ms 36.36%
// reference: https://leetcode.com/problems/reach-a-number/discuss/112968/Short-JAVA-Solution-with-Explanation
const reachNumber = (target) => {
    let t = Math.abs(target);
    let sum = step = 0;
    while (sum < t || (sum - t) & 1) {
        step++;
        sum += step;
    }
    return step;
};

// Wrong
const reachNumber2 = (target) => {
    let step = pos = 0;
    if (pos > target) {
        let step = 0;
        for (let r = 1; påos != target; r++) {
            let move = step + 1;
            r & 1 ? pos += move : pos -= move;
            // pr(pos, move, target)
            step++;
        }
    } else {
        let step = 0;
        for (let r = 1; pos != target; r++) {
            let move = step + 1;
            r & 1 ? pos -= move : pos += move;
            // pr(pos, move, target)
            step++;
        }
    }
    return step;
};

// RE
let res, t, memo;
const reachNumber1 = (target) => {
    [t, res, memo] = [target, Number.MAX_SAFE_INTEGER, new Map()];
    dfs(0, 0, 'l');
    dfs(0, 0, 'r');
    return res;
};

const dfs = (step, pos, d) => {
    let ke = step + " " + t;
    if (memo.has(ke)) {
        res = Math.min(res, memo.get(ke));
        return;
    }
    let move = step + 1;
    // pr(step, move, "pos", pos, "target", t);
    if (Math.abs(pos - t) > Math.abs(t) + 1) return;
    if (pos == t) {
        res = Math.min(res, step);
        memo.set(ke, res);
        return;
    }
    dfs(step + 1, pos - move, 'l');
    dfs(step + 1, pos + move, 'r');
};

const pr = console.log;
const main = () => {
    let target = -2;
    let target2 = 2;
    let target3 = 3;
    let target4 = 4;
    let target5 = 5;
    let target6 = 6;
    let target7 = 7;
    let target8 = 8;
    let target9 = 9;
    let target10 = 10;
    let target20 = 20;
    let target30 = 30;
    let target100 = 100;
    let target200 = 200;
    let final = 10 ** 9;
    pr(reachNumber(target)); // 3
    pr(reachNumber(target2)); // 3
    pr(reachNumber(target3)); // 2
    pr(reachNumber(target4)); // 3
    pr(reachNumber(target5)); // 5
    pr(reachNumber(target6)); // 3
    pr(reachNumber(target7)); // 5
    pr(reachNumber(target8)); // 4
    pr(reachNumber(target9)); // 5
    pr(reachNumber(target10)); // 4
    pr(reachNumber(target20)); // 7
    pr(reachNumber(target30)); // 8
    pr(reachNumber(target100)); // 15
    pr(reachNumber(target200));
    pr(reachNumber(final));
};

main()