/**
 * 9.19 night
 * https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/discuss/855073/Java-Backtracking
 */

// Accepted --- 124ms 100.00%
const maxUniqueSplit = (s) => {
    let set = new Set();
    return dfs(set, 0, s);
};

const dfs = (set, idx, s) => {
    if (idx >= s.length) return 0;
    let res = -1;
    for (let i = idx + 1; i <= s.length; i++) {
        let sub = s.substring(idx, i);
        if (set.has(sub)) continue;
        set.add(sub);
        let next = dfs(set, i, s);
        console.log(next);
        if (next >= 0) {
            res = Math.max(res, next + 1);
        }
        set.delete(sub);
    }
    console.log(set, res);
    return res;
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