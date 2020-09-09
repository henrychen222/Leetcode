/**
 * 9.9 morning
 * https://leetcode.com/problems/boats-to-save-people/
 */


// wrong, have to select the equal to limit first (2 in boat, 3 in a boat....)
const numRescueBoats = (people, limit) => {
    let totalSum = people.reduce((acc, cur) => acc + cur);
    if (totalSum < limit) {
        return 1;
    } else {
        let n = people.length;
        people.sort((a, b) => a - b);
        let idx = 0;
        let cnt = 0;
        let totalLen = 0;
        let idxUsed = [];
        // for (let i = 0; i < n; i++) {
        //     if (idxUsed.indexOf(i) == -1) {
        //         for (let j = i + 1; j < n; j++) {
        //             if (idxUsed.indexOf(j) == -1) {
        //                 if (people[i] + people[j] == limit) {
        //                     cnt++;
        //                     idxUsed.push(i);
        //                     idxUsed.push(j);
        //                     break;
        //                 }
        //             }
        //         }
        //     }
        // }
        console.log(people, idxUsed, cnt);
        if (idxUsed.length == n) return cnt;
        while (idx < n - 1) {
            let tmp = [];
            let sum = 0;
            for (let i = idx; i < n; i++) {
                // if (idxUsed.indexOf(i) == -1) {
                    sum += people[i];
                    tmp.push(people[i]);
                    if (sum == limit) {
                        idx = i + 1;
                        break;
                    } else if (sum > limit) {
                        tmp.pop();
                        idx = i;
                        break;
                    }
                // }
            }
            console.log(tmp, idx, n);
            cnt++;
            totalLen += tmp.length;
        }
        if (totalLen < n) return cnt + 1;
        return cnt;
    }
};

const main = () => {
    let people = [1, 2],
        limit = 3;
    let people2 = [3, 2, 2, 1],
        limit2 = 3;
    let people3 = [3, 5, 3, 4],
        limit3 = 5;
    let people_debug1 = [2, 4],
        limit_debug1 = 5;
    let people_debug2 = [2, 2],
        limit_debug2 = 6;
    let people_debug3 = [5, 1, 4, 2],
        limit_debug3 = 6;
    let people_debug4 = [3, 2, 3, 2, 2],
        limit_debug4 = 6;
    console.log(numRescueBoats(people, limit));
    console.log(numRescueBoats(people2, limit2));
    console.log(numRescueBoats(people3, limit3));
    console.log(numRescueBoats(people_debug1, limit_debug1)); // 2
    console.log(numRescueBoats(people_debug2, limit_debug2)); // 1
    console.log(numRescueBoats(people_debug3, limit_debug3)); // 2
    console.log(numRescueBoats(people_debug4, limit_debug4)); // 2
};

main()