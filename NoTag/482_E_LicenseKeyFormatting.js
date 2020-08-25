/**
 * 8.24 night
 * https://leetcode.com/problems/license-key-formatting/
 */

// Accepted --- 148ms 30.60%
const licenseKeyFormatting1 = (S, K) => {
    let n = S.length;
    let s = "";
    for (const c of S) {
        if (c != '-') {
            s += c.toUpperCase();
        }
    }
    // console.log(s);
    s = reverse(s);
    // console.log(s);
    let groups = [];
    for (let i = 0; i < n; i += K) {
        let tmp = s.slice(i, i + K);
        if (tmp.length > 0) {
            groups.push(tmp);
        }
    }
    let res = '';
    let len = groups.length;
    for (let i = len - 1; i >= 0; i--) {
        res += reverse(groups[i]);
        res += '-';
    }
    return res.slice(0, res.length - 1);
};

const reverse = (s) => {
    let n = s.length;
    let res = "";
    for (let i = n - 1; i >= 0; i--) {
        res += s[i];
    }
    return res;
};

const main = () => {
    let S = "5F3Z-2e-9-w",
        K = 4;
    let S2 = "2-5g-3-J",
        K2 = 2;
    // console.log(licenseKeyFormatting(S, K));
    console.log(licenseKeyFormatting(S2, K2));
};

main()