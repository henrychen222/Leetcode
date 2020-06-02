/**
 * 6.1 night
 * https://leetcode.com/problems/string-matching-in-an-array/
 */

// Accepted --- 72ms 36.4MB 39.81%
const stringMatching = (words) => {
    words.sort((a, b) => a.length - b.length);
    // console.log(words);
    let res = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[j].includes(words[i]) && !res.includes(words[i])) {
                res.push(words[i]);
            }
        }
    }
    // console.log(res);
    return res;
}

// const check = (s, sub) => {
//     for (let i = 0; i < s.length; i++) {
//         for (let j = 1; j < s.length; j++) {
//             if (s.slice(i, j) == sub) {
//                 return true;
//             }
//         }
//     }
//     return false;
// };

const main = () => {
    let words = ["mass", "as", "hero", "superhero"];
    let words2 = ["leetcode", "et", "code"];
    let words3 = ["blue", "green", "bu"];
    console.log(stringMatching(words));
    console.log(stringMatching(words2));
    console.log(stringMatching(words3));

    // console.log("mass".includes("as"));
    // console.log(check("mass", "as"));
};

main()