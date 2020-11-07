/**
 * 7.4 night  11.6 night complete
 * https://leetcode.com/problems/reveal-cards-in-increasing-order/
 */

// Accepted --- 84ms 87.65%
const deckRevealedIncreasing = (deck) => {
    let order = [...deck].sort((a, b) => b - a);
    // console.log(order)
    let res = [];
    while (true) {
        if (order.length == 0) break;
        let reveal = order[0];
        order.shift();
        if (res.length != 0) { // opposite operation of step 2 (remove top -> add bottom): remove bottom -> add top
            res.unshift(res[res.length - 1]);
            res.pop();
        }
        res.unshift(reveal); // opposite operation of step 1 (reveal top and remove): add to the top
        // console.log(res)
    }
    return res;
};

// Accepted --- 84ms 87.65%
const deckRevealedIncreasing_modify = (deck) => {
    let order = [...deck].sort((a, b) => b - a);
    let res = [];
    for (;;) {
        if (order.length == 0) break;
        let reveal = order[0];
        order.shift();
        if (res.length != 0) {
            res.unshift(res[res.length - 1]);
            res.pop();
        }
        res.unshift(reveal);
    }
    return res;
};

// Accepted --- 92ms 50.62%
const deckRevealedIncreasing2 = (deck) => {
    let order = [...deck].sort((a, b) => a - b);
    let res = [];
    while (true) {
        if (order.length == 0) break;
        let reveal = order[order.length - 1];
        order.pop();
        if (res.length != 0) {
            res.unshift(res[res.length - 1]);
            res.pop();
        }
        res.unshift(reveal);
    }
    return res;
};

// don't know
// const deckRevealedIncreasing = (deck) => {
//     let reveal = [...deck].sort((a,b) => a - b);
//     console.log(deck)
//     console.log(reveal)
// };

const main = () => {
    let deck = [17, 13, 11, 2, 3, 5, 7];
    console.log(deckRevealedIncreasing(deck));
};

main()