/**
 * 10.17 evening
 * https://leetcode.com/contest/weekly-contest-211/problems/lexicographically-smallest-string-after-applying-operations/
 */

// const findLexSmallestString = (s, a, b) => {
//     // for (let i = 1; i <= 15; i++) {
//     while (true) {
//         let sOrigin = s;
//         let ad = add(s,a);
//         let ro = rotate(s, b);
//         let tmp = [s, ad, ro];
//         console.log(tmp);
//         tmp.sort((a, b) => a.localeCompare(b));
//         if (tmp[0] == sOrigin) {
//             break;
//         } else {
//             s = tmp[0];
//         }
//     }
//     return s;
// };


// const findLexSmallestString = (s, a, b) => {
//     let data = [s];
//     while (true) {
//         let sOrigin = s;
//         let ad = add(s,a);
//         let ro = rotate(s, b);
//         if (data.indexOf(ad) == -1) {
//             data.push(ad);
//         }
//         if (data.indexOf(ro) == -1) {
//             data.push(ro);
//         }
//         data.sort((a, b) => a.localeCompare(b));
//         if (data[0] == sOrigin) {
//             break;
//         } else {
//             s = data[0];
//         }
//     }
//     return s;
// };


// After Contest figure out: First time successfully tried DFS: YEAH 
// Accepted --- 768ms
let res = [];
let set = new Set();
const findLexSmallestString = (s, a, b) => {
    res = [];
    dfs(res, s, a, b);
    res.sort((a, b) => a.localeCompare(b));
    return res[0];
};

const dfs = (res, s, a, b) => {
    while (true) {
        let ad = add(s, a);
        let ro = rotate(s, b);
        // console.log(`add: ${ad}`, `rotate: ${ro}`);
        // console.log(res);
        // if (res.indexOf(ad) != -1) {
        //     if (res.indexOf(ro) != -1) {
        //         return;
        //     } else {
        //         res.push(ro);
        //         dfs(res, ro, a, b);
        //     }
        // } else {
        //     if (res.indexOf(ro) != -1) {
        //         res.push(ad);
        //         dfs(res, ad, a, b);
        //     } else {
        //         res.push(ro);
        //         res.push(ad);
        //         dfs(res, ad, a, b);
        //         dfs(res, ro, a, b);
        //     }
        // }
        if (set.has(ad)) {
            if (set.has(ro)) {
                return;
            } else {
                res.push(ro);
                set.add(ro);
                dfs(res, ro, a, b);
            }
        } else {
            if (set.has(ro)) {
                res.push(ad);
                set.add(ad);
                dfs(res, ad, a, b);
            } else {
                res.push(ro);
                res.push(ad);
                set.add(ro);
                set.add(ad);
                dfs(res, ad, a, b);
                dfs(res, ro, a, b);
            }
        }
    }
};

const add = (s, a) => {
    let n = s.length;
    let arr = s.split("").map(x => Number(x));
    for (let i = 0; i < n; i++) {
        if (i % 2 == 1) {
            let origin = arr[i];
            let add = origin + a;
            if (add > 9) {
                arr[i] = add - 9 - 1;
            } else {
                arr[i] = add;
            }

            /**
             * Also Accepted --- 840ms
             */
            // let ac = a;
            // while (true) {
            //     if (ac == 0) break;
            //     if (arr[i] == 9) {
            //         arr[i] = 0;
            //         ac--;
            //     } else {
            //         arr[i]++;
            //         ac--;
            //     }
            // }
        }
    }
    return arr.join("");
};

const rotate = (s, b) => {
    let n = s.length;
    let r = s.slice(n - b);
    let l = s.slice(0, n - b);
    return r + l;
};

const main = () => {
    let s = "5525", a = 9, b = 2;
    let s2 = "74", a2 = 5, b2 = 1;
    let s3 = "0011", a3 = 4, b3 = 2;
    let s4 = "43987654", a4 = 7, b4 = 3;
    let s_debug1 = "74", a_debug1 = 5, b_debug1 = 1;
    let s_debug2 = "5293291270823535783669456787173150146177560592132916", a_debug2 = 9, b_debug2 = 27;
    let s_debug3 = "059968036945394711795417294079643882545439101097287995561736161993252699", a_debug3 = 7, b_debug3 = 11;
    console.log(findLexSmallestString(s, a, b)); // "2050"
    console.log(findLexSmallestString(s2, a2, b2)); // "24"
    console.log(findLexSmallestString(s3, a3, b3)); // "0011"
    console.log(findLexSmallestString(s4, a4, b4)); // "00553311"
    console.log(findLexSmallestString(s_debug1, a_debug1, b_debug1)); // "24"
    console.log(findLexSmallestString(s_debug2, a_debug2, b_debug2));
    console.log(findLexSmallestString(s_debug3, a_debug3, b_debug3));


    // console.log(rotate("3456", 1));
    // console.log(rotate("5525", 2)); // "2555"
    // console.log(rotate("74", 1)); // "47"

    // console.log(add("2555", 9)); // "2454"
    // console.log(add("2454", 9));  // "2353"
    // console.log(add("5323", 9));  // "5222"
    // console.log(add("5222", 9));  // "5121"
    // console.log(add("2151", 9));  // "2050"
    // console.log(add("3456", 5));  // "3951"

    // console.log(add("43987654", a4));   // 40957351
    // console.log(rotate("43987654", b4));

    // console.log(add("74", a_debug1)); // 47
    // console.log(rotate("74", b_debug1)); // 79
    // console.log(add("79", a_debug1)); // 74
    // console.log(rotate("79", b_debug1)); // 97
    // console.log(add("47", a_debug1)); // 42
    // console.log(rotate("47", b_debug1)); // 74
    // console.log(add("42", a_debug1)); // 47
    // console.log(rotate("42", b_debug1)); // 24
}
main()