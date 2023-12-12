/**
 * 08/01/20 night
 * https://leetcode.com/problems/daily-temperatures/
 */

// Accepted --- 740ms 46.8MB 28.28%
const dailyTemperatures = (T) => {
    let res = [];
    for (let i = 0; i < T.length; i++) {
        let tmp = 0;
        for (let j = i + 1; j < T.length; j++) {
            if (T[j] > T[i]) {
                tmp = j - i;
                break;
            }
        }
        res.push(tmp);
    }
    return res;
};

const main = () => {
    let T = [73, 74, 75, 71, 69, 72, 76, 73];
    console.log(dailyTemperatures(T));
};

main()