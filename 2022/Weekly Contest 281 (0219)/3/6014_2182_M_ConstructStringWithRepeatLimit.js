/**
 * 02/19/22 evening
 * https://leetcode.com/contest/weekly-contest-281/problems/construct-string-with-repeat-limit/
 */

const ord = (c) => c.charCodeAt();

// Accepted
const repeatLimitedString = (s, limit) => {
    let f = Array(26).fill(0), res = '';
    for (const c of s) f[ord(c) - 97]++;
    for (let i = 25; ~i; i--) {
        if (f[i] == 0) continue;
        let c = String.fromCharCode(97 + i);
        while (f[i] > limit) {
            res += c.repeat(limit);
            f[i] -= limit;
            let findBridge = false, bridge, j;
            for (j = 25; ~j; j--) { // append second larger
                if (j == i) continue;
                if (f[j] > 0) {
                    findBridge = true;
                    bridge = String.fromCharCode(97 + j);
                    break;
                }
            }
            if (!findBridge) return res;
            // pr(111, res, bridge)
            res += bridge;
            f[j]--;
        }
        res += c.repeat(f[i]);
        f[i] = 0;
        // pr(c, res)
    }
    return res;
};

const pr = console.log;
const main = () => {
    let s = "cczazcc", repeatLimit = 3;
    let s2 = "aababab", repeatLimit2 = 2;
    pr(repeatLimitedString(s, repeatLimit))
    pr(repeatLimitedString(s2, repeatLimit2))
};

main()