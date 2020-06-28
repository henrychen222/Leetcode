/**
 * 6.27 night
 * https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
 */

// Accepted --- 60ms 33.5MB	72.16%
const getDecimalValue = (head) => {
    let res = "";
    while (head) {
        res += head.val.toString();
        head = head.next;
    }
    return parseInt(res, 2);
};