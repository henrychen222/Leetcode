/**
 * 6.15 night  10.25 afternoon complete
 * https://leetcode.com/problems/di-string-match/
 */

// Accepted --- 132ms 8.99%
const diStringMatch3 = (S) => {
    let n = S.length;
    let res = [];
    for (let i = 0; i <= n; i++) {
        res.push(i);
    }
    let previous = res.join("");
    while (true) {
        for (let i = 0; i + 1 <= n; i++) {
            if (S[i] == 'I') {
                if (res[i] > res[i + 1]) {
                    [res[i], res[i + 1]] = [res[i + 1], res[i]];
                }
            } else {
                if (res[i] < res[i + 1]) {
                    [res[i], res[i + 1]] = [res[i + 1], res[i]];
                }
            }
        }
        let tmp = res.join("");
        if (tmp == previous) break;
        previous = tmp;
    }
    return res;
};

// Accepted --- 128ms 11.86%
const diStringMatch2 = (S) => {
    let n = S.length;
    let res = [];
    for (let i = 0; i <= n; i++) {
        res.push(i);
    }
    let record = [res.join("")];
    while (true) {
        for (let i = 0; i + 1 <= n; i++) {
            if (S[i] == 'I') {
                if (res[i] > res[i + 1]) {
                    [res[i], res[i + 1]] = [res[i + 1], res[i]];
                }
            } else {
                if (res[i] < res[i + 1]) {
                    [res[i], res[i + 1]] = [res[i + 1], res[i]];
                }
            }
        }
        // refine here
        let tmp = res.join("");
        if (tmp == record[record.length - 1]) break;
        record.push(tmp);
    }
    return res;
};

// Accepted --- 168ms 5.15%
const diStringMatch = (S) => {
    let n = S.length;
    let res = [];
    for (let i = 0; i <= n; i++) {
        res.push(i);
    }
    // console.log(res);
    let record = [res.join("")];
    while (true) {
        // console.log(res, record);
        for (let i = 0; i + 1 <= n; i++) {
            if (S[i] == 'I') {
                // console.log(res[i], res[i + 1]);
                if (res[i] > res[i + 1]) {
                    [res[i], res[i + 1]] = [res[i + 1], res[i]];
                }
            } else {
                // console.log(res[i], res[i + 1]);
                if (res[i] < res[i + 1]) {
                    [res[i], res[i + 1]] = [res[i + 1], res[i]];
                }
            }
            // console.log(res);
        }
        if (res.join("") == record[record.length - 1]) break;
        record.push(res.join(""));
    }
    return res;
};

const main = () => {
    let S = "IDID";
    let S2 = "III";
    let S3 = "DDI";
    console.log(diStringMatch(S));
    console.log(diStringMatch(S2));
    console.log(diStringMatch(S3));
};

main()

// don't know
// const diStringMatch = (S) => {
//     let N = S.length;
//     let A = [];

//     let ICnt = 0;
//     let DCnt = 0;
//     for (const c of S) {
//         if (c == 'I') {
//             ICnt++;
//         } else {
//             DCnt++;
//         }
//     }
//     console.log(ICnt, DCnt);

//     for (let i = 1; i < N; i++) {
//         if (S[i] == 'I') {
//             A.push(i);
//             A.push(i + ICnt);
//         } else {
//             A.push(i);
//             A.unshift(i - DCnt);
//         }
//     }
//     return A;
// };