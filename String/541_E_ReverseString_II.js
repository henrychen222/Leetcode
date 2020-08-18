/**
 * 6.3 evening   8.17 evening solve
 * https://leetcode.com/problems/reverse-string-ii/
 */

// Accepted --- 72ms 39MB 89.91%
const reverseStr2 = (s, k) => {
    let n = s.length;
    let res = '';
    for (let i = 0; i < n; i += 2 * k) {
        let each = s.slice(i, i + 2 * k);
        let len = each.length;
        if (len != 2 * k) break;
        let tmp = each.slice(0, k);
        res += reverse(tmp);
        res += each.slice(k, len);
    }
    let end = s.slice(n - (n - res.length), n);
    let endLen = end.length;
    if (endLen < k) {
        res += reverse(end);
    } else if (endLen < 2 * k && endLen >= k) {
        let tmp = end.slice(0, k);
        res += reverse(tmp);
        res += end.slice(k, endLen);
    }
    return res;
};

// Accepted --- 68ms 38.5MB 94.30%
const reverseStr = (s, k) => {
    let res = '';
    for (let i = 0; i < s.length; i += 2 * k) {
        let each = s.slice(i, i + 2 * k);
        let len = each.length;
        if (len == 2 * k) {
            let tmp = each.slice(0, k);
            res += reverse(tmp);
            res += each.slice(k, len);
        } else {
            if (len < k) {
                res += reverse(each);
            } else if (len < 2 * k && len >= k) {
                let tmp = each.slice(0, k);
                res += reverse(tmp);
                res += each.slice(k, len);
            }
        }
    }
    return res;
};

const reverse = (s) => {
    return s.split("").reverse().join("");
};

// Accepted --- 64ms 38.6MB 98.25%
const reverseStr_reverse2 = (s, k) => {
    let res = '';
    for (let i = 0; i < s.length; i += 2 * k) {
        let each = s.slice(i, i + 2 * k);
        let len = each.length;
        if (len == 2 * k) {
            let tmp = each.slice(0, k);
            res += reverse2(tmp);
            res += each.slice(k, len);
        } else {
            if (len < k) {
                res += reverse2(each);
            } else if (len < 2 * k && len >= k) {
                let tmp = each.slice(0, k);
                res += reverse2(tmp);
                res += each.slice(k, len);
            }
        }
    }
    return res;
};

const reverse2 = (s) => {
    let res = "";
    for (let i = s.length - 1; i >= 0; i--) {
        res += s[i];
    }
    return res;
};

const main = () => {
    let s = "abcdefg",
        k = 2
    console.log(reverseStr(s, k)); // abcdefg -> bacd feg    (0, 3) (4, 7) (8, 11)
    console.log(reverseStr2(s, k));
    console.log(reverseStr_reverse2(s, k));
};

main()


// // too complicated
// const reverseStr = (s, k) => {
//     let res = [];

//     let arr = s.split("");

//     if (s.length < k) {
//         arr = arr.reverse();
//     } else if (arr.length >= k && arr.length < 2 * k) {
//         res.push(arr.slice(0, k + 1).reverse());
//         res.push(arr.slice(k + 1, s.length));
//         // return res;
//     } else if (arr.length > 2 * k) {
//         for (let i = 0; i < arr.length; i += 2 * k) {
//             let kPart = arr.slice(i, i + k + 1);
//             res.push(kPart.reverse())
//         }
//     }

//     console.log(res);

// };