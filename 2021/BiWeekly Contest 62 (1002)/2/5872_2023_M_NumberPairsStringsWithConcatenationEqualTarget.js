/**
 * 10/02/21 morning
 * https://leetcode.com/contest/biweekly-contest-62/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/
 */

const pr = console.log;

// Accepted
const numOfPairs = (a, t) => {
    let n = a.length, res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i == j) continue;
            if (a[i] + a[j] == t) res++;
        }
    }
    return res;
};

const main = () => {
    let nums = ["777", "7", "77", "77"], target = "7777";
    let nums2 = ["123", "4", "12", "34"], target2 = "1234";
    let nums3 = ["1", "1", "1"], target3 = "11";
    pr(numOfPairs(nums, target))
    pr(numOfPairs(nums2, target2))
    pr(numOfPairs(nums3, target3))
};

main()