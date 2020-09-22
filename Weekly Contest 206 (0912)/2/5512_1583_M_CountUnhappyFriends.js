/**
 * 9.12 evening
 * https://leetcode.com/contest/weekly-contest-206/problems/count-unhappy-friends/
 */

// issue  18/99
const unhappyFriends = (n, preferences, pairs) => {
    let cnt = 0;
    for (const pa of pairs) {
        let l = pa[0];
        let r = pa[1];
        if (isUnhappy(l, preferences, r, pairs)) cnt++;
        if (isUnhappy(r, preferences, l, pairs)) cnt++;
    }
    return cnt;
};

const isUnhappy = (f, preferences, over, pairs) => {
    // console.log(f, over);
    for (const p of preferences) {
        let idx = p.indexOf(over);
        if (idx != -1) {
            for (let i = idx; i >= 0; i--) {
                let tmp = preferences[p[i]]; // [1, 2, 0]
                let prefer = tmp.indexOf(f);
                for (const pa of pairs) {
                    if (pa[0] == p[i]) {
                        let pos = tmp.indexOf(pa[1]);
                        if (prefer > pos) {
                            console.log(tmp, prefer)
                            return true;
                        }
                    }
                    if (pa[1] == p[i]) {
                        let pos = tmp.indexOf(pa[0]);
                        if (prefer > pos) {
                            console.log(tmp, prefer)
                            return true;
                        }
                    }
                }
            }
        }
    }
    return false;
};

const main = () => {
    let n = 4, preferences = [[1, 2, 3], [3, 2, 0], [3, 1, 0], [1, 2, 0]], pairs = [[0, 1], [2, 3]];
    let n2 = 2, preferences2 = [[1], [0]], pairs2 = [[1, 0]];
    let n3 = 4, preferences3 = [[1, 3, 2], [2, 3, 0], [1, 3, 0], [0, 2, 1]], pairs3 = [[1, 3], [0, 2]];
    console.log(unhappyFriends(n, preferences, pairs));
    console.log(unhappyFriends(n2, preferences2, pairs2));
    console.log(unhappyFriends(n3, preferences3, pairs3));
};

main()