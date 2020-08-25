/**
 * 5.31 evening  8.22 afternoon complete
 * https://leetcode.com/problems/increasing-decreasing-string/
 */

// Accepted 916ms 5.31%
const sortString = (s) => {
    let stack = [];
    while (s.length > 0) {
        let l = [];
        let itemUsed = [];
        let sASC = s.split("").sort((a, b) => a.localeCompare(b));
        stack.push(sASC[0]);
        itemUsed.push(sASC[0]);
        while (true) {
            l.push(stack.length);
            if (l[l.length - 1] == l[l.length - 2]) break;
            let endASCII = stack[stack.length - 1].charCodeAt();
            for (let i = 0; i < sASC.length; i++) {
                if (sASC[i].charCodeAt() > endASCII) {
                    stack.push(sASC[i]);
                    itemUsed.push(sASC[i]);
                    break;
                }
            }
        }
        s = updateS(s, itemUsed);
        // console.log(stack.join(""), s);
        if (s.length == 0) break;
        l = [];
        itemUsed = [];
        let sDESC = s.split("").sort((a, b) => b.localeCompare(a));
        stack.push(sDESC[0]);
        itemUsed.push(sDESC[0]);
        while (true) {
            l.push(stack.length);
            if (l[l.length - 1] == l[l.length - 2]) break;
            let endASCII = stack[stack.length - 1].charCodeAt();
            for (let i = 0; i < sDESC.length; i++) {
                if (sDESC[i].charCodeAt() < endASCII) {
                    stack.push(sDESC[i]);
                    itemUsed.push(sDESC[i]);
                    break;
                }
            }
        }
        s = updateS(s, itemUsed);
        // console.log(stack.join(""), s);
        // console.log("\n")
    }
    return stack.join("");
};

const updateS = (s, itemUsed) => {
    for (const i of itemUsed) {
        s = s.replace(i, "");
    }
    return s;
};

const main = () => {
    // Step 1: "a" Step 2: "ab"  Step 3: "abc"
    let s = "aaaabbbbcccc";
    let s2 = "rat";

    let s3 = "leetcode";
    let s4 = "ggggggg";
    let s5 = "spo";

    console.log(sortString(s));
    console.log(sortString(s2));
    console.log(sortString(s3));
    console.log(sortString(s4));
    console.log(sortString(s5));


    // console.log(stepFourToSix("abc"));

};

main()


// // need to fix
// const sortString = (s) => {
//     let res = "";

//     let step1To3 = stepOneToThree(s, res);

//     res = step1To3[0];
//     s = step1To3[1];

//     let step4To6 = stepFourToSix(s, res);
//     res = step4To6[0];
//     s = step4To6[1];
//     console.log("s is:", s) // wrong   // "aabbcc" for example 1
//     console.log("res is:", res)

//     // Step 7
//     for (const i of s) {
//         res = stepOneToThree(s, res)[0];
//         res = stepFourToSix(s, res)[0];
//     }
//     return res;
// };

// const stepOneToThree = (s, res) => {
//     const small = smallest(s);
//     res += small;
//     console.log("after step 1: ", res);
//     s = s.replace(small, '');

//     res = smallestGreaterLastAppend(s, res)[0];
//     s = smallestGreaterLastAppend(s, res)[1];

//     console.log("after step 2 3: ", res);
//     return [res, s];
// }

// const stepFourToSix = (s, res) => {
//     const large = largest(s);
//     res += large;
//     console.log("after step 4: ", res);
//     s = s.replace(large, '');

//     res = largestSmallerLastAppend(s, res)[0];
//     s = largestSmallerLastAppend(s, res)[1];
//     console.log("after step 5 6: ", res);
//     return [res, s];
// }

// const smallest = (s) => {
//     s = s.split("").sort((a, b) => a.charCodeAt() - b.charCodeAt()).join("");
//     return s[0];
// }

// const smallestGreaterLastAppend = (s, res) => {
//     s = s.split("").sort((a, b) => a.charCodeAt() - b.charCodeAt()).join("");
//     for (const i of s) {
//         if (i.charCodeAt() > res[res.length - 1].charCodeAt()) {
//             res += i;
//             s = s.replace(i, '');
//         }
//     }
//     return [res, s];
// }

// const largestSmallerLastAppend = (s, res) => {
//     s = s.split("").sort((a, b) => b.charCodeAt() - a.charCodeAt()).join("");
//     for (const i of s) {
//         if (i.charCodeAt() < res[res.length - 1].charCodeAt()) {
//             res += i;
//             s = s.replace(i, '');
//         }
//     }
//     return [res, s];
// }

// const largest = (s) => {
//     s = s.split("").sort((a, b) => b.charCodeAt() - a.charCodeAt()).join("");
//     return s[0];
// }