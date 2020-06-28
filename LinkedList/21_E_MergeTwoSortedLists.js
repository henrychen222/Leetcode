/**
 * 6.27 night
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * reference: https://www.cnblogs.com/grandyang/p/4086297.html
 */

// Accepted --- 88ms 36.2MB 23.90%
const mergeTwoLists = (l1, l2) => {
    let temp = new ListNode(-1);
    let current = temp;
    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    current.next = (l1 != null) ? l1 : l2;
    return temp.next;
};