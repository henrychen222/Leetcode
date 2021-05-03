/**
 * 05/01/21 morning
 */

const pr = console.log;

// Accepted
const replaceDigits = (s) => {
    let n = s.length;
    let res = '';
    for (let i = 0; i < n; i++) {
        if (i & 1) {
            res += sf(s[i - 1], Number(s[i]));
        } else {
            res += s[i];
        }
    }
    return res;
};

const sf = (c, x) => {
    return String.fromCharCode(c.charCodeAt() + x);
};

const main = () => {
    let s = "a1c1e1";
    let s2 = "a1b2c3d4e";
    pr(replaceDigits(s));
    pr(replaceDigits(s2));
};

main()
