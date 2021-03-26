/**
 * 03/24/21 night
 * https://leetcode.com/problems/design-circular-deque/
 */


function MyCircularDeque(k) {
    let cd = [];
    let capacity = k;
    return {
        insertFront,
        insertLast,
        deleteFront,
        deleteLast,
        getFront,
        getRear,
        isEmpty,
        isFull
    }

    function insertFront(value) {
        if (cd.length < capacity) {
            cd.unshift(value);
            return 1;
        }
        return 0;
    }

    function insertLast(value) {
        if (cd.length < capacity) {
            cd.push(value);
            return 1;
        }
        return 0;
    }

    function deleteFront() {
        // return cd.shift() ? 1 : 0; // cd.shift() is 0 will return false, should return true 
        if (cd.length) {
            cd.shift();
            return 1;
        }
        return 0;
    }

    function deleteLast() {
        // return cd.pop() ? 1 : 0;
        if (cd.length) {
            cd.pop();
            return 1;
        }
        return 0;
    }

    function getFront() {
        // return cd[0] || -1;   cd[0] = 0 will return -1, should 0
        return cd.length ? cd[0] : -1;
    }

    function getRear() {
        // return cd[cd.length - 1] || -1; 
        return cd.length ? cd[cd.length - 1] : -1;
    }

    function isEmpty() {
        return cd.length == 0;
    }

    function isFull() {
        return cd.length == capacity;
    }
}

const pr = console.log;
const main = () => {
    let circularDeque = new MyCircularDeque(3);
    pr(circularDeque.insertLast(1)); //  true
    pr(circularDeque.insertLast(2)); // true
    pr(circularDeque.insertFront(3)); // true
    pr(circularDeque.insertFront(4)); // false
    pr(circularDeque.getRear()); //  2
    pr(circularDeque.isFull()); // true
    pr(circularDeque.deleteLast()); // true
    pr(circularDeque.insertFront(4)); // true
    pr(circularDeque.getFront()); // 4
};

main()