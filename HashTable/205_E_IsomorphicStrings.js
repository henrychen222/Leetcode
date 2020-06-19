/**
 * 6.18 evening
 * https://leetcode.com/problems/isomorphic-strings/
 */

// don't know
const isIsomorphic = (s, t) => {
    for (let i = 1; i < s.length; i++) {
        let flag = true;
        if (s[i - 1].charCodeAt() < s[i].charCodeAt()) {
            if (t[i - 1].charCodeAt() >= t[i].charCodeAt()) {
                return false;
            }
        }
        if (s[i - 1].charCodeAt() > s[i].charCodeAt()) {
            if (t[i - 1].charCodeAt() <= t[i].charCodeAt()) {
                return false;
            }
        }
        if (s[i - 1].charCodeAt() == s[i].charCodeAt()) {
            if (t[i - 1].charCodeAt() != t[i].charCodeAt()) {
                return false;
            }
        }
    }
    return true;
};

const main = () => {
    let s = "egg",
        t = "add";
    let s2 = "foo",
        t2 = "bar";
    let s3 = "paper",
        t3 = "title";
    // console.log(isIsomorphic(s, t));
    // console.log(isIsomorphic(s2, t2));
    console.log(isIsomorphic(s3, t3));
};

main()