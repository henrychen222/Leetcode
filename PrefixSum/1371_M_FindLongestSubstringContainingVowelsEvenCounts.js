/**
 * 06/16/22 night
 * https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/
 * 
 * reference:
 * https://leetcode.com/contest/biweekly-contest-21/ranking/2/  kmjp
 * https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/discuss/531840/JavaC%2B%2BPython-One-Pass
 */

const pr = console.log;

// Accepted --- 173ms 66.67%
const findTheLongestSubstring = (s) => {
    let n = s.length, m = new Map([[0, -1]]), res = 0, cur = 0, mask = [1, 2, 4, 8, 16];
    for (let i = 0; i < n; i++) {
        let idx = 'aeiou'.indexOf(s[i]);
        if (idx != -1) cur ^= mask[idx];
        if (!m.has(cur)) m.set(cur, i); // set min index for cur
        let len = i - m.get(cur);
        // pr(m.get(cur), i, "len", len, "cur", cur);
        res = Math.max(res, len);
    }
    return res;
};

// Wrong, not all aeiou is even, but each
const isVowel = (c) => 'aeiou'.indexOf(c) != -1;
const findTheLongestSubstring1 = (s) => {
    let n = s.length, cnt = Array(n).fill(0);
    if (isVowel(s[0])) cnt[0]++;
    for (let i = 1; i < n; i++) cnt[i] = cnt[i - 1] + (isVowel(s[i]) ? 1 : 0);
    pr(cnt);
    for (let i = 0, f = 1; i < n; i++) {
        if (cnt[i] % 2 == 0) {
            cnt[i] = 0;
        } else {
            cnt[i] = f;
            f *= -1;
        }
    }
    pr(cnt, n);
    return subarraySumEqualKLongest(cnt, 0);
};

const subarraySumEqualKLongest = (a, k) => {
    let n = a.length, sum = 0, m = new Map([[0, -1]]), res = 0;
    for (let i = 0; i < n; i++) {
        sum += a[i];
        let lsum = sum - k;
        if (m.has(lsum)) {
            let preI = m.get(lsum);
            res = Math.max(res, i - preI);
        }
        if (!m.has(sum)) m.set(sum, i);
    }
    return res;
};

const main = () => {
    let s = "eleetminicoworoep";
    let s2 = "leetcodeisgreat";
    let s3 = "bcbcbc"
    pr(findTheLongestSubstring(s))
    pr(findTheLongestSubstring(s2))
    pr(findTheLongestSubstring(s3))
};

main()