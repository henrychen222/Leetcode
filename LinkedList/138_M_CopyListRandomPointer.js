/**
 * 2.6 afternoon
 * https://leetcode.com/problems/copy-list-with-random-pointer/
 */

function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
}

// don't know
let review;
const getAllData = (list) => {
    review = [];
    let current = list;
    while (current) {
        review.push(current.val);
        current = current.next;
    }
    return review;
};

const getAllPairData = (list) => {
    let res = [];
    let current = list;
    while (current) {
        // console.log(current)
        // console.log(current.val, current.random)
        // res.push([current.val,current.random == null ? null: current.random.val]);
        let random = current.random == null ? null: current.random.val;
        let idx = review.indexOf(random);
        res.push([current.val, idx == -1 ? null: idx]);
        current = current.next;
    }
    return res;
};

const createL = (arr) => {
    let tmp, node = null;
    let n = arr.length;
    for (let i = n - 1; ~i; i--) {
        if (!node) {
            node = new Node(arr[i][0], undefined, arr[i][1]);
        } else {
            tmp = new Node(arr[i][0], undefined, arr[i][1]);
            tmp.next = node;
            node = tmp;
        }
    }
    return node;
};

const copyRandomList = (head) => {
    getAllData(head);
    let a = getAllPairData(head);
    console.log(a)
    return createL(a);
};