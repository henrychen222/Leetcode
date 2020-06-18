/**
 * 6.17 night
 * https://leetcode.com/problems/hamming-distance/
 */

// Accepted --- 48ms 33.8 MB 97.08%
const hammingDistance = (x, y) => {
    let xStr = addLeadingZero(x.toString(2));
    let yStr = addLeadingZero(y.toString(2));
    let cnt = 0;
    for (let i = 0; i < 32; i++) {
        if (xStr[i] != yStr[i]) cnt++;
    }
    return cnt;
};

const addLeadingZero = (binStr) => {
    let len = binStr.length;
    if (len != 32) {
        for (let i = 1; i <= 32 - len; i++) {
            binStr = '0' + binStr;
        }
    }
    return binStr;
};

const main = () => {
    let x = 1,
        y = 4;
    console.log(hammingDistance(x, y));
};

main()