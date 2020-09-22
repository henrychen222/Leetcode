/**
 * 9.19 evening
 * https://leetcode.com/contest/weekly-contest-207/problems/rearrange-spaces-between-words/
 */

// Accepted
const reorderSpaces = (text) => {
    let oLen = text.length;
    let space = 0;
    for (const t of text) {
        if (t == ' ') {
            space++;
        }
    }
    let s = text.trim();
    let data = s.split(" ").filter(x => x.length != 0);
    let n = data.length;
    console.log(data, space);
    if (n == 1) {
        let res = data[0];
        let rest = oLen - res.length;
        for (let i = 1; i <= rest; i++) {
            res += ' ';
        }
        console.log(res.length);
        return res;
    } else {
        let res = '';
        let k = Math.floor(space / (n - 1));
        let rest = space % (n - 1);
        console.log(k, rest);
        for (let i = 0; i < n; i++) {
            res += data[i];
            if (i != n - 1) {
                for (let j = 1; j <= k; j++) {
                    res += ' ';
                }
            }
        }
        if (rest != 0) {
            for (let i = 1; i <= rest; i++) {
                res += ' ';
            }
        }
        console.log(res, res.length);
        return res;
    }
};

const main = () => {
    let text = "  this   is  a sentence "
    let text2 = " practice   makes   perfect";
    let text3 = "hello   world";
    let text4 = "  walks  udp package   into  bar a";
    let text5 = "a";
    let debug1 = "  hello"
    // console.log(reorderSpaces(text));
    // console.log(reorderSpaces(text2));
    // console.log(reorderSpaces(text3));
    // console.log(reorderSpaces(text4));
    // console.log(reorderSpaces(text5));
    console.log(reorderSpaces(debug1));
};

main()