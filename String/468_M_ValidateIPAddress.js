/**
 * 03/28/22 evening
 * https://leetcode.com/problems/validate-ip-address/
 */

const pr = console.log;

const isDigit = (c) => '0123456789'.indexOf(c) != -1;
const isHexadecimal = (c) => '0123456789abcdefABCDEF'.indexOf(c) != -1;

// Accepted --- 88ms 36.60%
const validIPAddress = (ss) => {
    let cnt = firstCheck(ss, '.'), a = ss.split('.');
    // pr(a, cnt);
    if (cnt == 3) {
        let ok = true;
        for (const s of a) {
            if (!IPV4(s)) {
                ok = false;
                break;
            }
        }
        if (ok) return 'IPv4';
    }
    cnt = firstCheck(ss, ':'), a = ss.split(':');
    // pr(a, cnt);
    if (cnt == 7) {
        let ok = true;
        for (const s of a) {
            if (!IPV6(s)) {
                ok = false;
                break;
            }
        }
        if (ok) return 'IPv6';
    }
    return 'Neither';
};

const firstCheck = (s, mark) => {
    let cnt = 0, n = s.length;
    if (s[0] == mark || s[n - 1] == mark) return false;
    for (let i = 0; i < n; i++) {
        if (s[i] == mark) {
            if (i - 1 >= 0 && s[i - 1] == mark) {
                cnt = false;
                break;
            }
            cnt++;
        }
    }
    return cnt;
};

const IPV4 = (s) => {
    if (s[0] == '0' && s.length > 1) return false;
    for (let c of s) {
        if (!isDigit(c)) return false;
    }
    let x = s - '0';
    return x >= 0 && x <= 255;
};

const IPV6 = (s) => {
    for (let c of s) {
        if (!isHexadecimal(c)) return false;
    }
    return s.length >= 1 && s.length <= 4;
};

const main = () => {
    let s = "172.16.254.1";
    let s2 = "2001:0db8:85a3:0:0:8A2E:0370:7334";
    let s3 = "256.256.256.256";
    let debug1 = "12..33.4";
    let debug2 = "2001:0db8:85a3:0:0:8A2E:0370:7334:";
    let debug3 = "192.0.0.1";
    let debug4 = "1.0.1.";
    pr(validIPAddress(s))
    pr(validIPAddress(s2))
    pr(validIPAddress(s3))
    pr(validIPAddress(debug1)) // "Neither"
    pr(validIPAddress(debug2)) // "Neither"
    pr(validIPAddress(debug3)) // "IPv4"
    pr(validIPAddress(debug4)) // "Neither"
};

main()