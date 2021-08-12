/**
 * 07/13/20 night  07/14/20 morning  08/11/21 night fix
 * https://leetcode.com/problems/array-of-doubled-pairs/
 */

const counter = (a_or_s) => { let map = new Map(); for (const i of a_or_s) map.set(i, map.get(i) + 1 || 1); return map; };

// Accepted --- 172ms 58.82%
const canReorderDoubled = (a) => {
    a.sort((x, y) => x - y);
    let m = counter(a);
    // pr(m);
    for (const [x, occ] of m) {
        let need = x > 0 ? 2 * x : x / 2;
        if (!m.has(need)) return false;
        let need_occ = m.get(need);
        if (need_occ < occ) {
            return false;
        } else if (need_occ == occ) {
            m.delete(x);
            m.delete(need);
        } else {
            m.delete(x);
            m.set(need, need_occ - occ);
        }
        // pr(m)
    }
    return m.size == 0;
};

const pr = console.log;
const main = () => {
    let A = [3, 1, 3, 6];
    let A2 = [2, 1, 2, 6];
    let A3 = [4, -2, 2, -4];
    let A4 = [1, 2, 4, 16, 8, 4];
    let debug1 = [0, 0]
    let debug2 = [-5, -2];
    let debug3 = [2, 1, 1, 4, 8, 8]
    let debug4 = [2, 1, 2, 1, 1, 1, 2, 2];
    pr(canReorderDoubled(A));
    pr(canReorderDoubled(A2));
    pr(canReorderDoubled(A3));
    pr(canReorderDoubled(A4));
    pr(canReorderDoubled(debug1)); // true
    pr(canReorderDoubled(debug2)); // false
    pr(canReorderDoubled(debug3)); // false
    pr(canReorderDoubled(debug4)); // true
};

main()



// need to fix
// const canReorderDoubled = (A) => {
//     if (A.indexOf(0) != -1 && getFrequency(A, 0) % 2 != 0) return false;
//     let positive = [];
//     let negative = [];
//     for (const i of A) {
//         if (i > 0) {
//             positive.push(i);
//         } else if (i < 0) {
//             negative.push(i);
//         }
//     }
//     positive.sort((a, b) => a - b);
//     negative.sort((a, b) => b - a);
//     console.log(positive, negative);
//     for (let i = 0; i < positive.length; i++) {
//         console.log(positive)
//         console.log(positive[i], positive[0] * 2)
//         while (positive[i] == positive[0] * 2) {
//             positive = positive.slice(1, i).concat(positive.slice(i + 1, positive.length));
//         }
//     }
//     for (let i = 0; i < negative.length; i++) {
//         while (negative[i] == negative[0] * 2) {
//             negative = negative.slice(1, i).concat(negative.slice(i + 1, negative.length));
//         }
//     }
//     console.log(positive, negative);
//     if (positive.length != 0 || negative.length != 0) return false;
//     return true;
// };

// const getFrequency = (arr, item) => {
//     return arr.filter(x => x === item).length;
// };

// const canReorderDoubled2 = (A) => {
//     if (A.indexOf(0) != -1 && getFrequency(A, 0) % 2 != 0) return false;
//     let positive = [];
//     let negative = [];
//     for (const i of A) {
//         if (i > 0) {
//             positive.push(i);
//         } else if (i < 0) {
//             negative.push(i);
//         }
//     }
//     positive.sort((a, b) => a - b);
//     negative.sort((a, b) => b - a);

//     for (i = 0; i < positive.length; i++) {
//         for (let j = i + 1; j < positive.length; j++) {
//             console.log(positive[i], positive[j])
//             if (positive[i] * 2 == positive[j]) {
//                 positive = [...positive].slice(0, i).concat([...positive].slice(i + 1, j)).concat([...positive].slice(j + 1, positive.length));
//             }
//         }
//     }
//     console.log(positive)
// };