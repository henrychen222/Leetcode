/**
 * 6.23 evening
 * https://leetcode.com/problems/guess-number-higher-or-lower/
 */

// Accpeted --- 68ms 32.9MB 38.36%
const guessNumber_refine2 = (n) => {
    let low = 1;
    let high = n;
    let middle;
    while (low <= high) {
        middle = low + ((high - low) >> 1);
        if (guess(middle) == -1) {
            high = middle - 1;
        } else if (guess(middle) == 1) {
            low = middle + 1;
        } else {
            break;
        }
    }
    return middle;
};

// Accepted --- 64ms 33MB 52.89% (best)
const guessNumber_refine = (n) => {
    let low = 1;
    let high = n;
    let middle;
    while (low <= high) {
        middle = low + ((high - low) >> 1);
        if (guess(middle) == -1) {
            high = middle - 1;
        } else if (guess(middle) == 1) {
            low = middle + 1;
        }
        if (guess(middle) == 0) {
            break;
        }
    }
    return middle;
};

// Accepted --- 64ms 32.8MB 52.89%
const guessNumber = (n) => {
    let low = 1;
    let high = n;
    let middle;
    let tmp;
    while (low <= high) {
        middle = low + ((high - low) >> 1);
        tmp = middle;
        if (guess(tmp) == -1) {
            high = middle - 1;
        } else if (guess(tmp) == 1) {
            low = middle + 1;
        }
        if (guess(tmp) == 0) {
            break;
        }
    }
    return tmp;
};

// Accepted --- 68ms 33.1MB 38.36%
const guessNumber_test = (n) => {
    let low = 1;
    let high = n;
    let middle;
    while (low <= high) {
        middle = low + Math.floor((high - low) / 2); // slower than >> 1
        if (guess(middle) == -1) {
            high = middle - 1;
        } else if (guess(middle) == 1) {
            low = middle + 1;
        }
        if (guess(middle) == 0) {
            break;
        }
    }
    return middle;
};

// inside lc
const guess = (num) => {
    let pick = 6;
    if (num < 6) {
        return 1;
    } else {
        return -1;
    }
    return 0;
};

const main = () => {
    console.log(guess(5));
    console.log(guess(7));
    console.log(guessNumber(10));
    console.log(guessNumber_refine(10));
    console.log(guessNumber_test(10));
    console.log(guessNumber_refine2(10));
};

main();