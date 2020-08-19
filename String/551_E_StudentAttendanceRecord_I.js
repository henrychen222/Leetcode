/**
 * 8.18 night
 * https://leetcode.com/problems/student-attendance-record-i/
 */

// wrong, A can be incontinuous
// const checkRecord = (s) => {
//     for (let i = 0; i + 1 < s.length; i++) {
//         if (s[i] == 'A') {
//             if (s[i + 1] == 'A') {
//                 return false;
//             }
//         }
//     }
//     for (let i = 0; i + 2 < s.length; i++) {
//         if (s[i] == 'L') {
//             if (s[i + 1] == 'L' && s[i + 2] == 'L') {
//                 return false;
//             }
//         }
//     }
//     return true;
// };


// Accepted --- 80ms 36.9MB 41.52%
const checkRecord1 = (s) => {
    let n = s.length;
    for (let i = 0; i < n; i++) {
        if (s[i] == 'A') {
            for (let j = i + 1; j < n; j++) {
                if (s[j] == 'A') {
                    return false;
                }
            }
        }
    }
    for (let i = 0; i + 2 < n; i++) {
        if (s[i] == 'L') {
            if (s[i + 1] == 'L' && s[i + 2] == 'L') {
                return false;
            }
        }
    }
    return true;
};

// Accepted --- 84ms 36.8MB 33.14%
const checkRecord = (s) => {
    let n = s.length;
    if (getFrequency(s.split(""), 'A') > 1) return false;
    for (let i = 0; i + 2 < n; i++) {
        if (s[i] == 'L') {
            if (s[i + 1] == 'L' && s[i + 2] == 'L') {
                return false;
            }
        }
    }
    return true;
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const main = () => {
    let s = "PPALLP";
    let s2 = "PPALLL";
    let s_debug = "ALLAPPL";
    console.log(checkRecord(s));
    console.log(checkRecord(s2));
    console.log(checkRecord(s_debug)); // false
};

main()