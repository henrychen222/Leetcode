/**
 * 01/16/22 night
 * https://leetcode.com/problems/split-array-with-same-average/
 * 
 * reference:
 * https://leetcode.com/contest/weekly-contest-77/ranking
 */

const pr = console.log;

const sm = (a) => a.reduce(((x, y) => x + y), 0);
const initializeGraphSet = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push(new Set()); } return g; };

// Accepted --- 197ms 100%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/10285531.html
 * https://leetcode.com/problems/split-array-with-same-average/discuss/120667/C%2B%2B-Solution-with-explanation-early-termination-(Updated-for-new-test-case)
 */
const splitArraySameAverage = (a) => {
    a.sort((x, y) => x - y);
    let n = a.length, ok = false, tsum = sm(a);
    for (let i = 1; i * 2 <= n; i++) {
        if (tsum * i % n == 0) {
            ok = true;
            break;
        }
    }
    if (!ok) return false;
    let dp = initializeGraphSet((n >> 1) + 1);
    dp[0].add(0);
    for (const x of a) {
        for (let i = n >> 1; i >= 1; i--) {
            for (const pre of dp[i - 1]) {
                dp[i].add(pre + x);
            }
        }
    }
    // pr(dp);
    for (let i = 1; i * 2 <= n; i++) {
        if (tsum * i % n == 0) {
            if (dp[i].has(tsum * i / n)) return true;
        }
    }
    return false;
}

// Accepted --- 2273ms 33.33%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/10285531.html
 * https://leetcode.com/problems/split-array-with-same-average/discuss/120660/Java-accepted-recursive-solution-with-explanation
 */
let a, n, tsum;
const splitArraySameAverage2 = (A) => {
    a = A, n = a.length, tsum = sm(a);
    a.sort((x, y) => x - y);
    let ok = false;
    for (let i = 1; i * 2 <= n; i++) {
        if (tsum * i % n == 0) {
            ok = true;
            break;
        }
    }
    if (!ok) return false;
    for (let i = 1; i * 2 <= n; i++) {
        if (tsum * i % n == 0) {
            if (dfs(0, i, tsum * i / n)) return true;
        }
    }
    return false;
};

const dfs = (startIdx, cnt, cur) => {
    // pr(startIdx, cnt, cur);
    if (cnt == 0) return cur == 0;
    if (a[startIdx] * cnt > cur) return false;
    for (let i = startIdx; i < n - cnt + 1; i++) {
        if (i > startIdx && a[i] == a[i - 1]) continue;
        if (dfs(i + 1, cnt - 1, cur - a[i])) return true;
    }
    return false;
};

///////////////////////////////////////////////////////////////////
// TLE
// https://zxi.mytechroad.com/blog/searching/leetcode-805-split-array-with-same-average/
const splitArraySameAverage1 = (A) => {
    a = A, n = a.length, tsum = sm(a);
    a.sort((x, y) => x - y);
    return dfs1(0, 1, 0);
};

const dfs1 = (startIdx, cnt, cur) => {
    // pr(startIdx, cnt, cur);
    if (cnt * 2 > n) return false;
    for (let i = startIdx; i < n; i++) {
        cur += a[i];
        let lsum = cur * (n - cnt), rsum = (tsum - cur) * cnt;
        // pr("check", lsum, rsum);
        if (lsum == rsum) return true;
        if (lsum > rsum) break;
        if (dfs1(i + 1, cnt + 1, cur)) return true;
        cur -= a[i];
    }
    return false;
};

const main = () => {
    let nums = [1, 2, 3, 4, 5, 6, 7, 8];
    let nums2 = [3, 1];
    pr(splitArraySameAverage(nums))
    pr(splitArraySameAverage(nums2))
};

main()