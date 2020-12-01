/**
 * 11.30 evening
 */

Map.prototype.getOrDefault = function (k, v) {
    return this.has(k) ? this.get(k) : v;
};