/**
 * 9.8 morning
 * https://leetcode.com/problems/permutation-in-string/
 */

// Accepted --- 1168ms 15.17%
let map1 = new Map();
const checkInclusion = (s1, s2) => {
    let n1 = s1.length;
    let n2 = s2.length;
    let arr1 = s1.split("");
    let arr2 = s2.split("");
    let unique1 = [...new Set(arr1)];
    for (const e of unique1) {
        map1.set(e, getFrequency(arr1, e));
    }
    // console.log(map1);
    for (let i = 0; i < n2; i++) {
        let tmp2 = arr2.slice(i, i + n1);
        if (tmp2.length == n1) {
            // console.log(tmp2, unique1.length);
            let unique2 = [...new Set(tmp2)];
            if (unique2.length == unique1.length) {
                if (checkElements(unique1, unique2, tmp2)) {
                    // console.log(unique2, unique1)
                    return true;
                }
            }
        }
    }
    return false;
};

const checkElements = (unique1, unique2, tmp2) => {
    for (const c2 of unique2) {
        if (unique1.indexOf(c2) == -1) return false;
        if (getFrequency(tmp2, c2) != map1.get(c2)) return false;
    }
    return true;
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const main = () => {
    let s1 = "ab",
        s2 = "eidbaooo";
    let s1_2 = "ab",
        s2_2 = "eidboaoo";
    let s1_debug1 = "abc",
        s2_debug1 = "ccccbbbbaaaa";
    let s1_debug2 = "ccc",
        s2_debug2 = "cbac";
    let s1_debug3 = "prosperity",
        s2_debug3 = "properties";
    let s1_debug4 = "hello",
        s2_debug4 = "ooolleoooleh";
    console.log(checkInclusion(s1, s2));
    console.log(checkInclusion(s1_2, s2_2));
    console.log(checkInclusion(s1_debug1, s2_debug1)); // false
    console.log(checkInclusion(s1_debug2, s2_debug2)); // false
    console.log(checkInclusion(s1_debug3, s2_debug3)); // false
    console.log(checkInclusion(s1_debug4, s2_debug4)); // false

};

main()



// Time limit 77 / 103
// const checkInclusion1 = (s1, s2) => {
//     let n1 = s1.length;
//     let n2 = s2.length;
//     let s1Sort = s1.split("").sort((a, b) => a.localeCompare(b)).join("");
//     for (let i = 0; i < n2; i++) {
//         let tmp = s2.slice(i, i + n1);
//         // console.log(tmp);
//         if (tmp.length == n1) {
//             tmp = tmp.split("").sort((a, b) => a.localeCompare(b)).join("");
//             // console.log(tmp, s1Sort);
//             if (tmp == s1Sort) return true;
//         }
//     }
//     return false;
// };



// // out of momory
// let permArr = [];
// let usedChars = [];
// const checkInclusion = (s1, s2) => {
//     let len1 = s1.length;
//     let uLen1 = [...new Set(s1.split(""))].length;
//     let data = permute(s1.split("")).map(x => x.join(""));
//     data = [...new Set(data)].filter(x => x.length == len1 && [...new Set(x.split(""))].length == uLen1);
//     console.log(data, data.some(x => s2.indexOf(x) != -1));
//     if (data.some(x => s2.indexOf(x) != -1) == true) return true;
//     return false;
// };

// const permute = (input) => {
//     let ch;
//     for (let i = 0; i < input.length; i++) {
//         ch = input.splice(i, 1)[0];
//         usedChars.push(ch);
//         if (input.length == 0) {
//             permArr.push(usedChars.slice());
//         }
//         permute(input);
//         input.splice(i, 0, ch);
//         usedChars.pop();
//     }
//     return permArr;
// };