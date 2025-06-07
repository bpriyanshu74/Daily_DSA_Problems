/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(-1)

    dummy.next = head, slow = dummy, fast = dummy

    while(n >= 0){
        fast = fast.next
        n--
    }

    while(fast){
        fast = fast.next
        slow = slow.next
    }

    slow.next = slow.next.next

    return dummy.next
    
};