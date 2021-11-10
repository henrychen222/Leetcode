/**
 * 09/09/20 morning 11/05/21 night complete
 * https://leetcode.com/problems/boats-to-save-people/
 */

const pr = console.log;

// Accepted --- 168ms 51.49%
// reference: https://leetcode.com/problems/boats-to-save-people/discuss/156740/C%2B%2BJavaPython-Two-Pointers
const numRescueBoats2 = (a, limit) => {
    a.sort((x, y) => y - x);
    let n = a.length, i = 0, j = n - 1;
    while (i <= j) {
        if (a[i] + a[j] <= limit) j--;
        i++;
    }
    return i;
};

const sm = (a) => a.reduce(((x, y) => x + y), 0);

// WA  don't know
const numRescueBoats1 = (a, limit) => {
    a.sort((x, y) => x - y);
    let acc = sm(a);
    if (acc % limit == 0) {
        if (a[0] + a[1] <= limit) return acc / limit;
    }
    let p = 0, n = a.length, res = 0, pre = p;
    while (p < n) {
        let sum = 0;
        for (let i = p; i < n; i++) {
            sum += a[i];
            if (sum == limit) {
                p = i + 1;
                res++;
                // pr("111", sum, res);
                break;
            } else if (sum > limit) {
                sum -= a[i];
                res++;
                p = i;
                // pr("222", sum, res);
                break;
            }
        }
        if (pre == p) {
            res++;
            break;
        } else {
            pre = p;
        }
    }
    // pr("p", p)
    return res;
};

const main = () => {
    let people = [1, 2],
        limit = 3;
    let people2 = [3, 2, 2, 1],
        limit2 = 3;
    let people3 = [3, 5, 3, 4],
        limit3 = 5;
    let people_debug1 = [2, 4],
        limit_debug1 = 5;
    let people_debug2 = [2, 2],
        limit_debug2 = 6;
    let people_debug3 = [5, 1, 4, 2],
        limit_debug3 = 6;
    let people_debug4 = [3, 2, 3, 2, 2],
        limit_debug4 = 6;
    let people_debug5 = [1, 5, 3, 5],
        limit_debug5 = 7
    pr(numRescueBoats(people, limit));
    pr(numRescueBoats(people2, limit2));
    pr(numRescueBoats(people3, limit3));
    pr(numRescueBoats(people_debug1, limit_debug1)); // 2
    pr(numRescueBoats(people_debug2, limit_debug2)); // 1
    pr(numRescueBoats(people_debug3, limit_debug3)); // 2
    pr(numRescueBoats(people_debug4, limit_debug4)); // 2 (now is 3)   at most two people
    pr(numRescueBoats(people_debug5, limit_debug5)); // 3
};

main()


// // wrong, have to select the equal to limit first (2 in boat, 3 in a boat....)
// const numRescueBoats = (people, limit) => {
//     let totalSum = people.reduce((acc, cur) => acc + cur);
//     if (totalSum < limit) {
//         return 1;
//     } else {
//         let n = people.length;
//         people.sort((a, b) => a - b);
//         let idx = 0;
//         let cnt = 0;
//         let totalLen = 0;
//         let idxUsed = [];
//         // for (let i = 0; i < n; i++) {
//         //     if (idxUsed.indexOf(i) == -1) {
//         //         for (let j = i + 1; j < n; j++) {
//         //             if (idxUsed.indexOf(j) == -1) {
//         //                 if (people[i] + people[j] == limit) {
//         //                     cnt++;
//         //                     idxUsed.push(i);
//         //                     idxUsed.push(j);
//         //                     break;
//         //                 }
//         //             }
//         //         }
//         //     }
//         // }
//         console.log(people, idxUsed, cnt);
//         if (idxUsed.length == n) return cnt;
//         while (idx < n - 1) {
//             let tmp = [];
//             let sum = 0;
//             for (let i = idx; i < n; i++) {
//                 // if (idxUsed.indexOf(i) == -1) {
//                     sum += people[i];
//                     tmp.push(people[i]);
//                     if (sum == limit) {
//                         idx = i + 1;
//                         break;
//                     } else if (sum > limit) {
//                         tmp.pop();
//                         idx = i;
//                         break;
//                     }
//                 // }
//             }
//             console.log(tmp, idx, n);
//             cnt++;
//             totalLen += tmp.length;
//         }
//         if (totalLen < n) return cnt + 1;
//         return cnt;
//     }
// };