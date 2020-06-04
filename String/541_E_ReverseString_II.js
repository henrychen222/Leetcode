/**
 * 6.3 evening
 * https://leetcode.com/problems/reverse-string-ii/
 */

// too complicated
const reverseStr = (s, k) => {
    let res = [];

    let arr = s.split("");

    if (s.length < k) {
        arr = arr.reverse();
    } else if (arr.length >= k && arr.length < 2 * k) {
        res.push(arr.slice(0, k + 1).reverse());
        res.push(arr.slice(k + 1, s.length));
        // return res;
    } else if (arr.length > 2 * k) {
        for (let i = 0; i < arr.length; i += 2 * k) {
            let kPart = arr.slice(i, i + k + 1);
            res.push(kPart.reverse())
        }
    }

    console.log(res);

};

const reverse = (s) => {
    return s.split("").reverse().join("");
};

const reverse2 = (s) => {
    let res = "";
    for (let i = s.length; i >= 0; i--) {
        res += s[i]
    }
    return res;
};

const main = () => {
    let s = "abcdefg",
        k = 2
    console.log(reverseStr(s, k)); // abcdefg -> bacd feg    (0, 3) (4, 7) (8, 11)
};

main()