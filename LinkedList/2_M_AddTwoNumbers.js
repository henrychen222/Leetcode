/**
 * 12.29 evening
 * https://leetcode.com/problems/add-two-numbers/
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
        if (!node)
            node = new ListNode(arr[i]);
        else {
            tmp = new ListNode(arr[i]);
            tmp.next = node;
            node = tmp;
        }
    }
    return node;
};

const reverse2 = (s) => {
    let res = "";
    for (let i = s.length - 1; i >= 0; i--) {
        res += s[i];
    }
    return res;
};

// Accepted --- 140ms 49.89%
const addTwoNumbers = (l1, l2) => {
    let s1 = getAllData(l1).reverse().join("");
    let s2 = getAllData(l2).reverse().join("");
    let sum = BigInt(s1) + BigInt(s2);
    // console.log(s1, s2, sum.toString());
    return createL(reverse2(sum.toString()).split("").map(x => Number(x)));
};

const main = () => {
    let l1 = [2, 4, 3],
        l2 = [5, 6, 4];
    let l1_2 = [0],
        l2_2 = [0];
    let l1_3 = [9, 9, 9, 9, 9, 9, 9],
        l2_3 = [9, 9, 9, 9];
    printLArray(addTwoNumbers(createL(l1), createL(l2)));
    printLArray(addTwoNumbers(createL(l1_2), createL(l2_2)));
    printLArray(addTwoNumbers(createL(l1_3), createL(l2_3)));
};

main()