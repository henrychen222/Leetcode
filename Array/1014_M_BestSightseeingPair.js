/**
 * 7.17 evening
 * https://leetcode.com/problems/best-sightseeing-pair/submissions/
 */

// Accepted --- 9364ms 42MB 6.67%
const maxScoreSightseeingPair = (A) => {
    let max = Number.MIN_VALUE;
    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++) {
            let spot = A[i] + A[j] + i - j;
            max = Math.max(max, spot);
        }
    }
    return max;
};

const main = () => {
    let A = [8, 1, 5, 2, 6];
    console.log(maxScoreSightseeingPair(A));
};

main()