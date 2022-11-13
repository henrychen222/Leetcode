/**
 * 04/03/21 morning
 * https://leetcode.com/contest/biweekly-contest-49/problems/sentence-similarity-iii/
 */

const pr = console.log;

const areSentencesSimilar = (s1, s2) => {
    let a1 = s1.split(" ");
    let a2 = s2.split(" ");
    return a1.length <= a2.length ? ok(a1, a2) : ok(a2, a1);
};

// Accepted
const ok = (short, long) => {
    let re = [];
    while (1) {
        if (short[0] == long[0]) {
            short.shift();
            long.shift();
        }
        if (short[short.length - 1] == long[long.length - 1]) {
            short.pop();
            long.pop();
        }
        if (re[0] == short.length) break;
        re.unshift(short.length);
    }
    // pr(short, long)
    return short.length == 0;
};

// const ok = (short, long) => {
//     pr(short, long)
//     let sn = short.length;
//     let ln = long.length;
//     if (sn == ln) {
//         return JSON.stringify(short) ==  JSON.stringify(long);
//     }
//     let left = 0;
//     for (let i = 0; i < sn; i++) {
//         if (short[i] == long[i]) continue;
//         left = i;
//         break;
//     }
//     let right = ln - 1;
//     for (let i = 0; i < sn; i++) {
//         if (short[sn - 1 - i] == long[ln - 1 - i]) continue;
//         right = ln - 1 - i;
//         break;
//     }
//     pr(left, long[left], right, long[right])
//     if (left > 0 || right < ln - 1) return true;
//     return false;
// };

const main = () => {
    let sentence1 = "My name is he Haley", sentence2 = "My Haley";
    let sentence1_2 = "of", sentence2_2 = "A lot of words";
    let sentence1_3 = "Eating right now", sentence2_3 = "Eating";
    let sentence1_4 = "Luky", sentence2_4 = "Lucccky";
    pr(areSentencesSimilar(sentence1, sentence2));
    pr(areSentencesSimilar(sentence1_2, sentence2_2));
    pr(areSentencesSimilar(sentence1_3, sentence2_3));
    pr(areSentencesSimilar(sentence1_4, sentence2_4));
};

main()