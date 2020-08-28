/**
 * 6.14 night  8.27 evening failed to fix (copy)
 * https://leetcode.com/problems/range-addition-ii/
 */

// Accepted --- 80ms 70.00%
// reference https://leetcode.com/problems/range-addition-ii/discuss/769995/Java-count-Min-cols-and-rows
const maxCount = (m, n, ops) => {
    let row = m;
    let col = n;
    for (const o of ops) {
        row = Math.min(row, o[0]);
        col = Math.min(col, o[1]);
    }
    // console.log(row, col)
    return row * col; // trick
};

const main = () => {
    let m = 3,
        n = 3
    operations = [
        [2, 2],
        [3, 3]
    ]
    let m_debug1 = 40000,
        n_debug1 = 40000
    operations_debug1 = [];
    let m_debug2 = 3,
        n_debug2 = 3
    operations_debug2 = [];
    let m_debug3 = 39999,
        n_debug3 = 39999
    operations_debug3 = [
        [19999, 19999]
    ];
    console.log(maxCount(m, n, operations));
    console.log(maxCount(m_debug1, n_debug1, operations_debug1));
    console.log(maxCount(m_debug2, n_debug2, operations_debug2));
    console.log(maxCount(m_debug3, n_debug3, operations_debug3));
};

main()


//////////////////////////// 8.27 evening //////////////////////////////////////////////
// // Time Limit 7/69
// const maxCount = (m, n, ops) => {
//     if (ops.length == 0) return m * n;
//     let max = 0;
//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//            let tmp = getMax(ops, i, j);
//            max = Math.max(max, tmp);
//         }
//     }
//     console.log(max);
//     let cnt = 0;
//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//            let tmp = getMax(ops, i, j);
//            if (tmp == max) {
//                cnt++;
//            }
//         }
//     }
//     return cnt;
// }; 

// const getMax = (ops, i, j) => {
//     let max = 0;
//     for (const o of ops) {
//         if (i < o[0] && j < o[1]) {
//             max++;
//         }
//     }
//     return max;
// };


// // 7/69 out of memory
// const maxCount = (m, n, ops) => {
//     if (ops.length == 0) return m * n;
//     let data = initialize2DArray(m, n);
//     for (const o of ops) {
//         for (let i = 0; i < m; i++) {
//             for (let j = 0; j < n; j++) {
//                 if (i < o[0] && j < o[1]) {
//                     data[i][j]++;
//                 }
//             }
//         }
//     }
//     // console.log(data)
//     let max = 0;
//     for (const d of data) {
//         let tmp = d.sort((a, b) => b - a);
//         max = Math.max(max, tmp[0]);
//     }
//     let cnt = 0;
//     for (const d of data) {
//         let tmp = d.filter(x => x === max).length;
//         cnt += tmp;
//     }
//     return cnt;
// };

// const initialize2DArray = (height, width) => {
//     let M = [];
//     for (let i = 0; i < height; i++) {
//         let tmp = [];
//         for (let j = 0; j < width; j++) {
//             tmp.push(0);
//         }
//         M.push(tmp);
//     }
//     return M;
// };

//////////////////////////// 6.14 night //////////////////////////////////////////////
// // Allocation failed --- javascript heap out of memory  when m = 40000 n = 40000
// const maxCount = (m, n, ops) => {
//     let M = initializationWithZeros([m, n]);
//     console.log(M);
//     for (let op = 0; op < ops.length; op++) {
//         let a = ops[op][0];
//         let b = ops[op][1];
//         // console.log(a);
//         // console.log(b);
//         for (let i = 0; i < a; i++) {
//             for (let j = 0; j < b; j++) {
//                 M[i][j]++;
//             }
//         }
//     }
//     console.log(M);
//     let map = countFreq2DArray(M);
//     let sortedMap = new Map([...map].sort((a, b) => b[0] - a[0]));
//     console.log(sortedMap);
//     return sortedMap.entries().next().value[1];
// };

// const countFreq2DArray = (arr) => {
//     let map = new Map();
//     let element = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[0].length; j++) {
//             let target = arr[i][j];
//             if (!element.includes(target)) {
//                 element.push(target);
//                 map.set(target, 1);
//             } else {
//                 let v = map.get(target);
//                 v++;
//                 map.set(target, v);
//             }
//         }
//     }
//     return map;
// };

// const initializationWithZeros = (dimensions) => {
//     let arr = [];
//     for (var i = 0; i < dimensions[0]; ++i) {
//         arr.push(dimensions.length == 1 ? 0 : initializationWithZeros(dimensions.slice(1)));
//     }
//     return arr;
// }