/*
 * 10/29/22 evening
 * https://leetcode.com/contest/weekly-contest-317/problems/minimum-addition-to-make-integer-beautiful/
 */

const pr = console.log;

const sumOfDigit = (x) => { let s = x + '', res = 0; for (const c of s) res += c - '0'; return res; };

// Accepted  12:23 AM AC  23 min late
const makeIntegerBeautiful = (N, target) => {
    if (sumOfDigit(N) <= target) return 0;
    let s = N + '', len = s.length, res = Number('1' + '0'.repeat(len));
    for (let i = len - 1; ~i; i--) {
        let rest;
        if (i == len - 1) {
            rest = 10 - (s[i] - '0');
        } else {
            let f = ((s[i] - '0') + 1);
            let fullR = f + '0'.repeat(len - i - 1);
            let l = s.slice(0, i), r = s.slice(i);
            rest = Number(fullR) - Number(r);
            // pr('r', r)
        }
        let v = N + rest, sum = sumOfDigit(v);
        // pr('v', v, sum)
        if (sum <= target) {
            res = v - '0';
            break;
        }
    }
    return res - N;
};


const main = () => {
    let n = 16, target = 6;
    let n2 = 467, target2 = 6;
    let n3 = 1, target3 = 1
    let n_debug1 = 8, target_debug1 = 2;
    let n_debug2 = 19, target_debug2 = 1;
    let n_debug3 = 165, target_debug3 = 10;
    let n_debug4 = 575, target_debug4 = 8;
    let n_debug5 = 80546, target_debug5 = 16;
    let n_debug6 = 30978, target_debug6 = 6;
    pr(makeIntegerBeautiful(n, target))
    pr(makeIntegerBeautiful(n2, target2))
    pr(makeIntegerBeautiful(n3, target3))
    pr(makeIntegerBeautiful(n_debug1, target_debug1)) // 2
    pr(makeIntegerBeautiful(n_debug2, target_debug2)) // 81
    pr(makeIntegerBeautiful(n_debug3, target_debug3)) // 5
    pr(makeIntegerBeautiful(n_debug4, target_debug4)) // 25
    pr(makeIntegerBeautiful(n_debug5, target_debug5)) // 54
    pr(makeIntegerBeautiful(n_debug6, target_debug6)) // 22
};

main()

// let n, t;
// const makeIntegerBeautiful = (N, target) => {
//     t = target, n =N;
//     return BinarySearch(0, 1e13);
// };

// const BinarySearch = (low, high) => {
//     while (low <= high) {
//         let mid = low + parseInt((high - low) / 2);
//         pr("v", mid)
//         if (possible(mid)) {
//             low = mid + 1;
//         } else {
//             high = mid - 1;
//         }
//     }
//     pr(low, high)
//     return low;
// };

// const sumOfDigit = (x) => { let s = x + '', res = 0; for (const c of s) res += c - '0'; return res; };

// const possible = (v) => {
//     let sum = sumOfDigit(v);
//     return sum <= v && v >= n;
// };