/**
 * 6.27 night
 * https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/
 */

// Accepted --- 80ms 33.2MB 100.00%
const average = (salary) => {
    salary.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 1; i < salary.length - 1; i++) {
        sum += salary[i]
    }
    return sum / (salary.length - 2);
};

const main = () => {
    let salary = [4000, 3000, 1000, 2000];
    let salary2 = [1000, 2000, 3000];
    let salary3 = [6000, 5000, 4000, 3000, 2000, 1000];
    let salary4 = [8000, 9000, 2000, 3000, 6000, 1000];
    console.log(average(salary));
    console.log(average(salary2));
    console.log(average(salary3));
    console.log(average(salary4));
};

main()