/**
 * 11/08/20 afternoon
 * https://leetcode.com/problems/create-sorted-array-through-instructions/
 */

// 05/17/22 morning
function Fenwick(n) {
    let a = Array(n).fill(0);
    return { query, update, tree }
    function query(i) {
        let sum = 0;
        for (i++; i > 0; i = parent(i)) sum += a[i];
        return sum;
    }
    function update(i, v) {
        for (i++; i < n; i = next(i)) a[i] += v;
    }
    function parent(x) {
        return x - lowestOneBit(x);
    }
    function next(x) {
        return x + lowestOneBit(x);
    }
    function lowestOneBit(x) {
        return x & -x;
    }
    function tree() {
        return a;
    }
}

// Accepted --- 281ms 100%
const createSortedArray = (a) => {
    let max = Math.max(...a), fen = new Fenwick(max + 3), res = 0;
    for (const x of a) {
        let l = fen.query(x - 1), r = fen.query(max) - fen.query(x);
        res += Math.min(l, r);
        fen.update(x, 1);
    }
    return res % mod;
};

///////////////////////////////// Old /////////////////////////////////////////////////////////////
// reference: 24: sun-man-man  22:	tian-tang-6 
// https://leetcode.com/contest/weekly-contest-214/ranking/1/
// https://www.topcoder.com/community/competitive-programming/tutorials/binary-indexed-trees/
class Fenwick1 {
    constructor(n) {
        this.n = n;
        this.tree = new Array(n).fill(0);
    }

    query(i) {
        let sum = 0;
        while (i > 0) {
            sum += this.tree[i];
            i -= (i & -i);
        }
        return sum;
    }

    update(i, v) {
        while (i < this.n) {
            this.tree[i] += v;
            i += (i & -i);
        }
    }
}

// Accepted --- 244ms
// reference: uwi hank55663
// https://leetcode.com/contest/weekly-contest-214/ranking/1/
const mod = 1e9 + 7;
const createSortedArray1 = (instructions) => {
    let res = 0;
    let fenwick = new Fenwick(100005);
    for (const i of instructions) {
        let l = fenwick.query(i - 1);
        let r = fenwick.query(100000) - fenwick.query(i);
        res += Math.min(l, r);
        // console.log(fenwick.tree, res);
        fenwick.update(i, 1);
    }
    return res % mod;
};

// Accepted --- 184ms
// reference: https://www.youtube.com/post/UgzWBkGFiWKoxYqyxbx4AaABCQ huahua
const createSortedArray2 = (instructions) => {
    let n = instructions.length;
    let res = 0;
    let fenwick = new Fenwick(100005);
    for (let i = 0; i < n; i++) {
        let l = fenwick.query(instructions[i] - 1);
        let r = i - fenwick.query(instructions[i]);
        res += Math.min(l, r);
        fenwick.update(instructions[i], 1);
    }
    return res % mod;
};

const main = () => {
    let instructions = [1, 5, 6, 2];
    let instructions2 = [1, 2, 3, 6, 5, 4];
    let instructions3 = [1, 3, 3, 3, 2, 4, 2, 1, 2];
    console.log(createSortedArray(instructions));
    console.log(createSortedArray(instructions2));
    console.log(createSortedArray(instructions3));
};

main()