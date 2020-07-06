/**
 * 7.4 night 7.5 morning  7.5 night
 * https://leetcode.com/problems/subsets/
 */

// need to rewrite
const subsets = (nums) => {
    return getAllSubsequences(nums);
};

const getAllSubsequences = (arr) => {
    let res = [];
    let str = arr.join("");
    let n = str.length;
    let N = 2 ** n;
    for (let i = 0; i < N; i++) {
        let data = "";
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                data += str[j];
            }
        }
        res.push(data.split("")); // problem  '-112' will use '-' '1' '1' '2' do permutation which actually is '-1' '1' '2'
    }
    console.log(res);
    for (let r = 0; r < res.length; r++) {
        if (res[r].length == 1 && res[r][0] == '-') res.splice(r, 1);
        if (res[r].length >= 2) {
            for (let i = 0; i < res[r].length; i++) {
                if (res[r][i] == '-') {
                    let tmp = '-' + res[r][i + 1];
                    res[r].splice(i, 2, tmp);
                }
            }
        }
    }
    console.log(res);
    let ret = [];
    for (const r of res) {
        let arr = [];
        for (let i of r) {
            arr.push(Number(i));
        }
        ret.push(arr);
    }
    console.log(ret);
    return ret.filter((t = {}, a => !(t[a] = a in t)));;
};

// let data = [];
// const subsets2 = (nums) => {
//     getAllSubsequences2(nums.join(""), "");
//     data = [...new Set(data)];
//     console.log(data);
//     let res = [];
//     for (const i of data) {
//         if (i == '') {
//             res.push([]);
//         } else {
//             res.push([Number(i)]);
//         }
//     }
//     console.log(res);
// };

// const getAllSubsequences2 = (s, ans) => {
//     if (s.length == 0) {
//         if (ans != '-') data.push(ans);
//         return;
//     }
//     getAllSubsequences2(s.substring(1), ans + s.charAt(0));
//     getAllSubsequences2(s.substring(1), ans);
// };

const main = () => {
    let nums = [1, 2, 3];
    let nums2 = [-1, 1, 2];
    // console.log(subsets(nums));
    console.log(subsets(nums2)); // [[],[-1],[1],[-1,1],[2],[-1,2],[1,2],[-1,1,2]]

    // console.log(subsets2(nums));
    // console.log(subsets2(nums2));
};

main()