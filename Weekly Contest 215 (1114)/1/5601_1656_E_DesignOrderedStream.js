/**
 * 11.14 evening
 * https://leetcode.com/contest/weekly-contest-215/problems/design-an-ordered-stream/
 */

// Don't what the fuck of this problem
function OrderedStream(n) {
    this.n = n;
    this.data = new Array(n).fill(null);
};

OrderedStream.prototype.insert = function (id, value) {
    let res = [];
    if (this.data[id - 1] == null) {
        this.data[id - 1] = value;
    }
    if (id - 1 == this.n - 1) return [];
    for (let i = id - 1; i < this.n; i++) {
        if (this.data[i] == null) {
            break;
        }
        res.push(this.data[i]);
    }
    console.log(this.data)
    return res;
};

// function OrderedStream(n) {
//     this.n = n;
//     this.map = new Map();
// };

// OrderedStream.prototype.insert = function (id, value) {
//     if (this.map.has(id)) {
//         let res = [];
//         let m = this.sortMapByKey(this.map);
//         console.log(m);
//         for (const k of m.keys()) {
//             let v = m.get(k);
//             let vNext = m.get(k + 1);
//             if (this.sum(v) < this.sum(vNext)) break;
//             res.push(v);
//         }
//         return res;
//     } else {
//         this.map.set(id, value);
//         console.log(this.map)
//         return [];
//     }
// };

// OrderedStream.prototype.sortMapByKey = function (map) {
//     return new Map([...map].sort((a, b) => a[0] - b[0]));
// };

// OrderedStream.prototype.sum = function (arr) {
//     let res = 0;
//     for (const i of arr) {
//         res += i.charCodeAt();
//     }
//     return res;
// };


const main = () => {
    let os = new OrderedStream(5);
    console.log(os.insert(3, "ccccc")); // Inserts (3, "ccccc"), returns []
    console.log(os.insert(1, "aaaaa")); // Inserts (1, "aaaaa"), returns ["aaaaa"].
    console.log(os.insert(2, "bbbbb")); // Inserts (2, "bbbbb"), returns ["bbbbb", "ccccc"].
    console.log(os.insert(5, "eeeee")); // Inserts (5, "eeeee"), returns [].
    console.log(os.insert(4, "ddddd")); // Inserts (4, "ddddd"), returns ["ddddd", "eeeee"].
};

main()