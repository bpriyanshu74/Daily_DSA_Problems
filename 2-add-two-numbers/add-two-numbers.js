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
    let rl1 = l1, rl2 = l2
    let carry = 0
    let dummy = new ListNode(-1)
    let current = dummy

    while(rl1 || rl2 || carry > 0){
        let val1 = rl1 ? rl1.val : 0
        let val2 = rl2 ? rl2.val : 0

        let sum = val1 + val2 + carry

        carry = Math.floor(sum / 10)
        current.next = new ListNode(sum % 10)

        current = current.next
        if(rl1) rl1 = rl1.next
        if(rl2) rl2 = rl2.next
    }

    return dummy.next
    
};