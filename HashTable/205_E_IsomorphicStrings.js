/**
 * 6.18 evening  7.28 night complete
 * https://leetcode.com/problems/isomorphic-strings/
 */

// Accepted --- 7156ms 41.7MB 5.10%
const isIsomorphic = (s, t) => {
    let n = s.length;
    let data = [];
    for (let i = 0; i < n; i++) {
        data.push([s[i], t[i]]);
    }
    // console.log(data);
    for (let i = 0; i < data.length; i++) {
        for (let j = i + 1; j < data.length; j++) {
            if (data[i][0] == data[j][0]) {
                if (data[i][1] != data[j][1]) {
                    return false;
                }
            }
            if (data[i][1] == data[j][1]) {
                if (data[i][0] != data[j][0]) {
                    return false;
                }
            }
        }
    }
    return true;
};

const main = () => {
    let s = "egg",
        t = "add";
    let s2 = "foo",
        t2 = "bar";
    let s3 = "paper",
        t3 = "title";
    let s_debug1 = "ab",
        t_debug1 = "aa";
    console.log(isIsomorphic(s, t));
    console.log(isIsomorphic(s2, t2));
    console.log(isIsomorphic(s3, t3));
    console.log(isIsomorphic(s_debug1, t_debug1)); // false
};

main()


// // don't know
// const isIsomorphic = (s, t) => {
//     for (let i = 1; i < s.length; i++) {
//         let flag = true;
//         if (s[i - 1].charCodeAt() < s[i].charCodeAt()) {
//             if (t[i - 1].charCodeAt() >= t[i].charCodeAt()) {
//                 return false;
//             }
//         }
//         if (s[i - 1].charCodeAt() > s[i].charCodeAt()) {
//             if (t[i - 1].charCodeAt() <= t[i].charCodeAt()) {
//                 return false;
//             }
//         }
//         if (s[i - 1].charCodeAt() == s[i].charCodeAt()) {
//             if (t[i - 1].charCodeAt() != t[i].charCodeAt()) {
//                 return false;
//             }
//         }
//     }
//     return true;
// };