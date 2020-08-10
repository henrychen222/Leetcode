/**
 * 6.4 evening  8.8 noon complete
 * https://leetcode.com/problems/can-place-flowers/
 */

// Accepted --- 84ms 38.7MB 53.02%
const canPlaceFlowers_refine = (flowerbed, n) => {
    let compare = [...flowerbed];
    for (let i = 0; i < compare.length; i += 2) {
        if (compare[i] == 0 && compare[i + 1] != 1 && compare[i - 1] != 1) {
            compare[i] = 1;
        }
    }
    if (compare[compare.length - 1] == 0 && compare[compare.length - 2] != 1) {
        compare[compare.length - 1] = 1;
    }
    let cnt = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] != compare[i]) cnt++;
    }
    if (n <= cnt) {
        return true;
    } else {
        return false;
    }
};

// Accepted --- 80ms 38.7MB 64.94%
const canPlaceFlowers = (flowerbed, n) => {
    let compare; // max flowers can plant
    if (flowerbed[0] == 1) {
        compare = [...flowerbed];
        for (let i = 0; i < compare.length; i += 2) {
            if (compare[i] == 0 && compare[i + 1] != 1 && compare[i - 1] != 1) {
                compare[i] = 1;
            }
        }
    } else {
        compare = [...flowerbed];
        for (let i = 0; i < compare.length; i += 2) {
            if (compare[i] == 0 && compare[i + 1] != 1 && compare[i - 1] != 1) {
                compare[i] = 1;
            }
        }
    }
    if (compare[compare.length - 1] == 0 && compare[compare.length - 2] != 1) { // for the last one doesn't change because [i+1] out of range will be judged undefined
        compare[compare.length - 1] = 1;
    }
    // console.log(compare);
    let cnt = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] != compare[i]) cnt++;
    }
    // console.log(cnt);
    if (n <= cnt) {
        return true;
    } else {
        return false;
    }
};

const main = () => {
    let flowerbed = [1, 0, 0, 0, 1],
        n = 1;
    let flowerbed2 = [1, 0, 0, 0, 1],
        n2 = 2;
    let flowerbed_debug1 = [1, 0, 0, 0, 0, 1],
        n_debug1 = 2;
    let flowerbed_debug2 = [1, 0, 0, 0, 0, 0, 1],
        n_debug2 = 3;
    let flowerbed_debug3 = [1, 0, 1, 0, 1, 0, 1],
        n_debug3 = 1;
    let flowerbed_debug4 = [1, 0, 1, 0, 1, 0, 1],
        n_debug4 = 0;
    let flowerbed_debug5 = [0, 0, 1, 0, 0],
        n_debug5 = 2;
    let flowerbed_debug6 = [0, 1, 0, 1, 0, 1, 0, 0],
        n_debug6 = 1
    console.log(canPlaceFlowers(flowerbed, n)); // true
    console.log(canPlaceFlowers(flowerbed2, n2)); // false
    console.log(canPlaceFlowers(flowerbed_debug1, n_debug1)); // false
    console.log(canPlaceFlowers(flowerbed_debug2, n_debug2)); // false
    console.log(canPlaceFlowers(flowerbed_debug3, n_debug3)); // false
    console.log(canPlaceFlowers(flowerbed_debug4, n_debug4)); // true
    console.log(canPlaceFlowers(flowerbed_debug5, n_debug5)); // true
    console.log(canPlaceFlowers(flowerbed_debug6, n_debug6)); // true

    console.log("");
    console.log(canPlaceFlowers_refine(flowerbed, n));
    console.log(canPlaceFlowers_refine(flowerbed2, n2));
    console.log(canPlaceFlowers_refine(flowerbed_debug1, n_debug1));
    console.log(canPlaceFlowers_refine(flowerbed_debug2, n_debug2));
    console.log(canPlaceFlowers_refine(flowerbed_debug3, n_debug3));
    console.log(canPlaceFlowers_refine(flowerbed_debug4, n_debug4));
    console.log(canPlaceFlowers_refine(flowerbed_debug5, n_debug5));
    console.log(canPlaceFlowers_refine(flowerbed_debug6, n_debug6));
};

main()


// need to fix
// const canPlaceFlowers = (flowerbed, n) => {
//     let zero = [];
//     let one = [];
//     for (const i of flowerbed) {
//         if (i == '0') {
//             zero.push(i);
//         } else {
//             one.push(i);
//         }
//     }

//     if (zero.length - one.length >= n && zero.length > 2 * n) {
//         return true;
//     }
//     return false;
// };