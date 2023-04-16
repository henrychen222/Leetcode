/**
 * 5.4 night 5.18 evening
 * https://leetcode.com/problems/destination-city/
 */

// Accepted --- 128ms 36.5MB 6.72%
const destCity = (paths) => {
    let cityA = [];
    let cityB = [];
    for (let i = 0; i < paths.length; i++) {
        cityA.push(paths[i][0]);
        cityB.push(paths[i][1]);
    }
    // console.log(cityA);
    // console.log(cityB);
    for (const b of cityB) {
        if (!cityA.includes(b)) {
            return b;
        }
    }
};

const main = () => {
    let paths = [
        ["London", "New York"],
        ["New York", "Lima"],
        ["Lima", "Sao Paulo"]];
    let paths2 = [["B", "C"], ["D", "B"], ["C", "A"]];
    let paths3 = [["A", "Z"]];
    console.log(destCity(paths));
    console.log(destCity(paths2));
    console.log(destCity(paths3));
};

main()