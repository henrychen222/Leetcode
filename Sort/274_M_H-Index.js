/**
 * 7.7 morning   02/12/21 night fix
 * https://leetcode.com/problems/h-index/
 */

// Accepted --- 76ms 84.06%
const hIndex = (c) => {
    let n = c.length;
    if (n == 0) return 0;
    c.sort((a, b) => b - a);
    let res = n;
    for (let h = 0; h < n; h++) {
        let ln = h + 1;
        if ((c[h] || 0) >= h && (c[h + 1] || 0) <= h) {
            res = Math.min(ln, c[h]);
            break;
        }
    }
    return res;
};

// Accepted --- 84ms 44.93%
const hIndex2 = (c) => {
    let n = c.length;
    if (n == 0) return 0;
    c.sort((a, b) => b - a);
    let res = n;
    for (let h = 0; h < n; h++) {
        let ln = h + 1;
        let left = c.slice(0, h + 1);
        let right = c.slice(h + 1);
        if ((left[ln - 1] || 0) >= h && (right[0] || 0) <= h) {
            // console.log(left, right, ln)
            res = Math.min(ln, left[ln - 1]);
            break;
        }
    }
    return res;
};

// Accepted --- 88ms 30.43%
const hIndex1 = (c) => {
    let n = c.length;
    if (n == 0) return 0;
    c.sort((a, b) => b - a);
    // console.log(c);
    let res = n;
    // for (let i = 0; i < n; i++) {
    //     if (i + 1 >= c[i] && n - i - 1 <= c[i]) {
    //         res = c[i];
    //         break;
    //     }
    // }
    for (let h = 0; h < n; h++) {
        let ln = h + 1;
        // let rn = n - h - 1;
        let left = c.slice(0, h + 1);
        let right = c.slice(h + 1);
        // console.log(left, right, ln, rn)
        if (left.every(x => x >= h) && right.every(x => x <= h)) {
            // console.log(left, right, ln)
            res = Math.min(ln, left[ln - 1]); // max from the left
            break;
        }
    }
    return res;
};

const main = () => {
    let citations = [3, 0, 6, 1, 5];
    let citations2 = [3, 0, 6, 1, 5, 4];
    let debug1 = [];
    let debug2 = [0];
    let debug3 = [1];
    let debug4 = [100];
    let debug5 = [0, 0];
    let debug6 = [11, 15];
    let debug7 = [4, 4, 0, 0];
    console.log(hIndex(citations)); // 3
    console.log(hIndex(citations2)); // 3
    console.log(hIndex(debug1)); // 0
    console.log(hIndex(debug2)); // 0
    console.log(hIndex(debug3)); // 1
    console.log(hIndex(debug4)); // 1
    console.log(hIndex(debug5)); // 0
    console.log(hIndex(debug6)); // 2
    console.log(hIndex(debug7)); // 2
};

main()

// console.log(undefined || 0)

//////////////////////////// 7.7 morning /////////////////////////
// const hIndex = (citations) => {
//     if (citations.length == 0) return 0;
//     if (citations.length == 1) return citations[0];
//     citations.sort((a, b) => b - a);
//     console.log(citations);
//     let tmp = 0;
//     for (let i = 0; i < citations.length; i++) {
//         if (citations[i] < i + 1) {
//             tmp = i;
//             break;
//         }
//     }
//     return citations[tmp - 1];
// };

// const hIndex = (citations) => {
//     if (citations.length == 0) return 0;
//     if (citations.length == 1 && citations[0] == 0) return citations[0];
//     citations.sort((a, b) => b - a);
//     console.log(citations);
//     for (let i = 0; i < citations.length; i++) {
//         let NPaper = citations.slice(0, i).length;
//         let rest = citations.slice(i, citations.length).length;
//         if ((i + 1) >= NPaper && rest <= (i + 1)) {
//             return i + 1;
//         }
//     }
// };