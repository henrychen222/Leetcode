/**
 * 7.16 evening
 * https://leetcode.com/problems/partition-array-into-disjoint-intervals/
 */

// Accepted --- 5972ms 57.3MB 6.45%
const partitionDisjoint = (A) => {
    for (let i = 1; i < A.length; i++) {
        let left = A.slice(0, i);
        let right = A.slice(i, A.length);
        // console.log(left, right);
        if (Math.max.apply(Math, left) <= Math.min.apply(Math, right)) {
            return i;
        }
    }
};

// Accepted --- 5488ms 56.5MB 6.45%
const partitionDisjoint2 = (A) => {
    let res;
    for (let i = 1; i < A.length; i++) {
        let left = A.slice(0, i);
        let right = A.slice(i, A.length);
        if (Math.max.apply(Math, left) <= Math.min.apply(Math, right)) {
            res = i;
            break;
        }
    }
    return res;
};

// Accepted --- 5712ms 57.2MB 6.45%
const partitionDisjoint3 = (A) => {
    let i = 1;
    let res;
    while (i < A.length) {
        let left = A.slice(0, i);
        let right = A.slice(i, A.length);
        if (Math.max.apply(Math, left) <= Math.min.apply(Math, right)) {
            res = i;
            break;
        }
        i++;
    }
    return res;
};

const main = () => {
    let A = [5, 0, 3, 8, 6];
    let A2 = [1, 1, 1, 0, 6, 12];
    console.log(partitionDisjoint(A));
    console.log(partitionDisjoint(A2));

    console.log(partitionDisjoint2(A));
    console.log(partitionDisjoint2(A2));

    console.log(partitionDisjoint3(A));
    console.log(partitionDisjoint3(A2));
};

main()