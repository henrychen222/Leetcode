/**
 * 6.4 evening
 * https://leetcode.com/problems/can-place-flowers/
 */

// need to fix
const canPlaceFlowers = (flowerbed, n) => {
    let zero = [];
    let one = [];
    for (const i of flowerbed) {
        if (i == '0') {
            zero.push(i);
        } else {
            one.push(i);
        }
    }

    if (zero.length - one.length >= n && zero.length > 2 * n) {
        return true;
    }
    return false;
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

    console.log(canPlaceFlowers(flowerbed, n));
    console.log(canPlaceFlowers(flowerbed2, n2));
    console.log(canPlaceFlowers(flowerbed_debug1, n_debug1));
    console.log(canPlaceFlowers(flowerbed_debug2, n_debug2));
    console.log(canPlaceFlowers(flowerbed_debug3, n_debug3));
    console.log(canPlaceFlowers(flowerbed_debug4, n_debug4));
};

main()