/**
 * 5.24 night
 * https://leetcode.com/problems/queue-reconstruction-by-height/
 */
const reconstructQueue_cnblog2 = (people) => {
    people.sort((b, a) => {
        return a[0] > b[0] || (a[0] == b[0] && a[1] < b[1]);
    });
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

const reconstructQueue_cnblog = (people) => {
    people.sort((b, a) => {
        return a[0] > b[0] || (a[0] == b[0] && a[1] < b[1]);
    });
    console.log(people);
    let res = [];
    // for (const a of people) {
    //     console.log(res[0]);
    //     res.splice(res[0] + a[1], 0, a);
    // }
    res.splice(res[0] + people[1], 0, people[0]);
    for (let i = 1; i < people.length; i++) {
        console.log(res[0]);
        res.splice(res[0] + people[i][1], 0, people[i]);
    }
    return res;
};

const reconstructQueue_cnblog3 = (people) => {
    people.sort((b, a) => {
        return a[0] > b[0] || (a[0] == b[0] && a[1] < b[1]);
    });
    for (let i = 0; i < people.length; i++) {
        let p = people[i];
        if (p[1] != i) {
            people.splice(people[0] + i, 1);
            people.splice(people[0] + p[1], 0, p);
        }
    }
    return people;
};

Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
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
    console.log(reconstructQueue_cnblog(people)); // [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
    console.log(reconstructQueue_cnblog2(people));
    // console.log(reconstructQueue_cnblog3(people));
};

main()