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
    let dummy = new ListNode(-1)
    let cur = dummy, carry = 0

    while(l1 || l2 || carry){
        let val1 = l1 ? l1.val : 0
        let val2 = l2 ? l2.val : 0

        let sum = val1+val2+carry

        let newdigit = new ListNode(sum % 10)
        carry = Math.floor(sum / 10)

        cur.next = newdigit
        cur = cur.next

        if(l1) l1 = l1.next
        if(l2) l2 = l2.next
    }

    return dummy.next
    
};