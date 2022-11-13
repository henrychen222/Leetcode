/**
 * 1.9 evening
 * https://leetcode.com/contest/weekly-contest-223/problems/decode-xored-array/
 */

// Accepted
const decode = (encoded, first) => {
    let res = [first];
    let n = encoded.length;
    for (let i = 0; i < n; i++) {
        let tmp = res[res.length - 1] ^ encoded[i];
        res.push(tmp);
    }
    return res;
};

const main = () => {
    let encoded = [1, 2, 3], first = 1;
    let encoded2 = [6, 2, 7, 3], first2 = 4;
    console.log(decode(encoded, first));
    console.log(decode(encoded2, first2));
};

main()