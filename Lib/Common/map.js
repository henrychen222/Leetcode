/**
 * 11.30 evening
 */

// Initialization
let m = new Map();
let m = new Map([[1, 0],[2, 0]]);

///////////////////// methods ///////////////////////
Map.prototype.getOrDefault = function (k, v) {
    return this.has(k) ? this.get(k) : v;
};