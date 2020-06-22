/**
 * 6.21 evening
 * https://leetcode.com/problems/uncommon-words-from-two-sentences/
 */

// Accepted --- 72ms 35.8MB 36.84%
const uncommonFromSentences = (A, B) => {
    let res = [];
    let Aarr = A.split(" ");
    let Barr = B.split(" ");
    for (const a of Aarr) {
        if (getFrequency(Aarr, a) == 1 && !Barr.includes(a)) {
            res.push(a);
        }
    }
    for (const b of Barr) {
        if (getFrequency(Barr, b) == 1 && !Aarr.includes(b)) {
            res.push(b);
        }
    }
    return res;
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const main = () => {
    let A = "this apple is sweet",
        B = "this apple is sour";
    let A2 = "apple apple",
        B2 = "banana";
    console.log(uncommonFromSentences(A, B));
    console.log(uncommonFromSentences(A2, B2));
};

main()