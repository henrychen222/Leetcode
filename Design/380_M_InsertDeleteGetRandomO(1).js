/**
 * 9.7 afternoon
 * https://leetcode.com/problems/insert-delete-getrandom-o1/
 */


// Accepted --- 560ms 5.87%
function RandomizedSet() {
    this.item = [];
};

RandomizedSet.prototype.insert = function (val) {
    if (this.item.indexOf(val) == -1) {
        this.item.push(val);
        return true;
    }
    return false;
};

RandomizedSet.prototype.remove = function (val) {
    let idx = this.item.indexOf(val)
    if (idx != -1) {
        this.item.splice(idx, 1);
        return true;
    }
    return false;
};

RandomizedSet.prototype.getRandom = function () {
    let tmp = this.shuffle(this.item);
    return tmp[0];
};

RandomizedSet.prototype.shuffle = function (a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};


const main = () => {
    let randomSet = new RandomizedSet();
    console.log(randomSet.insert(1)); // true
    console.log(randomSet.remove(2)); // false
    console.log(randomSet.insert(2)); // true
    console.log(randomSet.getRandom()); // return either 1 or 2 randomly.
    console.log(randomSet.remove(1)); // true
    console.log(randomSet.insert(2)); // false
    console.log(randomSet.getRandom()); // 2
}

main()