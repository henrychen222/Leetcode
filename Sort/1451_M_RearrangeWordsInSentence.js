/**
 * 7.8 evening
 * https://leetcode.com/problems/rearrange-words-in-a-sentence/
 */

// Accepted --- 92ms 39.9MB 70.98%
const arrangeWords = (text) => {
    text = text.toLowerCase();
    let arr = text.split(" ");
    let res = [...arr].sort((a, b) => a.length - b.length);
    res[0] = res[0].replace(res[0][0], res[0][0].toUpperCase());
    return res.join(" ");
};

const main = () => {
    let text = "Leetcode is cool";
    let text2 = "Keep calm and code on";
    let text3 = "To be or not to be";
    console.log(arrangeWords(text));
    console.log(arrangeWords(text2));
    console.log(arrangeWords(text3));

};

main()