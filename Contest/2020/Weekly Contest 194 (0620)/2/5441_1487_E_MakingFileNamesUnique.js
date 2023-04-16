/**
 * 6.20 evening
 * https://leetcode.com/contest/weekly-contest-194/problems/making-file-names-unique/
 */

// need to fix 10/33 test case pass
const getFolderNames = (names) => {
    let res = [];
    for (const i of names) {
        if (!res.includes(i)) {
            res.push(i);
        } else {
            let len = 0;
            for (const item of res) {
                console.log(item)
                if (item.includes(i) && item.slice(item.length - 3, item.length) != '(0)') { // problem
                    len++;
                }
            }
            let v = len;
            res.push(i + '(' + v + ')');
        }
    }
    return res;
};

const main = () => {
    let names = ["pes", "fifa", "gta", "pes(2019)"];
    let names2 = ["gta", "gta(1)", "gta", "avalon"];
    let names3 = ["onepiece", "onepiece(1)", "onepiece(2)", "onepiece(3)", "onepiece"];
    let names4 = ["wano", "wano", "wano", "wano"];
    let names5 = ["kaido", "kaido(1)", "kaido", "kaido(1)"];
    console.log(getFolderNames(names));
    console.log(getFolderNames(names2));   // ["gta","gta(1)","gta(2)","avalon"]
    console.log(getFolderNames(names3));  // ["onepiece","onepiece(1)","onepiece(2)","onepiece(3)","onepiece(4)"]
    console.log(getFolderNames(names4)); //  ["wano","wano(1)","wano(2)","wano(3)"]
    console.log(getFolderNames(names5)); // ["kaido","kaido(1)","kaido(2)","kaido(1)(1)"]

    let debug1 = ["kingston(0)", "kingston", "kingston"];  // ["kingston(0)","kingston","kingston(1)"]
    let debug2 = ["m", "t", "y(4)", "t", "a", "p", "h", "h", "z", "z(2)(2)", "x(3)", "h(4)(3)", "l", "z(1)", "h", "s(1)(2)", "y(3)(2)", "m(3)", "i", "h", "u", "j(1)(4)", "q", "j(1)", "c", "n(4)", "k", "s(1)(4)", "p(2)", "m", "r(1)(4)", "k(3)", "d(3)(1)", "e(4)"];
    console.log(getFolderNames(debug1));
    console.log(getFolderNames(debug2)); // ["m","t","y(4)","t(1)","a","p","h","h(1)","z","z(2)(2)","x(3)","h(4)(3)","l","z(1)","h(2)","s(1)(2)","y(3)(2)","m(3)","i","h(3)","u","j(1)(4)","q","j(1)","c","n(4)","k","s(1)(4)","p(2)","m(1)","r(1)(4)","k(3)","d(3)(1)","e(4)"]
};

main()