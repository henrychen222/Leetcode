/*
 * 01/21/23 evening
 * https://leetcode.com/contest/weekly-contest-329/problems/sort-the-students-by-their-kth-score/
 */

const pr = console.log;

// Accepted
const sortTheStudents = (g, k) => g.sort((x, y) => y[k] - x[k]);

const main = () => {
    let score = [[10, 6, 9, 1], [7, 5, 11, 2], [4, 8, 3, 15]], k = 2;
    let score2 = [[3, 4], [5, 6]], k2 = 0
    pr(sortTheStudents(score, k))
    pr(sortTheStudents(score2, k2))
};

main()