/**
 * 6.7 night
 * https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/
 */

// Accepted --- 4124ms 38.3 MB 41.62%
const numPairsDivisibleBy60 = (time) => {
    let count = 0;
    for (let i = 0; i < time.length; i++) {
        for (let j = i + 1; j < time.length; j++) {
            if ((time[i] + time[j]) % 60 == 0) {
                count++;
            }
        }
    }
    return count;
};

// Run time error, memory out
const numPairsDivisibleBy60_1 = (time) => {
    let pair = [];
    for (let i = 0; i < time.length; i++) {
        for (let j = i + 1; j < time.length; j++) {
            if ((time[i] + time[j]) % 60 == 0) {
                pair.push([time[i], time[j]]);
            }
        }
    }
    return pair.length;
};

const main = () => {
    let time = [30, 20, 150, 100, 40];
    let time2 = [60, 60, 60];
    console.log(numPairsDivisibleBy60(time));
    console.log(numPairsDivisibleBy60(time2));
};

main()