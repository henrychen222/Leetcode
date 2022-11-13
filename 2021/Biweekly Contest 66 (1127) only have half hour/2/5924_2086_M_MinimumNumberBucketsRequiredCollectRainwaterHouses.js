/**
 * 11/27/21 morning
 * https://leetcode.com/contest/biweekly-contest-66/problems/minimum-number-of-buckets-required-to-collect-rainwater-from-houses/
 */

const pr = console.log;

// Accepted after Contest
// fuck not enough time  10:24 start (9:30 start), only 10 more minute needs (12:26-12:36)
const minimumBuckets = (s) => {
    let n = s.length, h = [];
    if (n == 1 && s[0] == 'H') return -1;
    for (let i = 0; i < n; i++) {
        if (s[i] == 'H') {
            if (i == 0) {
                if (s[i + 1] == 'H') return -1;
            } else if (i == n - 1) {
                if (s[i - 1] == 'H') return -1;
            } else {
                if (s[i - 1] == 'H' && s[i + 1] == 'H') {
                    return -1;
                }
            }
            h.push(i);
        }
    }
    let len = h.length, se = new Set(), used = new Set();
    for (let i = 0; i + 1 < len;) {
        if (used.has(h[i + 1])) continue;
        if (h[i + 1] - h[i] == 2) {
            se.add(h[i] + 1);
            used.add(h[i + 1]);
            used.add(h[i]);
            i += 2;
        } else {
            i++;
        }
    }
    // pr(h, len)
    // pr(se, used);
    let rest = len - used.size;
    return se.size + rest;
};

const main = () => {
    let street = "H..H";
    let street2 = ".H.H.";
    let street3 = ".HHH.";
    let street4 = "H";
    let street5 = ".";
    let debug1 = ".HH.H.H.H..";
    pr(minimumBuckets(street))
    pr(minimumBuckets(street2))
    pr(minimumBuckets(street3))
    pr(minimumBuckets(street4))
    pr(minimumBuckets(street5))
    pr(minimumBuckets(debug1)) // 3
};

main()