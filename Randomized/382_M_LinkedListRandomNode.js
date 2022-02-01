/**
 * 01/31/22 evening
 * https://leetcode.com/problems/linked-list-random-node/
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

// Accepted --- 202ms 23.70%
function Solution(head) {
    let a = getAllData(head), n = a.length;
    return { getRandom }
    function getRandom() {
        let i = randN(n);
        return a[i - 1];
    }
    function randN(n) {
        return parseInt(Math.random() * n) + 1;
    }
}

const pr = console.log;
const main = () => {
    let solution = new Solution(createL([1, 2, 3]));
    pr(solution.getRandom()); // 1
    pr(solution.getRandom()); // 3
    pr(solution.getRandom()); // 2
    pr(solution.getRandom()); // 2
    pr(solution.getRandom()); // 3
};

main()