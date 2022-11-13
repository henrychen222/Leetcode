/**
 * 10/09/21 evening
 * https://leetcode.com/contest/weekly-contest-262/problems/two-out-of-three/
 */

const pr = console.log;

// const counter = (a_or_s) => { let map = new Map(); for (const i of a_or_s) map.set(i, map.get(i) + 1 || 1); return map; };

// const twoOutOfThree = (a1, a2, a3) => {
//     let m1 = counter(a1), m2 = counter(a2), m3 = counter(a3), res = new Set();
//     let a = new Set([...a1, ...a2, ...a3]);
//     pr(a);
//     for (const x of a) {
//         let occ1 = m1.get(x) || 0;
//         let occ2 = m2.get(x) || 0;
//         let occ3 = m3.get(x) || 0;
//         let tot = occ1 + occ2 + occ3;
//         pr(x, tot)
//         if (tot >= 2) res.add(x);
//     }
//     return [...res];
// };

// Accepted
const twoOutOfThree = (a1, a2, a3) => {
    let a = new Set([...a1, ...a2, ...a3]);
    let s1 = new Set(a1), s2 = new Set(a2), s3 = new Set(a3);
    let res = new Set();
    for (const x of a) {
        if (s1.has(x) && s2.has(x)) res.add(x);
        if (s1.has(x) && s3.has(x)) res.add(x);
        if (s2.has(x) && s3.has(x)) res.add(x);
    }
    return [...res];
};

const main = () => {
    let nums1 = [1, 1, 3, 2], nums2 = [2, 3], nums3 = [3];
    pr(twoOutOfThree(nums1, nums2, nums3))
};

main()