/**
 * 03/19/22 evening
 * https://leetcode.com/contest/weekly-contest-285/problems/count-collisions-on-a-road/
 */

const pr = console.log;

const cutMaxConsecutive = (a_or_s) => { let d = [], start = 0, n = a_or_s.length; for (let i = 0; i + 1 < n; i++) { if (a_or_s[i + 1] != a_or_s[i]) { d.push(a_or_s.slice(start, i + 1)); start = i + 1; } } d.push(a_or_s.slice(start)); return d; };

// Accepted
const countCollisions = (s) => {
    let d = cutMaxConsecutive(s), n = d.length, stop = Array(n).fill(0), res = 0;
    // pr(d);
    for (let i = 0; i < n;) {
        let cur = d[i], right;
        if (i + 1 < n) right = d[i + 1];
        if (cur[0] == 'S') {
            stop[i] = 1;
            i++;
            continue;
        }
        if (cur[0] == 'R' && right && right[0] == 'L') {
            stop[i] = 1;
            stop[i + 1] = 1;
            let add = 2 + (cur.length - 1) + (right.length - 1);
            // pr("cur", d[i], "right", d[i + 1], "add", add)
            res += add;
            i += 2;
            continue;
        }
        i++;
    }
    // pr(stop, res);
    for (let i = 0; i < n; i++) { // all others hit stop
        let dir = d[i][0];
        if (stop[i] == 0) {
            if (i == 0) {
                if (stop[i + 1] == 1 && dir == 'R') res += d[i].length;
            } else if (i == n - 1) {
                if (stop[i - 1] == 1 && dir == 'L') res += d[i].length;
            } else {
                if ((dir == 'L' && stop[i - 1] == 1) || (dir == 'R' && stop[i + 1] == 1)) res += d[i].length;
            }
        }
    }
    return res;
};

const main = () => {
    let s = "RLRSLL";
    let s2 = "LLRR";
    let debug1 = "LLRLRLLSLRLLSLSSSS";
    pr(countCollisions(s))
    pr(countCollisions(s2))
    pr(countCollisions(debug1))
};

main()


// if (left && left != 'S') {
//     pr("left", d[i - 1], "cur", d[i], "add", left.length)
//     stop[i - 1] = 1;
//     res += left.length;
//     i++;
//     continue;
// }
// if (right && right != 'S') {
//     pr("cur", d[i], "right", d[i + 1], "add", right.length)
//     stop[i + 1] = 1;
//     res += right.length;
//     i += 2;
//     continue;
// }