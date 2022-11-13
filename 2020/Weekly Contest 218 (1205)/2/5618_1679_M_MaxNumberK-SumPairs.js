/**
 * 12.5 evening
 * https://leetcode.com/contest/weekly-contest-218/problems/max-number-of-k-sum-pairs/
 */

// TLE  40/51
const maxOperations = (nums, k) => {
    let set = new Set();
    let n = nums.length;
    let cnt = 0;
    while (true) {
        let tmp = set.size;
        top:
        for (let i = 0; i < n; i++) {
            if (set.has(i)) continue;
            for (let j = 0; j < n && j != i; j++) {
                if (set.has(j)) continue;
                if (nums[i] + nums[j] == k) {
                    cnt++;
                    set.add(i);
                    set.add(j);
                    continue top;
                }
            }
        }
        if (set.size == tmp) break;
    }
    return cnt;
};

// TLE  46/51
const maxOperations1 = (nums, k) => {
    let map = getRecord2(nums);
    let record = [];
    while (true) {
        let cnt = 0;
        for (const k1 of map.keys()) {
            if (map.get(k1) > 0) {
                for (const k2 of map.keys()) {
                    // console.log(k1, k2);
                    if (map.get(k1) == 1 && k2 == k1) continue;
                    if (map.get(k2) > 0 && k1 + k2 == k) {
                        // console.log("1111", k1, k2);
                        cnt++;
                        map.set(k1, map.get(k1) - 1);
                        map.set(k2, map.get(k2) - 1);
                    }
                }
            }
        }
        if (cnt == 0) {
            break;
        } else {
            record.push(cnt);
        }
    }
    // console.log(record);
    if (record.length == 0) return 0;
    return record.reduce((a, b) => a + b);
};

const getRecord2 = (arr) => {
    let map = new Map();
    for (const i of arr) {
        map.set(i, (map.get(i) + 1) || 1);
    }
    return map;
};

const main = () => {
    let nums = [1, 2, 3, 4], k = 5;
    let nums2 = [3, 1, 3, 4, 3], k2 = 6;
    let nums_debug1 = [3, 5, 1, 5], k_debug1 = 2;
    let nums_debug2 = [4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4], k_debug2 = 2;
    let nums_debug3 = [63, 10, 28, 31, 90, 53, 75, 77, 72, 47, 45, 6, 49, 13, 77, 61, 68, 43, 33, 1, 14, 62, 55, 55, 38, 54, 8, 79, 89, 14, 50, 68, 85, 12, 42, 57, 4, 67, 75, 6, 71, 8, 61, 26, 11, 20, 22, 3, 70, 52, 82, 70, 67, 18, 66, 79, 84, 51, 78, 23, 19, 84, 46, 61, 63, 73, 80, 61, 15, 12, 58, 3, 21, 66, 42, 55, 7, 58, 85, 60, 23, 69, 41, 61, 35, 64, 58, 84, 61, 77, 45, 14, 1, 38, 4, 8, 42, 16, 79, 60, 80, 39, 67, 10, 24, 15, 6, 37, 68, 76, 30, 53, 63, 87, 11, 71, 86, 82, 77, 76, 37, 21, 85, 7, 75, 83, 80, 8, 19, 25, 11, 10, 41, 66, 70, 14, 23, 74, 33, 76, 35, 89, 68, 85, 83, 57, 6, 72, 34, 21, 57, 72, 79, 29, 65, 3, 67, 8, 24, 24, 18, 26, 27, 68, 78, 64, 57, 55, 68, 28, 9, 11, 38, 45, 61, 37, 81, 89, 38, 43, 45, 26, 84, 62, 22, 37, 51, 15, 30, 67, 75, 24, 66, 40, 81, 74, 48, 43, 78, 14, 33, 19, 73, 5, 1, 2, 53, 29, 49, 73, 23, 5],
        k_debug3 = 59
    console.log(maxOperations(nums, k));
    console.log(maxOperations(nums2, k2));
    console.log(maxOperations(nums_debug1, k_debug1)); // 0
    console.log(maxOperations(nums_debug2, k_debug2)); // 2
    console.log(maxOperations(nums_debug3, k_debug3)); // 42
};

main()