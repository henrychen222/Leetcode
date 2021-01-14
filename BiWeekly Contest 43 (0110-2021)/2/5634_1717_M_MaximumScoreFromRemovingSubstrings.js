/**
 * 1.9 morning
 * https://leetcode.com/contest/biweekly-contest-43/problems/maximum-score-from-removing-substrings/
 */

// TLE
const maximumGain = (s, x, y) => {
    let first, second;
    if (x >= y) {
        first = 'ab';
        second = 'ba';
    } else {
        first = 'ba';
        second = 'ab';
    }
    let res = 0;
    let idxf, idxs;
    while (true) {
        // console.log(res, s);
        idxf = s.indexOf(first);
        if (idxf != -1) {
            first == 'ab' ? res += x : res += y;
            s = s.slice(0, idxf) + s.slice(idxf + 2);
        } else {
            idxs = s.indexOf(second);
            if (idxs != -1) {
                second == 'ab' ? res += x : res += y;
                s = s.slice(0, idxs) + s.slice(idxs + 2);
            } else {
                break;
            }
        }
    }
    return res;
};

const main = () => {
    let s = "cdbcbbaaabab", x = 4, y = 5;
    let s2 = "aabbaaxybbaabb", x2 = 5, y2 = 4;
    console.log(maximumGain(s, x, y));
    console.log(maximumGain(s2, x2, y2));
};

main()