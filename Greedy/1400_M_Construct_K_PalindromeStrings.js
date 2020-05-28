/**
 * 5.27 night
 * https://leetcode.com/problems/construct-k-palindrome-strings/
 */

/**
 * https://www.acwing.com/solution/LeetCode/content/11009/
 * Accepted --- 76ms 39.5MB 84.51%
 */
const canConstruct_acwing = (s, k) => {
    if (k > s.length) return false; // 如果字符串长度小于 k，则直接返回 false
    let cnt = [];
    fillArr(cnt, 26);
    for (const c of s) { //统计每个字母的出现次数
        cnt[c.charCodeAt(0) - 97]++;
        // cnt[c - 'a']++;
    }

    // 如果某个字母出现了奇数次，则这个字母必须作为某一个奇回文串的中心字母. 这样，我们可以统计出现次数为奇数的字符的数量，如果这个数量小于等于 k，则说明可以完成构造。
    let odd = 0;
    for (let i = 0; i < 26; i++) {
        if (cnt[i] & 1) {
            odd++;
        }
    }
    return odd <= k;
};

const fillArr = (arr, n) => {
    for (let i = 0; i <= n; i++) {
        arr.push(0);
    }
};

const main = () => {
    let s = "annabelle",
        k = 2;
    let s2 = "leetcode",
        k2 = 3;
    let s3 = "true",
        k3 = 4;
    let s4 = "yzyzyzyzyzyzyzy",
        k4 = 2;
    let s5 = "cr",
        k5 = 7;

    console.log(canConstruct_acwing(s, k));
    console.log(canConstruct_acwing(s2, k2));
    console.log(canConstruct_acwing(s3, k3));
    console.log(canConstruct_acwing(s4, k4));
    console.log(canConstruct_acwing(s5, k5));
};

main()