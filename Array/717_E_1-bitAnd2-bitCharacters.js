/**
 * 6.7 night   8.14 night complete
 * https://leetcode.com/problems/1-bit-and-2-bit-characters/
 */

// Accepted --- 68ms 37.3MB 90.70%
const isOneBitCharacter2 = (bits) => {
    let stack = [bits[0]];
    for (let i = 1; i < bits.length; i++) {
        let end = stack[stack.length - 1];
        if (bits[i] == 1) {
            if (end == 1) {
                stack.pop();
                stack.push('two');
                continue;
            } else {
                stack.push(1);
                continue;
            }
        } else {
            if (end == 1) {
                stack.pop();
                stack.push('two');
                continue;
            } else {
                stack.push('one');
                continue;
            }
        }
    }
    if (stack[stack.length - 1] == 'one' || (stack.length == 1 && stack[0] == 0)) return true;
    return false;
};

// Accepted --- 80ms 37.6MB 43.02%
const isOneBitCharacter = (bits) => {
    let stack = [bits[0]];
    for (let i = 1; i < bits.length; i++) {
        let end = stack[stack.length - 1];
        if (bits[i] == 1) {
            if (end == 1) {
                stack.pop();
                stack.push('two');
            } else {
                stack.push(1);
            }
        } else {
            if (end == 1) {
                stack.pop();
                stack.push('two');
            } else {
                stack.push('one');
            }
        }
    }
    // console.log(stack);
    if (stack[stack.length - 1] == 'one' || (stack.length == 1 && stack[0] == 0)) return true;
    return false;
};

const main = () => {
    let bits = [1, 0, 0];
    let bits2 = [1, 1, 1, 0];
    let debug1 = [0, 1, 0];
    let debug2 = [0];
    console.log(isOneBitCharacter(bits));
    console.log(isOneBitCharacter(bits2));
    console.log(isOneBitCharacter(debug1)); // false
    console.log(isOneBitCharacter(debug2)); // true

    console.log("");
    console.log(isOneBitCharacter2(bits));
    console.log(isOneBitCharacter2(bits2));
    console.log(isOneBitCharacter2(debug1));
    console.log(isOneBitCharacter2(debug2));
};

main()


// // need to fix
// const isOneBitCharacter = (bits) => {
//     let one = [];
//     let zero = [];
//     for (const i of bits) {
//         if (i == 1) {
//             one.push(i);
//         } else {
//             zero.push(i);
//         }
//     }
//     // console.log(one);
//     // console.log(zero);
//     let a = one.length;
//     let b = zero.length;
//     if (a < b) {
//         return true;
//     } else if (a = b) {
//         return false;
//     } else {
//         if (a % 2 == 0 && b.length >= 1) {
//             return true;
//         } else if (a % 2 != 0 && b.length >= 2) {
//             return true;
//         }
//     }
//     return false;
// };