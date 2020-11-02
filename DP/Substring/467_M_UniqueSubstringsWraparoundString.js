/**
 * 11.1 evening
 * https://leetcode.com/problems/unique-substrings-in-wraparound-string/
 */

// Accepted --- 92ms 47.06%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/6143071.html
 * https://leetcode.com/problems/unique-substrings-in-wraparound-string/discuss/95439/concise-java-solution-using-dp
 * https://www.tutorialspoint.com/unique-substrings-in-wraparound-string-in-cplusplus
 * core idea: 
 * (1) 某个字符结束的最大字符串包含其他以该字符结束的字符串的所有子字符串. 
 * (2) 题目可以转换为: 分别求出以每个字符(a-z)为结束字符的最长连续字符串，我们用一个数组cnt记录下来，最后在求出数组cnt的所有数字之和
 */
const findSubstringInWraproundString = (p) => {
    let cnt = new Array(26).fill(0);
    let n = p.length;
    let maxLen = 0;
    for (let i = 0; i < n; i++) {
        if (i - 1 >= 0 && (p[i].charCodeAt() - p[i - 1].charCodeAt() == 1 || p[i - 1].charCodeAt() - p[i].charCodeAt() == 25)) {
            maxLen++;
        } else {
            maxLen = 1;
        }
        // console.log(maxLen);
        let idx = p[i].charCodeAt() - 'a'.charCodeAt();
        cnt[idx] = Math.max(cnt[idx], maxLen);
    }
    // console.log(cnt);
    return accumulate(cnt);
};

const accumulate = (arr) => {
    return arr.reduce((acc, cur) => acc + cur);
};

// written in dp way 
// Accepted --- 92ms 47.06%
const findSubstringInWraproundString_modify_DP = (p) => {
    let dp = new Array(26).fill(0);
    let n = p.length;
    let maxLen = 0;
    for (let i = 0; i < n; i++) {
        if (i - 1 >= 0 && (p[i].charCodeAt() - p[i - 1].charCodeAt() == 1 || p[i - 1].charCodeAt() - p[i].charCodeAt() == 25)) {
            maxLen++;
        } else {
            maxLen = 1;
        }
        let idx = p[i].charCodeAt() - 'a'.charCodeAt();
        dp[idx] = Math.max(dp[idx], maxLen);
    }
    return accumulate(dp);
};


////////////////////////////// My Solutions ////////////////////////////////////////
// Time Limit 79/81
const findSubstringInWraproundString2 = (p) => {
    let set = new Set();
    let n = p.length;
    let cnt = [...new Set(p.split(""))].length;
    // console.log(cnt);
    for (let i = 0; i < n; i++) {
        if (i + 1 < n) {
            if (p[i] == 'z') {
                if (p[i + 1] != 'a') continue;
            } else {
                if (p[i + 1].charCodeAt() - p[i].charCodeAt() != 1) continue;
            }
        }
        for (let j = i; j < n; j++) {
            let len = j - i + 1;
            if (len == 0 || len == 1) continue;
            let sub = p.slice(i, j + 1);
            // console.log(sub);
            if (j - 1 >= 0) {
                if (p[j - 1] == 'z') {
                    if (p[j] != 'a') {
                        break;
                    } else {
                        if (!set.has(sub)) {
                            cnt++;
                            set.add(sub);
                        }
                    }
                } else {
                    // console.log(p[j - 1], p[j], sub);
                    if (p[j].charCodeAt() - p[j - 1].charCodeAt() != 1) {
                        break;
                    } else {
                        if (!set.has(sub)) {
                            cnt++;
                            set.add(sub);
                        }
                    }
                }
            }
        }
    }
    // console.log(set);
    return cnt;
};

// Time limit 26/81
const findSubstringInWraproundString1 = (p) => {
    let set = new Set();
    let n = p.length;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let len = j - i + 1;
            if (len != 0) {
                let sub = p.slice(i, j + 1);
                if (!set.has(sub)) {
                    if (ok(sub)) {
                        set.add(sub);
                    }
                }
            }
        }
    }
    // console.log(set);
    return set.size;
};

const ok = (s) => {
    let n = s.length;
    for (let i = 0; i + 1 < n; i++) {
        if (s[i] == 'z') {
            if (s[i + 1] != 'a') return false;
        } else {
            if (s[i].charCodeAt() + 1 != s[i + 1].charCodeAt()) return false;
        }
    }
    return true;
};

const main = () => {
    let p = 'a';
    let p2 = "cac";
    let p3 = "zab";
    let debug1 = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
    let debug2 = "aabb";
    console.log(findSubstringInWraproundString(p));
    console.log(findSubstringInWraproundString(p2));
    console.log(findSubstringInWraproundString(p3));
    console.log(findSubstringInWraproundString(debug1));
    console.log(findSubstringInWraproundString(debug2));
};

main()