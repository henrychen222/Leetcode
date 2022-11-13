/**
 * 06/18/22 evening
 * https://leetcode.com/contest/weekly-contest-298/problems/greatest-english-letter-in-upper-and-lower-case/
 */

const pr = console.log;

const counter = (a_or_s) => { let m = new Map(); for (const x of a_or_s) m.set(x, m.get(x) + 1 || 1); return m; };
const ord = (c) => c.charCodeAt();
const isUpperCase = (c) => { let x = ord(c); return x >= 65 && x <= 90; };

// Accepted
const greatestLetter = (s) => {
    let a = "", b = "", res = "";
    for (const c of s) isUpperCase(c) ? a += c : b += c;
    let ma = counter(a), mb = counter(b);
    // pr(a, b);
    // pr(ma, mb);
    for (const c of s) {
        if (isUpperCase(c) && ma.get(c) >= 1 && mb.get(c.toLowerCase()) >= 1) {
            if (c > res) res = c;
        }
    }
    return res;
};

const main = () => {
    let s = "lEeTcOdE";
    let s2 = "arRAzFif";
    let s3 = "AbCdEfGhIjK";
    let debug1 = "nzmguNAEtJHkQaWDVSKxRCUivXpGLBcsjeobYPFwTZqrhlyOIfdM";
    pr(greatestLetter(s))
    pr(greatestLetter(s2))
    pr(greatestLetter(s3))
    pr(greatestLetter(debug1)) // "Z"
};

main()