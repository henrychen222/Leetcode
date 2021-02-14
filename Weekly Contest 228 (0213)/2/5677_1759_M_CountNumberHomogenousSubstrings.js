/**
 * 2.13 evening
 * https://leetcode.com/contest/weekly-contest-228/problems/count-number-of-homogenous-substrings/
 */

// TLE
// const countHomogenous1 = (s) => {
//     let n = s.length;
//     let res = 0;
//     for (let i = 0; i < n; i++) {
//         let se = new Set();
//         let cnt = 0;
//         for (let j = i; j < n; j++) {
//             se.add(s[j]);
//             cnt++;
//             if (se.size > 1) {
//                 cnt--;
//                 break;
//             }
//             // console.log(s.slice(i, j + 1));
//         }
//         console.log(cnt);
//         res += cnt;
//     }
//     return res;
// };


// Accepted
const MOD = 1e9 + 7;
const countHomogenous = (s) => {
    let n = s.length;
    let a = [];
    // let st = [];
    // for (const c of s) {
    //     if (st.length != 0) {
    //         let l = st[st.length - 1];
    //         if (c == l) {
    //             st.push(c);
    //         } else {
    //             a.push(st.join(""));
    //             console.log(st, c);
    //             st = [];
    //         }
    //     } else {
    //         st.push(c);
    //     }
    //     console.log(st);
    // }
    // console.log(a);
    let start = 0;
    for (let i = 0; i + 1 < n; i++) {
        if (s[i + 1] != s[i]) {
            a.push(s.slice(start, i + 1));
            start = i + 1;
        }
    }
    // console.log(a, start);
    a.push(s.slice(start));
    // console.log(a);
    let res = 0;
    for (const e of a) {
        let len = e.length;
        res+= sum(len);
    }
    return res % MOD;
};

const sum = (n) => {
    return (1 + n) * n / 2;
};

const main = () => {
    let s = "abbcccaa";
    let s2 = "xy";
    let s3 = "zzzzz";
    console.log(countHomogenous(s));
    console.log(countHomogenous(s2));
    console.log(countHomogenous(s3));
};

main()


// console.log(sum(3), sum(5))