/**
 * 6.25 night  8.4 night complete
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
 */

// Accepted ---- 152ms 44.7MB 26.52%
const removeDuplicates_refine2 = (S) => {
    let lenAfterRemoving;
    while (true) {
        let len = S.length;
        for (let i = 1; i < S.length; i++) {
            if (S[i - 1] == S[i]) {
                S = S.replace(S[i - 1] + S[i], '');
                lenAfterRemoving = S.length;
            }
        }
        if (lenAfterRemoving == len) break;
    }
    return S;
};

// Accepted --- 192ms 44.7MB 21.93%
const removeDuplicates_refine = (S) => {
    let stack = [S.length];
    while (true) {
        let len = S.length;
        for (let i = 1; i < S.length; i++) {
            if (S[i - 1] == S[i]) {
                let tmp = S[i - 1] + S[i];
                S = S.replace(tmp, '');
                stack.push(S.length);
            }
        }
        if (stack[stack.length - 1] == len) break;
    }
    return S;
};

// Accepted --- 388ms 183.1MB 20.30%
const removeDuplicates = (S) => {
    let stack = [S];
    while (true) {
        let sBegin = S;
        for (let i = 1; i < S.length; i++) {
            if (S[i - 1] == S[i]) {
                let tmp = S[i - 1] + S[i];
                // console.log(tmp);
                S = S.replace(tmp, '');
                stack.push(S);
                // console.log(S, stack);
            }
        }
        if (stack[stack.length - 1] == sBegin) break;
    }
    return S;
};

const main = () => {
    let S = "abbaca";
    console.log(removeDuplicates(S));
    console.log(removeDuplicates_refine(S));
    console.log(removeDuplicates_refine2(S));
};

main()


// // need to fix
// const removeDuplicates = (S) => {
//     let i = 1;
//     for (; i < S.length; i++) {
//         console.log(S);
//         if (S[i - 1].charCodeAt() == S[i].charCodeAt()) {
//             S = erase(S, i - 1, i);
//         }
//         // console.log(S);
//     }
//     return S;
// };

// const erase = (s, start, end) => {
//     return s.slice(0, start) + s.slice(end + 1, s.length);
// };