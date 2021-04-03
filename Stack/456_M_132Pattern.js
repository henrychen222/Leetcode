/**
 * 8.30 evening  04/01/21 fix failed  04/02/21 fix failed copy
 * https://leetcode.com/problems/132-pattern/
 * 
 * https://leetcode.com/contest/smarking-algorithm-contest-4/ranking/1/
 */

/**
 * stack
 * https://www.cnblogs.com/grandyang/p/6081984.html (解法三)
 * https://leetcode.com/problems/132-pattern/discuss/94071/single-pass-c-on-space-and-time-solution-8-lines-with-detailed-explanation
 */
// Accepted --- 84ms 78.64%
const find132pattern = (nums) => {
    let n = nums.length;
    let third = Number.MIN_SAFE_INTEGER; // 2 in "132" 
    let st = []; // save the value larger than third, which means second (3 in "132") > third always exist
    for (let i = n - 1; ~i; i--) {
        if (nums[i] < third) return 1; // find 1 in "132"
        while (st.length != 0 && nums[i] > st[st.length - 1]) third = st.pop();
        st.push(nums[i]);
        // console.log(third, st);
    }
    return 0;
};

/**
 * sliding window
 * https://www.cnblogs.com/grandyang/p/6081984.html (解法二)
 * https://leetcode.com/problems/132-pattern/discuss/94135/c_ac
 */
// Accepted --- 176ms 18.45%
const find132pattern2 = (nums) => {
    let n = nums.length;
    let i = j = k = 0;
    for (; i < n; i = j + 1) {
        while (i < n - 1 && nums[i] >= nums[i + 1]) i++;
        j = i + 1;
        while (j < n - 1 && nums[j] <= nums[j + 1]) j++;
        k = j + 1;
        while (k < n) {
            if (nums[i] < nums[k] && nums[k] < nums[j]) return 1;
            k++;
        }
        // console.log(i, j, k)
    }
    return 0;
};


/**
 * https://www.cnblogs.com/grandyang/p/6081984.html (解法一)
 * https://leetcode.com/problems/132-pattern/discuss/94089/Java-solutions-from-O(n3)-to-O(n)-for-%22132%22-pattern-(updated-with-one-pass-slution)
 */
// Accepted --- 116ms 33.98%
const find132pattern1 = (nums) => {
    let min = Number.MAX_SAFE_INTEGER;
    let n = nums.length;
    for (let j = 0; j < n; j++) {
        min = Math.min(min, nums[j]);
        if (min == nums[j]) continue;
        for (let k = n - 1; k > j; k--) {
            if (min < nums[k] && nums[k] < nums[j]) return 1;
        }
    }
    return 0;
};

///////////////////////////////////////////////////////////////////////////////////
// 04/02/21 TLE 99/101
const sortMapByKey = (map) => new Map([...map].sort((a, b) => a[0] - b[0]));
const find132pattern_040221 = (nums) => {
    let m = new Map();
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        if (!m.has(nums[i])) m.set(nums[i], []);
        m.get(nums[i]).push(i);
    }
    m = sortMapByKey(m);
    // console.log(m);
    let a = Array.from(m.keys());
    // console.log(a);
    let an = a.length;
    for (let i = 0; i < an; i++) {
        let ai = m.get(a[i]);
        for (let k = i + 1; k < an; k++) {
            let ak = m.get(a[k]);
            let ak_last = ak[ak.length - 1];
            if (ai[0] >= ak_last) continue;
            for (let j = k + 1; j < an; j++) {
                let aj = m.get(a[j]);
                aj_last = aj[aj.length - 1];
                if (ai[0] >= aj_last || aj[0] > ak_last) continue;
                let idxI, idxJ, idxK;
                idxI = ai[0];
                for (const e of aj) {
                    if (e > idxI) {
                        idxJ = e;
                        break;
                    }
                }
                for (const e of ak) {
                    if (e > idxJ) {
                        idxK = e;
                        break;
                    }
                }
                if (idxI != undefined & idxJ != undefined & idxK != undefined) return true;
            }
        }
    }
    return false;
};

// 04/01/21 TLE 99/101
const find132pattern_040121 = (nums) => {
    let m = new Map();
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        if (!m.has(nums[i])) m.set(nums[i], []);
        m.get(nums[i]).push(i);
    }
    // console.log(m);
    for (const [vi, ai] of m) {
        for (const [vj, aj] of m) {
            if (vi < vj) {
                for (const [vk, ak] of m) {
                    if (vi < vk && vk < vj) {
                        let i, j, k;
                        // console.log(vi, vj, vk);
                        i = ai[0];
                        for (const e of aj) {
                            if (e > i) {
                                j = e;
                                break;
                            }
                        }
                        for (const e of ak) {
                            if (e > j) {
                                k = e;
                                break;
                            }
                        }
                        // console.log(i, j, k)
                        if (i != undefined & j != undefined & k != undefined) return true;
                    }
                }
            }
        }
    }
    return false;
};

const main = () => {
    let nums = [1, 2, 3, 4];
    let nums2 = [3, 1, 4, 2];
    let nums3 = [-1, 3, 2, 0];
    let debug1 = [-2, 1, 2, -2, 1, 2];
    let debug2 = [1, 3, 2, 4];
    console.log(find132pattern(nums)); // false
    console.log(find132pattern(nums2)); // true
    console.log(find132pattern(nums3)); // true
    console.log(find132pattern(debug1)); // true
    console.log(find132pattern(debug2)); // true
};

main()


////////////////////////////// 8.30 evening ///////////////////////////////
// // Time Limit 87/101
// const find132pattern1 = (nums) => {
//     let n = nums.length;
//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j < n; j++) {
//             if (nums[i] < nums[j]) {
//                 for (let k = j + 1; k < n; k++) {
//                     if (nums[i] < nums[k] && nums[k] < nums[j]) {
//                         return true;
//                     }
//                 }
//             }
//         }
//     }
//     return false;
// };

// // issue  95/101
// const find132pattern = (nums) => {
//     let n = nums.length;
//     for (let i = 0; i < n - 2; i++) {
//         let data = [...nums];
//         for (let j = i + 1; j < n - 1; j++) {
//             if (nums[i] < nums[j]) {
//                 let len = data.length;
//                 let idx = len - 1 + (n - len);
//                 // while (idx > j) {
//                     if (data.length == 0) break;
//                     let end = data[len - 1];
//                     // console.log(nums[i], nums[j], data, end);
//                     if (nums[i] < end && end < nums[j] && idx > j) {
//                         return true;
//                     }
//                     data.pop(); // issue, only pop one time
//                 // }
//             }
//         }
//     }
//     return false;
// };