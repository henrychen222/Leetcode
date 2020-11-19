// https://stackoverflow.com/questions/1436438/how-do-you-set-clear-and-toggle-a-single-bit-in-javascript
function BitSet() {
    this.n = 0;
}

BitSet.prototype.set = function(p) {
    this.n |= (1 << p);
}

BitSet.prototype.test = function(p) {
    return (this.n & (1 << p)) !== 0;
}

BitSet.prototype.clear = function(p) {
    this.n &= ~(1 << p);
}

BitSet.prototype.toggle = function(p) {
    this.n ^= (1 << p);
}

