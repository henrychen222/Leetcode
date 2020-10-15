/**
 * 10.14 evening
 * https://leetcode.com/problems/stone-game/
 */

// wrong
const stoneGame = (piles) => {
    let alex = [];
    let lee = [];
    let round = 1;
    while (piles.length > 0) {
        let begin = piles[0];
        let end = piles[piles.length - 1];
        if (round % 2 == 1) { // greedy wrong
            if (begin > end) {
                alex.push(begin);
                piles.shift();
            } else if (begin < end) {
                alex.push(end);
                piles.pop();
            } else {
                let i = 1;
                let j = piles.length - 1;
                while (piles[i] == piles[j]) {
                    i++;
                    j--;
                }
                if (piles[i] > piles[j]) {
                    alex.push(end);
                    piles.pop();
                } else {
                    alex.push(begin);
                    piles.shift();
                }
            }
            round++;
        } else {
            if (begin > end) {
                lee.push(begin);
                piles.shift();
            } else if (begin < end) {
                lee.push(end);
                piles.pop();
            } else {
                let i = 1;
                let j = piles.length - 1;
                while (piles[i] == piles[j]) {
                    i++;
                    j--;
                }
                if (piles[i] > piles[j]) {
                    lee.push(end);
                    piles.pop();
                } else {
                    lee.push(begin);
                    piles.shift();
                }
            }
            round++;
        }
    }
    console.log(alex, lee);
    return sum(alex) > sum(lee) ? true : false;
};

const sum = (arr) => {
    return arr.reduce((acc, cur) => acc + cur);
};

const main = () => {
    let piles = [5, 3, 4, 5];
    let debug1 = [3, 2, 10, 4];
    console.log(stoneGame(piles));
    console.log(stoneGame(debug1));  // true
};

main()