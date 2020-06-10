/**
 * 6.9 evening
 * https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
 */

// wrong
const countCharacters = (words, chars) => {
    charsArr = chars.split("");
    let remove = [];
    for (const word of words) {
        for (const c of word) {
            if (!charsArr.includes(c) && !remove.includes(word)) {
                remove.push(word);
            }
        }
    }
    console.log(remove);
    let res = [];
    for (const word of words) {
        if (!remove.includes(word) && !res.includes(word)) {
            res.push(word);
        }
    }
    console.log(res);
    let sum = 0;
    for (const i of res) {
        sum += i.length;
    }
    return sum;
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
    console.log(countCharacters(words_debug1, chars_debug1));
};

main()