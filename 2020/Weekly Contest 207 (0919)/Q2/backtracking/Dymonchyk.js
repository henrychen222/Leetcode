// 9.20 afternoon

// Accepted --- 80ms 100.00%  study
let set = new Set();
let res = 0;
const maxUniqueSplit = (s) => {
    set.clear();
    res = 0;
    dfs(s, 0);
    return res;
};

const dfs = (s, idx) => {
    console.log(set, res);
    res = Math.max(res, set.size);
    if (idx == s.length) return;
    if (set.size + s.length - idx <= res) return;
    for (let i = idx; i < s.length; i++) {
        let x = s.slice(idx, i + 1);
        if (!set.has(x)) {
            set.add(x);
            dfs(s, i + 1);
            set.delete(x);
        }
    }
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