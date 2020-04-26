/**
 * 4.25 evening
 * https://leetcode.com/contest/weekly-contest-186/problems/maximum-score-after-splitting-a-string/
 */
const maxScore = (s) => {
    let allScore = [];
    let allCategory = new Map();

    for (let i = 0; i < s.length - 1; i++) { // cannot be empty of the right substring
        allCategory.set(s.substring(0, i + 1), s.substring(i + 1, s.length));
    }

    console.log(allCategory);

    let keys = allCategory.keys();
    console.log(keys);

    for (const key of keys) {
        let eachScore = 0;
        for (const j of key) {
            if (j == 0) {
                eachScore++;
            }
        }

        let value = allCategory.get(key);
        for (const j of value) {
            if (j == 1) {
                eachScore++;
            }
        }
        allScore.push(eachScore);
    }

    console.log(allScore);
    return getMaxArr(allScore);
};

const getMaxArr = (arr) => {
    let max = arr[0];
    for (i = 1; i < arr.length; i++)
        if (arr[i] > max)
            max = arr[i];
    return max;
};


const main = () => {
    let s = "011101";
    let s2 = "00111";
    let s3 = "1111";

    console.log(maxScore(s)); // 5
    console.log("");
    console.log(maxScore(s2)); // 5
    console.log("");
    console.log(maxScore(s3)); // 3

    let debug1 = "00";
    let debug2 = "000";
    let debug3 = "11";
    let debug4 = "111";
    console.log("");
    console.log(maxScore(debug1)); // 1
    console.log("");
    console.log(maxScore(debug2)); // 2
    console.log("");
    console.log(maxScore(debug3)); // 1
    console.log("");
    console.log(maxScore(debug4)); // 2
};

main()