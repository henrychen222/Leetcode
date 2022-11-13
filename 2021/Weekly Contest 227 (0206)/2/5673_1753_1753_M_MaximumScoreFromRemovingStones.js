/**
 * 2.6 evening
 * https://leetcode.com/contest/weekly-contest-227/problems/maximum-score-from-removing-stones/
 */

// Accepted
const maximumScore = (a, b, c) => {
    let t = [a, b, c];
    let cnt = 0;
    while (true) {
        t.sort((x, y) => y - x);
        if (t[0] > 0) {
            if (t[1] > 0) {
                t[0]--;
                t[1]--;
                cnt++;
            } else {
                if (t[2] > 0) {
                    t[0]--;
                    t[2]--;
                    cnt++;
                } else {
                    break;
                }
            }
        } else {
            if (t[1] > 0) {
                if (t[2] > 0) {
                    t[1]--;
                    t[2]--;
                    cnt++;
                } else {
                    break;
                }
            } else {
                break;
            }
        }
    }
    return cnt;
};

const main = () => {
    let a = 2, b = 4, c = 6;
    let a2 = 4, b2 = 4, c2 = 6;
    let a3 = 1, b3 = 8, c3 = 8;
    console.log(maximumScore(a, b, c));
    console.log(maximumScore(a2, b2, c2));
    console.log(maximumScore(a3, b3, c3));
};

main()