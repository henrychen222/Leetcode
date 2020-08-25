/**
 * 8.22 night
 * https://leetcode.com/problems/remove-palindromic-subsequences/
 */

// wrong
const removePalindromeSub = (s) => {
    let cnt = 0;
    // while (s.length > 0) {
        let data = getAllPalindromeSubsequences(s.split(""));
        data.sort((a, b) => b.length - a.length);
        console.log(s, data[0])  // issue not must data[0], need to think about minimum split of PalindromeSub can be
        console.log(data)
        s = updateS(s, data[0]);
        cnt++;
    // }
    return cnt;
};

const getAllPalindromeSubsequences = (arr) => {
    let res = [];
    let n = arr.length;
    let N = 2 ** n;
    for (let i = 0; i < N; i++) {
        let data = [];
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                data.push(arr[j]);
            }
        }
        let tmp = data.join("");
        if (isPalindrome(tmp)) {
            res.push(tmp);
        }
    }
    return res;
};

const isPalindrome = (s) => {
    let reverse = '';
    for (let i = s.length - 1; i >= 0; i--) {
        reverse += s[i];
    }
    if (reverse == s) return true;
    return false;
};

const updateS = (s, itemUsed) => {
    for (const i of itemUsed) {
        s = s.replace(i, "");
    }
    return s;
};

const main = () => {
    let s = "ababa";
    let s2 = "abb";
    let s3 = "baabb";
    let s4 = "";
    let debug1 = "bbaabaaa";
    console.log(removePalindromeSub(s));
    console.log(removePalindromeSub(s2));
    console.log(removePalindromeSub(s3));
    console.log(removePalindromeSub(s4));
    console.log(removePalindromeSub(debug1)); // 2
    console.log(isPalindrome('baabaa'))
};

main();