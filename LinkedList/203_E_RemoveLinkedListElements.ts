/**
 * 6.26 night
 * https://leetcode.com/problems/remove-linked-list-elements/
 * reference: https://www.cnblogs.com/grandyang/p/4452252.html
 */

export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

// Accepted --- 88ms 100.00%
const removeElements = (head: ListNode | null, val: number): ListNode | null => {
    if (!head) return null;
    let current = head;
    while (current.next) {
        if (current.next.val == val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head.val == val ? head.next : head;
};