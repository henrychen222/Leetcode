/**
 * 5.23 night
 * https://leetcode.com/contest/weekly-contest-190/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
 */

// Accepted --- 124ms 39.8MB 100.00%
const maxVowels_skywalkert = (s, k) => {
    let vis = new Set(['a', 'e', 'i', 'o', 'u']);
    // console.log(vis)
    let ans = 0, sum = 0, pos = 0;
    for (const ch of s) {
        sum += countItemInSet(vis, ch);
        if (pos >= k) {
            sum -= countItemInSet(vis, s[pos - k]);
        }
        if (pos >= k - 1) {
            ans = Math.max(ans, sum);
        }
        ++pos;
    }
    return ans;
};

const countItemInSet = (set, item) => {
    let count = 0;
    for (const i of set) {
        if (i == item) {
            count++;
        }
    }
    return count;
};

// Accepted --- 88ms 45.3MB 100.00%
const maxVowels_huzecong = (s, k) => {
    let value = [0];
    for (const c of s) {
        value.push(value[value.length - 1] + check(c));
    }
    // console.log(value);
    let ans = 0;
    for (let i = k; i < s.length + 1; i++) {
        ans = Math.max(ans, value[i] - value[i - k]);
    }
    return ans;
};

const check = (c) => {
    if (c == "a" || c == "e" || c == "i" || c == "o" || c == "u") {
        return 1; // true
    } else {
        return 0;  // false
    }
};

// Accepted --- 76ms 38.9MB 100.00%
const maxVowels_cai_lw = (s, k) => {
    let cnt = 0, ans = 0;
    for (let i = 0; i < k; i++)
        if (IsVowel(s[i])) cnt++;
    ans = cnt;
    for (let i = k; i < s.length; i++) {
        if (IsVowel(s[i])) cnt++;
        if (IsVowel(s[i - k])) cnt--;
        ans = Math.max(ans, cnt);
    }
    return ans;
};

const IsVowel = (c) => {
    return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
};

// Accepted --- 84ms 46.1MB 100.00%
const maxVowels_uwi = (s, k) => {
    let V = "aeiou";
    let t = s.split("");
    let n = t.length;
    let cum = [];
    fillArrInt(cum, n + 1);
    for (let i = 0; i < n; i++) {
        cum[i + 1] = cum[i] + (V.indexOf(t[i]) >= 0 ? 1 : 0);
    }
    let ans = 0;
    for (let i = k; i <= n; i++) {
        ans = Math.max(ans, cum[i] - cum[i - k]);
    }
    return ans;
};

const fillArrInt = (arr, n) => {
    for (let i = 0; i <= n; i++) {
        arr.push(0);
    }
};

// time limit exceed  102/106 test cases pass
const maxVowels = (s, k) => {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        let sub = s.slice(i, i + k);
        res = Math.max(getVowels(sub), res);
    }
    return res;
};

const getVowels = (str) => {
    let m = str.match(/[aeiou]/gi);
    return m === null ? 0 : m.length;
};


// time limit exceed  102/106 test cases pass
const maxVowels1 = (s, k) => {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        let sub = s.slice(i, i + k);
        res = Math.max(totalVowel(sub), res);
    }
    return res;
};

const totalVowel = (s) => {
    let count = 0;
    for (const i of s) {
        if (isVowel(i)) {
            count++;
        }
    }
    return count;
};

const isVowel = (x) => {
    return /[aeiouAEIOU]/.test(x);
};

const main = () => {
    let s = "abciiidef",
        k = 3;
    let s2 = "aeiou",
        k2 = 2;
    let s3 = "leetcode",
        k3 = 3;
    let s4 = "rhythms",
        k4 = 4;
    let s5 = "tryhard",
        k5 = 4;

    console.log(maxVowels(s, k));
    console.log(maxVowels(s2, k2));
    console.log(maxVowels(s3, k3));
    console.log(maxVowels(s4, k4));
    console.log(maxVowels(s5, k5));

    console.log("")
    console.log(maxVowels1(s, k));
    console.log(maxVowels1(s2, k2));
    console.log(maxVowels1(s3, k3));
    console.log(maxVowels1(s4, k4));
    console.log(maxVowels1(s5, k5));

    /***************************************/
    console.log("")
    console.log(maxVowels_uwi(s, k));
    console.log(maxVowels_uwi(s2, k2));
    console.log(maxVowels_uwi(s3, k3));
    console.log(maxVowels_uwi(s4, k4));
    console.log(maxVowels_uwi(s5, k5));

    console.log("")
    console.log(maxVowels_cai_lw(s, k));
    console.log(maxVowels_cai_lw(s2, k2));
    console.log(maxVowels_cai_lw(s3, k3));
    console.log(maxVowels_cai_lw(s4, k4));
    console.log(maxVowels_cai_lw(s5, k5));

    console.log("")
    console.log(maxVowels_huzecong(s, k));
    console.log(maxVowels_huzecong(s2, k2));
    console.log(maxVowels_huzecong(s3, k3));
    console.log(maxVowels_huzecong(s4, k4));
    console.log(maxVowels_huzecong(s5, k5));

    console.log("")
    console.log(maxVowels_skywalkert(s, k));
    console.log(maxVowels_skywalkert(s2, k2));
    console.log(maxVowels_skywalkert(s3, k3));
    console.log(maxVowels_skywalkert(s4, k4));
    console.log(maxVowels_skywalkert(s5, k5));


};

main()