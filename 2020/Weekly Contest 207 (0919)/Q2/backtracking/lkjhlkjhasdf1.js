/**
 * 9.19 night
 * https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/discuss/855119/Recursive-Code-Easy-to-Understand
 */

// Accepted --- 128ms 100.00%
const maxUniqueSplit = (s) => {
    return helper(s, new Set());
};

const helper = (s, set) => {
    let max = 0;
    for (let i = 1; i <= s.length; i++) {
        let candidate = s.substring(0, i);
        if (!set.has(candidate)) {
            set.add(candidate);
            max = Math.max(max, 1 + helper(s.substring(i), set));
            set.delete(candidate); // backtrack and try other splits
        }
    }
    console.log(set, max);
    return max;
};

const main = () => {
    let s = "ababccc";
    let s2 = "aba";
    let s3 = "aa";
    let debug1 = "addbsd";
    console.log(maxUniqueSplit(s)); // 5
    // console.log(maxUniqueSplit(s2)); // 2
    // console.log(maxUniqueSplit(s3)); // 1
    // console.log(maxUniqueSplit(debug1)); // 5
};

main()