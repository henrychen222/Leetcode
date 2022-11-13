/**
 * 05/01/21 evening
 * https://leetcode.com/contest/weekly-contest-239/problems/minimum-distance-to-the-target-element/
 */

const pr = console.log;

// Accepted
const abs = Math.abs;
const getMinDistance = (a, target, start) => {
    let n = a.length;
    let li, ri;
    for (let i = start; i < n; i++) {
        if (a[i] == target) {
            ri = i;
            break;
        }
    }
    for (let i = start; ~i; i--) {
        if (a[i] == target) {
            li = i;
            break;
        }
    }
    // pr(ri, li);
    if (ri != undefined) {
        if (li != undefined) {
            let ldiff = abs(li - start);
            let rdiff = abs(ri - start);
            // pr(ldiff, rdiff);
            return ldiff <= rdiff ? ldiff : rdiff;
        } else {
            return abs(ri - start);
        }
    } else {
        return abs(li - start);;
    }
};

// const getMinDistance = (a, target, start) => {
//     let n = a.length;
//     // let res = [];
//     for (let i = 0; i < n; i++) {
//         if (a[i] == target) {
//             // res.push(i);
//             return abs(i - start);
//         }
//     }
// };

const main = () => {
    let nums = [1, 2, 3, 4, 5], target = 5, start = 3;
    let nums2 = [1], target2 = 1, start2 = 0;
    let nums3 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], target3 = 1, start3 = 0;
    let nums_debug1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], target_debug1 = 1, start_debug1 = 9;
    let nums_debug2 = [5, 2, 3, 5, 5], target_debug2 = 5, start_debug2 = 2
    pr(getMinDistance(nums, target, start));
    pr(getMinDistance(nums2, target2, start2));
    pr(getMinDistance(nums3, target3, start3));
    pr(getMinDistance(nums_debug1, target_debug1, start_debug1)); // 0
    pr(getMinDistance(nums_debug2, target_debug2, start_debug2)); // 1
};

main()
