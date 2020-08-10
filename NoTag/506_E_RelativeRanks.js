/**
 * 8.9 night
 * https://leetcode.com/problems/relative-ranks/
 */

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
};

main()