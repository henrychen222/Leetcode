/**
 * 7.21 night
 * https://leetcode.com/problems/shifting-letters/
 */

// need to fix
const shiftingLetters = (S, shifts) => {
    // let operation = [];
    // for (let i = 0; i < shifts.length; i++) {
    //     operation.push([shifts[i], i]);
    // }
    // console.log(operation);

    // let s = S;
    // for (const o of operation) {
    //     let t = o[0];
    //     let idx = o[1];
    //     for (let i = 1; i <= t; i++) {
    //         s.slice(0, idx);
    //         console.log(s);
    //     }
    // }

    let s = S;
    for (let i = 0; i < shifts.length; i++) {
        for (let t = 1; t <= shifts[i]; t++) {
            let tmp = s.slice(0, i + 1);
            console.log(tmp);
            // for (let j = 0; j < i; j++) {
            //     let tmp = s.replace(S[j], shift(S[j]))
            //     console.log(tmp);
            //     // break;
            // }
        }
    }
};

const shift = (l) => {
    if (l == 'z') return 'a';
    return String.fromCharCode(l.charCodeAt() + 1);
};

const main = () => {
    let S = "abc",
        shifts = [3, 5, 9];
    console.log(shiftingLetters(S, shifts));
};

main()