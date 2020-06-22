/**
 * 6.21 evening
 * https://leetcode.com/problems/keyboard-row/
 */

// Accepted --- 64ms 33.3 MB 53.42%
const findWords = (words) => {
    let fr = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    let sr = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    let tr = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
    let resoppo = [];
    for (const word of words) {
        if (fr.includes(word[0].toLowerCase())) {
            for (const c of word) {
                if (!fr.includes(c.toLowerCase()) && !resoppo.includes(word)) {
                    resoppo.push(word);
                }
            }
        } else if (sr.includes(word[0].toLowerCase())) {
            for (const c of word) {
                if (!sr.includes(c.toLowerCase()) && !resoppo.includes(word)) {
                    resoppo.push(word);
                }
            }
        } else {
            for (const c of word) {
                if (!tr.includes(c.toLowerCase()) && !resoppo.includes(word)) {
                    resoppo.push(word);
                }
            }
        }
    }
    let res = [];
    for (const i of words) {
        if (!resoppo.includes(i)) {
            res.push(i);
        }
    }
    return res;
};

// Accepted --- 60ms 33MB 63.01%
const findWords_refine = (words) => {
    let fr = ['Q', 'q', 'W', 'w', 'E', 'e', 'R', 'r', 'T', 't', 'Y', 'y', 'U', 'u', 'I', 'i', 'O', 'o', 'P', 'p'];
    let sr = ['A', 'a', 'S', 's', 'D', 'd', 'F', 'f', 'G', 'g', 'H', 'h', 'J', 'j', 'K', 'k', 'L', 'l'];
    let tr = ['Z', 'z', 'X', 'x', 'C', 'c', 'V', 'v', 'B', 'b', 'N', 'n', 'M', 'm'];
    let resoppo = [];
    for (const word of words) {
        if (fr.includes(word[0])) {
            for (const c of word) {
                if (!fr.includes(c) && !resoppo.includes(word)) {
                    resoppo.push(word);
                }
            }
        } else if (sr.includes(word[0])) {
            for (const c of word) {
                if (!sr.includes(c) && !resoppo.includes(word)) {
                    resoppo.push(word);
                }
            }
        } else {
            for (const c of word) {
                if (!tr.includes(c) && !resoppo.includes(word)) {
                    resoppo.push(word);
                }
            }
        }
    }
    let res = [];
    for (const i of words) {
        if (!resoppo.includes(i)) {
            res.push(i);
        }
    }
    return res;
};

const main = () => {
    let words = ["Hello", "Alaska", "Dad", "Peace"];
    let debug1 = ["qwee"];
    console.log(findWords(words));
    console.log(findWords(debug1));

    console.log(findWords_refine(words));
    console.log(findWords_refine(debug1));
};

main()