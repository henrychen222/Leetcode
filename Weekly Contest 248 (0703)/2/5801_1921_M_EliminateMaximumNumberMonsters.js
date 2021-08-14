/**
 * 07/03/21 evening
 * https://leetcode.com/contest/weekly-contest-248/problems/eliminate-maximum-number-of-monsters/
 */

const pr = console.log;

// Accepted
const stin = (a) => a.sort((x, y) => x - y);
const eliminateMaximum = (dist, speed) => {
    let n = dist.length;
    let t = [];
    for (let i = 0; i < n; i++) t.push(dist[i] / speed[i]);
    // pr(t);
    stin(t);
    // pr(t);
    let pass = res = 0;
    for (const e of t) {
        if (e - pass <= 0) break;
        res++;
        pass++;
    }
    return res;
};

const main = () => {
    let dist = [1, 3, 4], speed = [1, 1, 1];
    let dist2 = [1, 1, 2, 3], speed2 = [1, 1, 1, 1];
    let dist3 = [3, 2, 4], speed3 = [5, 3, 2];
    pr(eliminateMaximum(dist, speed))
    pr(eliminateMaximum(dist2, speed2))
    pr(eliminateMaximum(dist3, speed3))
};

main()