// // 4.18 night for leetcode weekly contest 5388
// // https://www.cnblogs.com/grandyang/p/8799483.html

// const reorganizeString = (s) => {
//     let n = s.length;
//     let idx = 1;
//     let cnt = [];
//     for (let i = 0; i < 26; ++i) {
//         cnt.push(0)
//     }

//     console.log(cnt)

//     for (const c of s) {
//         let idx = cnt.indexOf(c-'a');
//         idx += 100
//         // cnt[c - 'a'] += 100;
//     }
//     console.log(cnt)

//     for (let i = 0; i < 26; ++i) {
//         cnt[i] += i
//     }
//     cnt.sort();
//     console.log(cnt)
//     for (const num of cnt) {
//         let t = num / 100;
//         let ch = 'a' + (num % 100);
//         if (t > (n + 1) / 2)
//             return "";
//         for (let i = 0; i < t; ++i) {
//             if (idx >= n)
//                 idx = 0;
//             s[idx] = ch;
//             idx += 2;
//         }
//     }
//     return s;
// };

// const main = () => {
//     s1 = "aab";
//     s2 = "aaab";

//     console.log(reorganizeString(s1))
//     // console.log(reorganizeString(s2))
// }

// main()