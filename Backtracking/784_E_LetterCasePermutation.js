/**
 * 5.19 afternoon night
 * https://leetcode.com/problems/letter-case-permutation/
 */

/**
 * https://nifannn.github.io/2018/11/09/Algorithm-Notes-Leetcode-784-Letter-Case-Permutation/
 * Accepted --- 120ms 37.4MB 17.18%
 */
const letterCasePermutation_nifannn = (S) => {
    let res = [];
    res.push("");
    for (const c of S.split("")) {
        if (isAlpha(c)) {
            let newRes = [];
            for (const t of res) {
                newRes.push(t + c.toLowerCase().toString());
                newRes.push(t + c.toUpperCase().toString());
            }
            res = newRes;
        } else {
            for (let i = 0; i < res.length; i++) {
                res[i] += c.toString();
                // res[i] = res[i].concat(c.toString());
            }
        }
    }
    return res;
};

/**
 * https://www.cnblogs.com/grandyang/p/9065702.html
 * Accepted --- 116ms 37.2MB 19.63%
 */
const letterCasePermutation_cnblog = (S) => {
    let res = [""];
    for (const c of S) {
        let len = res.length;
        if (c >= '0' && c <= '9') {
            // for (let str of res) {
            //     str += c; // problem
            // }
            for (let i = 0; i < len; i++) { // fixed refer from nifannn
                res[i] += c;
            }
        } else {
            for (let i = 0; i < len; i++) {
                res.push(res[i]);
                res[i] += c.toLowerCase();
                res[len + i] += c.toUpperCase();
            }
        }
    }
    return res;
};

// still not work
const letterCasePermutation_huahua = (S) => {
    let res = [];
    dfs(S, 0, res);
    return res;
};

const dfs = (S, i, res) => {
    if (i == S.length) {
        res.push(S);
        return;
    }
    dfs(S, i + 1, res);
    if (!isAlpha(S[i])) return;
    S[i] ^= 32; // problem
    dfs(S, i + 1, res);
    console.log(S[i]);
    S[i] ^= 32;
};

const isAlpha = (ch) => {
    return typeof ch === "string" && ch.length === 1 && (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z");
}

// wrong
// const letterCasePermutation = (S) => {
//     let res = [];
//     let s = "s";
//     let SCopy = S;
//     let count = countNumber(S);
//     for (let i = 0; i < S.length; i++) {
//         let char = S.charAt(i);
//         if (char >= "a" && char <= "z") {
//             res.push(SCopy.replace(char, char.toUpperCase()));
//             count--;
//         } else if (char >= "A" && char <= "Z") {
//             res.push(SCopy.replace(char, char.toLowerCase()));
//             count--;
//         }
//     }
//     console.log(res);
// };

// const countNumber = (s) => {
//     let count = 0;
//     for (const i of s) {
//         if ((i >= "a" && i <= "z") || i >= "A" && i <= "Z") count++;
//     }
//     return count;
// }


const main = () => {
    let S = "a1b2";
    let S2 = "3z4";
    let S3 = "12345";

    // console.log(letterCasePermutation(S));
    // console.log(letterCasePermutation(S2));
    // console.log(letterCasePermutation(S3));

    /*************************************************/
    console.log(letterCasePermutation_nifannn(S));
    console.log(letterCasePermutation_nifannn(S2));
    console.log(letterCasePermutation_nifannn(S3));

    console.log("")
    console.log(letterCasePermutation_cnblog(S));
    console.log(letterCasePermutation_cnblog(S2));
    console.log(letterCasePermutation_cnblog(S3));

    console.log("")
    console.log(letterCasePermutation_huahua(S));
    // console.log(letterCasePermutation_huahua(S2));
    // console.log(letterCasePermutation_huahua(S3));

};

main()