/**
 * 05/29/21 evening
 * https://leetcode.com/contest/weekly-contest-243/problems/check-if-word-equals-summation-of-two-words/
 */

const pr = console.log;

// Accepted
const isSumEqual = (f, s, t) => {
   let [pf, ps, pt] = [parse(f), parse(s), parse(t)];
   // pr(pf, ps, pt)
   return Number(pf) + Number(ps) == Number(pt);
};

const parse = (s) => {
    let res = '';
    for (const c of s) {
        res += c.charCodeAt() - 97;
    }
    return res;
};

const main = () => {
    let firstWord = "acb", secondWord = "cba", targetWord = "cdb";
    let firstWord2 = "aaa", secondWord2 = "a", targetWord2 = "aab";
    let firstWord3 = "aaa", secondWord3 = "a", targetWord3 = "aaaa";
    pr(isSumEqual(firstWord, secondWord, targetWord))
    pr(isSumEqual(firstWord2, secondWord2, targetWord2))
    pr(isSumEqual(firstWord3, secondWord3, targetWord3))
};

main()