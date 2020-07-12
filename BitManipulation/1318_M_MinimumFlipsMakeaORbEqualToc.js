/**
 * 7.11 evening
 * https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/
 */

// Accepted --- 68ms 32.7MB 68.18%
const minFlips = (a, b, c) => {
    let aBin = a.toString(2);
    let bBin = b.toString(2);
    let cBin = c.toString(2);
    let n = Math.max(Math.max(aBin.length, bBin.length), cBin.length);
    aBin = addLeadingZero(aBin, n);
    bBin = addLeadingZero(bBin, n);
    cBin = addLeadingZero(cBin, n);
    // console.log(aBin, bBin, cBin);
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        if (cBin[i] == '0') {
            if (aBin[i] == '0' && bBin[i] == '1') {
                cnt++;
            } else if (aBin[i] == '1' && bBin[i] == '0') {
                cnt++;
            } else if (aBin[i] == '1' && bBin[i] == '1') {
                cnt += 2;
            }
        } else {
            if (aBin[i] == '0' && bBin[i] == '0') {
                cnt++;
            }
        }
    }
    return cnt;
};

const addLeadingZero = (binStr, maxLen) => {
    let len = binStr.length;
    if (len != maxLen) {
        for (let i = 1; i <= maxLen - len; i++) {
            binStr = '0' + binStr;
        }
    }
    return binStr;
};

const main = () => {
    let a = 2,
        b = 6,
        c = 5;
    let a2 = 4,
        b2 = 2,
        c2 = 7;
    let a3 = 1,
        b3 = 2,
        c3 = 3;
    console.log(minFlips(a, b, c));
    console.log(minFlips(a2, b2, c2));
    console.log(minFlips(a3, b3, c3));
};

main()