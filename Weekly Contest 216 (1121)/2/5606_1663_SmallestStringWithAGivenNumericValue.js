/**
 * 11.21 evening
 * https://leetcode.com/contest/weekly-contest-216/problems/smallest-string-with-a-given-numeric-value/
 */

// Accepted
// reference: https://www.geeksforgeeks.org/lexicographically-smallest-string-of-length-n-and-sum-k/
const getSmallestString = (n, k) => {
    // let map = new Map();
    // for (let i = 1; i <= 26; i++) {
    //     map.set(String.fromCharCode(i + 96), i);
    // }
    // console.log(map);
    // let res = '';
    // for (let i = 1; i <= n; i++) {
    //     for (const ke of map.keys()) {  
    //     }
    // }
    let s = "";
    for (let i = 0; i < n; i++) {
        s += 'a';
    }
    let res = s.split("");
    for (let i = n - 1; ~i; i--) {
        k -= i;
        if (k >= 0) {
            if (k >= 26) {
                res[i] = 'z';
                k -= 26;
            } else {
                let c = String.fromCharCode(k + 97 - 1);
                res[i] = c;
                k -= res[i].charCodeAt() - 'a'.charCodeAt() + 1;
            }
        }
        else {
            break;
        }
        k += i;
    }
    return res.join("");
};

const main = () => {
    let n = 3, k = 27;
    let n2 = 5, k2 = 73;
    console.log(getSmallestString(n, k));
    console.log(getSmallestString(n2, k2));  // 1 + 1 + 19 + 26 + 26
};

main()