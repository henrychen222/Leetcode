/*
 * 02/04/23 night
 * https://leetcode.com/contest/weekly-contest-331/problems/count-vowel-strings-in-ranges/
 */

const pr = console.log;

const isVowel = (c) => 'aeiou'.indexOf(c) != -1;

function Bisect() {
    return { insort_right, insort_left, bisect_left, bisect_right }
    function insort_right(a, x, lo = 0, hi = null) {
        lo = bisect_right(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_right(a, x, lo = 0, hi = null) { // > upper_bound
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = parseInt((lo + hi) / 2);
            a[mid] > x ? hi = mid : lo = mid + 1;
        }
        return lo;
    }
    function insort_left(a, x, lo = 0, hi = null) {
        lo = bisect_left(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_left(a, x, lo = 0, hi = null) { // >= lower_bound
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = parseInt((lo + hi) / 2);
            a[mid] < x ? lo = mid + 1 : hi = mid;
        }
        return lo;
    }
}

// Accepted
const vowelStrings = (a, queries) => {
    let ia = [], res = [], bi = new Bisect();
    for (let i = 0; i < a.length; i++) {
        let s = a[i];
        if (isVowel(s[0]) && isVowel(s[s.length - 1])) ia.push(i);
    }
    for (const [l, r] of queries) {
        let lb = bi.bisect_left(ia, l); // >= l
        let rb = bi.bisect_right(ia, r) - 1; // <= r
        res.push(rb - lb + 1);
    }
    return res;
};

const main = () => {
    let words = ["aba", "bcb", "ece", "aa", "e"], queries = [[0, 2], [1, 4], [1, 1]];
    let words2 = ["a", "e", "i"], queries2 = [[0, 2], [0, 1], [2, 2]]
    pr(vowelStrings(words, queries))
    pr(vowelStrings(words2, queries2))
};

main()