/**
 * 07/24/21 evening
 * https://leetcode.com/contest/weekly-contest-251/problems/maximum-compatibility-score-sum/
 */

const pr = console.log;

// don't know
const maxCompatibilitySum = (a, b) => {
    let n = a.length;
    let p = [];
    for (const x of a) {
        let tmp = [];
        for (const y of b) {
            tmp.push(cal(x, y));
        }
        p.push(tmp);
    }
    pr(p);
    let res = 0;
    let used = new Set();
    for (const e of p) {
        let max = Math.max.apply(Math, e);
        for (let i = 0; i < e.length; i++) {
            if (!used.has(i) && e[i] == max) {
                res += e[i];
                used.add(i);
                break;
            }
        }
    }
    return res;
};

const cal = (a, b) => {
    let n = a.length, cnt = 0;
    for (let i = 0; i < n; i++) {
        if (a[i] == b[i]) cnt++;
    }
    return cnt;
};

const main = () => {
    let students = [[1, 1, 0], [1, 0, 1], [0, 0, 1]], mentors = [[1, 0, 0], [0, 0, 1], [1, 1, 0]];
    let students2 = [[0, 0], [0, 0], [0, 0]], mentors2 = [[1, 1], [1, 1], [1, 1]];
    let student_debug1 = [[1, 1, 0, 1, 0], [1, 0, 1, 0, 0], [0, 1, 0, 0, 0], [1, 1, 0, 1, 0]], mentors_debug1 = [[0, 1, 1, 1, 0], [1, 0, 0, 0, 1], [0, 0, 1, 1, 0], [1, 1, 0, 0, 0]]
    pr(maxCompatibilitySum(students, mentors))
    pr(maxCompatibilitySum(students2, mentors2))
    pr(maxCompatibilitySum(student_debug1, mentors_debug1)) // 12
};

main()