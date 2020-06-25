/**
 * 6.25 night
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
 */

// need to fix
const removeDuplicates = (S) => {
    let i = 1;
    for (; i < S.length; i++) {
        console.log(S);
        if (S[i - 1].charCodeAt() == S[i].charCodeAt()) {
            S = erase(S, i - 1, i);
        }
        // console.log(S);
    }
    return S;
};

const erase = (s, start, end) => {
    return s.slice(0, start) + s.slice(end + 1, s.length);
};

const main = () => {
    let S = "abbaca";
    console.log(removeDuplicates(S));
};

main()