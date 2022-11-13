/**
 * 05/15/21 evening
 * https://leetcode.com/contest/weekly-contest-241/problems/minimum-number-of-swaps-to-make-the-binary-string-alternating/
 */

const pr = console.log;

// Accepted
const minSwaps = (s) => {
    let n = s.length;
    let r1 = create(n, '0');
    let r2 = create(n, '1');
    // pr(r1, canMake(s, r1), r2, canMake(s, r2));
    // if (r1 == s || r2 == s) return 0;
    if (canMake(s, r1)) {
        if (canMake(s, r2)) {
            let cnt1 = cal(s, r1);  // fuck, wrote to let cnt1 = cal(s, r2)
            let cnt2 = cal(s, r2);
            // pr(cnt1, cnt2)
            return Math.min(cnt1, cnt2);
        } else {
            return cal(s, r1);
        }
    } else {
        if (canMake(s, r2)) {
            return cal(s, r2);
        } else {
            return -1;
        }
    }
};

const cal = (s, r) => {
    let n = s.length;
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] != r[i]) cnt++;
    }
    // pr(cnt, s, "origin", r)
    return cnt / 2;
};

const canMake = (s, r) => {
    let n = s.length;
    let ms = counter(s);
    let mr = counter(r);
    // pr(ms, mr);
    if (ms.get('0') != mr.get('0') || ms.get('1') != mr.get('1')) return 0;
    return 1;
};

const counter = (a_or_s) => { let map = new Map(); for (const i of a_or_s) map.set(i, map.get(i) + 1 || 1); return map; };
const create = (n, start) => {
    let res = start;
    for (let i = 1; i < n; i++) {
        res += (start ^= 1)
    }
    return res;
};

const main = () => {
    let s = "111000";
    let s2 = "010";
    let s3 = "1110";
    let debug1 = "01";
    let debug2 = "010110";
    pr(minSwaps(s))
    pr(minSwaps(s2))
    pr(minSwaps(s3))
    pr(minSwaps(debug1)) // 0
    pr(minSwaps(debug2)) // 1
};

main()