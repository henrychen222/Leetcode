/**
 * 7.25 evening
 * https://leetcode.com/contest/weekly-contest-199/problems/shuffle-string/
 */
const restoreString = (s, indices) => {
    let data = [];
    for (let i = 0; i < s.length; i++) {
        data.push([s[i], indices[i]]);
    }
    data.sort((a, b) => a[1] - b[1]);
    let res = '';
    for (const d of data) {
        res+=d[0];
    }
    return res;
};

const main = () => {
    let s = "codeleet", indices = [4,5,6,7,0,2,1,3];
    let s2 = "abc", indices2 = [0,1,2];
    let s3 = "aiohn", indices3 = [3,1,4,2,0];
    let s4 = "aaiougrt", indices4 = [4,0,2,6,7,3,1,5];
    let s5 = "art", indices5 = [1,0,2];
    console.log(restoreString(s, indices));
    console.log(restoreString(s2, indices2));
    console.log(restoreString(s3, indices));
    console.log(restoreString(s, indices3));
    console.log(restoreString(s4, indices4));
    console.log(restoreString(s5, indices5));
};

main()
