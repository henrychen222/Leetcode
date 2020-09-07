/**
 * 7.30 night 9.6 night complete
 * https://leetcode.com/problems/shortest-completing-word/
 */

// Accepted --- 92ms 81.42%
const shortestCompletingWord_refine2 = (licensePlate, words) => {
    let tmpArr = [];
    for (const lp of licensePlate) {
        if (isLetter(lp)) {
            tmpArr.push(lp.toLowerCase());
        }
    }
    let res = [];
    let element = [...new Set(tmpArr)];
    let map = new Map();
    for (const e of element) {
        map.set(e, getFrequency(tmpArr, e))
    }
    for (let i = 0; i < words.length; i++) {
        let wArr = words[i].split("");
        if (tmpArr.every(x => wArr.indexOf(x) != -1 && map.get(x) <= getFrequency(wArr, x))) {
            res.push([i, words[i]]);
        }
    }
    res.sort((a, b) => {
        if (a[1].length == b[1].length) return a[0] - b[0];
        return a[1].length - b[1].length;
    })
    return res[0][1];
};

// Accepted --- 92ms 81.42%
const shortestCompletingWord_refine = (licensePlate, words) => {
    let tmp = '';
    for (const lp of licensePlate) {
        if (isLetter(lp)) {
            tmp += lp.toLowerCase();
        }
    }
    let res = [];
    let tmpArr = tmp.split("");
    let element = [...new Set(tmpArr)];
    let map = new Map();
    for (const e of element) {
        map.set(e, getFrequency(tmpArr, e))
    }
    for (let i = 0; i < words.length; i++) {
        let wArr = words[i].split("");
        if (tmpArr.every(x => wArr.indexOf(x) != -1 && map.get(x) <= getFrequency(wArr, x))) {
            res.push([i, words[i]]);
        }
    }
    res.sort((a, b) => {
        if (a[1].length == b[1].length) return a[0] - b[0];
        return a[1].length - b[1].length;
    })
    return res[0][1];
};

// 7.30 night solution fixed --- Accepted --- 116ms 45.13%
const shortestCompletingWord_0730 = (licensePlate, words) => {
    let tmp = '';
    for (const lp of licensePlate) {
        if (isLetter(lp)) {
            tmp += lp.toLowerCase();
        }
    }
    let res = [];
    let tmpArr = tmp.split("");
    for (let i = 0; i < words.length; i++) {
        let wArr = words[i].split("");
        if (tmpArr.every(x => wArr.indexOf(x) != -1 && getFrequency(tmpArr, x) <= getFrequency(wArr, x))) { // fixed here <= not ==
            res.push([i, words[i]]);
        }
    }
    // console.log(res);
    res.sort((a, b) => {
        if (a[1].length == b[1].length) return a[0] - b[0];
        return a[1].length - b[1].length;
    })
    return res[0][1];
};

// 9.6 night solution  Accepted --- 140ms 27.43%
const shortestCompletingWord = (licensePlate, words) => {
    let tmp = '';
    for (const lp of licensePlate) {
        if (isLetter(lp)) {
            tmp += lp.toLowerCase();
        }
    }
    let tmpArr = tmp.split("");
    let element = [...new Set(tmpArr)];
    let map = new Map();
    for (const e of element) {
        map.set(e, getFrequency(tmpArr, e))
    }
    let resoppo = [];
    for (const w of words) {
        let wArr = w.split("");
        for (const e of element) {
            if ((w.indexOf(e) == -1 || getFrequency(wArr, e) < map.get(e)) && resoppo.indexOf(w) == -1) {
                resoppo.push(w);
            }
        }
    }
    // console.log(resoppo);
    let res = words.filter(x => resoppo.indexOf(x) == -1);
    // console.log(res);
    res.sort((a, b) => {
        if (a.length == b.length) return words.indexOf(a) - words.indexOf(b);
        return a.length - b.length;
    });
    // console.log(res);
    return res[0];
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const isLetter = (c) => {
    return (c.charCodeAt() >= 65 && c.charCodeAt() <= 90) || (c.charCodeAt() >= 97 && c.charCodeAt() <= 122);
};

const main = () => {
    let licensePlate = "1s3 PSt",
        words = ["step", "steps", "stripe", "stepple"];
    let licensePlate2 = "1s3 456",
        words2 = ["looks", "pest", "stew", "show"];
    let licensePlate_debug1 = "Ah71752",
        words_debug1 = ["suggest", "letter", "of", "husband", "easy", "education", "drug", "prevent", "writer", "old"];
    let licensePlate_debug2 = "GrC8950",
        words_debug2 = ["measure", "other", "every", "base", "according", "level", "meeting", "none", "marriage", "rest"]
    console.log(shortestCompletingWord(licensePlate, words)); // steps
    console.log(shortestCompletingWord(licensePlate2, words2)); // pest
    console.log(shortestCompletingWord(licensePlate_debug1, words_debug1)); // "husband"
    console.log(shortestCompletingWord(licensePlate_debug2, words_debug2)); // "according"

    console.log("");
    console.log(shortestCompletingWord_0730(licensePlate, words));
    console.log(shortestCompletingWord_0730(licensePlate2, words2));
    console.log(shortestCompletingWord_0730(licensePlate_debug1, words_debug1));
    console.log(shortestCompletingWord_0730(licensePlate_debug2, words_debug2));

    console.log("");
    console.log(shortestCompletingWord_refine(licensePlate, words));
    console.log(shortestCompletingWord_refine(licensePlate2, words2));
    console.log(shortestCompletingWord_refine(licensePlate_debug1, words_debug1));
    console.log(shortestCompletingWord_refine(licensePlate_debug2, words_debug2));

    console.log("");
    console.log(shortestCompletingWord_refine2(licensePlate, words));
    console.log(shortestCompletingWord_refine2(licensePlate2, words2));
    console.log(shortestCompletingWord_refine2(licensePlate_debug1, words_debug1));
    console.log(shortestCompletingWord_refine2(licensePlate_debug2, words_debug2));
}

main()



// need to fix
// const shortestCompletingWord2 = (licensePlate, words) => {
//     let res = [];
//     let resoppo = [];
//     for (const lp of licensePlate) {
//         if (isLetter(lp)) {
//             let tmp = lp.toLowerCase();
//             console.log(tmp);
//             //let a = getFrequency(licensePlate.split(""), tmp);
//             for (const w of words) {
//                 if ((w.indexOf(tmp) == -1) && resoppo.indexOf(w) == -1) {
//                     console.log(w);
//                     let b = getFrequency(words, tmp);
//                     if (a != b) {
//                         resoppo.push(w);
//                     }
//                 }
//             }
//         }
//     }
//     console.log(resoppo);
//     // res = words.filter(x => resoppo.indexOf(x) == -1);
//     // console.log(res);
//     // res.sort((a, b) => {
//     //     if (a.length == b.length) return words.indexOf(a) - words.indexOf(b);
//     //     return a.length - b.length;
//     // });
//     // console.log(res);
// };

// const shortestCompletingWord1 = (licensePlate, words) => {
//     let tmp = '';
//     for (const lp of licensePlate) {
//         if (isLetter(lp)) {
//             tmp += lp.toLowerCase();
//         }
//     }
//     let res = [];
//     tmp = tmp.split("").sort((a, b) => a.charCodeAt() - b.charCodeAt()).join("");
//     console.log(tmp + '\n');
//     for (let i = 0; i < words.length; i++) {
//         let str = words[i].split("").sort((a, b) => a.charCodeAt() - b.charCodeAt()).join("");
//         console.log(str);
//         if (str.includes(tmp) != -1) {
//             res.push([i, words[i]]);
//         }
//     }
//     res.sort((a, b) => {
//         if (a[1].length == b[1].length) return a[0] - b[0];
//         return a[1].length - b[1].length;
//     })
//     console.log(res);
//     return res[0][1];
// };