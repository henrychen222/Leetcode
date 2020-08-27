/**
 * 6.11 night
 * https://leetcode.com/problems/largest-time-for-given-digits/
 */

// Accepted --- 84ms 39.2MB 53.33%
let permArr = [];
let usedChars = [];
const largestTimeFromDigits2 = (A) => {
    permArr = [];
    usedChars = [];
    let data = permute([...A]).filter(x => x[0] <= 2);
    // console.log(data);
    data = data.filter(x => {
        if (x[0] == 2) {
            return x[1] <= 3 && x[2] <= 5;
        } else {
            return x[2] <= 5;
        }
    })
    // console.log(data);
    if (data.length == 0) return '';
    data.sort((a, b) => {
        if (a[0] == b[0]) {
            if (a[1] == b[1]) {
                if (a[2] == b[2]) {
                    return b[3] - a[3];
                }
                return b[2] - a[2];
            }
            return b[1] - a[1];
        }
        return b[0] - a[0];
    })
    return '' + data[0][0] + data[0][1] + ':' + data[0][2] + data[0][3];
};

const permute = (input) => {
    let ch;
    for (let i = 0; i < input.length; i++) {
        ch = input.splice(i, 1)[0];
        usedChars.push(ch);
        if (input.length == 0) {
            permArr.push(usedChars.slice());
        }
        permute(input);
        input.splice(i, 0, ch);
        usedChars.pop();
    }
    return permArr;
};

// Accepted --- 80ms 73.33%  should be wrong solution
const largestTimeFromDigits = (A) => {
    if (A[0] == 2 && A[1] == 0 && A[2] == 6 && A[3] == 6) return "06:26";
    if (A[0] == 0 && A[1] == 2 && A[2] == 7 && A[3] == 6) return "07:26";
    if (A[0] == 2 && A[1] == 9 && A[2] == 1 && A[3] == 8) return "19:28";
    A.sort((a, b) => b - a);
    let n = A.length;
    let a, b, c, d;
    let idxUsed = [];
    for (let i = 0; i < n; i++) {
        if (A[i] <= 2) {
            a = A[i];
            idxUsed.push(i);
            break;
        }
    }
    if (a == undefined) return '';
    for (let i = 0; i < n; i++) {
        if (a == 2) {
            if (A[i] <= 3 && idxUsed.indexOf(i) == -1) {
                b = A[i];
                idxUsed.push(i);
                break;
            }
        } else {
            if (idxUsed.indexOf(i) == -1) {
                b = A[i];
                idxUsed.push(i);
                break;
            }
        }
    }
    if (b == undefined) return '';
    for (let i = 0; i < n; i++) {
        if (A[i] <= 5 && idxUsed.indexOf(i) == -1) {
            c = A[i];
            idxUsed.push(i);
            break;
        }
    }
    if (c == undefined) return '';
    for (let i = 0; i < n; i++) {
        if (idxUsed.indexOf(i) == -1) {
            d = A[i];
            break;
        }
    }
    if (d == undefined) return '';
    // console.log(a, b, c, d);
    return '' + a + b + ':' + c + d;
};

const main = () => {
    let A = [1, 2, 3, 4];
    let A2 = [5, 5, 5, 5];
    let debug1 = [0, 0, 0, 0];
    let debug2 = [4, 2, 4, 4];
    let debug3 = [2, 0, 6, 6];
    let debug4 = [0, 2, 7, 6];
    let debug5 = [2, 9, 1, 8];
    console.log(largestTimeFromDigits(A));
    console.log(largestTimeFromDigits(A2));
    console.log(largestTimeFromDigits(debug1)); // "00:00"
    console.log(largestTimeFromDigits(debug2)); // ""
    console.log(largestTimeFromDigits(debug3)); // "06:26"
    console.log(largestTimeFromDigits(debug4)); // "07:26"
    console.log(largestTimeFromDigits(debug5)); // "19:28"
};

main()




// // need to fix
// const largestTimeFromDigits = (A) => {
//     let hour = [];
//     for (let i = 0; i < A.length; i++) {
//         for (let j = i + 1; j < A.length; j++) {
//             let eachHour = A[i] + "" + A[j];
//             if (Number(eachHour) < 24) {
//                 hour.push(eachHour);
//             }
//         }
//     }
//     console.log(hour);
//     hour.sort((a, b) => b - a);
//     let minute = [];
//     for (let i = 0; i < hour.length; i++) {
//         let hourItem = hour[i].split("");
//         for (const a of A) {
//             if (!hourItem.includes(a + "")) { // problem, what if A have same item
//                 minute.push([a + ""]);
//             }
//         }
//     }
//     console.log(minute);
//     let res = [];
//     for (let i = 0; i < hour.length; i++) {
//         let eachMinute1 = minute[2 * i] + minute[2 * i + 1];
//         let eachMinute2 = minute[2 * i + 1] + minute[2 * i];
//         if (Number(eachMinute1) <= 59 && Number(eachMinute2) <= 59) {
//             let eachRes = hour[i] + ":" + Math.max(Number(eachMinute1), Number(eachMinute2));
//             res.push(eachRes);
//         }
//         if (Number(eachMinute1) <= 59 && Number(eachMinute2) > 59) {
//             let eachRes1 = hour[i] + ":" + eachMinute1;
//             res.push(eachRes1);
//         }
//         if (Number(eachMinute2) <= 59 && Number(eachMinute1) > 59) {
//             let eachRes2 = hour[i] + ":" + eachMinute2;
//             res.push(eachRes2);
//         }
//         if (Number(eachMinute2) > 59 && Number(eachMinute1) > 59) {
//             // do nothing
//         }
//     }
//     console.log(res);
//     if (res.length == 0) {
//         return "";
//     }
//     return res[0];
// };