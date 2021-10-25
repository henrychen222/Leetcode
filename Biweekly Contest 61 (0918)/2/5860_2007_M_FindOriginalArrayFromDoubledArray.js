/**
 * 09/18/21 morning
 */

const pr = console.log;

const counter = (a_or_s) => { let map = new Map(); for (const i of a_or_s) map.set(i, map.get(i) + 1 || 1); return map; };

const findOriginalArray = (a) => {
    a.sort((x, y) => y - x);
    // pr(a);
    let res = [];
    let m = counter(a);
    // pr(m);
    for (const [x, occ] of m) {
        if (x & 1) {
            let t = x * 2;
            if (m.has(t)) {
                let tocc = m.get(t);
                if (tocc < occ) {
                    return [];
                } else if (tocc == occ) {
                    m.delete(x)
                    m.delete(t)
                    let repeat = occ;
                    while (repeat--) res.push(x);
                } else {
                    m.delete(x)
                    m.set(t, tocc - occ);
                    let repeat = occ;
                    while (repeat--) res.push(x);
                }
            } else {
                return [];
            }
        }
    }
    // pr(m);
    for (const [x, occ] of m) {
        if (x == 0) {
            if (occ & 1) return [];
            let repeat = occ / 2;
            while (repeat--) res.push(x);
            m.delete(x);
            continue;
        }
        let t = x / 2;
        if (m.has(t)) {
            let tocc = m.get(t);
            if (tocc < occ) {
                return [];
            } else if (tocc == occ) {
                m.delete(x)
                m.delete(t)
                let repeat = occ;
                while (repeat--) res.push(t);
            } else {
                m.delete(x)
                m.set(t, tocc - occ);
                let repeat = occ;
                while (repeat--) res.push(t);
            }
        } else {
            return [];
        }
    }
    // pr(m);
    return m.size > 0 ? [] : res;
};

// const findOriginalArray1 = (a) => {
//     a.sort((x, y) => x - y);
//     let n = a.length, res = [];
//     pr(a);
//     for (let i = 0; i < n / 2; i++) {
//         let t = 2 * i + 1;
//         pr(a[i], a[t]);
//         if (a[i] * 2 != a[t]) return [];
//         res.push(a[i]);
//     }
//     return res;
// };

const main = () => {
    let changed = [1, 3, 4, 2, 6, 8];
    let changed2 = [6, 3, 0, 1];
    let changed3 = [1];
    let debug1 = [0];
    let debug2 = [0, 0, 0, 0];
    let debug3 = [2, 1, 2, 4, 2, 4];
    let debug4 = [2, 2, 1, 1];
    let debug5 = [40, 7, 78, 12, 40, 28, 33, 27, 35, 90, 56, 44, 42, 38, 36, 3, 12, 68, 86, 14, 27, 80, 33, 40, 12, 74, 20, 50, 15, 54, 76, 13, 40, 3, 43, 88, 14, 54, 20, 0, 100, 10, 23, 30, 27, 50, 84, 24, 15, 45, 94, 66, 6, 22, 20, 34, 25, 100, 28, 6, 37, 10, 18, 82, 96, 0, 76, 40, 32, 33, 48, 70, 24, 80, 20, 40, 50, 4, 19, 25, 66, 38, 46, 44, 98, 47, 26, 54, 38, 39, 41, 20, 49, 8, 16, 6, 50, 30, 20, 66];
    let debug6 = [80, 52, 12, 33, 23, 43, 49, 6, 40, 88, 48, 96, 14, 29, 27, 58, 9, 2, 19, 58, 30, 54, 47, 14, 35, 16, 48, 18, 29, 76, 72, 30, 38, 28, 78, 42, 60, 6, 37, 94, 30, 41, 56, 30, 42, 38, 39, 84, 3, 24, 7, 36, 29, 34, 48, 24, 24, 68, 47, 88, 6, 15, 76, 28, 72, 94, 3, 44, 12, 32, 38, 82, 36, 70, 14, 26, 12, 50, 58, 15, 66, 98, 7, 14, 15, 4, 39, 74, 2, 100, 44, 78, 1, 6, 21, 12, 24, 28, 46, 86];
    let debug7 = [4, 45, 0, 46, 14, 12, 8, 90, 36, 28, 88, 46, 10, 26, 16, 0, 13, 0, 18, 70, 38, 14, 36, 56, 4, 0, 26, 23, 28, 22, 4, 3, 58, 58, 74, 23, 88, 32, 40, 12, 32, 36, 72, 28, 72, 52, 28, 31, 20, 35, 16, 7, 22, 29, 2, 0, 52, 44, 32, 16, 5, 78, 0, 32, 10, 56, 29, 33, 26, 7, 44, 80, 14, 15, 37, 11, 64, 2, 18, 22, 2, 19, 66, 11, 23, 36, 24, 39, 46, 26, 28, 6, 4, 62, 14, 30, 52, 6, 44, 14];
    pr(findOriginalArray(changed))
    pr(findOriginalArray(changed2))
    pr(findOriginalArray(changed3))
    pr(findOriginalArray(debug1)) // []
    pr(findOriginalArray(debug2)) // [0,0]
    pr(findOriginalArray(debug3)) // [1,2,2]
    pr(findOriginalArray(debug4)) // [1, 1]
    pr(findOriginalArray(debug5)) // [0,3,3,4,6,7,10,10,12,12,13,14,15,15,16,18,19,20,20,20,20,22,23,25,25,27,27,27,28,33,33,33,34,35,37,38,38,39,40,40,41,42,43,44,45,47,48,49,50,50]
    pr(findOriginalArray(debug6)) // [1,2,3,3,6,6,7,7,9,12,12,14,14,15,15,15,16,19,21,23,24,24,26,27,28,29,29,29,30,33,34,35,36,36,37,38,38,39,39,40,41,42,43,44,44,47,47,48,49,50]
    pr(findOriginalArray(debug7)) // [0,0,0,2,2,2,3,4,5,6,7,7,10,11,11,12,13,14,14,14,15,16,16,16,18,18,19,22,23,23,23,26,26,26,28,28,29,29,31,32,33,35,36,36,37,39,40,44,44,45]
};

main()



// a.sort((x, y) => {
//     if (x & 1) {
//         if (y & 1) {
//             return y - x;
//         } else {
//             return -1;
//         }
//     } else {
//         if (y & 1) {
//             return 1;
//         } else {
//             return y - x;
//         }
//     }
// });