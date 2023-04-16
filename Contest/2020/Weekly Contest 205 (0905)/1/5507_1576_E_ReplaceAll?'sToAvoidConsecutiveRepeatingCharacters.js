/**
 * 9.5 evening
 * https://leetcode.com/contest/weekly-contest-205/problems/replace-all-s-to-avoid-consecutive-repeating-characters/
 */

// Accepted
const modifyString = (s) => {
    let n = s.length;
    for (let i = 0; i < n; i++) {
        if (i == 0) {
            if (s[i] == '?') {
                for (let j = 97; j <= 122; j++) {
                    let c = String.fromCharCode(j);
                    if (c != s[i + 1]) {
                        s = s.replace('?', c);
                        break;
                    }
                }
            }
        } else if (i == n - 1) {
            if (s[i] == '?') {
                for (let j = 97; j <= 122; j++) {
                    let c = String.fromCharCode(j);
                    if (c != s[i - 1]) {
                        s = s.replace('?', c);
                        break;
                    }
                }
            }
        } else {
            if (s[i] == '?') {
                for (let j = 97; j <= 122; j++) {
                    let c = String.fromCharCode(j);
                    if (c != s[i - 1] && c != s[i + 1]) {
                        // console.log(i, s, s[i - 1], s[i + 1]);
                        s = s.replace('?', c);
                        // console.log(s);
                        break;
                    }
                }
            }
        }

    }
    return s;
};

const main = () => {
    let s = "?zs";
    let s2 = "ubv?w";
    let s3 = "j?qg??b";
    let s4 = "??yw?ipkj?";
    console.log(modifyString(s));
    console.log(modifyString(s2));
    console.log(modifyString(s3));
    console.log(modifyString(s4));
};

main()