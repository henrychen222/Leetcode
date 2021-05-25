/**
 * 7.10 afternoon  05/24/21 morning fixed
 * https://leetcode.com/problems/distant-barcodes/
 */

const {
    MaxPriorityQueue
} = require('@datastructures-js/priority-queue');

const counter = (a_or_s) => {
    let map = new Map();
    for (const i of a_or_s) map.set(i, map.get(i) + 1 || 1);
    return map;
};

// Accepted --- 212ms 28.00%
const rearrangeBarcodes = (b) => {
    let pq = new MaxPriorityQueue({
        priority: x => x[1]
    });
    let m = counter(b);
    // pr(m);
    for (const [k, occ] of m) pq.enqueue([k, occ]);
    pr(pq.toArray());
    let res = [];
    while (!pq.isEmpty()) {
        let f = pq.dequeue().element;
        let s;
        if (!pq.isEmpty()) s = pq.dequeue().element;
        if (s) {
            res.push(f[0]);
            res.push(s[0]);
            f[1]--;
            s[1]--;
            if (f[1] > 0) pq.enqueue(f);
            if (s[1] > 0) pq.enqueue(s);
        } else {
            res.push(f[0]);
            f[1]--;
            if (f[1] > 0) pq.enqueue(f);
        }
        // pr(pq.toArray(), f);
    }
    return res;
};

// -------------- 071021 afternoon ---------------------------
// need to fix 
const rearrangeBarcodes1 = (barcodes) => {
    let b = [...barcodes];
    let record = dictionary(b);
    b.sort((x, y) => getFrequency(barcodes, y) - getFrequency(barcodes, x));
    let res = [b[0]];
    b.splice(0, 1);
    // console.log(b);
    while (res.length != barcodes.length) {
        let i = 0;
        for (; i < b.length; i++) {
            if (b[i] != res[res.length - 1]) {
                res.push(b[i]);
                b = b.slice(0, i).concat(b.slice(i + 1, b.length));
                console.log(b, res);
                for (const re of record) {
                    if (re[0] == b[i]) {
                        re[1]--;
                    }
                }
                record.sort((a, b) => b[1] - a[1]);
                console.log(record);
                i = b.indexOf(record[0][0]);
            }
        }
    }
    return res;
};

const dictionary = (arr) => {
    let element = [...new Set(arr)];
    let data = [];
    for (const e of element) {
        data.push([e, getFrequency(arr, e)]);
    }
    data.sort((a, b) => b[1] - a[1]);
    return data;
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

// const rearrangeBarcodes = (barcodes) => {
//     let b = [...barcodes];
//     let data = dictionary(b);
//     console.log(data);
//     let res = [];
//     let x = data[0][0]
//     let y = data[1][0];
//     let x_freq = data[0][1];
//     let y_freq = data[1][1];
//     for (let i = 0; i < data.length; i++) {
//         res.push(x);
//         x_freq--;
//         res.push(y);
//         y_freq--;
//     }
// };

const pr = console.log;
const main = () => {
    let barcodes = [1, 1, 1, 2, 2, 2];
    let barcodes2 = [1, 1, 1, 1, 2, 2, 3, 3];
    let debug1 = [2, 1, 1];
    let debug2 = [2, 2, 2, 1, 5];
    let debug3 = [3, 7, 3, 7, 7, 7, 7, 2, 2, 2];
    let debug4 = [51, 83, 51, 40, 51, 40, 51, 40, 83, 40, 83, 83, 51, 40, 40, 51, 51, 51, 40, 40, 40, 83, 51, 51, 40, 51, 51, 40, 40, 51, 51, 40, 51, 51, 51, 40, 83, 40, 40, 83, 51, 51, 51, 40, 40, 40, 51, 51, 83, 83, 40, 51, 51, 40, 40, 40, 51, 40, 83, 40, 83, 40, 83, 40, 51, 51, 40, 51, 51, 51, 51, 40, 51, 83, 51, 83, 51, 51, 40, 51, 40, 51, 40, 51, 40, 40, 51, 51, 51, 40, 51, 83, 51, 51, 51, 40, 51, 51, 40, 40];
    let debug5 = [7, 7, 7, 8, 5, 7, 5, 5, 5, 8];
    console.log(rearrangeBarcodes(barcodes));
    console.log(rearrangeBarcodes(barcodes2));
    // console.log(rearrangeBarcodes(debug1));
    // console.log(rearrangeBarcodes(debug2));
    // console.log(rearrangeBarcodes(debug3));
    // console.log(rearrangeBarcodes(debug4));
    // console.log(rearrangeBarcodes(debug5));
};

main()