/**
 * 09/27/21 night
 * https://leetcode.com/problems/longest-subsequence-repeated-k-times/
 */

const initializeGraph = (n) => { let G = []; for (let i = 0; i < n; i++) { G.push([]); } return G; };

// Accepted --- 448ms 47.37%
// https://leetcode.com/contest/weekly-contest-259/ranking Heltion
const longestSubsequenceRepeatedK1 = (s, k) => {
    let d = initializeGraph(8);
    d[0].push("");
    // pr(d);
    for (let i = 0; i + 1 < 8; i++) {
        for (let t of d[i]) {
            // pr("t", t);
            for (let j = 0; j < 26; j++) {
                let sub = t + String.fromCharCode(97 + j);
                // pr("sub", sub);
                if (canMake(s, sub, k)) d[i + 1].push(sub);
            }
        }
    }
    // pr(d);
    for (let i = 7; ~i; i--) {
        if (d[i].length) {
            d[i].sort((x, y) => y.localeCompare(x));
            return d[i][0];
        }
    }
    return '';
};

const canMake = (s, t, k) => {
    let cnt = 0, pos = 0, n = s.length, m = t.length;
    for (let i = 0; i < n; i++) {
        let rest = m * (k - cnt) - pos;
        if (rest > n - i) return false;
        if (s[i] == t[pos]) {
            pos++;
            if (pos == m) {
                cnt++;
                pos = 0;
                if (cnt == k) return true;
            }
        }
    }
    return false;
};

//////////////////////////////////////////////////////////////////////////
// https://leetcode.com/contest/weekly-contest-259/ranking LayCurse (Remember this way important)
let s, k, res;
const longestSubsequenceRepeatedK = (S, K) => {
    s = S, k = K, res = '';
    dfs('');
    return res;
};

const dfs = (cur) => {
    // pr(cur);
    if (!ok(cur)) return;
    if (res.length < cur.length || (res.length == cur.length && res < cur)) res = cur;
    for (let i = 0; i < 26; i++) {
        dfs(cur + String.fromCharCode(97 + i)); // generate subsequence based from a-z
    }
};

const ok = (cur) => { // check subsequence can be generated from s
    if (cur.length == 0) return true;
    let pos = 0, cnt = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == cur[pos]) pos++;
        if (pos == cur.length) {
            cnt++;
            pos = 0;
        }
    }
    return cnt >= k;
};

const pr = console.log;
const main = () => {
    let s = "letsleetcode",
        k = 2;
    let s2 = "bb",
        k2 = 2;
    let s3 = "ab",
        k3 = 2;
    let s4 = "bbabbabbbbabaababab",
        k4 = 3;
    pr(longestSubsequenceRepeatedK(s, k))
    pr(longestSubsequenceRepeatedK(s2, k2))
    pr(longestSubsequenceRepeatedK(s3, k3))
    pr(longestSubsequenceRepeatedK(s4, k4))
};

main()


// pr('ab' < 'ac');
// pr('baaa' > 'acc');
// pr('a' < 'aa', 'a' > 'aa');