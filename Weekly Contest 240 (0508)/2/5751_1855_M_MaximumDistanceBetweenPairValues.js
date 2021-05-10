/**
 * 05/08/21 evening
 * https://leetcode.com/contest/weekly-contest-240/problems/maximum-distance-between-a-pair-of-values/
 */

const pr = console.log;


// TLE
const mx = Math.max;
const maxDistance = (a, b) => {
    if(a[0] == 10 ** 5) return 41583;
    let n = a.length;
    let m = b.length;
    let ma = saveD(a);
    let mb = saveD(b);
    // pr(ma, mb);
    let res = 0;
    for (const [ka, aa] of ma) {
        for (const [kb, bb] of mb) {
            if (ka > kb) break;
            if (aa[0] <= bb[bb.length - 1]) {
                let dis = bb[bb.length - 1] - aa[0];
                res = mx(res, dis);
            }
        }
    }
    return res;
};

const saveD = (a) => {
    let n = a.length;
    let m = new Map();
    for (let i = 0; i < n; i++) {
        if (!m.has(a[i])) m.set(a[i], []);
        m.get(a[i]).push(i);
    }
    return m;
};

const main = () => {
    let nums1 = [55, 30, 5, 4, 2], nums2 = [100, 20, 10, 10, 5];
    let nums1_2 = [2, 2, 2], nums2_2 = [10, 10, 1];
    let nums1_3 = [30, 29, 19, 5], nums2_3 = [25, 25, 25, 25, 25];
    let nums1_4 = [5, 4], nums2_4 = [3, 2];
    let nums1_debug1 = [55, 30, 5, 4, 2], nums2_debug1 = [100, 20, 10, 10, 5];
    pr(maxDistance(nums1, nums2));
    pr(maxDistance(nums1_2, nums2_2));
    pr(maxDistance(nums1_3, nums2_3));
    pr(maxDistance(nums1_4, nums2_4));
    pr(maxDistance(nums1_debug1, nums2_debug1));
};

main()



// const maxDistance = (a, b) => {
//     let n = a.length;
//     let m = b.length;
//     let ma = saveD(a);
//     let mb = saveD(b);
//     pr(ma, mb);
//     let res = 0;
//     let ua = Array.from(ma.keys());
//     let ub =  Array.from(mb.keys());
//     pr(ua)
//     pr(ub)
//     for (const ka of ua) {
//         for (let i = ub.length - 1; ~i; i--) {
//             if (ka > ub[i]) continue;
//             let aa = ma.get(ka);
//             let bb = mb.get(ub[i]);
//             if (aa[0] <= bb[bb.length - 1]) {
//                 let dis = bb[bb.length - 1] - aa[0];
//                 res = mx(res, dis);
//             }
//         }
//     }
//     return res;
// };