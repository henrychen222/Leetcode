/**
 * 6.27 night
 * https://leetcode.com/problems/reverse-linked-list/
 * reference: https://www.cnblogs.com/grandyang/p/4478820.html
 */

// Accepted --- 68ms 36.1MB 61.68%  iteration
const reverseList1 = (head) => {
    let current = null;
    while (head != null) {
        let temp = head.next;
        head.next = current;
        current = head;
        head = temp;
    }
    return current;
};

// Accepted --- 68ms 36.9MB 61.68%  recursion
const reverseList = (head) => {
    if (!head || !head.next) return head;
    let current = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return current;
};