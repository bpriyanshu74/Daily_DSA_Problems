/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head, fast = head
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
        if(slow == fast){
            let pointer = head
            while(pointer != slow){
                pointer = pointer.next
                slow = slow.next
            }
            return pointer
        }
    }
    
    return null
};