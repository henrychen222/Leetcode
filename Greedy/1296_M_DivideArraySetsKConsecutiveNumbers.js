/**
 * 10.2 evening
 * https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/
 * 
 * same question: https://leetcode.com/problems/hand-of-straights/ (OrderedMap)
 */

// Accepted --- 324ms 40.19%
const isPossibleDivide = (nums, k) => {
    let n = nums.length;
    let p = n / k;
    let map = getRecord(nums);
    if (!ok(p)) return false;
    let SMap = sortMapByKey(map);
    while (p > 0) {
        let min = -1;
        for (const k of SMap.keys()) {
            let v = SMap.get(k);
            if (v > 0) {
                min = k;
                break;
            }
        }
        SMap.set(min, SMap.get(min) - 1);
        for (let i = 1; i <= k - 1; i++) {
            min = min + 1;
            if (!SMap.has(min)) {
                return false;
            } else {
                let v = SMap.get(min);
                if (v == 0) return false;
                SMap.set(min, v - 1);
            }
        }
        p--;
    }
    return true;
};

// Accepted --- 288ms 42.06%
const isPossibleDivide1 = (nums, k) => {
    let n = nums.length;
    let p = n / k;
    let map = getRecord(nums);
    // console.log(map, p);
    if (!ok(p)) return false;
    let SMap = sortMapByKey(map);
    // console.log(SMap);
    while (p > 0) {
        let min = -1;
        for (const k of SMap.keys()) {
            let v = SMap.get(k);
            if (v > 0) {
                min = k;
                break;
            }
        }
        SMap.set(min, SMap.get(min) - 1);
        for (let i = 1; i <= k - 1; i++) {
            min = min + 1;
            if (!SMap.has(min)) {
                return false;
            } else {
                SMap.set(min, SMap.get(min) - 1);
            }
        }
        // console.log(SMap);
        p--;
    }
    // console.log(SMap);
    for (const v of SMap.values()) {
        if (v != 0) return false;
    }
    return true;
};

const getRecord = (arr) => {
    let map = new Map();
    for (const i of arr) {
        if (map.has(i)) {
            map.set(i, map.get(i) + 1);
        } else {
            map.set(i, 1);
        }
    }
    return map;
};

const ok = (n) => {
    if (n < 0) return false;
    let s = n + '';
    if (s.indexOf('.') != -1) return false;
    return true;
};

const sortMapByKey = (map) => {
    return new Map([...map].sort((a, b) => a[0] - b[0]));
};

const main = () => {
    let nums = [1, 2, 3, 3, 4, 4, 5, 6],
        k = 4;
    let nums2 = [3, 2, 1, 2, 3, 4, 3, 4, 5, 9, 10, 11],
        k2 = 3;
    let nums3 = [3, 3, 2, 2, 1, 1],
        k3 = 3;
    let nums4 = [1, 2, 3, 4],
        k4 = 3;
    let nums_debug1 = [16, 5, 15, 15, 20, 16, 20, 14, 21, 20, 19, 20, 12, 17, 13, 15, 11, 17, 18, 18, 11, 13, 13, 14, 14, 9, 20, 18, 10, 4, 4, 6, 15, 19, 8, 15, 7, 17, 15, 9, 24, 2, 23, 22, 26, 8, 21, 22, 14, 13, 16, 2, 25, 23, 17, 19, 17, 3, 22, 23, 19, 12, 21, 12, 16, 27, 28, 10, 13, 8, 24, 3, 22, 6, 10, 9, 14, 7, 11, 22, 11, 5, 16, 19, 21, 2, 8, 24, 16, 21, 7, 29, 18, 9, 10, 18, 6, 17, 21, 20],
        k_debug1 = 10;
    console.log(isPossibleDivide(nums, k));
    console.log(isPossibleDivide(nums2, k2));
    console.log(isPossibleDivide(nums3, k3));
    console.log(isPossibleDivide(nums4, k4));
    console.log(isPossibleDivide(nums_debug1, k_debug1)); // false
};

main()


// const getRecord = (arr) => {
//     let map = {};
//     for (const i of arr) {
//         if (map.hasOwnProperty(i)) {
//             map[i]++;
//         } else {
//             map[i] = 1;
//         }
//     }
//     return map;
// };