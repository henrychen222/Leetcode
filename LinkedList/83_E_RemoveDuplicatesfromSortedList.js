/**
 * 6.27 night
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 * reference: https://www.cnblogs.com/grandyang/p/4066453.html
 */

// Accepted --- 80ms 38.1MB 52.40% iteration
const deleteDuplicates1 = (head) => {
    let current = head;
    while (current && current.next) {
        if (current.val == current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
};

// Accepted --- 80ms 38.2MB 52.40% recursion
const deleteDuplicates = (head) => {
    if (!head || !head.next) return head;
    head.next = deleteDuplicates(head.next);
    return (head.val == head.next.val) ? head.next : head;
};