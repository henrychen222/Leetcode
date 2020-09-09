/**
 * 9.9 morning
 * https://leetcode.com/problems/hand-of-straights/
 */

// don't know
const isNStraightHand = (hand, W) => {
    let n = hand.length;
    if (n % W != 0) return false;
    let map = new Map();
    let element = [...new Set(hand)];
    for (const e of element) {
        map.set(e, getFrequency(hand, e))
    }
    let mapSort = new Map([...map].sort((a, b) => a[0] - b[0]));
    console.log(map)
    console.log(mapSort);
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const main = () => {
    let hand = [1, 2, 3, 6, 2, 3, 4, 7, 8],
        W = 3;
    let hand2 = [1, 2, 3, 4, 5],
        W2 = 4;
    console.log(isNStraightHand(hand, W));
    console.log(isNStraightHand(hand2, W2));
};

main()