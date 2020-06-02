/**
 * 6.1 night
 * https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/
 */

// Accepted --- 68ms 36.9MB 26.04%
const generateTheString = (n) => {
    let res = "";
    if (n % 2 == 0) {
        for (let i = 1; i <= n - 1; i++) {
            res += 'p';
        }
        res += 'z';
    } else {
        for (let i = 1; i <= n; i++) {
            res += 'a';
        }
    }
    return res;
};

const main = () => {
    let n = 4;
    let n2 = 2;
    let n3 = 7;

    console.log(generateTheString(n));
    console.log(generateTheString(n2));
    console.log(generateTheString(n3));
};

main()