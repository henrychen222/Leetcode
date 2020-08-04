/**
 * 8.3 night
 * https://leetcode.com/problems/employee-importance/
 */

const GetImportance = (employees, id) => {
    let target = search(employees, id);
    console.log(target);
};

const search = (employees, id) => {
    return employees.find(x => x[0] == id);
};

const main = () => {
    let employees = [
            [1, 5, [2, 3]],
            [2, 3, []],
            [3, 3, []]
        ],
        id = 1;
    console.log(GetImportance(employees, id));
};

main()