/**
 * 02/21/21 afternoon
 * https://leetcode.com/problems/form-array-by-concatenating-subarrays-of-another-array/
 */

const pr = console.log;

// Accepted --- 2016ms
const arrayEqual = (a, b) => JSON.stringify(a) == JSON.stringify(b);
const canChoose = (groups, nums) => {
    let gn = groups.length;
    let n = nums.length;
    let find = new Map();
    let idx = 0;
    for (const g of groups) {
        let len = g.length;
        for (let i = 0; i < n; i++) {
            let tmp = nums.slice(i, i + len);
            if (arrayEqual(tmp, g)) {
                if (!find.has(idx)) {
                    find.set(idx, []);
                }
                find.get(idx).push([i, i + len - 1]);
            }
        }
        idx++;
    }
    // pr(find);
    let fn = find.size;
    if (fn < gn) return false;
    for (const [k, v] of find) {
        if (k >= 1) {
            if (find.get(k)[0][0] <= find.get(k - 1)[0][1]) return false;
        }
    }
    // Accepted --- 2036ms
    // for (const [k, v] of find) {
    //     if (k >= 1) {
    //         if (v[0][0] <= find.get(k - 1)[0][1]) return false;
    //     }
    // }
    return true;
};

const main = () => {
    let groups = [
            [1, -1, -1],
            [3, -2, 0]
        ],
        nums = [1, -1, 0, 1, -1, -1, 3, -2, 0];
    let groups2 = [
            [10, -2],
            [1, 2, 3, 4]
        ],
        nums2 = [1, 2, 3, 4, 10, -2];
    let groups3 = [
            [1, 2, 3],
            [3, 4]
        ],
        nums3 = [7, 7, 1, 2, 3, 4, 7, 7];

    let groups_debug1 = [
            [352529, -4284030, 6431387, 2432677, -3305342, -4342915, -9007629, 3195451, -9587228, 5747770, 8106556, -2385247, 3207013, -8540809, 9400364, 6852329],
            [9903943]
        ],
        nums_debug1 = [-8540809, 5747770, 2432677, -9587228, 3195451, 352529, -4284030, 6431387, 2432677, -3305342, -4342915, -9007629, 3195451, -9587228, 5747770, 8106556, -2385247, 3207013, -8540809, -8540809, 6852329, -9007629, 352529, 9903943];
    let groups_debug2 = [
            [7122186, -6877645, 3486322],
            [-8477030],
            [1917773],
            [-9337589],
            [7017586],
            [-4492418],
            [-745836],
            [-912773],
            [9818463, 4180029],
            [-4576693, -6690524, -7751890],
            [-7659435],
            [4847283]
        ],
        nums_debug2 = [3486322, 7122186, -6877645, 3486322, -8477030, 1917773, -9337589, 7017586, -4492418, -745836, -912773, 9818463, 4180029, -4576693, -6690524, -7751890, 1917773, -7659435, 4847283];
    pr(canChoose(groups, nums));
    pr(canChoose(groups2, nums2));
    pr(canChoose(groups3, nums3));
    pr(canChoose(groups_debug1, nums_debug1)); // false
    pr(canChoose(groups_debug2, nums_debug2)); // true
};

main()


// const canChoose = (g, nums) => {
//     let gn = g.length;
//     let n = nums.length;
//     let find = Array(gn).fill(0);
//     let j = 0;
//     for (let i = 0; i < gn; i++) {
//         let len = g[i].length;
//         for (; j < n; j++) {
//             if (nums[j] == g[i][0]) {
//                 let tmp = nums.slice(j, len - j);
//                 pr(tmp, g[i])
//                 if (arrayEqual(tmp, g[i])) {
//                     find[i] = 1;
//                     break;
//                 }
//             }
//         }
//         pr(find);
//         let u = [...new Set(find)];
//         if (u.length == 1 && u[0] == 1) return true;
//     }
//     return false;
// };