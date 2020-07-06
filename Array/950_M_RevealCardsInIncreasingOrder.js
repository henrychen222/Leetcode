/**
 * 7.4 night
 * https://leetcode.com/problems/reveal-cards-in-increasing-order/
 */

const deckRevealedIncreasing = (deck) => {
    let reveal = [...deck].sort((a,b) => a - b);
    console.log(deck)
    console.log(reveal)
};

const main = () => {
    let deck = [17,13,11,2,3,5,7];
    console.log(deckRevealedIncreasing(deck));
};

main()