/**
 * 10.17 evening
 * https://leetcode.com/contest/weekly-contest-211/problems/largest-substring-between-two-equal-characters/
 */

// Accepted
const maxLengthBetweenEqualCharacters = (s) => {
    let n = s.length;
    let max = -1;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let tmp = s.slice(i, j + 1);
            // console.log(tmp);
            if (tmp[0] == tmp[tmp.length - 1]) {
                max = Math.max(max, j - i + 1 - 2);
            }
        }
    }
    return max;
};

const main = () => {
    let s = "aa";
    let s2 = "abca";
    let s3 = "cbzxy";
    let s4 = "cabbac";
    console.log(maxLengthBetweenEqualCharacters(s));
    console.log(maxLengthBetweenEqualCharacters(s2));
    console.log(maxLengthBetweenEqualCharacters(s3));
    console.log(maxLengthBetweenEqualCharacters(s4));
};

main()