/**
 * 05/14/22 evening
 * https://leetcode.com/contest/weekly-contest-293/problems/largest-combination-with-bitwise-and-greater-than-zero/
 */

const pr = console.log;

// Accepted
const largestCombination = (a) => longestSubsequencePositiveBitWiseAND(a);

// copy: https://www.geeksforgeeks.org/find-the-size-of-largest-subset-with-positive-bitwise-and/
const longestSubsequencePositiveBitWiseAND = (a) => {
    let bit = Array(32).fill(0);
    for (let i = 0; i < a.length; i++) {
        let pos = 31;
        while (a[i] > 0) {
            if (a[i] & 1) {
                bit[pos]++;
            }
            a[i] >>= 1;
            pos--;
        }
    }
    // pr(bit);
    return Math.max(...bit);
};

const main = () => {
    let a = [16, 17, 71, 62, 12, 24, 14];
    let a2 = [8, 8];
    let test = [7, 13, 8, 2, 3];
    pr(largestCombination(a))
    pr(largestCombination(a2))
    pr(largestCombination(test))
};

main()