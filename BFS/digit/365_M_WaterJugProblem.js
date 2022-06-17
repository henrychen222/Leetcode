/**
 * 06/16/22 morning
 * https://leetcode.com/problems/water-and-jug-problem/
 */

const pr = console.log;

// Accepted --- 263ms 35.53%
// reference: https://leetcode.com/problems/water-and-jug-problem/discuss/83716/Java-Programmatic-Solution-BFS-without-GCD
let max;
const canMeasureWater = (a, b, target) => {
    max = a + b;
    if (target > max) return false;
    let q = [0], visit = new Set();
    while(q.length) {
        let cur = q.shift(), nexts = [];
        // pr(cur);
        if (cur == target) return true;
        if (inRange(cur + a) && !visit.has(cur + a)) {
            nexts.push(cur + a);
            visit.add(cur + a);
        }
        if (inRange(cur - a) && !visit.has(cur - a)) {
            nexts.push(cur - a);
            visit.add(cur - a);
        }
        if (inRange(cur + b) && !visit.has(cur + b)) {
            nexts.push(cur + b);
            visit.add(cur + b);
        }
        if (inRange(cur - b) && !visit.has(cur - b)) {
            nexts.push(cur - b);
            visit.add(cur - b);
        }
        for (const next of nexts) q.push(next);
    }
    return false;
};

const inRange = (x) => x >= 0 && x <= max;

const main = () => {
    let cap1 = 3,
        cap2 = 5,
        target = 4;
    let cap1_2 = 2,
        cap2_2 = 6,
        target2 = 5;
    let cap1_3 = 1,
        cap2_3 = 2,
        target3 = 3;
    pr(canMeasureWater(cap1, cap2, target))
    pr(canMeasureWater(cap1_2, cap2_2, target2))
    pr(canMeasureWater(cap1_3, cap2_3, target3))
};

main()