/**
 * 6.18 night  8.24 night complete
 * https://leetcode.com/problems/bulls-and-cows/
 */

// Accepted --- 160ms 11.37%
const getHint3 = (secret, guess) => {
    let n = secret.length;
    let bull = 0;
    let secretRest = []; // arr is slower than string compare to 2 and 4
    let guessRest = [];
    for (let i = 0; i < n; i++) {
        if (secret[i] == guess[i]) {
            bull++;
        } else {
            secretRest.push(secret[i]);
            guessRest.push(guess[i]);
        }
    }
    let common = new Set();
    for (const g of guessRest) {
        if (secretRest.indexOf(g) != -1) common.add(g);
    }
    let cow = 0;
    common.forEach(x => {
        let sFreq = getFrequency(secretRest, x);
        let gFreq = getFrequency(guessRest, x);
        if (sFreq >= gFreq) {
            cow += gFreq;
        } else {
            cow += sFreq;
        }
    });
    return bull + 'A' + cow + 'B';
};

// Accepted --- 92ms 66.43% best
const getHint4 = (secret, guess) => {
    let n = secret.length;
    let bull = 0;
    let secretRest = "";
    let guessRest = "";
    for (let i = 0; i < n; i++) {
        if (secret[i] == guess[i]) {
            bull++;
        } else {
            secretRest += secret[i];
            guessRest += guess[i];
        }
    }
    let common = new Set();
    for (const g of guessRest) {
        if (secretRest.indexOf(g) != -1) common.add(g);
    }
    let cow = 0;
    let sArr = secretRest.split(""); // difference compared to solution 2, only calculate arr once
    let gArr = guessRest.split("");
    common.forEach(x => {
        let sFreq = getFrequency(sArr, x);
        let gFreq = getFrequency(gArr, x);
        if (sFreq >= gFreq) {
            cow += gFreq;
        } else {
            cow += sFreq;
        }
    });
    return bull + 'A' + cow + 'B';
};

// Accepted --- 96ms 57.22%
const getHint2 = (secret, guess) => {
    let n = secret.length;
    let bull = 0;
    let secretRest = "";
    let guessRest = "";
    for (let i = 0; i < n; i++) {
        if (secret[i] == guess[i]) {
            bull++;
        } else {
            secretRest += secret[i];
            guessRest += guess[i];
        }
    }
    let common = new Set();
    for (const g of guessRest) {
        if (secretRest.indexOf(g) != -1) common.add(g);
    }
    let cow = 0;
    common.forEach(x => {
        let sFreq = getFrequency(secretRest.split(""), x);
        let gFreq = getFrequency(guessRest.split(""), x);
        if (sFreq >= gFreq) {
            cow += gFreq;
        } else {
            cow += sFreq;
        }
    });
    return bull + 'A' + cow + 'B';
};

// Accepted --- 180ms 42.9MB 9.03%
const getHint = (secret, guess) => {
    let n = secret.length;
    let bull = 0;
    let secretRest = "";
    let guessRest = "";
    for (let i = 0; i < n; i++) {
        if (secret[i] == guess[i]) {
            bull++;
        } else {
            secretRest += secret[i];
            guessRest += guess[i];
        }
    }
    // console.log(secretRest, guessRest);
    let sMap = getRecord(secretRest);
    let gMap = getRecord(guessRest);
    // console.log(sMap, gMap);
    let cow = 0;
    for (const k of gMap.keys()) {
        if (sMap.has(k)) {
            let vs = sMap.get(k);
            let vg = gMap.get(k);
            if (vs >= vg) {
                cow += vg;
            } else {
                cow += vs;
            }
        }
    }
    // console.log(bull, cow);
    return bull + 'A' + cow + 'B';
};

const getRecord = (s) => {
    let map = new Map();
    let arr = s.split("");
    let element = [...new Set(arr)];
    for (const e of element) {
        map.set(e, getFrequency(arr, e));
    }
    return map;
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const main = () => {
    let secret = "1807",
        guess = "7810";
    let secret2 = "1123",
        guess2 = "0111";
    let secret_debug1 = "11",
        guess_debug1 = "10"
    let secret_debug2 = "1234",
        guess_debug2 = "0111"
    console.log(getHint(secret, guess)); // 1A3B
    console.log(getHint(secret2, guess2)); // 1A1B
    console.log(getHint(secret_debug1, guess_debug1)); // 1A0B
    console.log(getHint(secret_debug2, guess_debug2)); // 0A1B

    console.log("")
    console.log(getHint2(secret, guess));
    console.log(getHint2(secret2, guess2));
    console.log(getHint2(secret_debug1, guess_debug1));
    console.log(getHint2(secret_debug2, guess_debug2));

    console.log("")
    console.log(getHint3(secret, guess));
    console.log(getHint3(secret2, guess2));
    console.log(getHint3(secret_debug1, guess_debug1));
    console.log(getHint3(secret_debug2, guess_debug2));

    console.log("")
    console.log(getHint4(secret, guess));
    console.log(getHint4(secret2, guess2));
    console.log(getHint4(secret_debug1, guess_debug1));
    console.log(getHint4(secret_debug2, guess_debug2));

};

main()



// // need to fix
// const getHint = (secret, guess) => {
//     let bull = 0;
//     for (let i = 0; i < secret.length; i++) {
//         if (secret[i] == guess[i]) {
//             bull++;
//             secret = secret.slice(0, i) + secret.slice(i + 1, secret.length);
//             guess = guess.slice(0, i) + guess.slice(i + 1, guess.length);
//         }
//     }
//     // console.log(secret);
//     // console.log(guess);
//     // secret = secret.split("").sort((a, b) => a.charCodeAt() - b.charCodeAt()).join("");
//     // guess = guess.split("").sort((a, b) => a.charCodeAt() - b.charCodeAt()).join("");

//     let cnt = 0;
//     let cow = [];
//     for (let i = 0; i < secret.length; i++) {
//         if (secret.includes(guess[i]) && !cow.includes(guess[i])) {
//             cnt++;
//             cow.push(guess[i])
//         }
//     }
//     // console.log(bull, cow)
//     // return bull + 'A' + cow + 'B';
// };

// const getFrequency = (arr, item) => {
//     return arr.filter(x => x === item).length;
// };