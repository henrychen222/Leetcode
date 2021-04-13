/**
 * https://www.npmjs.com/package/mnemonist
 * https://github.com/Yomguithereal/mnemonist/blob/master/multi-set.js
 * https://yomguithereal.github.io/mnemonist/multi-set
 */


var MULTISET_ITEM_COMPARATOR = function (a, b) {
    if (a[1] > b[1])
        return -1;
    if (a[1] < b[1])
        return 1;

    return 0;
};

function MultiSet() {
    this.items = new Map();

    Object.defineProperty(this.items, 'constructor', {
        value: MultiSet,
        enumerable: false
    });

    this.clear();
}

MultiSet.prototype.clear = function () {

    // Properties
    this.size = 0;
    this.dimension = 0;
    this.items.clear();
};

MultiSet.prototype.add = function (item, count) {
    if (count === 0)
        return this;

    if (count < 0)
        return this.remove(item, -count);

    count = count || 1;

    if (typeof count !== 'number')
        throw new Error('mnemonist/multi-set.add: given count should be a number.');

    this.size += count;

    const currentCount = this.items.get(item);

    if (currentCount === undefined)
        this.dimension++;
    else
        count += currentCount;

    this.items.set(item, count);

    return this;
};

MultiSet.prototype.set = function (item, count) {
    var currentCount;

    if (typeof count !== 'number')
        throw new Error('mnemonist/multi-set.set: given count should be a number.');

    // Setting an item to 0 or to a negative number means deleting it from the set
    if (count <= 0) {
        currentCount = this.items.get(item);

        if (typeof currentCount !== 'undefined') {
            this.size -= currentCount;
            this.dimension--;
        }

        this.items.delete(item);
        return this;
    }

    count = count || 1;

    currentCount = this.items.get(item);

    if (typeof currentCount === 'number') {
        this.items.set(item, currentCount + count);
    } else {
        this.dimension++;
        this.items.set(item, count);
    }

    this.size += count;

    return this;
};

MultiSet.prototype.has = function (item) {
    return this.items.has(item);
};

MultiSet.prototype.delete = function (item) {
    var count = this.items.get(item);

    if (count === 0)
        return false;

    this.size -= count;
    this.dimension--;
    this.items.delete(item);

    return true;
};

MultiSet.prototype.remove = function (item, count) {
    if (count === 0)
        return;

    if (count < 0)
        return this.add(item, -count);

    count = count || 1;

    if (typeof count !== 'number')
        throw new Error('mnemonist/multi-set.remove: given count should be a number.');

    var currentCount = this.multiplicity(item),
        newCount = Math.max(0, currentCount - count);

    if (newCount === 0) {
        this.delete(item);
    } else {
        this.items.set(item, newCount);
        this.size -= (currentCount - newCount);
    }

    return;
};

MultiSet.prototype.edit = function (a, b) {
    var am = this.multiplicity(a);

    // If a does not exist in the set, we can stop right there
    if (am === 0)
        return;

    var bm = this.multiplicity(b);

    this.items.set(b, am + bm);
    this.items.delete(a);

    return this;
};

MultiSet.prototype.multiplicity = function (item) {
    var count = this.items.get(item);

    if (typeof count === 'undefined')
        return 0;

    return count;
};
MultiSet.prototype.get = MultiSet.prototype.multiplicity;
MultiSet.prototype.count = MultiSet.prototype.multiplicity;

MultiSet.prototype.frequency = function (item) {
    if (this.size === 0)
        return 0;

    var count = this.multiplicity(item);

    return count / this.size;
};

MultiSet.prototype.top = function (n) {
    if (typeof n !== 'number' || n <= 0)
        throw new Error('mnemonist/multi-set.top: n must be a number > 0.');

    var heap = new FixedReverseHeap(Array, MULTISET_ITEM_COMPARATOR, n);

    var iterator = this.items.entries(),
        step;

    while ((step = iterator.next(), !step.done))
        heap.push(step.value);

    return heap.consume();
};

MultiSet.prototype.forEach = function (callback, scope) {
    scope = arguments.length > 1 ? scope : this;

    var i;

    this.items.forEach(function (multiplicity, value) {

        for (i = 0; i < multiplicity; i++)
            callback.call(scope, value, value);
    });
};

MultiSet.prototype.forEachMultiplicity = function (callback, scope) {
    scope = arguments.length > 1 ? scope : this;

    this.items.forEach(callback, scope);
};

MultiSet.prototype.keys = function () {
    return this.items.keys();
};

MultiSet.prototype.values = function () {
    var iterator = this.items.entries(),
        inContainer = false,
        step,
        value,
        multiplicity,
        i;

    return new Iterator(function next() {
        if (!inContainer) {
            step = iterator.next();

            if (step.done)
                return {
                    done: true
                };

            inContainer = true;
            value = step.value[0];
            multiplicity = step.value[1];
            i = 0;
        }

        if (i >= multiplicity) {
            inContainer = false;
            return next();
        }

        i++;

        return {
            done: false,
            value: value
        };
    });
};

MultiSet.prototype.multiplicities = function () {
    return this.items.entries();
};

if (typeof Symbol !== 'undefined')
    MultiSet.prototype[Symbol.iterator] = MultiSet.prototype.values;

MultiSet.prototype.inspect = function () {
    return this.items;
};

if (typeof Symbol !== 'undefined')
    MultiSet.prototype[Symbol.for('nodejs.util.inspect.custom')] = MultiSet.prototype.inspect;
MultiSet.prototype.toJSON = function () {
    return this.items;
};

MultiSet.from = function (iterable) {
    var set = new MultiSet();

    forEach(iterable, function (value) {
        set.add(value);
    });

    return set;
};

MultiSet.isSubset = function (A, B) {
    var iterator = A.multiplicities(),
        step,
        key,
        mA;
    if (A === B)
        return true;

    if (A.dimension > B.dimension)
        return false;

    while ((step = iterator.next(), !step.done)) {
        key = step.value[0];
        mA = step.value[1];

        if (B.multiplicity(key) < mA)
            return false;
    }
    return true;
};

MultiSet.isSuperset = function (A, B) {
    return MultiSet.isSubset(B, A);
};



const pr = console.log;
const main = () => {
    let set = new MultiSet();
    set.add('hello');
    set.add('hello');
    pr(set);
    pr(set.dimension); // 1
    pr(set.size); // 2

    set.add('hello', 3);
    pr(set);
    set.set('hello', 4);
    pr(set);
    pr(set.multiplicity('hello'), set.get('hello'));
    pr(set.frequency('hello'));
};


main();