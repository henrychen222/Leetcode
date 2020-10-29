/**
 * 8.5 night
 * https://leetcode.com/problems/number-of-lines-to-write-string/
 */

// Accepted --- 76ms 83.33%
// https://leetcode.com/problems/number-of-lines-to-write-string/discuss/120666/Easy-Solution-6-lines-C%2B%2BJavaPython
const numberOfLines = (widths, S) => {
    let res = 1;
    let cur = 0;
    for (const c of S) {
        let width = widths[c.charCodeAt() - 'a'.charCodeAt()];
        if (cur + width > 100) {
            res++;
            cur = width;
        } else {
            cur += width;
        }
        // console.log(res, cur);
    }
    return [res, cur];
};

const main = () => {
    let widths = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
        S = "abcdefghijklmnopqrstuvwxyz";
    let widths2 = [4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
        S2 = "bbbcccdddaaa";
    let widths_debug1 = [7, 5, 4, 7, 10, 7, 9, 4, 8, 9, 6, 5, 4, 2, 3, 10, 9, 9, 3, 7, 5, 2, 9, 4, 8, 9],
        S_debug1 = "zlrovckbgjqofmdzqetflraziyvkvcxzahzuuveypqxmjbwrjvmpdxjuhqyktuwjvmbeswxuznumazgxvitdrzxmqzhaaudztgie";
    console.log(numberOfLines(widths, S));
    console.log(numberOfLines(widths2, S2));
    console.log(numberOfLines(widths_debug1, S_debug1)); // [zlrovckbgjqofmdz, qetflraziyvkvcx, zahzuuveypqxmjb, wrjvmpdxjuhqyk, tuwjvmbeswxuznuma, zgxvitdrzxmqzh, aaudztgie];
};

main()


// need to fix
// const numberOfLines = (widths, S) => {
//     let map = new Map();
//     for (let i = 0; i < widths.length; i++) {
//         map.set(String.fromCharCode(97 + i), widths[i]);
//     }
//     console.log(map);
//     let record = [];
//     let line = 0;
//     let i = 0;
//     let start = 0;
//     while (i < S.length) {
//         line += map.get(S[i]);
//         if (line > 100) {
//             let tmp = S.slice(start, i);
//             console.log('>', tmp);
//             record.push(tmp);
//             start = i;
//             line -= 100;
//             console.log(line);
//         }
//         // else if (line == 100) {
//         //     let tmp = S.slice(start, i);
//         //     console.log('==', tmp);
//         //     record.push(tmp);
//         //     start = i + 1;
//         //     line = 0;
//         // }
//         i++;
//     }
//     console.log(record, line, start, S[start]);
//     let lastLine = S.slice(start);
//     console.log(lastLine); // aaudztgie

//     console.log(sum('zahzuuveypqxmjb', map));

//     return [record.length + 1, sum(lastLine, map)];
// };

// const sum = (s, map) => {
//     let sum = 0;
//     for (const c of s) {
//         sum += map.get(c);
//     }
//     return sum;
// };