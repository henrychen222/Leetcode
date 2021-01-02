/**
 * 1.1 night
 * https://leetcode.com/problems/add-two-numbers-ii/
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const printLArray = (list) => {
    let res = [];
    let current = list;
    while (current) {
        res.push(current.val);
        current = current.next;
    }
    console.log(res);
};

const getAllData = (list) => {
    let res = [];
    let current = list;
    while (current) {
        res.push(current.val);
        current = current.next;
    }
    return res;
};

const createL = (arr) => {
    let tmp, node = null;
    let n = arr.length;
    for (let i = n - 1; ~i; i--) {
        if (!node) {
            node = new ListNode(arr[i]);
        } else {
            tmp = new ListNode(arr[i]);
            tmp.next = node;
            node = tmp;
        }
    }
    return node;
};

// Accepted --- 132ms 83.94%  1563 test cases
const addTwoNumbers = (l1, l2) => createL((BigInt(getAllData(l1).join("")) + BigInt(getAllData(l2).join(""))).toString().split("").map(x => Number(x)));

const main = () => {
    let l1 = [7, 2, 4, 3],
        l2 = [5, 6, 4];
    printLArray(addTwoNumbers(createL(l1), createL(l2)));
};

main()