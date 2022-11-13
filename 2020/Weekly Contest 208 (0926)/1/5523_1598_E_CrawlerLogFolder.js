/**
 * 9.26 evening
 * https://leetcode.com/contest/weekly-contest-208/problems/crawler-log-folder/
 */

// Accepted
const minOperations = (logs) => {
    let cnt = 0;
    for (const l of logs) {
        if (l[0] == '.' && l[1] == '.') {
            if (cnt == 0) continue;
            cnt--;
        } else if (l[0] == '.' && l[1] == '/'){
           continue;
        }  else {
            cnt++;
        }
    }
    return cnt;
};

const main = () => {
    let logs = ["d1/","d2/","../","d21/","./"];
    let logs2 = ["d1/","d2/","./","d3/","../","d31/"];
    let logs3 = ["d1/","../","../","../"];
    console.log(minOperations(logs));
    console.log(minOperations(logs2));
    console.log(minOperations(logs3));
};

main()