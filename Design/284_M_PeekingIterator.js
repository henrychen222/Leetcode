/**
 * 04/09/21 night
 * https://leetcode.com/problems/apply-discount-every-n-orders/
 */

const pr = console.log;

// Accepted --- 80ms 60.67%
function PeekingIterator(it) {
    // let a = it; // test
    let a = [];
    while (it.hasNext()) {
        a.push(it.next());
    }
    return {
        peek,
        next,
        hasNext
    }

    function peek() {
        return a[0];
    }

    function next() {
        return a.shift();
    }

    function hasNext() {
        return a.length != 0;
    }
}

const main = () => {
    let peekingIterator = new PeekingIterator([1, 2, 3]);
    pr(peekingIterator.next()); //  1
    pr(peekingIterator.peek()); //  2
    pr(peekingIterator.next()); // 2 
    pr(peekingIterator.next()); // 3
    pr(peekingIterator.hasNext()); // false
};

main()