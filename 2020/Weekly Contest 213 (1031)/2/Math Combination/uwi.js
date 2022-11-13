/**
 * 10.31 night
 * https://leetcode.com/contest/weekly-contest-213/problems/count-sorted-vowel-strings/
 */

// Accepted --- 76ms  C(n + 4, 4)
// reference: https://leetcode.com/problems/count-sorted-vowel-strings/discuss/918452/C%2B%2B-1-line-mathematical-solution-with-brief-explanations
const countVowelStrings = (n) => {
    return (n + 4) * (n + 3) * (n + 2) * (n + 1) / 24;
};


// Accepted --- 72ms
const countVowelStrings_modify = (n) => {
    return Number(combination(n + 4, 4));
};

const combination = (m, n) => {
    return factorial(m, n) / factorial(n, n); // return BigInt
}

const factorial = (m, n) => {
    let num = BigInt(1);
    let cnt = 0;
    for (let i = BigInt(m); i > 0; i--) {
        if (cnt == n) break;
        num = num * i;
        cnt++;
    }
    return num;
};

const main = () => {
    let n = 1;
    let n2 = 2;
    let n3 = 33;
    let n4 = 50;
    console.log(countVowelStrings(n));
    console.log(countVowelStrings(n2));
    console.log(countVowelStrings(n3));
    console.log(countVowelStrings(n4));
};

main()