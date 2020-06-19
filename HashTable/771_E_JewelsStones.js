/**
 * 6.18 night
 * https://leetcode.com/problems/jewels-and-stones/
 */

// Accepted --- 68ms  34.1MB 47.24%
const numJewelsInStones = (J, S) => {
    let cnt = 0;
    for (const i of S) {
        if (J.includes(i)) {
            cnt++;
        }
    }
    return cnt;
};

const main = () => {
    let J = "aA",
        S = "aAAbbbb";
    let J2 = "z",
        S2 = "ZZ";
    console.log(numJewelsInStones(J, S));
    console.log(numJewelsInStones(J2, S2));
};

main()