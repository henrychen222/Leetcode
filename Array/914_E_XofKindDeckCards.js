/**
 * 6.4 evening
 * https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/
 */

// need to fix
const hasGroupsSizeX = (deck) => {
    let unique = [...new Set(deck)];
    // console.log(unique);
    // console.log(deck);
    let map = new Map();
    for (const u of unique) {
        map.set(u, count(deck, u));
    }
    console.log(map);

    for (const k of map) {
        if (map.get(k) == map.get(1)) {
            return true;
        }
    }
    return false;
};

const count = (arr, target) => {
    let count = 0;
    for (const i of arr) {
        if (i == target) {
            count++;
        }
    }
    return count;
};

const main = () => {
    let deck = [1, 2, 3, 4, 4, 3, 2, 1];
    let deck2 = [1, 1, 1, 2, 2, 2, 3, 3];
    let deck3 = [1];
    let deck4 = [1, 1];
    let deck5 = [1, 1, 2, 2, 2, 2]
    console.log(hasGroupsSizeX(deck)); // true
    console.log(hasGroupsSizeX(deck2)); // false
    console.log(hasGroupsSizeX(deck3)); // false
    console.log(hasGroupsSizeX(deck4)); // true
    console.log(hasGroupsSizeX(deck5)); // true

};

main()