// 11.30 evening
/**
 * https://www.techiedelight.com/replace-character-specified-index-javascript/
 * https://www.w3docs.com/snippets/javascript/how-to-replace-a-character-at-a-particular-index-in-javascript.html
 * https://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript
 */
String.prototype.replaceAt = function (idx, replace) {
    if (index >= this.length) {
        return this.valueOf();
    }
    return this.slice(0, idx) + replace + this.slice(idx + replace.length);
}

String.prototype.replaceAt2 = function (idx, replace) {
    if (index >= this.length) {
        return this.valueOf();
    }
    let arr = this.split('');
    arr[idx] = replace;
    return arr.join('');
}

const isPalindrome = (s) => {
    let n = s.length;
    let i = 0;
    let j = n - 1;
    while (i < j) {
        if (s[i++] != s[j--]) return false;
    }
    return true;
};

/**
 * Example  06/22/22 night
 * https://leetcode.com/problems/maximum-number-of-removable-characters/
 * https://leetcode.com/problems/number-of-matching-subsequences/
 */
 const isSubsequence = (s, t) => { // s: origin string, t: subsequence
    let sn = s.length;
    let tn = t.length;
    let i = j = 0;
    while (i < sn && j < tn) {
        if (s[i] == t[j]) {
            i++;
            j++;
        } else {
            i++;
        }
    }
    return j == tn;
};

const isSubsequence1 = (s, t) => {
    let st = [];
    let sn = s.length;
    let tn = t.length;
    for (let i = 0; i < tn; i++) st.push(t[i]);
    for (let i = sn - 1; ~i; i--) {
        if (st.length == 0) {
            return true;
        }
        if (s[i] == st[st.length - 1]) st.pop();
    }
    return st.length == 0;
};