/**
 * 11.20 night
 * https://leetcode.com/problems/knight-dialer/
 */

let jump = [
    [4, 6],
    [6, 8],
    [7, 9],
    [4, 8],
    [0, 3, 9],
    [],
    [0, 1, 7],
    [2, 6],
    [1, 3],
    [2, 4]
];
let generate = new Map();
generate.set(0, [4, 6]);
generate.set(1, [6, 8]);
generate.set(2, [7, 9]);
generate.set(3, [4, 8]);
generate.set(4, [0, 3, 9]);
generate.set(5, []);
generate.set(6, [0, 1, 7]);
generate.set(7, [2, 6]);
generate.set(8, [1, 3]);
generate.set(9, [1, 2, 4]);

// issue, don't know why
const knightDialer = (n) => {
    if (n == 1) return 10;
    let map = new Map();
    for (let i = 0; i <= 9; i++) {
        map.set(i, 1);
    }
    // console.log(map);
    for (let i = 2; i <= n - 1; i++) {
        for (const k of map.keys()) {
            if (map.get(k) != 0) {
                map.set(k, map.get(k) - 1);
            }
            let freq = map.get(k);
            let step = jump[k];
            for (const each of step) {
                map.set(each, map.get(each) + 1);
            }
            // let sum = 0;
            // for (const g of generate.get(k)) {
            //     sum += jump[map.get(g)].length;
            // }
            // map.set(k, sum);
        }
        console.log(sum(map), map);
    }
    return sum(map);
};

const sum = (map) => {
    let res = 0;
    for (const k of map.keys()) {
        let dialer = jump[k].length;
        let v = map.get(k);
        res += v * dialer;
    }
    return res;
};

const main = () => {
    let n = 1;
    let n2 = 2;
    let n3 = 3;
    let n4 = 4;
    let n5 = 3131;
    console.log(knightDialer(n));
    console.log(knightDialer(n2));
    console.log(knightDialer(n3)); // 46
    console.log(knightDialer(n4)); // 104
    // console.log(knightDialer(n5));
};

main()

/**
 * 040, 043, 049
 * 060, 061, 067
 * 160, 161, 167
 * 181, 183
 * 272, 276
 * 292, 294
 * 340, 343, 349
 * 381, 383
 * 404, 406
 * 434, 438
 * 492, 494
 * 604, 606
 * 616, 618
 * 672, 676
 * 727, 729
 * 760, 761, 767
 * 816, 818
 * 834, 838
 * 927, 929
 * 940, 943, 939
 */
let tmp = ['040', '043', '049', '060', '061', '067', '160', '161', '167', '181', '183', '272', '276', '292', '294', '340', '343', '349', '381', '383', '404', '406', '434', '438', '492', '494', '604', '606', '616', '618', '672', '676', '727', '729', '760', '761', '767', '816', '818', '834', '838', '927', '929', '940', '943', '939'];
let map = new Map();
for (const s of tmp) {
    let end = s[s.length - 1];
    map.set(end, (map.get(end) + 1) || 1);
}
console.log(map, sum(map))