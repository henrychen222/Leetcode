/**
 * 8.9 night
 * https://leetcode.com/problems/relative-ranks/
 */

// Accepted --- 84ms 39.2MB 94.44%
const findRelativeRanks_Jennifer = (nums) => {
    let sortedScores = [...nums].sort((a, b) => b - a);
    let ranking = new Map();
    for (let i = 0; i < sortedScores.length; i++) {
        if (i < 3) {
            if (i === 0) ranking[sortedScores[i]] = "Gold Medal";
            if (i === 1) ranking[sortedScores[i]] = "Silver Medal";
            if (i === 2) ranking[sortedScores[i]] = "Bronze Medal";
        } else {
            let index = i;
            ranking[sortedScores[i]] = (index + 1).toString();
        }
    };
    for (let j = 0; j < nums.length; j++) {
        sortedScores[j] = ranking[nums[j].toString()];
    }
    return sortedScores;
};

// Accepted --- 124ms 39.3MB 54.17%
const findRelativeRanks = (nums) => {
    let tmp = [...nums].sort((a, b) => b - a);
    let res = [];
    for (const score of nums) {
        let idx = tmp.indexOf(score);
        if (idx + 1 == 1) {
            res.push("Gold Medal");
        } else if (idx + 1 == 2) {
            res.push("Silver Medal");
        } else if (idx + 1 == 3) {
            res.push("Bronze Medal");
        } else {
            res.push(idx + 1 + '');
        }
    }
    return res;
};

const main = () => {
    let nums = [5, 4, 3, 2, 1];
    let debug1 = [10, 3, 8, 9, 4];
    console.log(findRelativeRanks(nums));
    console.log(findRelativeRanks(debug1)); // ["Gold Medal","5","Bronze Medal","Silver Medal","4"]

    console.log("");
    console.log(findRelativeRanks_Jennifer(nums));
    console.log(findRelativeRanks_Jennifer(debug1));
};

main()