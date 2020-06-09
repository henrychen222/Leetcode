/**
 * 6.7 night
 * https://leetcode.com/problems/1-bit-and-2-bit-characters/
 */

// need to fix
const isOneBitCharacter = (bits) => {
    let one = [];
    let zero = [];
    for (const i of bits) {
        if (i == 1) {
            one.push(i);
        } else {
            zero.push(i);
        }
    }
    // console.log(one);
    // console.log(zero);
    let a = one.length;
    let b = zero.length;
    if (a < b) {
        return true;
    } else if (a = b) {
        return false;
    } else {
        if (a % 2 == 0 && b.length >= 1) {
            return true;
        } else if (a % 2 != 0 && b.length >= 2) {
            return true;
        }
    }
    return false;
};

const main = () => {
    let bits = [1, 0, 0];
    let bits2 = [1, 1, 1, 0];
    let debug1 = [0, 1, 0];
    console.log(isOneBitCharacter(bits));
    console.log(isOneBitCharacter(bits2));
    console.log(isOneBitCharacter(debug1)); // false
};

main()