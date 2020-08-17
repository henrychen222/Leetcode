/**
 * 6.7 night 8.15 evening complete
 * https://leetcode.com/problems/positions-of-large-groups/
 */

// Accepted --- 96ms 40.2MB 51.63%
const largeGroupPositions2 = (S) => {
    let n = S.length;
    let record = [];
    let stack = [S[0]];
    for (let i = 1; i < n; i++) {
        let end = stack[stack.length - 1];
        if (S[i] == end) {
            stack.push(S[i]);
            continue; // add a continue here
        } else {
            record.push([stack, i - 1]);
            stack = [];
            stack.push(S[i]);
            continue;
        }
    }
    record.push([stack, n - 1]);
    let res = [];
    if (record[0][0].length >= 3) res.push([0, record[0][1]]);
    for (let i = 1; i < record.length; i++) {
        let group = record[i][0];
        if (group.length >= 3) {
            res.push([record[i - 1][1] + 1, record[i][1]]);
        }
    }
    return res;
};

// Accepted --- 96ms 40.2MB 51.63%
const largeGroupPositions = (S) => {
    let n = S.length;
    let record = [];
    let stack = [S[0]];
    for (let i = 1; i < n; i++) {
        let end = stack[stack.length - 1];
        if (S[i] == end) {
            stack.push(S[i]);
        } else {
            record.push([stack, i - 1]);
            stack = [];
            stack.push(S[i]);
            continue;
        }
    }
    record.push([stack, n - 1]); // last group
    // console.log(record);
    let res = [];
    if (record[0][0].length >= 3) res.push([0, record[0][1]]);
    for (let i = 1; i < record.length; i++) {
        let group = record[i][0];
        if (group.length >= 3) {
            res.push([record[i - 1][1] + 1, record[i][1]]);
        }
    }
    return res;
};

const main = () => {
    let S = "abbxxxxzzy";
    let S2 = "abc";
    let S3 = "abcdddeeeeaabbbcd";
    let debug = "ggggg";
    console.log(largeGroupPositions(S));
    console.log(largeGroupPositions(S2));
    console.log(largeGroupPositions(S3));
    console.log(largeGroupPositions(debug)); // [[0, 4]]

    console.log("");
    console.log(largeGroupPositions2(S));
    console.log(largeGroupPositions2(S2));
    console.log(largeGroupPositions2(S3));
    console.log(largeGroupPositions2(debug));
};

main()


//////////////////////////////////// 8.15 evening //////////////////////////////////
// // issue try to improve
// const largeGroupPositions = (S) => {
//     let n = S.length;
//     let record = [];
//     let stack = [S[0]];
//     let nextStartRecord = [0];
//     let res = [];
//     for (let i = 1; i < n; i++) {
//         let end = stack[stack.length - 1];
//         if (S[i] == end) {
//             stack.push(S[i]);
//         } else {
//             record.push(stack);
//             if (record.length == 1) {
//                 if (record[0].length >= 3) {
//                     nextStartRecord.push(i - 1);
//                     res.push([0, i - 1]);
//                 }
//             }
//             let recordEnd = record[record.length - 1];
//             if (recordEnd.length >= 3) {
//                 let nextStart;
//                 if (nextStartRecord.length == 0) {
//                     nextStart = 0;
//                 } else {
//                     nextStart = nextStartRecord[nextStartRecord.length - 1];
//                     nextStartRecord.push(i - 1);
//                 }
//                 res.push([nextStart, i - 1]);
//             }
//             console.log(stack, record, res);

//             stack = [];
//             stack.push(S[i]);
//             continue;
//         }
//     }
//     record.push([stack, n - 1]);
//     if (record[record.length - 1] >= 3) res.push([nextStartRecord[nextStartRecord.length - 1], n - 1]);
//     return res;
// };

//////////////////////////////////// 6.7 night //////////////////////////////////
// // need to fix close
// const largeGroupPositions = (S) => {
//     let res = [];
//     let str = [];
//     for (let i = 0; i < S.length; i++) {
//         for (let j = i + 1; j < S.length; j++) {
//             let target = S.slice(i, j + 1);
//             if ([...new Set(target)].length == 1 && target.length >= 3 && !str.includes(target)) { // need to fix here how to get the longest string
//                 str.push(target);
//                 res.push([i, j]);
//             }
//         }
//     }
//     // console.log(res);
//     for (let i = 0; i < res.length; i++) {
//         for (let j = i + 1; j < res.length; j++) {
//             if (res[i][0] == res[j][0]) {
//                 if (res[i][1] < res[j][1]) {
//                     res.splice(i, 1);
//                 }
//             }
//         }

//     }
//     return res;
// };