/**
 * 08/06/22 night
 * https://leetcode.com/problems/task-scheduler/
 */

const pr = console.log;

// Accepted --- 157ms 54.29%
// reference: https://leetcode.com/problems/task-scheduler/discuss/104504/C%2B%2B-8lines-O(n)
const leastInterval = (a, space) => {
    let m = new Map(), cnt = 0;
    for (const x of a) {
        m.set(x, m.get(x) + 1 || 1);
        cnt = Math.max(cnt, m.get(x));
    }
    let res = (cnt - 1) * (space + 1);
    for (const [, occ] of m) {
        if (occ == cnt) res++;
    }
    return Math.max(res, a.length);
};

const main = () => {
    let a = ["A", "A", "A", "B", "B", "B"],
        space = 2;
    let a2 = ["A", "A", "A", "B", "B", "B"],
        space2 = 0;
    let a3 = ["A","A","A","A","A","A","B","C","D","E","F","G"],
        space3 = 2;
    pr(leastInterval(a, space))
    pr(leastInterval(a2, space2))
    pr(leastInterval(a3, space3))
};

main()