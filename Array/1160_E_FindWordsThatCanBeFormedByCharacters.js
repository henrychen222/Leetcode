/**
 * 6.9 evening  8.3 night complete
 * https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
 */

// Accepted --- 100ms 45.7MB 94.82%
const countCharacters = (words, chars) => {
    let map = new Map();
    for (const c of chars) {
        map.set(c, getFrequency(chars.split(""), c));
    }
    // console.log(map);
    let res = [];
    for (const w of words) {
        if (!check(map, w)) continue;
        res.push(w);
    }
    // console.log(res);
    return calculate(res);
};

const check = (map, word) => { // check if all char exist in map and each char frequency <= that in chars
    for (const c of word) {
        if (!map.has(c)) return false;
        if (map.get(c) < getFrequency(word.split(""), c)) return false;
    }
    return true;
};

const calculate = (arr) => {
    let sum = 0;
    for (const i of arr) {
        sum += i.length;
    }
    return sum;
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const main = () => {
    let words = ["cat", "bt", "hat", "tree"],
        chars = "atach";
    let words2 = ["hello", "world", "leetcode"],
        chars2 = "welldonehoneyr";
    let words_debug1 = ["dyiclysmffuhibgfvapygkorkqllqlvokosagyelotobicwcmebnpznjbirzrzsrtzjxhsfpiwyfhzyonmuabtlwin", "ndqeyhhcquplmznwslewjzuyfgklssvkqxmqjpwhrshycmvrb", "ulrrbpspyudncdlbkxkrqpivfftrggemkpyjl", "boygirdlggnh", "xmqohbyqwagkjzpyawsydmdaattthmuvjbzwpyopyafphx", "nulvimegcsiwvhwuiyednoxpugfeimnnyeoczuzxgxbqjvegcxeqnjbwnbvowastqhojepisusvsidhqmszbrnynkyop", "hiefuovybkpgzygprmndrkyspoiyapdwkxebgsmodhzpx", "juldqdzeskpffaoqcyyxiqqowsalqumddcufhouhrskozhlmobiwzxnhdkidr", "lnnvsdcrvzfmrvurucrzlfyigcycffpiuoo", "oxgaskztzroxuntiwlfyufddl", "tfspedteabxatkaypitjfkhkkigdwdkctqbczcugripkgcyfezpuklfqfcsccboarbfbjfrkxp", "qnagrpfzlyrouolqquytwnwnsqnmuzphne", "eeilfdaookieawrrbvtnqfzcricvhpiv", "sisvsjzyrbdsjcwwygdnxcjhzhsxhpceqz", "yhouqhjevqxtecomahbwoptzlkyvjexhzcbccusbjjdgcfzlkoqwiwue", "hwxxighzvceaplsycajkhynkhzkwkouszwaiuzqcleyflqrxgjsvlegvupzqijbornbfwpefhxekgpuvgiyeudhncv", "cpwcjwgbcquirnsazumgjjcltitmeyfaudbnbqhflvecjsupjmgwfbjo", "teyygdmmyadppuopvqdodaczob", "qaeowuwqsqffvibrtxnjnzvzuuonrkwpysyxvkijemmpdmtnqxwekbpfzs", "qqxpxpmemkldghbmbyxpkwgkaykaerhmwwjonrhcsubchs"],
        chars_debug1 = "usdruypficfbpfbivlrhutcgvyjenlxzeovdyjtgvvfdjzcmikjraspdfp"
    console.log(countCharacters(words, chars));
    console.log(countCharacters(words2, chars2));
    console.log(countCharacters(words_debug1, chars_debug1)); // 0
};

main()


// // wrong
// const countCharacters = (words, chars) => {
//     charsArr = chars.split("");
//     let remove = [];
//     for (const word of words) {
//         for (const c of word) {
//             if (!charsArr.includes(c) && !remove.includes(word)) {
//                 remove.push(word);
//             }
//         }
//     }
//     console.log(remove);
//     let res = [];
//     for (const word of words) {
//         if (!remove.includes(word) && !res.includes(word)) {
//             res.push(word);
//         }
//     }
//     console.log(res);
//     let sum = 0;
//     for (const i of res) {
//         sum += i.length;
//     }
//     return sum;
// };