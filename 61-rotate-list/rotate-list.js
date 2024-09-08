/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    // edge case
    if( head == null || head.next == null) return head

    // counting number of nodes
    let n = 0
    let temp = head
    while(temp){
        n++
        temp = temp.next
    }
    // effective k
    if(k > n) k = k%n
    if(k==0 || k==n) return head

    // reaching the break point for final output
    let slow = head, fast = head
    while(k > 0){
        fast = fast.next
        k--
    }

    while(fast.next){
        slow = slow.next
        fast = fast.next
    }

    let res = slow.next
    slow.next = null
    fast.next = head

    return res

    
};