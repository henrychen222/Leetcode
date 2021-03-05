/**
 * 03/03/21 night
 * https://leetcode.com/problems/longest-repeating-character-replacement/
 * 
 * reference:
 * https://leetcode.com/problems/longest-repeating-character-replacement/discuss/278271/JavaC%2B%2BPython-Sliding-Window-O(N)
 */

const pr = console.log;


// Accepted --- 88ms 93.10%
const AASCII = 'A'.charCodeAt();
const characterReplacement = (s, k) => {
    let n = s.length;
    let count = Array(26).fill(0);
    let left = kocc = 0;
    for (let i = 0; i < n; i++) {
        kocc = Math.max(kocc, ++count[s[i].charCodeAt() - AASCII]);
        let sn = i - left + 1;
        if (sn - kocc > k) {
            count[s[left++].charCodeAt() - AASCII]--;
        }
    }
    return n - left;
};

// Accepted --- 92ms 85.77%
const characterReplacement3 = (s, k) => {
    let n = s.length;
    let res = kocc = 0;
    let m = new Map();
    for (let i = 0; i < n; i++) {
        let update = m.get(s[i]) + 1 || 1;
        m.set(s[i], update);
        kocc = Math.max(kocc, update);
        res - kocc < k ? res++ : m.set(s[i - res], (m.get(s[i - res] || 0) - 1));
    }
    return res;
};

///////////////////////////////////////////////////////////////////////////////////////
// TLE 33/37
const characterReplacement2 = (s, k) => {
    let n = s.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        let m = new Map();
        let keep = s[i];
        let kocc = 1;
        for (let j = i; j < n; j++) {
            let sn = j - i + 1;
            let cur = m.get(s[j]);
            m.set(s[j], cur + 1 || 1);
            if (cur + 1 > kocc) {
                keep = s[j];
                kocc = cur + 1;
            }
            let rest = sn - kocc;
            // pr(s.slice(i, j + 1), sn, rest);
            if (rest <= k) {
                // pr(m, rest);
                res = Math.max(res, sn);
            } else {
                break;
            }
        }
    }
    // pr(memo);
    return res;
};

// TLE 25 / 37
const characterReplacement1 = (s, k) => {
    let n = s.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        let m = new Map();
        for (let j = i; j < n; j++) {
            let sn = j - i + 1;
            m.set(s[j], m.get(s[j]) + 1 || 1);
            m = sortMapByValue(m);
            let keep = m.keys().next().value;
            let rest = sn - m.get(keep);
            pr(s.slice(i, j + 1), sn, rest);
            if (rest <= k) {
                pr(m, rest);
                res = Math.max(res, sn);
            } else {
                break;
            }
        }
    }
    return res;
};

const sortMapByValue = (map) => {
    return new Map([...map].sort((a, b) => b[1] - a[1]));
};

const main = () => {
    let s = "ABAB",
        k = 2;
    let s2 = "AABABBA",
        k2 = 1;
    let s_debug1 = "AAAA",
        k_debug1 = 2;
    let s_debug2 = "ABBB",
        k_debug2 = 2;
    let s_debug3 = "IMNJJTRMJEGMSOLSCCQICIHLQIOGBJAEHQOCRAJQMBIBATGLJDTBNCPIFRDLRIJHRABBJGQAOLIKRLHDRIGERENNMJSDSSMESSTR",
        k_debug3 = 2;
    pr(characterReplacement(s, k));
    pr(characterReplacement(s2, k2));
    pr(characterReplacement(s_debug1, k_debug1)); // 4
    pr(characterReplacement(s_debug2, k_debug2)); // 4
    pr(characterReplacement(s_debug3, k_debug3)); // 6
};

main()