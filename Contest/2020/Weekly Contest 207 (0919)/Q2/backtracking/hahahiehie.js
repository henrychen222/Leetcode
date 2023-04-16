// 9.20 afternoon
// similar to hobiter

// 132ms 100.00%   study
let res = 0;
const maxUniqueSplit = (s) => {
    res = 0;
    return dfs(new Set(), 0, s);
};

const dfs = (set, idx, s) => {
    console.log(set, res);
    if (idx >= s.length) {
        res = Math.max(res, set.size);
        return;
    }
    for (let i = idx; i < s.length; i++) {
        let sub = s.substring(idx, i + 1);
        if (set.has(sub)) continue;
        set.add(sub);
        dfs(set, i + 1, s);
        set.delete(sub);
    }
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