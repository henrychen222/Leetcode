/**
 * 10.5 evening
 * https://leetcode.com/problems/cinema-seat-allocation/
 */

// Accepted --- 2356ms 10.00%
const maxNumberOfFamilies2 = (n, reservedSeats) => {
    let sum = 0;
    let cnt = 0;
    let rows = [...new Set(reservedSeats.map(x => x[0]))];
    for (const r of rows) {
        let v = reservedSeats.filter(x => x[0] == r).map(x => x[1]);
        if ((v.indexOf(2) == -1 && v.indexOf(3) == -1 && v.indexOf(4) == -1 && v.indexOf(5) == -1)) {
            if (v.indexOf(6) == -1 && v.indexOf(7) == -1 && v.indexOf(8) == -1 && v.indexOf(9) == -1) {
                cnt += 2;
            } else {
                cnt++;
            }
        } else {
            if (v.indexOf(6) == -1 && v.indexOf(7) == -1 && v.indexOf(8) == -1 && v.indexOf(9) == -1) {
                cnt++;
            } else {
                if (v.indexOf(4) == -1 && v.indexOf(5) == -1 && v.indexOf(6) == -1 && v.indexOf(7) == -1) {
                    cnt++;
                }
            }
        }
    }
    cnt += (n - rows.length) * 2;
    sum += cnt;
    return sum;
};

// Accepted --- 1572ms 10.00%
const maxNumberOfFamilies = (n, reservedSeats) => {
    reservedSeats.sort((a, b) => a[0] - b[0]);
    // console.log(reservedSeats);
    let sum = 0;
    let cnt = 0;
    let rows = [...new Set(reservedSeats.map(x => x[0]))];
    // console.log(rows);
    let len = reservedSeats.length;
    for (const r of rows) {
        // let v = reservedSeats.filter(x => x[0] == r).map(x => x[1]);
        let start, end;
        for (let i = 0; i < len; i++) {
            if (reservedSeats[i][0] == r) {
                start = i;
                break;
            }
        }
        for (let i = len - 1; ~i; i--) {
            if (reservedSeats[i][0] == r) {
                end = i;
                break;
            }
        }
        let v = [];
        for (let i = start; i <= end; i++) {
            v.push(reservedSeats[i][1]);
        }
        if ((v.indexOf(2) == -1 && v.indexOf(3) == -1 && v.indexOf(4) == -1 && v.indexOf(5) == -1)) {
            if (v.indexOf(6) == -1 && v.indexOf(7) == -1 && v.indexOf(8) == -1 && v.indexOf(9) == -1) {
                cnt += 2;
            } else {
                cnt++;
            }
        } else {
            if (v.indexOf(6) == -1 && v.indexOf(7) == -1 && v.indexOf(8) == -1 && v.indexOf(9) == -1) {
                cnt++;
            } else {
                if (v.indexOf(4) == -1 && v.indexOf(5) == -1 && v.indexOf(6) == -1 && v.indexOf(7) == -1) {
                    cnt++;
                }
            }
        }
    }
    // for (i = 1; i <= n; i++) {
    //     if (rows.indexOf(i) == -1) {
    //         cnt += 2;
    //     }
    // }
    cnt += (n - rows.length) * 2;
    sum += cnt;
    return sum;
};

const main = () => {
    let n = 3,
        reservedSeats = [
            [1, 2],
            [1, 3],
            [1, 8],
            [2, 6],
            [3, 1],
            [3, 10]
        ];
    let n2 = 2,
        reservedSeats2 = [
            [2, 1],
            [1, 8],
            [2, 6]
        ];
    let n3 = 4,
        reservedSeats3 = [
            [4, 3],
            [1, 4],
            [4, 6],
            [1, 7]
        ];
    let n_debug1 = 5,
        reservedSeats_debug1 = [
            [4, 7],
            [4, 1],
            [3, 1],
            [5, 9],
            [4, 4],
            [3, 7],
            [1, 3],
            [5, 5],
            [1, 6],
            [1, 8],
            [3, 9],
            [2, 9],
            [1, 4],
            [1, 9],
            [1, 10]
        ];
    console.log(maxNumberOfFamilies(n, reservedSeats));
    console.log(maxNumberOfFamilies(n2, reservedSeats2));
    console.log(maxNumberOfFamilies(n3, reservedSeats3));
    console.log(maxNumberOfFamilies(n_debug1, reservedSeats_debug1)); // 2
};

main()


// memory out for 10^9  48/53
// const maxNumberOfFamilies1 = (n, reservedSeats) => {
//     let map = new Map();
//     for (const rs of reservedSeats) {
//         let row = rs[0];
//         let col = rs[1];
//         if (map.has(row)) {
//             map.get(row).push(col);
//         } else {
//             map.set(row, [col]);
//         }
//     }
//     for (i = 1; i <= n; i++) {
//         if (!map.has(i)) {
//             map.set(i, []);
//         }
//     }
//     // console.log(map);
//     let sum = 0;
//     for (const v of map.values()) {
//         // console.log(v);
//         let cnt = 0;
//         let len = v.length;
//         if (len == 0) {
//             cnt += 2;
//         } else {
//             if ((v.indexOf(2) == -1 && v.indexOf(3) == -1 && v.indexOf(4) == -1 && v.indexOf(5) == -1)) {
//                 if (v.indexOf(6) == -1 && v.indexOf(7) == -1 && v.indexOf(8) == -1 && v.indexOf(9) == -1) {
//                     cnt += 2;
//                 } else {
//                     cnt++;
//                 }
//             } else {
//                 if (v.indexOf(6) == -1 && v.indexOf(7) == -1 && v.indexOf(8) == -1 && v.indexOf(9) == -1) {
//                     cnt++;
//                 } else {
//                     if (v.indexOf(4) == -1 && v.indexOf(5) == -1 && v.indexOf(6) == -1 && v.indexOf(7) == -1) {
//                         cnt++;
//                     }
//                 }
//             }
//         }
//         // console.log(cnt);
//         sum += cnt;
//     }
//     return sum;
// };