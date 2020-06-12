/**
 * 6.11 night
 * https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
 */

// Accepted --- 68ms 35.8MB 47.63%
const kidsWithCandies = (candies, extraCandies) => {
    const candiesOrigin = [...candies]; // no const 56ms 84.92%
    candies.sort((a, b) => b - a);
    return candiesOrigin.map(x => {
        if ((x + extraCandies) >= candies[0]) {
            return true;
        }
        return false;
    });
};

const main = () => {
    let candies = [2, 3, 5, 1, 3],
        extraCandies = 3;
    let candies2 = [4, 2, 1, 1, 2],
        extraCandies2 = 1;
    let candies3 = [12, 1, 12],
        extraCandies3 = 10;
    console.log(kidsWithCandies(candies, extraCandies));
    console.log(kidsWithCandies(candies2, extraCandies2));
    console.log(kidsWithCandies(candies3, extraCandies3));
};

main()