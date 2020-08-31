/**
 * 8.30 evening
 * https://leetcode.com/problems/decoded-string-at-index/
 */

// heap out of memory  33/45
const decodeAtIndex = (S, K) => {
    let decode = '';
    for (const c of S) {
        if (isLowerCaseLetter(c)) {
            decode+=c;
        } else {
            let tmp = decode.repeat(Number(c));
            if (tmp.length > K) return tmp[K - 1];
            decode = '';
            decode = tmp;
        }
    }
    return decode[K - 1];
};

const isLowerCaseLetter = (c) => {
    return c.charCodeAt() >= 97 && c.charCodeAt() <= 122;
};

const main = () => {
    let S = "leet2code3",
        K = 10;
    let S2 = "ha22",
        K2 = 5;
    let S3 = "a2345678999999999999999",
        K3 = 1;
    let S_debug1 = "y959q969u3hb22odq595",
        K_debug1 = 222280369;
    console.log(decodeAtIndex(S, K));
    console.log(decodeAtIndex(S2, K2))
    console.log(decodeAtIndex(S3, K3));
    console.log(decodeAtIndex(S_debug1, K_debug1));
};

main()