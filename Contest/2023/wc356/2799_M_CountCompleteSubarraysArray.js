/*
 * 07/29/23 evening
 * https://leetcode.com/contest/weekly-contest-356/problems/count-complete-subarrays-in-an-array/
 */

const pr = console.log;

// Accepted
const countCompleteSubarrays = (a) => {
    let n = a.length, dis = new Set(a).size, res = 0;
    for (let i = 0; i < n; i++) {
        let se = new Set();
        // let d = [];
        for (let j = i; j < n; j++) {
           se.add(a[j]);
           // d.push(a[j]);
           if (se.size == dis) res++;
        }
        // pr(d)
    }
    return res;
};

// TLE
const countCompleteSubarrays1 = (a) => {
    let n = a.length, dis = new Set(a).size, res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let se = new Set();
            for (let k = i; k <= j; k++) {
                se.add(a[k]);
            }
            // pr(se);
            if (se.size == dis) res++;
        }
    }
    return res;
};

const main = () => {
    let a = [1, 3, 1, 2, 2];
    let a2 = [5, 5, 5, 5];
    pr(countCompleteSubarrays(a))
    pr(countCompleteSubarrays(a2))
};

main()