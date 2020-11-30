/**
 * 11.29 evening
 * reference:
 * https://stackoverflow.com/questions/32374976/converting-array-to-linked-list-from-eloquent-javascript
 * https://daveceddia.com/linked-lists-javascript/
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

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

const printLArray = (list) => {
    let res = [];
    let current = list;
    while (current) {
        res.push(current.val);
        current = current.next;
    }
    console.log(res);
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