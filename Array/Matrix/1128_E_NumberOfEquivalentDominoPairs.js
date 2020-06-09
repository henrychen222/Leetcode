/**
 * 6.7 night
 * https://leetcode.com/problems/number-of-equivalent-domino-pairs/
 */

// Accepted --- 3340ms 41MB 21.74% similar to 1010
const numEquivDominoPairs = (dominoes) => {
    let count = 0;
    // let pair = [];
    for (let i = 0; i < dominoes.length; i++) {
        let a = dominoes[i][0];
        let b = dominoes[i][1];
        for (let j = i + 1; j < dominoes.length; j++) {
            let c = dominoes[j][0];
            let d = dominoes[j][1];
            if ((a == c && b == d) || (a == d && b == c)) {
                count++;
                // pair.push(dominoes[i]);
            }
        }
    }
    // console.log(pair);
    return count;
};

const main = () => {
    let dominoes = [
        [1, 2],
        [2, 1],
        [3, 4],
        [5, 6]
    ];
    console.log(numEquivDominoPairs(dominoes));
};

main()