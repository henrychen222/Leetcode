/**
 * 1.23 morning
 * https://leetcode.com/contest/biweekly-contest-44/problems/find-the-highest-altitude/
 */

// Accepted
const preSum = (a, n) => {
    let pre = [0];
    for (let i = 0; i < n; i++) {
        pre.push(pre[i] + a[i]);
    }
    return pre;
};

const largestAltitude = (gain) => {
    let n = gain.length;
    let pre = preSum(gain, n);
    return Math.max.apply(Math, pre);
};

const main = () => {
    let gain = [-5, 1, 5, 0, -7];
    let gain2 = [-4, -3, -2, -1, 4, 3, 2];
    console.log(largestAltitude(gain));
    console.log(largestAltitude(gain2));
};

main()