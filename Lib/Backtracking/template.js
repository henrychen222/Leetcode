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
split String/Array to K subArray
https://leetcode.com/problems/split-array-into-fibonacci-sequence/
https://leetcode.com/problems/additive-number/
https://leetcode.com/problems/palindrome-partitioning/
https://leetcode.com/problems/restore-ip-addresses/
*/
// partition
const dfs = (pos, cur) => {
    if (pos == n && ok(cur)) {
        res = cur;
        find = true; // find one case
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
Split Array into K subsequence/Subset
2305 https://leetcode.com/problems/fair-distribution-of-cookies/
1723 https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/ (same problem to 2305)
https://leetcode.com/problems/partition-to-k-equal-sum-subsets/
*/
const dfs = (pos, cur) => { // save picked up index in cur[i]
    if (pos == n) {
        let v = maxSumArray(cur);
        res = Math.min(res, v);
        return;
    }
    for (let i = 0; i < k; i++) { // select k subsequence
        cur[i].add(pos);
        dfs(pos + 1, cur);
        cur[i].delete(pos);
        if (cur[i].size == 0) break;
    }
};

/*
build
构建String/Array     比如 ‘0’ – ‘9’ n <= 15
https://leetcode.com/problems/numbers-with-same-consecutive-differences/
https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/
https://leetcode.com/problems/beautiful-arrangement/
https://leetcode.com/problems/sequential-digits/
*/
const dfs = (cur) => { // cur can be used either with string build or array build
    for (let i = '0'; i <= '9'; i++) { // build digits  ++ will make string to number
        cur.push(i); // cur += i; 
        if (ok(cur)) dfs(cur);
        cur.pop(); // cur = cur.slice(0, -1);
    }
};

