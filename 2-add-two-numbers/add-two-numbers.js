/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0, a = l1, b = l2, dummy = new ListNode(-1), temp = dummy

    while(a || b || carry){
        let sum = (a ? a.val : 0) + (b ? b.val : 0) + carry
        carry = Math.floor(sum/10)
        let digit = sum % 10

        let new_node = new ListNode(digit)
        temp.next = new_node
        temp = temp.next
        a = a ? a.next : null
        b = b ? b.next : null
    }
    return dummy.next
};