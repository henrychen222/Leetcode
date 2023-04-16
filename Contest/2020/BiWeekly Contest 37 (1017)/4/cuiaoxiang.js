// 10.17 afternoon
// https://leetcode.com/contest/biweekly-contest-37/ranking/1/


// issue
let mod = 1e9 + 7;
const power_mod = (a, n) => {
    let res = 1;
    while (n) {
        if (n & 1) {
            res = res * a % mod;
        }
        a = a * a % mod;
        n >>= 1;
    }
    return res;
};

function Fancy() {
    this.A = 1;
    this.B = 0;
    this.f = [];
};

Fancy.prototype.append = function (val) {
    let x = (val + mod - this.B) * power_mod(this.A, mod - 2) % mod;  // issue
    this.f.push(x);
};

Fancy.prototype.addAll = function (inc) {
    this.B = (this.B + inc) % mod;
};

Fancy.prototype.multAll = function (m) {
    this.A = this.A * m % mod;
    this.B = this.B * m % mod;
};

Fancy.prototype.getIndex = function (idx) {
    if (idx >= this.f.length) return -1;
    let res = this.f[idx];
    res = (this.A * res + this.B) % mod;
    return res;
};


const main = () => {
    let fancy = new Fancy();
    fancy.append(2);
    fancy.addAll(3);
    fancy.append(7);
    fancy.multAll(2);
    console.log(fancy.getIndex(0));
    fancy.addAll(3);
    console.log(fancy)
    fancy.append(10); // issue
    console.log(fancy)
    fancy.multAll(2);
    console.log(fancy.getIndex(0));
    fancy.getIndex(1);
    console.log(fancy)
    console.log(fancy.getIndex(2));
};

main()