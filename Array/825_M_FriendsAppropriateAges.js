/**
 * 7.15 evening
 * https://leetcode.com/problems/friends-of-appropriate-ages/
 */

// Accepted --- 5972ms 42.9MB 6.06%
const numFriendRequests = (ages) => {
    ages.sort((a, b) => a - b);
    let cnt = 0;
    let i = 0;
    while (i < ages.length) {
        let j = i + 1;
        let A = ages[i];
        while (j < ages.length) {
            let B = ages[j];
            if ((B > 0.5 * A + 7) && (B <= 100 || A >= 100) && (B == A)) {
                cnt++;
            }
            if ((A > 0.5 * B + 7) && (A <= 100 || B >= 100)) {
                cnt++;
            }
            j++;
        }
        i++;
    }
    return cnt;
};

// Time Limit 80/83
const numFriendRequests2 = (ages) => {
    let cnt = 0;
    let i = 0;
    while (i < ages.length) {
        let j = i + 1;
        let A = ages[i];
        while (j < ages.length) {
            let B = ages[j];
            if ((B > 0.5 * A + 7) && (B <= 100 || A >= 100) && (B <= A)) {
                cnt++;
            }
            if ((A > 0.5 * B + 7) && (A <= 100 || B >= 100) && (A <= B)) {
                cnt++;
            }
            j++;
        }
        i++;
    }
    return cnt;
};

// Time Limit 78/83
const numFriendRequests1 = (ages) => {
    let cnt = 0;
    for (let i = 0; i < ages.length; i++) {
        let A = ages[i];
        for (let j = i + 1; j < ages.length; j++) {
            let B = ages[j];
            if ((B > 0.5 * A + 7) && (B <= 100 || A >= 100) && (B <= A)) {
                cnt++;
            }
            if ((A > 0.5 * B + 7) && (A <= 100 || B >= 100) && (A <= B)) {
                cnt++;
            }
        }
    }
    return cnt;
};

const main = () => {
    let ages = [16, 16];
    let ages2 = [16, 17, 18];
    let ages3 = [20, 30, 100, 110, 120];
    console.log(numFriendRequests(ages));
    console.log(numFriendRequests(ages2));
    console.log(numFriendRequests(ages3));
};

main()