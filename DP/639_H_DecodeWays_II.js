/**
 * 07/10/21 evening
 * https://leetcode.com/problems/decode-ways-ii/
 * 
 * reference:
 * https://www.cnblogs.com/grandyang/p/7279152.html
 * https://leetcode.com/problems/decode-ways-ii/discuss/105274/Python-Straightforward-with-Explanation
 */

// Accepted --- 124ms 100%
const mod = 1e9 + 7;
const numDecodings = (s) => {
    let [e0, e1, e2, f0] = [1, 0, 0, 0];
    for (const c of s) {
        if (c == '*') {
            f0 = 9 * e0 + 9 * e1 + 6 * e2;
            e1 = e0;
            e2 = e0;
        } else {
            f0 = (c > '0') * e0 + e1 + (c <= '6') * e2;
            e1 = (c == '1') * e0;
            e2 = (c == '2') * e0;
        }
        e0 = f0 % mod;
        // pr(e0, e1, e2, f0);
    }
    return e0;
};

const pr = console.log;
const main = () => {
    let s = '*';
    let s2 = "1*";
    let s3 = "2*";
    pr(numDecodings(s))
    pr(numDecodings(s2))
    pr(numDecodings(s3))
};

main()


// pr('2' > '0', '1' > '2', true * 2, false * 2)