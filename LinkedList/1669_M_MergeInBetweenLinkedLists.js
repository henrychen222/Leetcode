/**
 * 11.28 morning  11.29 evening complete
 * https://leetcode.com/contest/biweekly-contest-40/problems/merge-in-between-linked-lists/
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// Accepted --- 260ms 100%
const mergeInBetween = (list1, a, b, list2) => {
    let data1 = getAllData(list1);
    let data2 = getAllData(list2);
    let res = data1.slice(0, a).concat(data2).concat(data1.slice(b + 1));
    return createL2(res);
};

// Accepted --- 264ms 100%
const mergeInBetween2 = (list1, a, b, list2) => {
    let data1 = getAllData(list1);
    let data2 = getAllData(list2);
    // console.log(data1, data2);
    let res = data1.slice(0, a).concat(data2).concat(data1.slice(b + 1));
    // console.log(res);
    return createL(res);
};

// Accepted --- 232ms 100%
/**
 * reference: 
 * https://leetcode.com/contest/biweekly-contest-40/ranking/1/ JOHNKRAM Heltion
 * https://leetcode.com/problems/merge-in-between-linked-lists/discuss/952044/C%2B%2B-easy-approch
 */
const mergeInBetween1 = (list1, a, b, list2) => {
    let p = list1;
    let q = list1;
    for (let i = 0; i < a - 1; i++) {
        p = p.next;
    }
    for (let i = 0; i <= b; i++) {
        q = q.next;
    }
    p.next = list2;
    while (p.next != null) {
        p = p.next;
    }
    p.next = q;
    return list1;
};

const createL = (arr) => {
    let node, tmp;
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

const createL2 = (arr) => {
    return arr.reverse().reduce((acc, curr) => {
        if (acc == null) {
            acc = new ListNode(curr);
        } else {
            acc = new ListNode(curr, acc);
        }
        return acc;
    }, null);
};

const printLString = (list) => {
    let res = "";
    let current = list;
    while (current) {
        res += current.val;
        if (current.next != null) res += '->';
        current = current.next;
    }
    console.log(res);
};

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

const main = () => {
    let list1 = createL([0, 1, 2, 3, 4, 5]),
        a = 3,
        b = 4,
        list2 = createL([1000000, 1000001, 1000002]);
    printLArray(mergeInBetween(list1, a, b, list2));
};

main()