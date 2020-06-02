/**
 * 6.1 evening
 * https://leetcode.com/problems/unique-morse-code-words/
 */

// Accepted --- 68ms 38.1MB 36.55%
const uniqueMorseRepresentations = (words) => {
    let res = [];
    for (const word of words) {
        let morseStr = "";
        for (let i = 0; i < word.length; i++) {
            morseStr += getMorse(word[i]);
        }
        res.push(morseStr);
    }
    return removeDuplicate(res).length;
};

const removeDuplicate = (arr) => {
    return [...new Set(arr)];
};

const getMorse = (ch) => {
    const morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
    for (let i = 0; i < morse.length; i++) {
        return morse[ch.charCodeAt() - 'a'.charCodeAt()];
    }
};

const main = () => {
    let words = ["gin", "zen", "gig", "msg"];
    console.log(uniqueMorseRepresentations(words));
};

main()