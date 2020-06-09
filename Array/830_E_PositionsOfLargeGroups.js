/**
 * 6.7 night
 * https://leetcode.com/problems/positions-of-large-groups/
 */

// need to fix close
const largeGroupPositions = (S) => {
    let res = [];
    let str = [];
    for (let i = 0; i < S.length; i++) {
        for (let j = i + 1; j < S.length; j++) {
            let target = S.slice(i, j + 1);
            if ([...new Set(target)].length == 1 && target.length >= 3 && !str.includes(target)) { // need to fix here how to get the longest string
                str.push(target);
                res.push([i, j]);
            }
        }
    }
    // console.log(res);
    for (let i = 0; i < res.length; i++) {
        for (let j = i + 1; j < res.length; j++) {
            if (res[i][0] == res[j][0]) {
                if (res[i][1] < res[j][1]) {
                    res.splice(i, 1);
                }
            }
        }

    }
    return res;
};

const main = () => {
    let S = "abbxxxxzzy";
    let S2 = "abc";
    let S3 = "abcdddeeeeaabbbcd";
    let debug = "ggggg";
    console.log(largeGroupPositions(S));
    console.log(largeGroupPositions(S2));
    console.log(largeGroupPositions(S3));
    console.log(largeGroupPositions(debug)); // [[0, 4]]
};

main()