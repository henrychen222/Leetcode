/**
 * 6.19 night
 * https://leetcode.com/problems/design-hashset/
 */
// Accepted --- 188ms 44.7MB 100.00%
var MyHashSet = /** @class */ (function () {
    function MyHashSet() {
        this.items = {};
        this.items = {};
    }
    MyHashSet.prototype.add = function (key) {
        if (!this.contains(key)) {
            this.items[key] = key;
        }
    };
    MyHashSet.prototype.remove = function (key) {
        if (this.contains(key)) {
            delete this.items[key];
        }
    };
    MyHashSet.prototype.contains = function (key) {
        return key in this.items;
    };
    ;
    return MyHashSet;
}());
// Accepted --- 172ms 45.1MB 100.00%
var MyHashSet2 = /** @class */ (function () {
    function MyHashSet2() {
        this.items = {};
        this.items = {};
    }
    MyHashSet2.prototype.add = function (key) {
        if (!this.contains(key)) {
            this.items[key] = key;
        }
    };
    MyHashSet2.prototype.remove = function (key) {
        if (this.contains(key)) {
            delete this.items[key];
        }
    };
    MyHashSet2.prototype.contains = function (key) {
        return this.items.hasOwnProperty(key); // difference
    };
    ;
    return MyHashSet2;
}());
var main = function () {
    var hashSet = new MyHashSet();
    hashSet.add(1);
    console.log(hashSet);
    hashSet.add(2);
    console.log(hashSet);
    console.log(hashSet.contains(1)); // returns true
    console.log(hashSet.contains(3)); // returns false (not found)
    hashSet.add(2);
    console.log(hashSet);
    console.log(hashSet.contains(2)); // returns true
    hashSet.remove(2);
    console.log(hashSet);
    console.log(hashSet.contains(2)); // returns false (already removed)
};
main();
