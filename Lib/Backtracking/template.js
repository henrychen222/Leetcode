/////////////////////////////// backtracking fast Template /////////////////////////////////////
let s, n, res, find;
const solve = (A_OR_S) => {
    s = A_OR_S;
    res = [];
    find = false;
    dfs(0, []);
    return res;
};

/*
split
拆分String/Array
https://leetcode.com/problems/split-array-into-fibonacci-sequence/
https://leetcode.com/problems/additive-number/
https://leetcode.com/problems/palindrome-partitioning/
https://leetcode.com/problems/restore-ip-addresses/
*/
// partition
const dfs = (pos, cur) => {
    if (pos == n && ok(cur)) {
        res = cur;
        find = true;
        return;
    }
    for (let i = pos; i < n; i++) {
        let next = s.slice(pos, i + 1); // find next substring/array
        if (!ok(cur)) break; // improve speed fix TLE  n can be up to 200
        cur.push(next);
        dfs(i + 1, cur);
        if (find) break;
        cur.pop();
    }
};

/*
build
构建String/Array     比如 ‘0’ – ‘9’ n <= 15
https://leetcode.com/problems/numbers-with-same-consecutive-differences/
https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/
https://leetcode.com/problems/beautiful-arrangement/
*/
const dfs = (cur) => { // cur can be used either with string build or array build
    for (let i = '0'; i <= '9'; i++) { // build digits  ++ will make string to number
        cur += i;  // cur.push(i);
        if (ok(cur)) dfs(cur);
        cur = cur.slice(-1); // cur.pop();
    }
};

