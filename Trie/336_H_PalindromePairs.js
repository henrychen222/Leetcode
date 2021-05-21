/**
 * 05/20/21 morning
 * https://leetcode.com/problems/palindrome-pairs/
 */

// Accepted --- 392ms 53.15%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/5272039.html
 * https://leetcode.com/problems/palindrome-pairs/discuss/79314/My-C%2B%2B-solution-(275ms)-worst-case-O(N2)
 */
const palindromePairs = (w) => {
    let n = w.length;
    let res = [];
    let m = counter_uniqueValue_index(w);
    // pr(m);
    for (let i = 0; i < n; i++) {
        let l = r = 0;
        let sn = w[i].length;
        while (l <= r) { // for each word, check all possible substrings to make palidrome, if exists in map
            let tmp = reverse2(w[i].substr(l, r - l));
            // pr(w[i].substr(l, r - l), tmp);
            let j = m.get(tmp);
            if (j != undefined && i != j) {
                if (isPalindrome(w[i].substr(l == 0 ? r : 0, l == 0 ? sn - r : l))) {
                    // pr("exist", tmp);
                    l == 0 ? res.push([i, j]) : res.push([j, i]);
                }
            }
            r < sn ? r++ : l++;
        }
    }
    return res;
};
const counter_uniqueValue_index = (a_or_s) => {
    let m = new Map();
    let n = a_or_s.length;
    for (let i = 0; i < n; i++) m.set(a_or_s[i], i);
    return m;
};
const reverse2 = (s) => {
    let res = "";
    for (let i = s.length - 1; i >= 0; i--) {
        res += s[i];
    }
    return res;
};

// Accepted --- 6148ms 5.59%
const palindromePairs3 = (w) => {
    let n = w.length;
    let res = [];
    // let m = new Map();
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let tmp1 = [w[i] + w[j],
                [i, j]
            ];
            let tmp2 = [w[j] + w[i],
                [j, i]
            ];
            let a = [tmp1, tmp2];
            for (const [tmp, ke] of a) {
                if (isPalindrome(tmp)) res.push(ke);
                // if (m.has(tmp)) {
                //     res.push(ke);
                // } else {
                //     if (isPalindrome(tmp)) {
                //         res.push(ke);
                //         m.set(tmp, 1);
                //     }
                // }
            }
        }
    }
    return res;
};

// TLE
const palindromePairs2 = (w) => {
    let n = w.length;
    let m = new Map();
    let res = new Set();
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let ij = i + " " + j;
            let ji = j + " " + i;
            let a = [
                [w[i] + w[j], ij],
                [w[j] + w[i], ji]
            ]
            for (const [tmp, ke] of a) {
                if (m.has(tmp)) {
                    if (m.get(tmp)) res.add(ke);
                } else {
                    if (isPalindrome(tmp)) {
                        res.add(ke);
                        m.set(ke, 1);
                    } else {
                        m.set(ke, 0);
                    }
                }
            }
        }
    }
    return [...res].map(x => {
        let a = x.split(" ");
        return [Number(a[0]), Number(a[1])];
    });
};

// TLE
const palindromePairs1 = (w) => {
    let n = w.length;
    let m = new Map();
    let res = new Set();
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i == j) continue;
            let ke = i + " " + j;
            let tmp = w[i] + w[j];
            // pr(ke, tmp)
            if (m.has(tmp)) {
                if (m.get(tmp)) res.add(ke);
            } else {
                if (isPalindrome(tmp)) {
                    res.add(ke);
                    m.set(ke, 1);
                } else {
                    m.set(ke, 0);
                }
            }
        }
    }
    // pr(res);
    return [...res].map(x => {
        let a = x.split(" ");
        return [Number(a[0]), Number(a[1])];
    });
};

const isPalindrome = (s) => {
    let n = s.length;
    let i = 0;
    let j = n - 1;
    while (i < j) {
        if (s[i++] != s[j--]) return false;
    }
    return true;
};

const pr = console.log;
const main = () => {
    let words = ["abcd", "dcba", "lls", "s", "sssll"];
    let words2 = ["bat", "tab", "cat"];
    let words3 = ["a", ""];
    let debug1 = ["", "adijdce", "i", "egjgc", "jcjcj", "f", "hfcbdah", "bhb", "afie", "fegc", "fcbeg", "fihbaga", "ehgffg", "gjih", "ejdejg", "gj", "a", "fbh", "hg", "addi"];
    pr(palindromePairs(words));
    pr(palindromePairs(words2));
    pr(palindromePairs(words3));
    pr(palindromePairs(debug1));
};

main()

// pr(isPalindrome('a'))