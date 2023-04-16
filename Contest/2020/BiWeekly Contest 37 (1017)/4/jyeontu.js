// 10.17 afternoon
// https://leetcode.com/contest/biweekly-contest-37/ranking/20/

// Accepted --- 3636ms
let mod = 1e9 + 7;
function Fancy() {
    this.f = [];
};

Fancy.prototype.append = function (val) {
    let n = this.f.length;
    this.f[n] = val;
};

Fancy.prototype.addAll = function (inc) {
    let n = this.f.length;
    for (let i = 0; i < n; i++) {
        this.f[i] += inc;
    }
};

Fancy.prototype.multAll = function (m) {
    let n = this.f.length;
    for (let i = 0; i < n; i++) {
        this.f[i] = (this.f[i] * m) % mod;
    }
};

Fancy.prototype.getIndex = function (idx) {
    return this.f[idx] % mod || -1;
};

const main = () => {
    let fancy = new Fancy();
    fancy.append(2);
    fancy.addAll(3);
    fancy.append(7);
    fancy.multAll(2);
    console.log(fancy.getIndex(0));
    fancy.addAll(3);
    fancy.append(10);
    fancy.multAll(2);
    console.log(fancy.getIndex(0));
    fancy.getIndex(1);
    console.log(fancy.getIndex(2));
};

main()