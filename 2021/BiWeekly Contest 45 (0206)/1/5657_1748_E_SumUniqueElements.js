/**
 * 2.6 morning
 * https://leetcode.com/contest/biweekly-contest-45/problems/sum-of-unique-elements/
 */

// Accepted
const sumOfUnique = (nums) => {
    let ma = getRecord2(nums);
    let res = 0;
    for (const [k, v] of ma) {
        if (v == 1) res += k;
    }
    return res;
};

const getRecord2 = (arr) => {
    let map = new Map();
    for (const i of arr) {
        map.set(i, (map.get(i) + 1) || 1);
    }
    return map;
};

const main = () => {
    let nums = [1, 2, 3, 2];
    let nums2 = [1, 1, 1, 1, 1];
    let nums3 = [1, 2, 3, 4, 5];
    console.log(sumOfUnique(nums));
    console.log(sumOfUnique(nums2));
    console.log(sumOfUnique(nums3));
};

main()