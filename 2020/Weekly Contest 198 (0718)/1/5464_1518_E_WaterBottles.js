/**
 * 7.18 evening
 * https://leetcode.com/contest/weekly-contest-198/problems/water-bottles/
 */
// Accepted
const numWaterBottles = (numBottles, numExchange) => {
    let sum = numBottles;
    while (numBottles >= numExchange) {
        let exchange = Math.floor(numBottles / numExchange);
        sum += exchange;
        numBottles = numBottles % numExchange + exchange;
    }
    return sum;
};

const main = () => {
    let numBottles = 9, numExchange = 3;
    let numBottles2 = 15, numExchange2 = 4;
    let numBottles3 = 5, numExchange3 = 5;
    let numBottles4 = 2, numExchange4 = 3;
    console.log(numWaterBottles(numBottles, numExchange));
    console.log(numWaterBottles(numBottles2, numExchange2));
    console.log(numWaterBottles(numBottles3, numExchange3));
    console.log(numWaterBottles(numBottles4, numExchange4));
};

main()