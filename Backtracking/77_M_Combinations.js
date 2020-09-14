/**
 * 9.13 afternoon
 * https://leetcode.com/problems/combinations/
 */

// don't know
const combine = (n, k) => {
    permArr = [];
    usedChars = []; 
    let items = [];
    for (let i = 1; i <= n; i++) {
        items.push(i);
    }
    console.log(items);
};

const main = () => { 
    let n = 4, k = 2;
    let n2 = 1, k2 = 1;
    let n3 = 20, k3 = 3;
    // console.log(combine(n, k));
    // console.log(combine(n2, k2));
     console.log(combine(n3, k3));

};

main()