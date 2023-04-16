/*
 * 12/31/22 evening
 * https://leetcode.com/contest/weekly-contest-326/problems/partition-string-into-substrings-with-values-at-most-k/
 */

const pr = console.log;

// Accepted
// clean up
const minimumPartition = (s, k) => {
    let n = s.length, cur = 0, res = 0;
    for (let i = 0; i < n; i++) {
        let v = s[i] - '0';
        // pr(s[i], v)
        if (cur * 10 + v <= k) {
            cur = cur * 10 + v;
        } else {
            if (cur == 0 || cur > k) {
                return -1;
            } else {
                res++;
                cur = v;
            }
        }
    }
    if (cur > 0 && cur <= k) res++;
    return res;
};

///////////////////////////////////////////////////////////////////////
// Accepted
// reference: https://www.geeksforgeeks.org/minimum-partitions-of-string-such-that-each-part-is-at-most-k/
const minimumPartition1 = (s, k) => {
    let n = s.length, cur = 0, res = 0;
    for (let i = 0; i < n; i++) {
        // pr(i, s.charCodeAt(i), '0'.charCodeAt(0), ord(s[i]))
        if (cur * 10 + (s.charCodeAt(i) - '0'.charCodeAt(0)) <= k) {
            cur = cur * 10 + (s.charCodeAt(i) - '0'.charCodeAt(0));
        } else {
            if (cur == 0 || cur > k) {
                return -1;
            }
            else {
                res++;
                cur = s.charCodeAt(i) - '0'.charCodeAt(0);
            }
        }
    }
    if (cur > 0 && cur <= k) res++;
    return res;
};

const main = () => {
    let s = "165462", k = 60;
    let s2 = "238182", k2 = 5;
    let s3 = "7891634", k3 = 21;
    pr(minimumPartition(s, k))
    pr(minimumPartition(s2, k2))
    pr(minimumPartition(s3, k3))
};

main()