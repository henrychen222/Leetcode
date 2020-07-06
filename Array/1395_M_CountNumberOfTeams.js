/**
 * 7.4 night
 * https://leetcode.com/problems/count-number-of-teams/
 */

// Accepted --- 84ms 36.2MB 60.81%
const numTeams = (rating) => {
    let cnt = 0;
    for (let i = 0; i < rating.length; i++) {
        for (let j = i + 1; j < rating.length; j++) {
            for (let k = j + 1; k < rating.length; k++) {
                if ((rating[i] < rating[j] && rating[j] < rating[k]) || (rating[i] > rating[j] && rating[j] > rating[k])) {
                    cnt++;
                }
            }
        }
    }
    return cnt;
};

const main = () => {
    let rating = [2, 5, 3, 4, 1];
    let rating2 = [2, 1, 3];
    let rating3 = [1, 2, 3, 4];
    console.log(numTeams(rating));
    console.log(numTeams(rating2));
    console.log(numTeams(rating3));
};

main()