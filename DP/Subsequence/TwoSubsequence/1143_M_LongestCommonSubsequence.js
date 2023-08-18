/**
 * 12/02/2020 afternoon
 * https://leetcode.com/problems/longest-common-subsequence/
 * https://leetcode.com/problems/uncrossed-lines/ (same)
 */

/////////////////////////////////////// 03/25/21 afternoon ////////////////////////////////////////////////
// inspired from longest common substring from cf https://codeforces.com/problemset/problem/1506/C
// Accepted --- 644ms 9.18%
let memo, A, B;
const longestCommonSubsequence = (a, b) => {
    memo = new Map();
    A = a;
    B = b;
    return dfs(A.length, B.length);
};

const dfs = (i, j) => { // i: idxA  j: idxB
    if (i == 0 || j == 0) return 0;
    let k = i + ' ' + j;
    if (memo.has(k)) return memo.get(k);
    if (A[i - 1] == B[j - 1]) {
        memo.set(k, dfs(i - 1, j - 1) + 1);
    } else {
        memo.set(k, Math.max(dfs(i, j - 1), dfs(i - 1, j)));
    }
    return memo.get(k);
};

// reference: https://www.techiedelight.com/longest-common-subsequence/
// Accepted --- 112ms 74.84%
const longestCommonSubsequence3 = (A, B) => {
    let m = A.length;
    let n = B.length;
    let dp = initialize2DArrayNew(m + 1, n + 1);
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (A[i - 1] == B[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[m][n];
};
///////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////// 120220 afternoon /////////////////////////////////////
// Accepted --- 112ms 73.81%
/**
 * reference:
 * https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-1143-longest-common-subsequence/
 * https://leetcode.com/problems/longest-common-subsequence/discuss/351689/JavaPython-3-Two-DP-codes-of-O(mn)-and-O(min(m-n))-spaces-w-picture-and-analysis
 * https://leetcode.com/problems/longest-common-subsequence/discuss/348884/C%2B%2B-with-picture-O(nm)
 */
const longestCommonSubsequence2 = (text1, text2) => {
    let m = text1.length;
    let n = text2.length;
    let dp = initialize2DArrayNew(m + 1, n + 1);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (text1[i] == text2[j]) {
                dp[i + 1][j + 1] = dp[i][j] + 1;
            } else {
                dp[i + 1][j + 1] = Math.max(dp[i][j + 1], dp[i + 1][j]);
            }
        }
    }
    return dp[m][n];
};

const initialize2DArrayNew = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = new Array(n).fill(0);
        data.push(tmp);
    }
    return data;
};


// TLE 22/43
const longestCommonSubsequence1 = (text1, text2) => {
    return text1.length <= text2.length ? find(text1, text2) : find(text2, text1);
};

const find = (short, long) => {
    if (long.indexOf(short) != -1) return short.length;
    let res = 0;
    let n = short.length;
    let N = 2 ** n;
    // console.log(N);
    for (let i = 1; i < N; i++) {
        let data = '';
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                data += short[j];
            }
        }
        let len = data.length;
        if (len > res) {
            if (isSubsequence(data, long)) {
                // console.log(data);
                res = len;
            }
        }
        // console.log(data);
    }
    return res;
};

// https://knpcode.com/java-programs/check-given-string-subsequence-of-another-string-java/
const isSubsequence = (item, s) => {
    let n = s.length;
    let j = 0;
    for (let i = 0; i < n; i++) {
        if (item[j] == s[i]) {
            j++;
        }
        if (j == item.length) {
            return true;
        }
    }
    return false;
};

const main = () => {
    let text1 = "abcde",
        text2 = "ace";
    let text1_2 = "abc",
        text2_2 = "abc";
    let text1_3 = "abc",
        text2_3 = "def";
    let text1_debug1 = "uvirivwbkdijstyjgdahmtutav",
        text2_debug2 = "apazcdspcnolsvmlorqxazglyjq";
    console.log(longestCommonSubsequence(text1, text2));
    console.log(longestCommonSubsequence(text1_2, text2_2));
    console.log(longestCommonSubsequence(text1_3, text2_3));
    console.log(longestCommonSubsequence(text1_debug1, text2_debug2));
};

main()