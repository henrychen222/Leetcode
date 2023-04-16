/*
* 09/24/22 evening
* https://leetcode.com/contest/weekly-contest-312/problems/sort-the-people/
*/

const pr = console.log;

// Accepted
const sortPeople = (a, b) => {
    let n = a.length, d = [];
    for (let i = 0; i < n; i++) d.push([a[i], b[i]]);
    d.sort((x, y) => y[1] - x[1]);
    return d.map(x => x[0]);
};

const main = () => {
    let names = ["Mary", "John", "Emma"], heights = [180, 165, 170];
    let names2 = ["Alice", "Bob", "Bob"], heights2 = [155, 185, 150];
    pr(sortPeople(names, heights))
    pr(sortPeople(names2, heights2))
};

main()