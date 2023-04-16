/**
 * 11.28 morning
 * https://leetcode.com/contest/biweekly-contest-40/problems/design-front-middle-back-queue/
 */

// Accepted
function FrontMiddleBackQueue() {
    this.q = [];
};

FrontMiddleBackQueue.prototype.pushFront = function (val) {
    this.q.unshift(val);
};

FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
    let n = this.q.length;
    let idx = n >> 1;
    // console.log(idx, this.q.slice(0, idx), this.q.slice(0, idx).concat([val]));
    let tmp = this.q.slice(0, idx).concat([val]).concat(this.q.slice(idx));
    this.q = tmp;
};

FrontMiddleBackQueue.prototype.pushBack = function (val) {
    this.q.push(val);
};

FrontMiddleBackQueue.prototype.popFront = function () {
    let n = this.q.length;
    if (n == 0) return -1;
    let res = this.q[0];
    this.q.shift();
    return res;
};

FrontMiddleBackQueue.prototype.popMiddle = function () {
    let n = this.q.length;
    if (n == 0) return -1;
    let idx;
    if (n % 2 == 1) {
        idx = n >> 1;
    } else {
        idx = (n >> 1) - 1;
    }
    let res = this.q[idx];
    let tmp = this.q.slice(0, idx).concat(this.q.slice(idx + 1));
    this.q = tmp;
    return res;
};

FrontMiddleBackQueue.prototype.popBack = function () {
    let n = this.q.length;
    if (n == 0) return -1;
    let res = this.q[n - 1];
    this.q.pop();
    return res;
};


const main = () => {
    let q = new FrontMiddleBackQueue();
    q.pushFront(1);   // [1]
    console.log(q);
    q.pushBack(2);    // [1, 2]
    console.log(q);
    q.pushMiddle(3);  // [1, 3, 2]
    console.log(q);
    q.pushMiddle(4);  // [1, 4, 3, 2]
    console.log(q);
    console.log(q.popFront());     // return 1 -> [4, 3, 2]
    console.log(q);
    console.log(q.popMiddle());    // return 3 -> [4, 2]
    console.log(q);
    console.log(q.popMiddle());    // return 4 -> [2]
    console.log(q);
    console.log(q.popBack());      // return 2 -> []
    console.log(q);
    console.log(q.popFront());     // return -1 -> [] (The queue is empty)
    console.log(q);


    // let q2 = new FrontMiddleBackQueue();
    // q2.pushBack(1);
    // console.log(q2);
    // q2.pushBack(2);
    // console.log(q2);
    // q2.pushBack(3);
    // console.log(q2);
    // q2.pushBack(4);
    // console.log(q2);
    // q2.pushBack(5);
    // console.log(q2);
    // q2.pushMiddle(6);
    // console.log(q2);
    // console.log(q2.popMiddle());
};

main()