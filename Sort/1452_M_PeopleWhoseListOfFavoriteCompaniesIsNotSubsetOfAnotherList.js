/**
 * 7.9 afternoon
 * https://leetcode.com/problems/sort-integers-by-the-power-value/
 * Weekly Contest 189 Q3
 */

// Accepted --- 2244ms 48.5MB 15.91%
const peopleIndexes = (favoriteCompanies) => {
    let res = [];
    let data = [...favoriteCompanies];
    data.sort((a, b) => a.length - b.length);
    let subset = [];
    for (let i = 0; i < data.length; i++) {
        for (let j = i + 1; j < data.length; j++) {
            if (isSubSet(data[i], data[j]) && !subset.includes(data[i])) {
                subset.push(data[i]);
            }
        }
    }
    for (let i = 0; i < favoriteCompanies.length; i++) {
        if (subset.indexOf(favoriteCompanies[i]) == -1) {
            res.push(i);
        }
    }
    return res;
};

// Accepted --- 1192ms 49.3MB 27.65%
const peopleIndexes_refine = (favoriteCompanies) => {
    let res = [];
    let data = [...favoriteCompanies];
    data.sort((a, b) => a.length - b.length);
    let subset = [];
    for (let i = 0; i < data.length; i++) {
        for (let j = i + 1; j < data.length; j++) {
            if (isSubSet(data[i], data[j]) && (subset.indexOf(data[i]) == -1)) { // diffence, indexOf() is faster than includes()
                subset.push(data[i]);
            }
        }
    }
    for (let i = 0; i < favoriteCompanies.length; i++) {
        if (subset.indexOf(favoriteCompanies[i]) == -1) {
            res.push(i);
        }
    }
    return res;
};

const isSubSet = (short, long) => {
    for (const i of short) {
        if (long.indexOf(i) == -1) {
            return false;
        }
    }
    return true;
};

const main = () => {
    let favoriteCompanies = [
        ["leetcode", "google", "facebook"],
        ["google", "microsoft"],
        ["google", "facebook"],
        ["google"],
        ["amazon"]
    ];
    let favoriteCompanies2 = [
        ["leetcode", "google", "facebook"],
        ["leetcode", "amazon"],
        ["facebook", "google"]
    ];
    let favoriteCompanies3 = [
        ["leetcode"],
        ["google"],
        ["facebook"],
        ["amazon"]
    ];
    console.log(peopleIndexes(favoriteCompanies));
    console.log(peopleIndexes(favoriteCompanies2));
    console.log(peopleIndexes(favoriteCompanies3));

    console.log(peopleIndexes_refine(favoriteCompanies));
    console.log(peopleIndexes_refine(favoriteCompanies2));
    console.log(peopleIndexes_refine(favoriteCompanies3));
};

main()