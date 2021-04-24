/**
 * 04/22/21 evening
 * https://leetcode.com/problems/brick-wall/
 */

const mi = Math.min;
const mx = Math.max;

// Accepted --- 92ms 92.31%
// reference: https://leetcode.com/problems/brick-wall/discuss/137777/Java-Map-solution
const leastBricks = (wall) => {
    let n = wall.length;
    let m = new Map();
    let max = 0;
    for (const e of wall) {
        let sum = 0;
        for (let i = 0; i < e.length - 1; i++) {
            sum += e[i];
            m.set(sum, m.get(sum) + 1 || 1);
            max = mx(max, m.get(sum));
        }
    }
    return n - max;
};

// WA
const leastBricks1 = (wall) => {
    let minLen = Number.MAX_SAFE_INTEGER;
    let maxLen = 0;
    for (const e of wall) {
        minLen = mi(minLen, e.length);
        maxLen = mx(maxLen, e.length);
    }
    // pr(minLen);
    let shared = wall;
    // pr(wall);
    let pre = [];
    for (const e of shared) pre.push(cal(e));
    // pr(pre);
    let m = new Map();
    let n = pre.length;
    // pr(n, minLen);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < minLen; j++) {
            if (!m.has(j)) m.set(j, []);
            m.get(j).push(pre[i][j]);
        }
    }
    for (const [k, v] of m) m.set(k, counter(v));
    // pr(m);
    let max = 0;
    let d = [];
    for (const [k, v] of m) {
        let fsum = v.keys().next().value;
        let focc = v.get(fsum);
        max = mx(max, focc);
        d.push([k, fsum, focc]);
    }
    // pr("max", max, "d", d);
    let finalIdx, maxSum;
    // pr("wall", wall);
    for (const [idx, sum, occ] of d) {
        if (occ == max) {
            finalIdx = idx;
            maxSum = sum;
            break;
        }
    }
    let sumNeed = pre.map(x => x = x[finalIdx]);
    // pr("sumNeed", sumNeed, "finalIdx", finalIdx, "sum", maxSum);
    let res = sumNeed.filter(x => x != maxSum).length;
    return (res == 0 && finalIdx + 1 == maxLen) ? wall.length : res;
};

const counter = (a_or_s) => {
    let map = new Map();
    for (const i of a_or_s) map.set(i, map.get(i) + 1 || 1);
    map = sortMapByValue(map);
    return map;
};

const sortMapByValue = (map) => {
    return new Map([...map].sort((a, b) => b[1] - a[1]));
};

const cal = (a) => {
    let res = [];
    let sum = 0;
    for (const e of a) {
        sum += e;
        res.push(sum);
    }
    return res;
};

const pr = console.log;
const main = () => {
    let wall = [
        [1, 2, 2, 1],
        [3, 1, 2],
        [1, 3, 2],
        [2, 4],
        [3, 1, 2],
        [1, 3, 1, 1]
    ];
    let debug1 = [
        [1],
        [1],
        [1]
    ];
    let debug2 = [
        [1, 1],
        [2],
        [1, 1]
    ];
    let debug3 = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
    let debug4 = [
        [7, 1, 2],
        [3, 5, 1, 1],
        [10]
    ];
    pr(leastBricks(wall)); // 2
    pr(leastBricks(debug1)); // 3
    pr(leastBricks(debug2)); // 1
    pr(leastBricks(debug3)); // 0
    pr(leastBricks(debug4)); // 1
};

main()