/**
 * 6.19 night
 * https://leetcode.com/problems/design-hashmap/
 */
// Accepted --- 184ms 46.6MB 100.00%
var MyHashMap = /** @class */ (function () {
    function MyHashMap() {
        this.items = {};
        this.items = {};
    }
    MyHashMap.prototype.put = function (key, value) {
        this.items[key] = value;
    };
    MyHashMap.prototype.get = function (key) {
        if (this.has(key)) {
            return this.items[key];
        }
        else {
            return -1;
        }
    };
    MyHashMap.prototype.has = function (key) {
        return key in this.items;
    };
    ;
    MyHashMap.prototype.remove = function (key) {
        if (this.has(key)) {
            delete this.items[key];
        }
    };
    return MyHashMap;
}());
var main = function () {
    var hashMap = new MyHashMap();
    hashMap.put(1, 1);
    console.log(hashMap);
    hashMap.put(2, 2);
    console.log(hashMap);
    console.log(hashMap.get(1)); // returns 1
    console.log(hashMap.get(3)); // returns -1 (not found)
    hashMap.put(2, 1); // update the existing value
    console.log(hashMap);
    console.log(hashMap.get(2)); // returns 1 
    hashMap.remove(2); // remove the mapping for 2
    console.log(hashMap);
    console.log(hashMap.get(2)); // returns -1 (not found)
};
main();
