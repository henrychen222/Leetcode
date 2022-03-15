/**
 * 03/08/22 morning
 * https://leetcode.com/problems/magical-string/
 * 
 * reference:
 * https://www.cnblogs.com/grandyang/p/6286540.html
 * https://leetcode.com/problems/magical-string/discuss/96408/short-c
 * 
 * https://en.wikipedia.org/wiki/Kolakoski_sequence
 */

const pr = console.log;

// Accepted --- 2331ms 6.25%
const magicalString1 = (n) => {
    let s = '122', p = 2;
    while (s.length < n) {
        let cur = s[s.length - 1] ^ 3, t = (cur + '').repeat(s[p++] - '0');
        // pr(s, cur, t);
        s += t;
    }
    // pr(s);
    return s.slice(0, n).split("").filter(c => c == '1').length;
};

// Accepted --- 2135ms 6.25%
const magicalString = (n) => {
    let s = '122', p = 2;
    while (s.length < n) {
        let cur = s[s.length - 1] ^ 3, t = (cur + '').repeat(s[p++] - '0'); // ^ 3   1 -> 2  2 -> 1 switch
        s += t;
    }
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] == '1') cnt++;
    }
    return cnt;
};

const main = () => {
    let n = 6;
    let n2 = 1;
    let n_debug1 = 4;
    let n_debug2 = 7;
    pr(magicalString(n))
    pr(magicalString(n2))
    pr(magicalString(n_debug1)) // 2
    pr(magicalString(n_debug2)) // 4
};

main()

// pr(1 ^ 3, 2 ^ 3);