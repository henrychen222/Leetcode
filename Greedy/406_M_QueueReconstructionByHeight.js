/**
 * 5.24 night 
 * 5.30 evening debug, fixed problem of sort
 * https://leetcode.com/problems/queue-reconstruction-by-height/
 */

/**
 * https://www.cnblogs.com/grandyang/p/5928417.html
 * https://stackoverflow.com/questions/41653661/406leetcode-queue-reconstruction-by-height
 * 
 * Accepted --- 112ms 42.2MB 37.31%
 */
const reconstructQueue_cnblog2 = (people) => {
    /* these two sort works here, but run differently with leetcode don't know why */
    // people.sort((b, a) => {
    //     return a[0] > b[0] || (a[0] == b[0] && a[1] < b[1]);
    // });
    // people.sort((a, b) => {
    //     if (a[0] == b[0]) {
    //         return a[1] > b[1];
    //     }
    //     return a[0] < b[0];
    // });
    people.sort((a, b) => a[0] == b[0] ? a[1] - b[1] : b[0] - a[0]);
    for (let i = 1; i < people.length; ++i) {
        let cnt = 0;
        for (let j = 0; j < i; ++j) {
            if (cnt == people[i][1]) {
                let t = people[i];
                for (let k = i - 1; k >= j; --k) {
                    people[k + 1] = people[k];
                }
                people[j] = t;
                break;
            }
            ++cnt;
        }
    }
    return people;
};

// Accepted --- 100ms 41.4MB 48.88%
const reconstructQueue_cnblog = (people) => {
    people.sort((a, b) => a[0] == b[0] ? a[1] - b[1] : b[0] - a[0]);
    let res = [];
    for (const a of people) {
        insert(res, a[1], a);
    }
    return res;
};

// Accepted --- 116ms 42.6MB 34.70%
const reconstructQueue_cnblog3 = (people) => {
    people.sort((a, b) => a[0] == b[0] ? a[1] - b[1] : b[0] - a[0]);
    for (let i = 0; i < people.length; i++) {
        let p = people[i];
        if (p[1] != i) {
            erase(people, i);
            insert(people, p[1], p);
        }
    }
    return people;
};

const insert = (arr, index, item) => {
    arr.splice(index, 0, item);
};

const erase = (arr, index) => {
    arr.splice(index, 1);
};

const main = () => {
    let people = [
        [7, 0],
        [4, 4],
        [7, 1],
        [5, 0],
        [6, 1],
        [5, 2]
    ];
    console.log(reconstructQueue_cnblog2(people)); // [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
    console.log(reconstructQueue_cnblog(people));
    console.log(reconstructQueue_cnblog3(people));
};

main()