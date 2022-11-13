/**
 * 5.23 night
 * https://leetcode.com/contest/weekly-contest-190/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/
 */
const isPrefixOfWord = (sentence, searchWord) => {
    let sentenceArr = sentence.split(" ");
    console.log(sentenceArr);
    for (let i = 0; i < sentenceArr.length; i++) {
        for (let j = 0; j < sentenceArr[i].length; j++) {
            if (sentenceArr[i].slice(0, j + 1) == searchWord) {
                return i + 1;
            }
        }
    }
    return -1;
};

const main = () => {
    let sentence = "i love eating burger", searchWord = "burg";
    let sentence2 = "this problem is an easy problem", searchWord2 = "pro";
    let sentence3 = "i am tired", searchWord3 = "you";
    let sentence4 = "i use triple pillow", searchWord4 = "pill";
    let sentence5 = "hello from the other side", searchWord5 = "they";

    console.log(isPrefixOfWord(sentence, searchWord));
    console.log(isPrefixOfWord(sentence2, searchWord2));
    console.log(isPrefixOfWord(sentence3, searchWord3));
    console.log(isPrefixOfWord(sentence4, searchWord4));
    console.log(isPrefixOfWord(sentence5, searchWord5));

    let sentence_debug1 = "hellohello hellohellohello", searchWord_debug1 = "ell";
    console.log(isPrefixOfWord(sentence_debug1, searchWord_debug1));


    let sentence_debug2 = "love errichto jonathan dumb", searchWord_debug2 = "dumb";
    console.log(isPrefixOfWord(sentence_debug2, searchWord_debug2));
};

main()