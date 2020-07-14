/**
 * 7.13 night  7.14 morning
 * https://leetcode.com/problems/array-of-doubled-pairs/
 */

// need to fix
const canReorderDoubled = (A) => {
    if (A.indexOf(0) != -1 && getFrequency(A, 0) % 2 != 0) return false;
    let positive = [];
    let negative = [];
    for (const i of A) {
        if (i > 0) {
            positive.push(i);
        } else if (i < 0) {
            negative.push(i);
        }
    }
    positive.sort((a, b) => a - b);
    negative.sort((a, b) => b - a);
    console.log(positive, negative);
    for (let i = 0; i < positive.length; i++) {
        console.log(positive)
        console.log(positive[i], positive[0] * 2)
        while (positive[i] == positive[0] * 2) {
            positive = positive.slice(1, i).concat(positive.slice(i + 1, positive.length));
        }
    }
    for (let i = 0; i < negative.length; i++) {
        while (negative[i] == negative[0] * 2) {
            negative = negative.slice(1, i).concat(negative.slice(i + 1, negative.length));
        }
    }
    console.log(positive, negative);
    if (positive.length != 0 || negative.length != 0) return false;
    return true;
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const canReorderDoubled2 = (A) => {
    if (A.indexOf(0) != -1 && getFrequency(A, 0) % 2 != 0) return false;
    let positive = [];
    let negative = [];
    for (const i of A) {
        if (i > 0) {
            positive.push(i);
        } else if (i < 0) {
            negative.push(i);
        }
    }
    positive.sort((a, b) => a - b);
    negative.sort((a, b) => b - a);

    for (i = 0; i < positive.length; i++) {
        for (let j = i + 1; j < positive.length; j++) {
            console.log(positive[i], positive[j])
            if (positive[i] * 2 == positive[j]) {
                positive = [...positive].slice(0, i).concat([...positive].slice(i + 1, j)).concat([...positive].slice(j + 1, positive.length));
            }
        }
    }
    console.log(positive)
};

const main = () => {
    let A = [3, 1, 3, 6];
    let A2 = [2, 1, 2, 6];
    let A3 = [4, -2, 2, -4];
    let A4 = [1, 2, 4, 16, 8, 4];
    let debug1 = [1, 2, 4, 8];
    let debug2 = [2, 1, 2, 1, 1, 1, 2, 2];
    console.log(canReorderDoubled(A));
    console.log(canReorderDoubled(A2));
    console.log(canReorderDoubled(A3));
    console.log(canReorderDoubled(A4));
    console.log(canReorderDoubled(debug1)); // true
    console.log(canReorderDoubled(debug2)); // true
};

main()