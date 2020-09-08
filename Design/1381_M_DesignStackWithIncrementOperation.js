/**
 * 9.7 afternoon
 * https://leetcode.com/problems/design-a-stack-with-increment-operation/
 */

// Accepted --- 168ms 38.76%
function CustomStack(maxSize) {
    this.item = [];
    this.capacity = maxSize;
};

CustomStack.prototype.push = function (x) {
    if (this.item.length < this.capacity) {
        this.item.push(x);
    }
};

CustomStack.prototype.pop = function () {
    let n = this.item.length;
    if (n == 0) {
        return -1;
    } else {
        let peek = this.item[n - 1];
        this.item.pop();
        return peek;
    }
};

CustomStack.prototype.increment = function (k, val) {
    let n = this.item.length;
    if (n <= k) {
        this.item = this.item.map(x => x + val);
    } else {
        this.item = this.item.slice(0, k).map(x => x + val).concat(this.item.slice(k, n));
    }
};

// Accepted --- 180ms 32.58%
// CustomStack.prototype.increment = function (k, val) {
//     let n = this.item.length;
//     if (n <= k) {
//         let tmp = this.item.map(x => x + val);
//         this.item = [];
//         this.item = tmp;
//     } else {
//         let tmp = this.item.slice(0, k).map(x => x + val).concat(this.item.slice(k, n));
//         this.item = [];
//         this.item = tmp;
//     }
// };

const main = () => {
    let customStack = new CustomStack(3); // Stack is Empty []
    customStack.push(1);
    customStack.push(2);
    console.log(customStack); // [1, 2]
    console.log(customStack.pop()); // 2
    customStack.push(2);
    customStack.push(3);
    customStack.push(4);
    console.log(customStack); // [1, 2, 3], Don't add another elements as size is 4

    customStack.increment(5, 100);
    console.log(customStack); // [101, 102, 103]
    customStack.increment(2, 100);
    console.log(customStack); // [201, 202, 103]

    console.log(customStack.pop()); // 103 --> Return top of the stack 103, stack becomes [201, 202]
    console.log(customStack.pop()); // 202 --> Return top of the stack 102, stack becomes [201]
    console.log(customStack.pop()); // 201 --> Return top of the stack 101, stack becomes []
    console.log(customStack.pop()); // -1 --> Stack is empty return -1.
}

main()