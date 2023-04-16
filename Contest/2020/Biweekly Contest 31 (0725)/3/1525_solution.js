/**
 * 7.25 evening 7.26 night
 */

/************************************* Solution 1 prefix suffix match, similar to KMP prefix table ***************************************/
// Accepted --- 88ms 48MB 100.00%
const numSplits_xiaowuc1 = (s) => {
    let n = s.length;
    let set = new Set();
    let left = [0];
    for (let i = 0; i < n; i++) {
        set.add(s[i]);
        left[i + 1] = set.size;
    }
    // console.log(left, set);
    set.clear();
    let right = [0];
    for (let i = 0; i < n; i++) {
        set.add(s[n - i - 1]);
        right[i + 1] = set.size;
    }
    // console.log(right, set);
    let res = 0;
    for (let i = 1; i < n; i++) {
        res += left[i] == right[n - i];
    }
    return res;
};

// Accepted --- 120ms 46.9MB 100.00%
const numSplits_hank55663 = (s) => {
    let n = s.length;
    let set = new Set();
    let prefix = [];
    let suffix = [];
    for (let i = 0; i < n; i++) {
        set.add(s[i]);
        prefix[i] = set.size;
    }
    // console.log(prefix, set);
    set.clear();
    for (let i = n - 1; i >= 0; i--) {
        set.add(s[i]);
        suffix[i] = set.size;
    }
    // console.log(suffix, set);
    let res = 0;
    for (let i = 0; i < n - 1; i++) {
        if (prefix[i] == suffix[i + 1]) res++;
    }
    return res;
};

// Accepted --- 120ms 46.8MB 100.00%
const numSplits_tmwilliamlin168 = (s) => {
    let n = s.length;
    let set = new Set();
    let left = [];
    let right = [];
    for (let i = 0; i < n; i++) {
        set.add(s[i]);
        left[i + 1] = set.size;
    }
    set.clear();
    for (let i = n - 1; ~i; i--) { // difference ~i same to i>=0
        set.add(s[i]);
        right[i] = set.size;
    }
    let res = 0;
    for (let i = 1; i < n; i++) {
        if (left[i] == right[i]) res++;
    }
    return res;
};
/*****************************************************************************************************************************************/

/************************************* Solution 2 ***************************************/
// Accepted --- 84ms 38.8MB 98.08%
const numSplits_zerotrac2 = (s) => {
    let p = new Array(26).fill(0);
    let tot = new Array(26).fill(0);
    let l = 0;
    let r = 0;
    for (const ch of s) {
        if (++tot[ch.charCodeAt() - 'a'.charCodeAt()] == 1) r++;
    }
    // console.log("r is", r);
    let res = 0;
    for (const ch of s) {
        if (++p[ch.charCodeAt() - 'a'.charCodeAt()] == 1) l++;
        if (p[ch.charCodeAt() - 'a'.charCodeAt()] == tot[ch.charCodeAt() - 'a'.charCodeAt()]) r--;
        if (l == r) res++;
    }
    return res;
};

/*****************************************************************************************************************************************/

// wrong
// const numSplits = (s) => {
//     let l = new Map();
//     let r = new Map();
//     for (const it of s) {
//         r.set(it, getFrequency(s.split(""), it));
//     }
//     let res = 0;
//     for (const it of s) {
//         l.set(it, l.get(it) + 1);
//         r.set(it, r.get(it) - 1);
//         if (r.get(it) == 0) r.delete(it);
//         if (r.size == l.size) res++;
//     }
//     return res;
// };

// const getFrequency = (arr, item) => {
//     return arr.filter(x => x === item).length;
// };

/*****************************************************************************************************************************************/
const main = () => {
    let s = "aacaba";
    let s2 = "abcd";
    let s3 = "aaaaa";
    let s4 = "acbadbaada";

    console.log(numSplits_xiaowuc1(s));
    console.log(numSplits_xiaowuc1(s2));
    console.log(numSplits_xiaowuc1(s3));
    console.log(numSplits_xiaowuc1(s4));

    console.log("");
    console.log(numSplits_hank55663(s));
    console.log(numSplits_hank55663(s2));
    console.log(numSplits_hank55663(s3));
    console.log(numSplits_hank55663(s4));

    console.log("");
    console.log(numSplits_tmwilliamlin168(s));
    console.log(numSplits_tmwilliamlin168(s2));
    console.log(numSplits_tmwilliamlin168(s3));
    console.log(numSplits_tmwilliamlin168(s4));

    console.log("");
    console.log(numSplits_zerotrac2(s));
    console.log(numSplits_zerotrac2(s2));
    console.log(numSplits_zerotrac2(s3));
    console.log(numSplits_zerotrac2(s4));

    // console.log("");
    // console.log(numSplits_Ashishgup1(s));
    // console.log(numSplits_Ashishgup1(s2));
    // console.log(numSplits_Ashishgup1(s3));
    // console.log(numSplits_Ashishgup1(s4));
};

main()