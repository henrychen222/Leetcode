/**
 * 10.17 morning
 * https://leetcode.com/contest/biweekly-contest-37/problems/fancy-sequence/
 */

// Accepted --- 3660ms
let mod = 1e9 + 7;
function Fancy() {
    this.f = [];
};

Fancy.prototype.append = function (val) {
    this.f.push(val);
};

Fancy.prototype.addAll = function (inc) {
    let n = this.f.length;
    for (let i = 0; i < n; i++) {
        this.f[i] += inc;  // change global array element directly
    }
};

Fancy.prototype.multAll = function (m) {
    let n = this.f.length;
    for (let i = 0; i < n; i++) {
        this.f[i] *= m;
        this.f[i] %= mod;  // change global array element directly
    }
};

Fancy.prototype.getIndex = function (idx) {
    let n = this.f.length;
    if (idx >= n) return -1;
    return this.f[idx] % mod;
};

// Time limit 103/105
// function Fancy() {
//     this.f = [];
//     this.mod = 1e9 + 7;
// };

// Fancy.prototype.append = function (val) {
//     this.f.push(val);
// };

// Fancy.prototype.addAll = function (inc) {
//     this.f = this.f.map(x => (x % this.mod) + inc); // issue to cause TLE
// };

// Fancy.prototype.multAll = function (m) {
//     this.f = this.f.map(x => (x % this.mod) * m);
// };

// Fancy.prototype.getIndex = function (idx) {
//     let n = this.f.length;
//     if (idx >= n) return -1;
//     return this.f[idx] % this.mod;
// };

const main = () => {
    let fancy = new Fancy();
    fancy.append(2);   // f [2]
    console.log(fancy);
    fancy.addAll(3);   // fancy sequence: [2+3] -> [5]
    console.log(fancy);
    fancy.append(7);   // fancy sequence: [5, 7]
    console.log(fancy);
    fancy.multAll(2);  // fancy sequence: [5*2, 7*2] -> [10, 14]
    console.log(fancy)
    console.log(fancy.getIndex(0)); // return 10
    fancy.addAll(3);   // fancy sequence: [10+3, 14+3] -> [13, 17]
    fancy.append(10);  // fancy sequence: [13, 17, 10]
    fancy.multAll(2);  // fancy sequence: [13*2, 17*2, 10*2] -> [26, 34, 20]
    console.log(fancy.getIndex(0)); // return 26
    fancy.getIndex(1); // return 34
    console.log(fancy.getIndex(2)); // return 20
};

main()