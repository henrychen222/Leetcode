/**
 * 6.19 night
 * https://leetcode.com/problems/design-hashset/
 */

// Accepted --- 188ms 44.7MB 100.00%
class MyHashSet {
    items: any = {};
    constructor() {
        this.items = {};
    }

    add(key: number): void {
        if (!this.contains(key)) {
            this.items[key] = key;
        }
    }

    remove(key: number): void {
        if (this.contains(key)) {
            delete this.items[key];
        }
    }

    contains(key: number): boolean {
        return key in this.items;
    };
}

// Accepted --- 172ms 45.1MB 100.00%
class MyHashSet2 {
    items: any = {};
    constructor() {
        this.items = {};
    }

    add(key: number): void {
        if (!this.contains(key)) {
            this.items[key] = key;
        }
    }

    remove(key: number): void {
        if (this.contains(key)) {
            delete this.items[key];
        }
    }

    contains(key: number): boolean {
        return this.items.hasOwnProperty(key); // difference
    };
}

const main = () => {
    let hashSet = new MyHashSet();
    hashSet.add(1);
    console.log(hashSet);
    hashSet.add(2);
    console.log(hashSet);

    console.log(hashSet.contains(1));    // returns true
    console.log(hashSet.contains(3));    // returns false (not found)

    hashSet.add(2);
    console.log(hashSet);

    console.log(hashSet.contains(2));    // returns true

    hashSet.remove(2);
    console.log(hashSet);

    console.log(hashSet.contains(2));    // returns false (already removed)

}

main()