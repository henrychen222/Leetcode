/**
 * 12.26 morning
 * https://leetcode.com/contest/biweekly-contest-42/problems/number-of-students-unable-to-eat-lunch/
 */

// Accepted
const countStudents = (students, sandwiches) => {
    let round = 0;
    while (true) {
        // console.log(round, students, sandwiches);
        if (students.length == 0 || round == students.length) break;
        if (students[0] != sandwiches[0]) {
            students.push(students.shift());
            round++;
        } else {
            students.shift();
            sandwiches.shift();
            round = 0;
        }
    }
    return students.length;
};

const main = () => {
    let students = [1, 1, 0, 0], sandwiches = [0, 1, 0, 1];
    let students2 = [1, 1, 1, 0, 0, 1], sandwiches2 = [1, 0, 0, 0, 1, 1];
    console.log(countStudents(students, sandwiches));
    console.log(countStudents(students2, sandwiches2));
};

main()