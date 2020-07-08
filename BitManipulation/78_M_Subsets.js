/**
 * 7.4 night  7.5 morning  7.5 night  7.8 morning(fixed)
 * reference: https://www.techiedelight.com/difference-between-subarray-subsequence-subset/
 * compare to 1498
 */

// 84ms 37.9MB 24.51%
const subsets = (nums) => {
    return getAllSubsequences(nums);
};

// use array directly
const getAllSubsequences = (arr) => {
    let res = [];
    let n = arr.length;
    let N = 2 ** n;
    for (let i = 0; i < N; i++) {
        let data = [];
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) { // work same as BigInteger.valueOf(i).testBit(j) in java https://www.geeksforgeeks.org/biginteger-testbit-method-in-java/
                data.push(arr[j]);
            }
        }
        res.push(data);
    }
    return res;
};

// transfer to string, issue
// const getAllSubsequences1 = (arr) => {
//     let res = [];
//     let str = arr.join("");
//     let n = str.length;
//     let N = 2 ** n;
//     for (let i = 0; i < N; i++) {
//         let data = "";
//         for (let j = 0; j < n; j++) {
//             if (i & (1 << j)) {
//                 data += str[j];
//             }
//         }
//         res.push(data.split("")); // problem  '-112' will use '-' '1' '1' '2' do permutation which actually is '-1' '1' '2'
//     }
//     console.log(res);
//     for (let r = 0; r < res.length; r++) {
//         if (res[r].length == 1 && res[r][0] == '-') res.splice(r, 1);
//         if (res[r].length >= 2) {
//             for (let i = 0; i < res[r].length; i++) {
//                 if (res[r][i] == '-') {
//                     let tmp = '-' + res[r][i + 1];
//                     res[r].splice(i, 2, tmp);
//                 }
//             }
//         }
//     }
//     console.log(res);
//     let ret = [];
//     for (const r of res) {
//         let arr = [];
//         for (let i of r) {
//             arr.push(Number(i));
//         }
//         ret.push(arr);
//     }
//     console.log(ret);
//     return ret.filter((t = {}, a => !(t[a] = a in t)));;
// };

const main = () => {
    let nums = [1, 2, 3];
    let nums2 = [-1, 1, 2];
    console.log(subsets(nums));
    console.log(subsets(nums2)); // [[],[-1],[1],[-1,1],[2],[-1,2],[1,2],[-1,1,2]]
};

main()