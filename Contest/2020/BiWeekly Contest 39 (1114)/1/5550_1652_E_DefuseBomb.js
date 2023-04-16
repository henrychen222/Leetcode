/**
 * 11.14 morning
 * https://leetcode.com/contest/biweekly-contest-39/problems/defuse-the-bomb/
 */

// Accepted --- 80ms  10:20-11:29 complete   (9:30 - 11:00)
const decrypt = (code, k) => {
    let n = code.length;
    let res = [];
    for (let i = 0; i < n; i++) {
        if (k > 0) {
            if (i + k < n) {
                let tmp = code.slice(i + 1, i + 1 + k);
                // res.push(tmp);
                res.push(sum(tmp));
            } else {
                let tmp1 = code.slice(i + 1);
                let rest = k - tmp1.length;
                let tmp2 = code.slice(0, rest);
                // res.push(tmp1.concat(tmp2));
                res.push(sum(tmp1.concat(tmp2)));
            }
        } else if (k < 0) {
            let t = -k;
            if (i - t >= 0) {
                let tmp = code.slice(i - t, i);
                res.push(sum(tmp));
            } else {
                let tmp1 = code.slice(0, i);
                let rest = t - tmp1.length;
                // console.log(tmp1.length, rest);
                let tmp2 = code.slice(n - rest);
                // console.log(code[i], tmp1, tmp2);
                res.push(sum(tmp1.concat(tmp2)));
            }
        } else {
            res.push(0);
        }
    }
    return res;
};

const sum = (arr) => {
    return arr.reduce((a, b) => a + b);
};

const main = () => {
    let code = [5, 7, 1, 4], k = 3;
    let code2 = [1, 2, 3, 4], k2 = 0;
    let code3 = [2, 4, 9, 3], k3 = -2;
    let code_debug1 = [5, 2, 2, 3, 1], k_debug1 = 3;
    console.log(decrypt(code, k));
    console.log(decrypt(code2, k2));
    console.log(decrypt(code3, k3));
    console.log(decrypt(code_debug1, k_debug1));  // [7,6,9,8,9]
};

main()


// for (let j = 1; j <= k; j++) {
//     if (i + 1 == n) {
//         tmp+=code[0];
//     } else {
//         tmp+=code[i + 1];
//     }
//     if (i + 2 == n) {
//         tmp+=code[0];
//     } else {
//         tmp+=code[i + 2];
//     }
//     if (i + 3 == n) {
//         tmp+=code[0];
//     } else {
//         tmp+=code[i + 3];
//     }
// }