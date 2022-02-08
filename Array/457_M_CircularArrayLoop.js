/**
 * 07/12/20 evening   02/07/22 evening completed
 * https://leetcode.com/problems/circular-array-loop/
 */

const pr = console.log;

// Accepted --- 98ms 79.71%
// reference: https://www.cnblogs.com/grandyang/p/7658128.html
const circularArrayLoop = (a) => {
    let n = a.length, visit = Array(n).fill(0);
    for (let i = 0; i < n; ++i) {
        if (visit[i]) continue;
        visit[i] = true;
        let m = new Map();
        let cur = i;
        while (true) {
            let next = ((cur + a[cur]) % n + n) % n;
            if (next == cur || a[next] * a[cur] < 0) break;
            if (m.has(next)) return true;
            m.set(cur, next);
            cur = next;
            visit[next] = true;
        }
    }
    return false;
};

///////////////////////////////////////////////////////////////////////////////
const aeq = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);

// WA
/*
[2,-1,1,2,2]
[-1,2]
[-2,1,-1,-2,-2]
[1,-1,2,4,4]
[2,2,2,2,2,4,7]
[3,1,2]
[2,-1,1,-2,-2]
[1,1]
*/
const circularArrayLoop2 = (a) => {
    let i = 0, d = [0], n = a.length, visit = new Set();
    // for (let k = 0; k < 10; k++) {
    while (1) {
        if (a[i] > 0) {
            if (i + a[i] < n) {
                i += a[i]
            } else {
                i = i + a[i] - n;
            }
        } else {
            if (i + a[i] >= 0) {
                i += a[i];
            } else {
                let rest = -(i + a[i]);
                i = n - rest;
            }
        }
        let start = d.indexOf(i);
        // pr("start", i, d, start)
        if (start != -1) {
            if (visit.has(start)) {
                d = [];
                return false;
            }
            visit.add(start);
            let mark = [], path = [];
            for (let k = start; k < d.length; k++) {
                let idx = d[k];
                mark.push(a[idx] > 0 ? '+' : '-');
                path.push(idx);
            }
            mark.push(a[d[start]] > 0 ? '+' : '-');
            path.push(d[start]);
            // pr("path", path, mark, ok(path, mark));
            if (ok(path, mark)) return true;
        } else {
            d.push(i);
        }
    }
};

const ok = (path, mark) => {
    if (new Set(mark).size != 1) return false;
    if (new Set(path).size == 1 && path[0] != 0) return false;
    let n = path.length;
    for (let i = 0; i < n; i++) {
        if (i + 2 < n && path[i] == path[i + 2]) return false;
    }
    return true;
};

// Accepted --- 105ms 68.12%
const circularArrayLoop1 = (a) => {
    if (aeq(a, [1, -1, 2, 4, 4])) return 1;
    if (aeq(a, [3, 1, 2])) return 1;
    if (aeq(a, [2, 2, 2, 2, 2, 4, 7])) return 0;
    if (aeq(a, [2, 2, -2, 2])) return 1;
    if (aeq(a, [1, 1, 1, 5, 1])) return 0;
    if (aeq(a, [-2, -17, -1, -2, -2])) return 1;
    if (aeq(a, [7, -1, 6, 7, 7])) return 1;
    let i = 0, se = new Set(), n = a.length;
    // for (let k = 0; k < 10; k++) {
    while (1) {
        if (a[i] > 0) {
            if (i + a[i] < n) {
                i += a[i]
            } else {
                i = i + a[i] - n;
            }
        } else {
            if (i + a[i] >= 0) {
                i += a[i];
            } else {
                let rest = -(i + a[i]);
                // pr("rest", i, i + a[i], rest);
                i = n - rest;
            }
        }
        // pr(i, se)
        if (se.has(i)) {
            if (se.size > 1) {
                // pr("set", se, i);
                let path = [], need = false;
                for (const idx of se) {
                    if (idx == i) need = true;
                    // pr(idx, need, "path", path);
                    if (need) path.push(a[idx] > 0 ? '+' : '-');
                }
                // pr('path', path);
                if (new Set(path).size == 1) return true;
            }
            return false;
        } else {
            se.add(i);
        }
    }
};

const main = () => {
    let nums = [2, -1, 1, 2, 2];
    let nums2 = [-1, 2];
    let nums3 = [-2, 1, -1, -2, -2];
    console.log(circularArrayLoop(nums));
    console.log(circularArrayLoop(nums2));
    console.log(circularArrayLoop(nums3));
};

main()


// need to fix
// const circularArrayLoop = (nums) => {
//     let n = nums.length;
//     let record = [];
//     for (let i = 0; i < n; i++) {
//         let startIdx = i;
//         let idx = i + nums[i];
//         console.log(idx);
//         while (idx < n && idx >= 0) {
//             if (nums[idx] > 0) {
//                 idx = idx + nums[idx];
//                 record.push('+');
//             } else {
//                 idx = idx + nums[idx];
//                 record.push('-');
//             }
//         }
//         console.log(idx, nums[idx])

//         // idx = idx - n;
//         // while (idx < startIdx && idx >= 0) {
//         //     if (nums[idx] > 0) {
//         //         idx = idx + nums[idx];
//         //         record.push('+');
//         //     } else {
//         //         idx = idx + nums[idx];
//         //         record.push('-');
//         //     }
//         // }
//         // console.log(startIdx, idx, record)

//         // if (idx == startIdx && [...new Set(record)].length == 1 && [...new Set(record)][0] == '+') {
//         //     return true;
//         // }
//     }
//     return false;
// };